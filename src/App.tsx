import React, { FormEvent, useEffect, useRef, useState } from 'react'

import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

interface Message {
  sender: 'user' | 'bot'
  content: string
}

const Chat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const ws = useRef<WebSocket | null>(null)

  useEffect(() => {
    ws.current = new WebSocket('ws://localhost:8000/ws/chat')

    ws.current.onopen = () => console.log('WebSocket connected')
    ws.current.onmessage = (event: MessageEvent) => {
      console.log('event:', event)
      setMessages((prev) => {
        // If the last message is from the bot, append the new data to it.
        if (prev.length > 0 && prev[prev.length - 1].sender === 'bot') {
          const updatedMessage: Message = {
            sender: 'bot',
            content: prev[prev.length - 1].content + event.data,
          }
          return [...prev.slice(0, prev.length - 1), updatedMessage]
        } else {
          // Otherwise, create a new bot message bubble.
          return [...prev, { sender: 'bot', content: event.data }]
        }
      })
    }
    ws.current.onerror = (event: Event) => console.error('WebSocket error:', event)
    ws.current.onclose = () => console.log('WebSocket disconnected')

    return () => ws.current?.close()
  }, [])

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!input.trim() || !ws.current || ws.current.readyState !== WebSocket.OPEN) return

    const userMessage: Message = { sender: 'user', content: input }
    setMessages((prev) => [...prev, userMessage])
    ws.current.send(input)
    setInput('')
  }

  return (
    <div className='box-border flex h-screen w-screen flex-col bg-white p-4'>
      <h2 className='mb-2 text-center text-2xl font-semibold text-indigo-700'>SmartspAI</h2>

      <div className='mb-4 flex-1 overflow-y-auto rounded-lg border border-gray-300 p-4'>
        {messages.map((msg, index) => (
          <div key={index} className={`mb-2 flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div
              className={`prose max-w-[80%] rounded-xl px-4 py-2 break-words ${
                msg.sender === 'user' ? 'bg-indigo-600 text-white' : 'border border-gray-300 bg-white'
              }`}
              style={msg.sender === 'bot' ? { color: 'rgb(13, 13, 13)' } : {}}>
              <ReactMarkdown remarkPlugins={[remarkGfm]}>{msg.content}</ReactMarkdown>
            </div>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className='flex'>
        <input
          type='text'
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
