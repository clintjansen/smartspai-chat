import './Chat.css'

import React, { FormEvent, useEffect, useRef, useState } from 'react'

import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

export interface ChatProps {
  wsEndpoint: string
  initialMessage?: string
  /** Close handler injected by ChatWidget */
  onClose?: () => void
  /** Extra class names if the host wants to tweak styling */
  className?: string
}

interface Message {
  sender: 'user' | 'assistant'
  content: string
  borderColor?: string
}

export const Chat: React.FC<ChatProps> = ({
  wsEndpoint,
  initialMessage = 'Scrape Posters for Drukwerkdeal in NL & BE',
  onClose,
  className = '',
}) => {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('Remove Flyers3 and Belgium')
  const [showLoader, setLoader] = useState<string>('')
  const [disableInput, setDisableInput] = useState(false)

  const ws = useRef<WebSocket | null>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const initialMessageSent = useRef(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const sendMessage = (content: string) => {
    if (!ws.current || ws.current.readyState !== WebSocket.OPEN) return

    const userMessage: Message = { sender: 'user', content }
    setMessages((prev) => [...prev, userMessage])
    ws.current.send(content)
  }

  useEffect(() => {
    let reconnect: ReturnType<typeof setTimeout> | null = null
    let unmounted = false

    const connectWebSocket = () => {
      if (unmounted) return

      // Make sure to connect to your new endpoint, e.g., /ws/scrape
      // ws.current = new WebSocket('ws://localhost:8000/ws')
      ws.current = new WebSocket(wsEndpoint)

      ws.current.onopen = () => {
        console.log('WebSocket connected')
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
    <div className={`flex h-full w-full flex-col bg-white p-4 ${className}`} data-testid='chat-root'>
      {/* header */}
      <div className='mb-2 flex items-center justify-between'>
        <h2 className='text-xl font-semibold text-indigo-700'>SmartspAI</h2>
        {onClose && (
          <button onClick={onClose} className='rounded-md p-1 text-gray-600 hover:text-gray-900' aria-label='Close chat'>
            &#10005;
          </button>
        )}
      </div>

      {/* message list */}
      <div className='mb-4 flex-1 overflow-y-auto rounded-lg border border-gray-300 p-4'>
        {messages.map((msg, index) => (
          <div key={index} className={`mb-2 flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div
              className={`prose max-w-[80%] rounded-xl px-4 py-2 break-words ${
                msg.sender === 'user' ? 'bg-indigo-600 text-white' : 'border border-gray-300 bg-white'
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

        {/* Thinking dots animation when loading */}
        {showLoader && (
          <div className='mb-2 flex justify-start'>
            <div className='prose max-w-[80%] rounded-xl border border-gray-300 bg-white px-4 py-2'>
              <div className='thinking-dots'>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        )}

        {/* Dummy element for auto-scroll */}
        <div ref={messagesEndRef} />
      </div>

      {/* input */}
      <form onSubmit={handleSubmit} className='flex'>
        <input
          ref={inputRef} // Assign ref to the input element
          type='text'
          disabled={disableInput}
          autoFocus
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder='Type your message...'
          className='flex-1 rounded-lg border border-gray-300 px-4 py-2 text-black focus:ring-2 focus:ring-indigo-400 focus:outline-none'
          required
        />
        <button type='submit' className='ml-2 cursor-pointer rounded-lg bg-indigo-600 px-6 py-2 text-white transition hover:bg-indigo-700'>
          Send
        </button>
      </form>
    </div>
  )
}

export default Chat
