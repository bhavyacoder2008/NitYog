import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  // StrictMode helps expose unsafe React patterns during development.
  // It does not render twice in the production build.
  <StrictMode>
    {/* BrowserRouter provides routing context to every Link, Route and router hook below it. */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
