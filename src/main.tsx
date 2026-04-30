import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import '@unocss/reset/tailwind.css'
import 'uno.css'
import './styles/variables.css'
import './styles/pixel.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)