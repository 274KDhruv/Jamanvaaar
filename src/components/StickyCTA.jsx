import React from 'react'
import { Link } from 'react-router-dom'
import { Calendar, Users } from 'lucide-react'
import './StickyCTA.css'

const StickyCTA = () => {
  return (
    <div className="sticky-cta-bar">
      <div className="container sticky-cta-content">
        <div className="sticky-info hide-mobile">
          <div className="sticky-item">
            <Calendar size={18} />
            <span>Only 8 Seats per Night</span>
          </div>
          <div className="sticky-divider"></div>
          <div className="sticky-item">
            <Users size={18} />
            <span>Starting ₹XXXX per Guest</span>
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
