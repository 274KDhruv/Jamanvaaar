import React from 'react'
import { Users, Home, MapPin, Sparkles } from 'lucide-react'
import { MatkaIllustration } from './GujaratiDecorations'
import './WhyJamanvaaar.css'

const WhyJamanvaaar = () => {
  const points = [
    {
      icon: <Users size={32} />,
      title: 'Only 8 Seats',
      desc: 'Exclusive, intimate dining experience where every guest is special. No crowds, just curated conversations.'
    },
    {
      icon: <Home size={32} />,
      title: 'Home-Style Luxury',
      desc: 'The warmth of a Juhu home combined with the royal elegance of a traditional Gujarati feast.'
    },
    {
      icon: <Sparkles size={32} />,
      title: 'Community Dining',
      desc: 'Meet like-minded food lovers. Arrive as strangers, leave as a family of friends.'
    },
    {
      icon: <MapPin size={32} />,
      title: 'Located in Juhu',
      desc: 'A hidden culinary gem in the heart of Mumbai, bringing the authentic taste of Gujarat to you.'
    }
  ]

  return (
    <section className="why-section section-padding">
      {/* Decorative Matka clay pot watermark */}
      <MatkaIllustration className="watermark-right" />

      <div className="container why-grid">
        <div className="why-content fade-in">
          <h4 className="section-subtitle">Why Jamanvaaar?</h4>
          <h2 className="section-title">Beyond Just a Meal</h2>
          <p className="section-lead">We don't just serve food; we serve memories, heritage, and a chance to slow down in the city that never sleeps.</p>
          
          <div className="why-features">
            {points.map((point, index) => (
              <div key={index} className="feature-item">
                <div className="feature-icon">{point.icon}</div>
                <div className="feature-text">
                  <h3>{point.title}</h3>
                  <p>{point.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="why-visual-side fade-in">
          <div className="visual-composition">
            <div className="main-visual-box">
              <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1470" alt="Supper Club Atmosphere" />
            </div>
            <div className="stats-overlay">
              <div className="stat-card">
                <span className="stat-num">8</span>
                <span className="stat-label">Seats Only</span>
              </div>
              <div className="stat-card haldi">
                <span className="stat-num">24+</span>
                <span className="stat-label">Dishes Served</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyJamanvaaar
