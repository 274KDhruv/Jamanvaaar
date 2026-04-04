import React from 'react'
import MediaGallery from '../components/MediaGallery'
import supperClubImg from '../assets/supper-club.png'
import guestsImg from '../assets/guests.png'
import dhoklaImg from '../assets/dhokla.png'
import aamrasImg from '../assets/aamras.png'
import './Media.css'

const Media = () => {
  const socialCards = [
    { type: 'reel', img: supperClubImg, caption: 'A magical evening at Jamanvaaar...', views: '1.2M' },
    { type: 'photo', img: guestsImg, caption: 'Arrive as strangers, leave as family.', likes: '450' },
    { type: 'photo', img: dhoklaImg, caption: 'The softest Khaman you will ever have.', likes: '890' },
    { type: 'reel', img: aamrasImg, caption: 'Saffron Aamras season is here! 🥭', views: '2.5M' },
  ]

  return (
    <div className="media-page-premium section-padding">
      <div className="container">
        <div className="section-header text-center fade-in">
          <h4 className="section-subtitle">Real Evenings</h4>
          <h2 className="section-title">A Visual Journey</h2>
          <p className="section-lead">A glimpse into the authentic flavors and warm atmosphere of Jamanvaaar.</p>
        </div>
        
        <div className="social-proof-grid fade-in">
          {socialCards.map((card, index) => (
            <div key={index} className={`social-card ${card.type}`}>
              <div className="social-img-box">
                <img src={card.img} alt={card.caption} />
                <div className="social-overlay-icon">
                  {card.type === 'reel' ? '▶' : '❤️'}
                </div>
              </div>
              <div className="social-info">
                <p className="social-caption">{card.caption}</p>
                <span className="social-stats">
                  {card.type === 'reel' ? `${card.views} Views` : `${card.likes} Likes`}
                </span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="gallery-section-premium section-padding fade-in">
          <h3 className="section-title text-center" style={{marginBottom: '50px'}}>What You'll Experience</h3>
          <MediaGallery />
        </div>
        
        <div className="media-footer-premium text-center section-padding fade-in">
          <div className="insta-branding">
            <h4 className="section-subtitle">Join the Journey</h4>
            <h3>Share your experience with us!</h3>
            <p className="section-lead">Tag us @jamanvaaar on Instagram and get featured in our gallery.</p>
            <div style={{marginTop: '40px'}}>
              <a href="https://instagram.com/jamanvaaar" target="_blank" rel="noreferrer" className="btn-primary-large">
                Follow us @jamanvaaar
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Media
