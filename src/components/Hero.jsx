import React from 'react'
import { Link } from 'react-router-dom'
import { Users, ArrowRight } from 'lucide-react'
import { PaisleyCorner } from './GujaratiDecorations'
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
            <span className="hero-welcome-line">Welcome to</span>
            <span className="hero-brand-line">Jamanvaaar</span>
          </h1>
          
          <p className="hero-tagline-sub">
            An Intimate Gujarati Supper Club in Juhu
          </p>
          
          <div className="hero-usp-row">
            <div className="usp-item usp-community">
              <Users size={18} />
              <span>80+ Tables Served • Countless Memories Shared</span>
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
    </section>
  )
}

export default Hero
