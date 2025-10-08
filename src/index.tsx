import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'

// 🧩 Import des variables CSS générées
import '../theme/tokens-build/css/themes.css'

import App from './App'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
