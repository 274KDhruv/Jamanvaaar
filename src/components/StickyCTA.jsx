import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Calendar, Users } from 'lucide-react'
import './StickyCTA.css'

const StickyCTA = () => {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      const scrollPosition = window.scrollY || window.pageYOffset || document.documentElement.scrollTop

      // If user is within 350px of the bottom (revealing the footer), hide the sticky CTA
      if (documentHeight - scrollPosition - windowHeight < 350) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }
    }

    window.addEventListener('scroll', handleScroll)
    // Run once on mount to determine initial status
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className={`sticky-cta-bar ${isVisible ? 'visible' : 'hidden'}`}>
      <div className="container sticky-cta-content">
        <div className="sticky-info hide-mobile">
          <div className="sticky-item">
            <Calendar size={18} />
            <span>Only 8 Seats per Night</span>
          </div>
          <div className="sticky-divider"></div>
          <div className="sticky-item">
            <Users size={18} />
            <span>₹3150/- per Guest</span>
          </div>
        </div>
        
        <div className="sticky-action">
          <Link to="/contact" className="btn-sticky-book">
            BOOK MY EXPERIENCE
          </Link>
        </div>
      </div>
    </div>
  )
}

export default StickyCTA
