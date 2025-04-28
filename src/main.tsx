import './styles.css'

import { ChatWidget } from './components/ChatWidget.tsx'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

const wsEndpoint = import.meta.env['VITE_WS_ENDPOINT'] || 'ws://localhost:8000/ws'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ChatWidget wsEndpoint={wsEndpoint} />
  </StrictMode>
)
