import './styles.css'

import ChatWidget from './components/ChatWidget'
import ReactDOM from 'react-dom/client'
import type { User } from './hooks/useChatSocket'
import stylesText from './styles.css?inline'

const VERSION = 6

// ────────────────────────────────────────────────────────────────────────────
class SmartspyChat extends HTMLElement {
  // HTML attributes that should be forwarded to React props
  static observedAttributes = ['ws-endpoint', 'portal-target', 'user']

  private readonly _shadow: ShadowRoot
  private readonly _root: ReactDOM.Root
  private readonly _container: HTMLDivElement

  constructor() {
    super()

    this._shadow = this.attachShadow({ mode: 'open' })
    this._shadow.innerHTML = `<style>${stylesText}</style>` // load styles into shadow DOM

    this._container = document.createElement('div')
    Object.assign(this._container.style, { position: 'fixed', inset: '0', zIndex: '2147483647', pointerEvents: 'none' })
    this._shadow.append(this._container)

    const sheet = new CSSStyleSheet()
    sheet.replaceSync(stylesText) // load synchronously
    ;(this._shadow as ShadowRoot).adoptedStyleSheets = [sheet]

    this._root = ReactDOM.createRoot(this._container)

    console.log('SmartspyChat initialized version:', VERSION)
  }

  connectedCallback() {
    this.render() // first render
  }

  attributeChangedCallback() {
    this.render() // re-render when a watched attribute changes
  }

  // -------------------------------------------------------------------------

  private render() {
    let user: User | undefined
    const raw = this.getAttribute('user')
    if (raw) {
      try {
        user = JSON.parse(raw)
      } catch {
        console.error('<smartspy-chat> invalid user JSON')
      }
    }

    this._root.render(<ChatWidget wsEndpoint={this.getAttribute('ws-endpoint') ?? ''} portalTarget={this._shadow} user={user} />)
  }
}

customElements.define('smartspy-chat', SmartspyChat)
