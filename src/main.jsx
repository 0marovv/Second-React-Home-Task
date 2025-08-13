import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './assets/styles/style.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './assets/styles/productdetails.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  
  </StrictMode>,
)
