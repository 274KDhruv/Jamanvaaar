import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Media from './pages/Media.jsx'
import Contact from './pages/Contact.jsx'
import Terms from './pages/Terms.jsx'
import Privacy from './pages/Privacy.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import StickyCTA from './components/StickyCTA.jsx'
import './index.css'

const ScrollToHash = () => {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''))
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      window.scrollTo(0, 0)
    }
  }, [pathname, hash])

  return null
}

function App() {
  return (
    <Router>
      <ScrollToHash />
      <div className="app">
        <Navbar />
        <main className="site-main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/media" element={<Media />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
          </Routes>
        </main>
        <Footer />
        <StickyCTA />
        
        {/* Floating WhatsApp - Styled for Redesign */}
        <a 
          href="https://wa.me/919833303708" 
          className="whatsapp-float-premium" 
          target="_blank" 
          rel="noopener noreferrer"
          title="Message us on WhatsApp"
        >
          <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" />
          <span className="wa-text">Chat with us</span>
        </a>
      </div>
    </Router>
  )
}

export default App
