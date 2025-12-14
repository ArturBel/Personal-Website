import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './header/header.jsx'
import Frontpage from './frontpage/frontpage.jsx'
import AboutMe from './aboutme/aboutme.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Frontpage />
    <AboutMe />
  </StrictMode>,
)
