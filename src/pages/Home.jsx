import React from 'react'
import Hero from '../components/Hero.jsx'
import ExperienceFlow from '../components/ExperienceFlow.jsx'
import FoodShowcase from '../components/FoodShowcase.jsx'
import WhyJamanvaaar from '../components/WhyJamanvaaar.jsx'
import SampleMenu from '../components/SampleMenu.jsx'
import Occasions from '../components/Occasions.jsx'
import FounderSection from '../components/FounderSection.jsx'
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
          <div className="reviews-placeholder" style={{padding: '40px', background: 'var(--bg-off-white)', borderRadius: '12px', marginTop: '40px'}}>
             <p className="section-lead">"The most authentic Gujarati experience in Mumbai. 8 people, one table, endless stories."</p>
             <h4 style={{marginTop: '20px', color: 'var(--primary-red)'}}>— Shradha & Rahul</h4>
          </div>
        </div>
      </section>
      
      {/* Final Conversion Section */}
      <section className="final-cta section-padding fade-in">
        <div className="container text-center">
          <h2 className="section-title">Ready for the Jamanvaaar Experience?</h2>
          <p className="section-lead">Starting ₹XXXX per guest. Only 8 seats available per night.</p>
          <div style={{marginTop: '40px'}}>
            <a href="/contact" className="btn-primary-large" style={{margin: '0 auto'}}>
              Reserve Your Seat Now
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
