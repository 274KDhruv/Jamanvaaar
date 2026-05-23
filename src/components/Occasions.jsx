import React from 'react'
import { Home, Utensils, Users } from 'lucide-react'
import './Occasions.css'

const Occasions = () => {
  const occasions = [
    {
      title: 'Traditional Thali Experience',
      icon: <Utensils size={24} />,
      desc: 'Sit down to a 26-dish Gujarati thali served with warmth, ritual, and ghar nu swaad.',
      tone: 'thali',
      link: '/contact'
    },
    {
      title: 'Family Gatherings',
      icon: <Home size={24} />,
      desc: 'Bring your loved ones together around one table for stories, laughter, and a soulful Gujarati feast.',
      tone: 'family',
      link: '/contact'
    },
    {
      title: 'Private Bookings',
      icon: <Users size={24} />,
      desc: 'Reserve the entire 8-seater table for your family or corporate gathering.',
      tone: 'private',
      link: '/contact'
    }
  ]

  return (
    <section className="occasions-section section-padding">
      <div className="container">
        <div className="section-header text-center fade-in">
          <h4 className="section-subtitle">Special Moments</h4>
          <h2 className="section-title">Perfect for Every Occasion</h2>
          <p className="section-lead">Jamanvaaar is where memories are made and traditions are celebrated.</p>
        </div>

        <div className="occasions-grid">
          {occasions.map((occ, index) => (
            <div key={index} className="occasion-card fade-in" style={{animationDelay: `${index * 0.2}s`}}>
              <div className={`occasion-icon ${occ.tone}`}>{occ.icon}</div>
              <h3>{occ.title}</h3>
              <p>{occ.desc}</p>
              <a href={occ.link} className="btn-outline">Inquire Now</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Occasions
