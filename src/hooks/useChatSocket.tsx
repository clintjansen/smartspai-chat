import { useEffect, useRef, useState } from 'react'

export interface User {
  id: number
  email: string
  name?: string
  avatar_url?: string
  jwt?: string
  [k: string]: unknown
}

export interface IncomingMsg {
  type: 'chat' | 'loading_state'
  role?: 'user' | 'assistant'
  content?: string
  status?: 'start' | 'stop' | 'error'
  tool?: string
}

export interface OutgoingMsg {
  type: 'chat' | 'register'
  content?: string
  user?: User
}

export function useChatSocket(endpoint: string, user: User | undefined, onMessage: (msg: IncomingMsg) => void) {
  const ws = useRef<WebSocket>(null)
  const [ready, setReady] = useState(false)

  const sendJson = (payload: OutgoingMsg) => ready && ws.current?.send(JSON.stringify(payload))

  // --- lifecycle -----------------------------------------------------------
  useEffect(() => {
    if (!endpoint) return

    let cancelled = false
    let timer: NodeJS.Timeout

    const connect = () => {
      ws.current = new WebSocket(endpoint)

      ws.current.onopen = () => {
        setReady(true)
        // one-shot registration packet
        if (user) sendJson({ type: 'register', user })
      }

      ws.current.onmessage = (e) => {
        try {
          onMessage(JSON.parse(e.data) as IncomingMsg)
        } catch (err) {
          console.error('WS parse error:', err)
        }
      }

      ws.current.onclose = () => {
        setReady(false)
        if (!cancelled) timer = setTimeout(connect, 1_000) // auto-reconnect
      }

      ws.current.onerror = (e) => console.error('WS error:', e)
    }

    connect()
    return () => {
      cancelled = true
      clearTimeout(timer)
      ws.current?.close()
    }
  }, [endpoint, user?.id]) // eslint-disable-line react-hooks/exhaustive-deps

  return { sendJson, ready }
}
