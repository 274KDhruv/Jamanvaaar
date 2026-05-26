import React from 'react'
import FounderSection from '../components/FounderSection'
import supperClubImg from '../assets/supper-club.png'
import './About.css'

const About = () => {
  return (
    <div className="about-page-premium">
      <section className="about-hero-premium">
        <div className="container about-hero-content fade-in">
          <h1 className="hero-headline">Celebrating Home, Heart & Heritage</h1>
          <p className="hero-tagline-sub" style={{color: 'var(--haldi-yellow)'}}>More than just a meal, a memory made with love.</p>
        </div>
      </section>

      <FounderSection />

      <section className="quality-promise section-padding">
        <div className="container quality-grid">
          <div className="quality-visual fade-in">
            <img src={supperClubImg} alt="Quality Ingredients from Gujarat" />
          </div>
          <div className="quality-content fade-in">
            <h4 className="section-subtitle">Our Quality</h4>
            <h2 className="section-title">Driven by Warmth, Guided by Purity</h2>
            <div className="quality-story">
              <p>
                At Jamanvaaar, our philosophy centers around the traditional Indian concept of <strong>"Atithi Devo Bhava"</strong> — The Guest is God. We strive to recreate the warmth and richness of a traditional Gujarati household right here in Juhu.
              </p>
              <p>
                Every ingredient is handpicked. Our organic vegetables are freshly brought from our own farms in Gujarat, and every spice is freshly ground. We use time-honored recipes perfected over three decades by <strong>Tejal Mehta</strong>.
              </p>
              <p>
                Our team is a family of trusted women helpers, many of whom have worked with us for over a decade. This shared passion for care and purity ensures that every thali reflects our promise of authenticity and love.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="about-cta section-padding fade-in">
        <div className="container text-center">
          <h2 className="section-title">Join our 8-seater table</h2>
          <p className="section-lead">Avo Padharo Amaara Jamanvaaar Ma!</p>
          <div style={{marginTop: '40px'}}>
            <a href="/contact" className="btn-primary-large">Book Your Experience</a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
