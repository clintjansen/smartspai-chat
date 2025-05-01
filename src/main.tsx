import './styles.css'

import { ChatWidget } from './components/ChatWidget'
import Home from './components/Home'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

const wsEndpoint = import.meta.env['VITE_WS_ENDPOINT'] || 'ws://localhost:8000/ws'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Home />
    <ChatWidget wsEndpoint={wsEndpoint} />
  </StrictMode>
)
