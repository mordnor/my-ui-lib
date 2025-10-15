import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '../demo/src/App'
import './index.css'

// Import design system theme CSS
import '../theme/tokens-build/css/themes.css'

// Initialize theme
import { initTheme } from '@theme/applyTheme'
initTheme()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
