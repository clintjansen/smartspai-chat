import './styles.css'

import { Root as ReactDOMRoot, createRoot } from 'react-dom/client'

import { ChatWidget } from './components/ChatWidget'
import Home from './components/Home' // Home component might not be needed if ChatWidget is self-contained in the custom element
import { StrictMode } from 'react'
import stylesText from './styles.css?inline'
import userJson from './user.json'

const wsEndpointFromEnv = import.meta.env['VITE_WS_ENDPOINT'] || 'ws://localhost:8000/ws'

class SmartspyChatWidgetElement extends HTMLElement {
  static observedAttributes = ['ws-endpoint', 'portal-target', 'user']

  private _shadow: ShadowRoot
  private _root: ReactDOMRoot | null = null
  private _container: HTMLDivElement

  constructor() {
    super()
    this._shadow = this.attachShadow({ mode: 'open' })
    this._shadow.innerHTML = `<style>${stylesText}</style>`

    this._container = document.createElement('div')

    Object.assign(this._container.style, { position: 'fixed', inset: '0', zIndex: '2147483647', pointerEvents: 'none' })
    this._shadow.appendChild(this._container)
  }

  connectedCallback() {
    this.render()
  }

  attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null) {
    if (name === 'ws-endpoint' && oldValue !== newValue) {
      this.render()
    }
  }

  disconnectedCallback() {
    if (this._root) {
      this._root.unmount()
      this._root = null
    }
  }

  private render() {
    const wsEndpoint = this.getAttribute('ws-endpoint') || wsEndpointFromEnv
    const user = this.getAttribute('user') || JSON.stringify(userJson)

    if (!this._root) {
      this._root = createRoot(this._container)
    }
    // The ChatWidget itself will need to handle pointerEvents for its interactive parts
    this._root.render(
      <StrictMode>
        <Home />
        <ChatWidget wsEndpoint={wsEndpoint} portalTarget={this._shadow} user={user} isOpen />
      </StrictMode>
    )
  }
}

customElements.define('smartspy-chat', SmartspyChatWidgetElement)

// Now, instead of rendering directly to document.getElementById('root'),
// you can append your custom element.
// Ensure you have a placeholder in your HTML or create one.
let appRoot = document.getElementById('smartspy-app-root')
if (!appRoot) {
  appRoot = document.createElement('div')
  appRoot.id = 'smartspy-app-root'
  document.body.appendChild(appRoot)
}

const chatWidgetElement = document.createElement('smartspy-chat')
// You can set the ws-endpoint attribute here if needed, or rely on the default from env
chatWidgetElement.setAttribute('user', JSON.stringify(userJson))
// chatWidgetElement.setAttribute('ws-endpoint', wsEndpointFromEnv)

appRoot.appendChild(chatWidgetElement)

// If you still need the Home component or other parts of your app outside the widget:
// const mainAppContainer = document.getElementById('root');
// if (mainAppContainer) {
//   createRoot(mainAppContainer).render(
//     <StrictMode>
//       <Home />
//       {/* The ChatWidget is now handled by the custom element */}
//     </StrictMode>
//   );
// }
