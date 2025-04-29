import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AuthProvider } from '/Components/Authorisation/AuthContext.jsx'
import Navbar from '/Components/Navbar.jsx'
import Footer from '/Components/Footer.jsx'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </StrictMode >,
)
