import './styles.css'

import ChatWidget from './components/ChatWidget'
import ReactDOM from 'react-dom/client'
import stylesText from './styles.css?inline'

// ────────────────────────────────────────────────────────────────────────────
class SmartspyChat extends HTMLElement {
  // HTML attributes that should be forwarded to React props
  static observedAttributes = ['ws-endpoint', 'portal-target'] // add more if you need

  private readonly _shadow: ShadowRoot
  private readonly _root: ReactDOM.Root

  constructor() {
    super()
    // this is executed ONCE and can’t throw afterwards
    this._shadow = this.attachShadow({ mode: 'open' })
    this._shadow.innerHTML = `<style>${stylesText}</style>` // load styles into shadow DOM

    const sheet = new CSSStyleSheet()
    sheet.replaceSync(stylesText) // load synchronously
    ;(this._shadow as ShadowRoot).adoptedStyleSheets = [sheet]

    this._root = ReactDOM.createRoot(this._shadow)
  }

  connectedCallback() {
    this.render() // first render
  }

  attributeChangedCallback() {
    this.render() // re-render when a watched attribute changes
  }

  // -------------------------------------------------------------------------
  private render() {
    this._root.render(<ChatWidget wsEndpoint={this.getAttribute('ws-endpoint') ?? ''} />)
  }
}

customElements.define('smartspy-chat', SmartspyChat)
