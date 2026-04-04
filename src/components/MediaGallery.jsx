import React from 'react'
import thali from '../assets/hero-thali.png'
import dhokla from '../assets/dhokla.png'
import undhiyu from '../assets/undhiyu.png'
import guests from '../assets/guests.png'
import team from '../assets/team.png'
import dining from '../assets/dining-room.png'
import './MediaGallery.css'

const MediaGallery = () => {
  const images = [
    { src: thali, alt: 'Authentic Gujarati Thali' },
    { src: dhokla, alt: 'Fluffy Khaman Dhokla' },
    { src: guests, alt: 'Happy Guests at Jamanvaaar' },
    { src: undhiyu, alt: 'Traditional Undhiyu' },
    { src: team, alt: 'Team Jamanvaaar' },
    { src: dining, alt: 'Warm Dining Atmosphere' },
  ]

  return (
    <div className="media-gallery">
      <div className="gallery-grid">
        {images.map((img, index) => (
          <div key={index} className="gallery-item fade-in" style={{animationDelay: `${index * 0.1}s`}}>
            <img src={img.src} alt={img.alt} />
            <div className="gallery-overlay">
              <span>{img.alt}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MediaGallery
