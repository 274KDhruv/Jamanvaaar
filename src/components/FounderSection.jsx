import React from 'react'
import tejalMehta from '../assets/tejal-mehta.png'
import './FounderSection.css'

const FounderSection = () => {
  return (
    <section className="founder-section section-padding">
      <div className="container founder-grid">
        <div className="founder-visual fade-in">
          <div className="founder-img-card">
            <img src={tejalMehta} alt="Tejal Rakesh Mehta" />
            <div className="founder-label">
              <h3>Tejal Rakesh Mehta</h3>
              <p>Founder & Host</p>
            </div>
          </div>
          <div className="founder-quote-box">
            <p>“Feeding people is my love language.”</p>
          </div>
        </div>
        
        <div className="founder-content fade-in">
          <h4 className="section-subtitle">Avo Padharo</h4>
          <h2 className="section-title">The Heart Behind Jamanvaaar</h2>
          <div className="founder-story">
            <p>
              A daughter, a wife, and a mother from a traditional Gujarati family — <strong>Tejal Rakesh Mehta</strong> has been nurturing her love for food and people for over three decades.
            </p>
            <p>
              What started as a labor of love in her own kitchen blossomed into a vision: to bring the true essence of <strong>Gujarati hospitality</strong> to the heart of Mumbai.
            </p>
            <p>
              Driven by warmth and guided by purity, Tejal believes that food is not just a meal — it’s an emotion, a story, and a celebration of togetherness. At Jamanvaaar, she personally oversees every detail, from the farm-fresh organic vegetables to the traditional spices ground to perfection.
            </p>
            <div className="founder-signature">
              <p>With Love,</p>
              <h4>Tejal Mehta</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FounderSection
