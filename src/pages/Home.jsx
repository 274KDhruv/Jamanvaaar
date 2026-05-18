import React from 'react'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero.jsx'
import ExperienceFlow from '../components/ExperienceFlow.jsx'
import FoodShowcase from '../components/FoodShowcase.jsx'
import WhyJamanvaaar from '../components/WhyJamanvaaar.jsx'
import SampleMenu from '../components/SampleMenu.jsx'
import Occasions from '../components/Occasions.jsx'
import FounderSection from '../components/FounderSection.jsx'
import { RangoliDivider, DecorativeQuote } from '../components/GujaratiDecorations'
import './Home.css'

const Home = () => {
  return (
    <div className="home-page">
      <Hero />
      <ExperienceFlow />
      <FoodShowcase />
      <WhyJamanvaaar />
      <SampleMenu />
      <Occasions />
      <FounderSection />
      
      {/* Reviews Section */}
      <section id="reviews" className="reviews-section section-padding fade-in">
        <div className="container text-center">
          <h4 className="section-subtitle">Guest Stories</h4>
          <h2 className="section-title">Real Evenings at Jamanvaaar</h2>
          <RangoliDivider className="compact" />
          <div className="review-card">
            <DecorativeQuote />
            <p className="review-text">"The most authentic Gujarati experience in Mumbai. 8 people, one table, endless stories."</p>
            <div className="review-author">
              <span className="review-name">— Shradha & Rahul</span>
              <span className="review-gujarati gujarati-text">અદ્ભુત અનુભવ</span>
            </div>
          </div>
        </div>
      </section>
      
      {/* Final Conversion Section */}
      <section className="final-cta section-padding fade-in bandhani-bg">
        <div className="container text-center">
          <h2 className="section-title">Ready for the Jamanvaaar Experience?</h2>
          <p className="section-lead">Starting ₹XXXX per guest. Only 8 seats available per night.</p>
          <div style={{marginTop: '40px'}}>
            <Link to="/contact" className="btn-final-cta">
              Reserve Your Seat Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
