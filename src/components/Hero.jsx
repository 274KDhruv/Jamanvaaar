import React from 'react'
import { Link } from 'react-router-dom'
import { Calendar, Users, ArrowRight } from 'lucide-react'
import { PaisleyCorner, DiyaIcon } from './GujaratiDecorations'
import supperClubImg from '../assets/supper-club.png'
import './Hero.css'

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-video-mock">
        <img src={supperClubImg} alt="Intimate Gujarati Dinner Atmosphere" className="hero-bg-img" />
        <div className="hero-overlay"></div>
      </div>
      
      {/* Decorative Paisley Corners */}
      <PaisleyCorner position="top-left" />
      <PaisleyCorner position="top-right" />
      <PaisleyCorner position="bottom-left" />
      <PaisleyCorner position="bottom-right" />
      
      <div className="container hero-container">
        <div className="hero-content fade-in">
          <div className="hero-tag-badge">
            <span>Only 8 Seats Per Night</span>
          </div>
          
          <p className="hero-gujarati-greeting gujarati-text">જય શ્રી કૃષ્ણ</p>
          
          <h1 className="hero-headline">
            Welcome to<br />
            <span>Jamanvaaar</span>
          </h1>
          
          <p className="hero-tagline-sub">
            An Intimate Gujarati Supper Club in Juhu
          </p>
          
          <div className="hero-usp-row">
            <div className="usp-item">
              <Calendar size={18} />
              <span>Next Available: <strong>Friday, 7:30 PM</strong></span>
            </div>
            <div className="usp-divider"></div>
            <div className="usp-item">
              <Users size={18} />
              <span>Starting <strong>₹XXXX</strong> per guest</span>
            </div>
          </div>
          
          <div className="hero-actions">
            <Link to="/contact" className="btn-hero-cta">
              Reserve Your Seat <ArrowRight size={20} />
            </Link>
            <p className="hero-urgency-note">Hurry! Seats fill up 2 weeks in advance.</p>
          </div>
        </div>
      </div>
      
      <div className="hero-scroll-indicator">
        <DiyaIcon size={28} className="animated" />
        <span>Explore the Experience</span>
      </div>
    </section>
  )
}

export default Hero
