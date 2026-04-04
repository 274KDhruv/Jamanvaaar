import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Phone, Mail, Instagram, MapPin, Clock, Menu, X } from 'lucide-react'
import logo from '../assets/logo.png'
import './Navbar.css'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Experience', path: '/#experience' },
    { name: 'About Us', path: '/about-us' },
    { name: 'Menu Preview', path: '/#menu' },
    { name: 'Gallery', path: '/media' },
    { name: 'Reviews', path: '/#reviews' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <header className={`navbar-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="top-bar">
        <div className="container top-bar-content">
          <div className="top-bar-left">
            <a href="tel:9833303708"><Phone size={12} /> 9833303708</a>
            <a href="mailto:info@jamanvaaar.com" className="hide-mobile"><Mail size={12} /> info@jamanvaaar.com</a>
          </div>
          <div className="top-bar-right">
            <span className="hide-mobile"><MapPin size={12} /> Juhu, Mumbai</span>
            <span><Clock size={12} /> Thu, Fri & Sat - 7:30pm</span>
          </div>
        </div>
      </div>
      
      <nav className="main-nav">
        <div className="container nav-content">
          <Link to="/" className="nav-logo">
            <img src={logo} alt="Jamanvaaar" />
            <div className="logo-text-group">
              <span className="logo-text">Jamanvaaar</span>
              <span className="logo-tagline">Authentic Gujarati Dining</span>
            </div>
          </Link>
          
          <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link 
                  to={link.path} 
                  className={location.pathname === link.path ? 'active' : ''}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          
          <div className="nav-actions">
            <Link to="/contact" className="btn-book-now">
              BOOK NOW
            </Link>
            <button className="mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
