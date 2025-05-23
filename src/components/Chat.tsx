import { ArrowsPointingInIcon, ArrowsPointingOutIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { IncomingMsg, User, useChatSocket } from '../hooks/useChatSocket'
import React, { FormEvent, useCallback, useEffect, useRef, useState } from 'react'

import ReactMarkdown from 'react-markdown'
import clsx from 'clsx'
import remarkGfm from 'remark-gfm'

export interface ChatProps {
  wsEndpoint: string
  initialMessage?: string
  onClose?: () => void
  className?: string
  onToggleFullScreen?: () => void
  isFullScreen?: boolean
  user?: User
}

interface Message {
  sender: 'user' | 'assistant'
  content: string
  borderColor?: string
}

export const Chat: React.FC<ChatProps> = ({
  wsEndpoint,
  initialMessage = '',
  onClose,
  className = '',
  onToggleFullScreen,
  isFullScreen = false,
  user,
}) => {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [loaderTool, setLoaderTool] = useState<string>('')

  console.log('Chat user:', user)

  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const initialMessageSent = useRef(false)

  /* ------------------------------------------------------------------ */
  /* WebSocket ­– all network-side effects live inside the custom hook. */
  /* ------------------------------------------------------------------ */
  const handleIncoming = useCallback((msg: IncomingMsg) => {
    if (msg.type === 'loading_state') {
      setLoaderTool(msg.status === 'start' ? (msg.tool ?? '') : '')
      return
    }

    if (msg.type === 'chat' && msg.role) {
      setMessages((prev): any => {
        /* merge streaming chunks from the same sender */
        if (prev.length && prev[prev.length - 1].sender === msg.role) {
          const updated: Message = {
            sender: msg.role,
            content: msg.content ?? '',
            borderColor: msg.role === 'assistant' && msg.status === 'error' ? 'border-red-300' : 'border-gray-300',
          }
          return [...prev.slice(0, -1), updated]
        }
        return [...prev, { sender: msg.role, content: msg.content ?? '' }]
      })
    }
  }, [])

  const { sendJson, ready } = useChatSocket(wsEndpoint, user, handleIncoming)

  /* send initial prompt once the socket is ready */
  useEffect(() => {
    if (ready && initialMessage && !initialMessageSent.current) {
      sendJson({ type: 'chat', content: initialMessage })
      initialMessageSent.current = true
    }
  }, [ready, initialMessage, sendJson])

  /* auto-scroll on each message / loader change */
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, loaderTool])

  /* ------------------------------------------------------------------ */
  /* UI handlers                                                         */
  /* ------------------------------------------------------------------ */
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return
    setMessages((prev) => [...prev, { sender: 'user', content: input }])
    sendJson({ type: 'chat', content: input })
    setInput('')
  }

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const text = e.currentTarget.textContent
    if (text) {
      setInput((prev) => `${prev}${text} `)
      inputRef.current?.focus()
    }
  }

  /* ------------------------------------------------------------------ */
  /* Render                                                              */
  /* ------------------------------------------------------------------ */
  return (
    <div className={clsx('sc:flex sc:h-full sc:w-full sc:flex-col sc:bg-white sc:px-4 sc:pb-4', className)} data-testid='chat-root'>
      {/* header */}
      <div
        className={clsx(
          'chat-drag-handle sc:-mx-4 sc:mb-2 sc:flex sc:items-center sc:justify-between sc:px-4 sc:pt-4',
          !isFullScreen && 'sc:cursor-move'
        )}
        onDoubleClick={() => onToggleFullScreen?.()}>
        <h2 className='sc:text-xl sc:font-semibold sc:text-indigo-700'>SmartspAI</h2>
        <div className='sc:flex sc:gap-2'>
          {onToggleFullScreen && (
            <button
              onClick={onToggleFullScreen}
              aria-label={isFullScreen ? 'Exit full screen' : 'Enter full screen'}
              className='sc:cursor-pointer sc:rounded-md sc:p-1 sc:text-gray-600 hover:sc:text-gray-900'>
              {isFullScreen ? <ArrowsPointingInIcon className='sc:size-5' /> : <ArrowsPointingOutIcon className='sc:size-5' />}
            </button>
          )}
          {onClose && (
            <button
              onClick={onClose}
              aria-label='Close chat'
              className='sc:cursor-pointer sc:rounded-md sc:p-1 sc:text-gray-600 hover:sc:text-gray-900'>
              <XMarkIcon className='sc:size-5.5' strokeWidth={1.5} />
            </button>
          )}
        </div>
      </div>

      {/* message list */}
      <div className='sc:mb-4 sc:flex-1 sc:overflow-y-auto sc:rounded-lg sc:border sc:border-gray-300 sc:p-4'>
        {messages.map((m, i) => (
          <div key={i} className={clsx('sc:mb-2 sc:flex', m.sender === 'user' ? 'sc:justify-end' : 'sc:justify-start')}>
            <div
              className={clsx(
                'sc:prose sc:max-w-[80%] sc:rounded-xl sc:px-4 sc:py-2 sc:break-words',
                m.sender === 'user' ? 'sc:bg-indigo-600 sc:text-white' : 'sc:border sc:border-gray-300 sc:bg-white',
                m.borderColor
              )}
              style={m.sender === 'assistant' ? { color: 'rgb(13,13,13)' } : {}}>
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  a: ({ node, ...props }) => (
                    /* clickable suggestion chips */
                    <a {...props} onClick={handleLinkClick} style={{ cursor: 'pointer' }} />
                  ),
                }}>
                {m.content}
              </ReactMarkdown>
            </div>
          </div>
        ))}

        {/* loader bubbles */}
        {!ready && <StatusBubble label='Connecting' dotsClass='sc:bg-slate-500/70' />}
        {loaderTool && <StatusBubble label='' dotsClass='sc:bg-[#888]' />}

        <div ref={messagesEndRef} />
      </div>

      {/* input */}
      <form onSubmit={handleSubmit} className='sc:flex'>
        <input
          ref={inputRef}
          type='text'
          disabled={!ready}
          autoFocus
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder='Type your message...'
          className='sc:flex-1 sc:rounded-lg sc:border sc:border-gray-300 sc:px-4 sc:py-2 sc:text-black sc:focus:ring-2 sc:focus:ring-indigo-400 sc:focus:outline-none'
          required
        />
        <button
          type='submit'
          className='sc:ml-2 sc:cursor-pointer sc:rounded-lg sc:bg-indigo-600 sc:px-6 sc:py-2 sc:text-white sc:transition hover:sc:bg-indigo-700'>
          Send
        </button>
      </form>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Small presentational helper – keeps JSX above readable.            */
/* ------------------------------------------------------------------ */
const StatusBubble: React.FC<{
  label: string
  dotsClass: string
}> = ({ label, dotsClass }) => (
  <div className='sc:mb-2 sc:flex sc:justify-start'>
    <div className='sc:prose sc:inline-flex sc:max-w-[80%] sc:rounded-xl sc:border sc:border-white sc:bg-white sc:px-4 sc:py-2'>
      {label && <span className='sc:mr-2 sc:font-medium sc:text-slate-500/90'>{label}</span>}
      <div className='thinking-dots sc:pt-2'>
        <span className={dotsClass} />
        <span className={dotsClass} />
        <span className={dotsClass} />
      </div>
    </div>
  </div>
)

export default Chat
