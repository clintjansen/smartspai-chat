import { ArrowsPointingInIcon, ArrowsPointingOutIcon, XMarkIcon } from '@heroicons/react/24/outline'
import React, { FormEvent, useEffect, useRef, useState } from 'react'

import ReactMarkdown from 'react-markdown'
import clsx from 'clsx'
import remarkGfm from 'remark-gfm'

export interface ChatProps {
  wsEndpoint: string
  initialMessage?: string
  /** Close handler injected by ChatWidget */
  onClose?: () => void
  className?: string
  onToggleFullScreen?: () => void
  isFullScreen?: boolean
}

interface Message {
  sender: 'user' | 'assistant'
  content: string
  borderColor?: string
}

export const Chat: React.FC<ChatProps> = ({
  wsEndpoint,
  initialMessage = 'Scrape Posters for Drukwerkdeal in NL & BE', // debug msg
  onClose,
  className = '',
  onToggleFullScreen,
  isFullScreen = false,
}) => {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [showLoader, setLoader] = useState<string>('')
  const [disableInput, setDisableInput] = useState(false)
  const [isConnecting, setIsConnecting] = useState(true)

  const ws = useRef<WebSocket | null>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const initialMessageSent = useRef(false)
  const inputRef = useRef<HTMLInputElement>(null)

  // const sendMessage = (content: string) => {
  //   if (!ws.current || ws.current.readyState !== WebSocket.OPEN) return

  //   const userMessage: Message = { sender: 'user', content }
  //   setMessages((prev) => [...prev, userMessage])
  //   ws.current.send(content)
  // }

  useEffect(() => {
    let reconnect: ReturnType<typeof setTimeout> | null = null
    let unmounted = false

    const connectWebSocket = () => {
      if (unmounted) return

      setIsConnecting(true)
      // Make sure to connect to your new endpoint, e.g., /ws/scrape
      // ws.current = new WebSocket('ws://localhost:8000/ws')
      ws.current = new WebSocket(wsEndpoint)

      ws.current.onopen = () => {
        console.log('WebSocket connected')
        setIsConnecting(false)
        setDisableInput(false)

        if (!initialMessageSent.current) {
          setTimeout(() => {
            // sendMessage(initialMessage)
            initialMessageSent.current = true
          }, 1000)
        }
      }

      ws.current.onmessage = (event: MessageEvent) => {
        try {
          // Parse the JSON message sent by the server.
          const data = JSON.parse(event.data)
          const sender: 'user' | 'assistant' = data.role

          if (data.type === 'loading_state') {
            if (data.status === 'start') {
              setLoader(data.tool)
            } else {
              setLoader('')
            }
          } else {
            setMessages((prev) => {
              // Replace the last message if it is from the same sender (to handle streaming updates).
              if (prev.length > 0 && prev[prev.length - 1].sender === sender) {
                const updatedMessage: Message = {
                  sender: sender,
                  content: data.content,
                  borderColor: sender === 'assistant' && data.status === 'error' ? 'border-red-300' : 'border-gray-300',
                }
                return [...prev.slice(0, prev.length - 1), updatedMessage]
              }
              return [...prev, { sender: sender, content: data.content }]
            })
          }
        } catch (err) {
          console.error('Failed to parse message:', err)
        }
      }

      ws.current.onerror = (event: Event) => console.error('WebSocket error:', event)

      ws.current.onclose = () => {
        console.log('WebSocket disconnected')
        setDisableInput(true)
        setIsConnecting(true)

        if (!unmounted) {
          console.log(`Attempting to reconnect...`)
          reconnect = setTimeout(() => {
            connectWebSocket()
          }, 1000)
        }
      }
    }

    connectWebSocket()

    return () => {
      unmounted = true
      if (reconnect) {
        clearTimeout(reconnect)
      }
      if (ws.current) {
        ws.current.onclose = null
        ws.current.close()
      }
    }
  }, [wsEndpoint, initialMessage])

  // Auto-scroll to the bottom when messages update.
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, showLoader])

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!input.trim() || !ws.current || ws.current.readyState !== WebSocket.OPEN) return

    const userMessage: Message = { sender: 'user', content: input }
    setMessages((prev) => [...prev, userMessage])
    ws.current.send(input)
    setInput('')
  }

  // Custom renderer for anchor tags
  const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault() // Prevent default navigation
    const linkText = event.currentTarget.textContent
    if (linkText) {
      setInput((prev) => prev + linkText + ' ') // Append text to input
      inputRef.current?.focus() // Optional: focus the input after clicking
    }
  }

  return (
    <div className={clsx('sc:flex sc:h-full sc:w-full sc:flex-col sc:bg-white sc:px-4 sc:pb-4', className)} data-testid='chat-root'>
      {/* header */}
      <div
        className={clsx(
          'chat-drag-handle sc:-mx-4 sc:mb-2 sc:flex sc:items-center sc:justify-between sc:px-4 sc:pt-4',
          !isFullScreen && 'sc:cursor-move'
        )}
        onDoubleClick={() => onToggleFullScreen && onToggleFullScreen()}>
        <h2 className='sc:text-xl sc:font-semibold sc:text-indigo-700'>SmartspAI</h2>
        <div className='sc:flex sc:gap-2'>
          {onToggleFullScreen && (
            <button
              onClick={onToggleFullScreen}
              aria-label={isFullScreen ? 'Exit full screen' : 'Enter full screen'}
              className='sc:cursor-pointer sc:rounded-md sc:p-1 sc:text-gray-600 hover:sc:text-gray-900'>
              {isFullScreen ? (
                <ArrowsPointingInIcon className='sc:size-5' /> // shrink
              ) : (
                <ArrowsPointingOutIcon className='sc:size-5' /> // expand
              )}
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
        {messages.map((msg, index) => (
          <div key={index} className={`sc:mb-2 sc:flex ${msg.sender === 'user' ? 'sc:justify-end' : 'sc:justify-start'}`}>
            <div
              className={`sc:prose sc:max-w-[80%] sc:rounded-xl sc:px-4 sc:py-2 sc:break-words ${
                msg.sender === 'user' ? 'sc:bg-indigo-600 sc:text-white' : 'sc:border sc:border-gray-300 sc:bg-white'
              }`}
              style={msg.sender === 'assistant' ? { color: 'rgb(13, 13, 13)' } : {}}>
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  a: ({ node, ...props }) => <a {...props} onClick={handleLinkClick} style={{ cursor: 'pointer' }} />,
                }}>
                {msg.content}
              </ReactMarkdown>
            </div>
          </div>
        ))}

        {/* “Connecting…” bubble */}
        {isConnecting && (
          <div className='sc:mb-2 sc:flex sc:justify-start'>
            <div className='sc:prose sc:inline-flex sc:max-w-[80%] sc:rounded-xl sc:border sc:border-white sc:bg-white sc:px-4 sc:py-2'>
              <span className='sc:mr-2 sc:font-medium sc:text-slate-500/90'>Connecting</span>
              <div className='thinking-dots sc:pt-2'>
                <span className='sc:bg-slate-500/70'></span>
                <span className='sc:bg-slate-500/70'></span>
                <span className='sc:bg-slate-500/70'></span>
              </div>
            </div>
          </div>
        )}

        {/* Thinking dots animation when loading */}
        {showLoader && (
          <div className='sc:mb-2 sc:flex sc:justify-start'>
            <div className='sc:prose sc:max-w-[80%] sc:rounded-xl sc:border sc:border-gray-300 sc:bg-white sc:px-4 sc:py-2'>
              <div className='thinking-dots'>
                <span className='sc:bg-[#888]'></span>
                <span className='sc:bg-[#888]'></span>
                <span className='sc:bg-[#888]'></span>
              </div>
            </div>
          </div>
        )}

        {/* Dummy element for auto-scroll */}
        <div ref={messagesEndRef} />
      </div>

      {/* input */}
      <form onSubmit={handleSubmit} className='sc:flex'>
        <input
          ref={inputRef} // Assign ref to the input element
          type='text'
          disabled={disableInput}
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

export default Chat
