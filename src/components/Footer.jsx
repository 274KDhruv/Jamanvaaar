import React from 'react'
import { Link } from 'react-router-dom'
import { Instagram, Facebook, Phone, Mail } from 'lucide-react'
import { RangoliDivider } from './GujaratiDecorations'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="main-footer">
      {/* Decorative ornament at top */}
      <div className="footer-ornament">
        <RangoliDivider className="compact" />
      </div>
      
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col brand-col">
            <h3 className="footer-logo">Jamanvaaar</h3>
            <span className="footer-gujarati gujarati-text">જમણવાર</span>
            <p>Authentic Gujarati Dining Experience in the heart of Mumbai.</p>
            <div className="social-links">
              <a href="#"><Instagram size={20} /></a>
              <a href="#"><Facebook size={20} /></a>
            </div>
          </div>
          
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about-us">About Us</Link></li>
              <li><Link to="/media">Media</Link></li>
              <li><Link to="/contact">Reserve a Seat</Link></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h4>Contact Info</h4>
            <ul>
              <li><Phone size={16} /> 9833303708</li>
              <li><Mail size={16} /> info@jamanvaaar.com</li>
              <li>Juhu, Mumbai, India</li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h4>Dining Hours</h4>
            <p>Thursday, Friday & Saturday</p>
            <p>Dinner: 7:30 PM onwards</p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Jamanvaaar. All Rights Reserved.</p>
          <div className="footer-legal">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
