import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App'
import './index.css'

import 'primereact/resources/themes/lara-light-blue/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'

import { applyTheme } from './theme/theme'

applyTheme('light')

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
