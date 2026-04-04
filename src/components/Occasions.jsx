import React from 'react'
import { Sparkles, Heart, Users } from 'lucide-react'
import './Occasions.css'

const Occasions = () => {
  const occasions = [
    {
      title: 'Birthdays',
      icon: <Sparkles size={24} />,
      desc: 'Celebrate your special day with a royal feast and intimate surroundings.',
      link: '/contact'
    },
    {
      title: 'Date Nights',
      icon: <Heart size={24} />,
      desc: 'A unique dining experience for couples, with candlelight and traditional flavor.',
      link: '/contact'
    },
    {
      title: 'Private Bookings',
      icon: <Users size={24} />,
      desc: 'Reserve the entire 8-seater table for your family or corporate gathering.',
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
              <div className="occasion-icon">{occ.icon}</div>
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
