import React from 'react'
import MediaGallery from '../components/MediaGallery'
import gallery7 from '../assets/gallery-7.jpg'
import gallery9 from '../assets/gallery-9.jpg'
import gallery10 from '../assets/gallery-10.JPG'
import gallery11 from '../assets/gallery-11.jpeg'
import './Media.css'

const Media = () => {
  const journeyImages = [
    { src: gallery7, alt: 'Gujarati thali with festive table setting' },
    { src: gallery9, alt: 'Festive Jamanvaaar table with thali and flowers' },
    { src: gallery10, alt: 'Traditional Gujarati thali close-up' },
    { src: gallery11, alt: 'Royal thali with chaas and farsan' },
  ]

  return (
    <div className="media-page-premium section-padding">
      <div className="container">
        <div className="section-header text-center fade-in">
          <h4 className="section-subtitle">Real Evenings</h4>
          <h2 className="section-title">A Visual Journey</h2>
          <p className="section-lead">A glimpse into the authentic flavors and warm atmosphere of Jamanvaaar.</p>
        </div>

        <div className="journey-masonry fade-in">
          {journeyImages.map((image, index) => (
            <figure key={image.src} className={`journey-card journey-card-${index + 1}`}>
              <img src={image.src} alt={image.alt} loading="lazy" />
            </figure>
          ))}
        </div>

        <div className="gallery-section-premium section-padding fade-in">
          <h3 className="section-title text-center" style={{ marginBottom: '50px' }}>What You'll Experience</h3>
          <MediaGallery />
        </div>

        <div className="media-footer-premium text-center section-padding fade-in">
          <div className="insta-branding">
            <h4 className="section-subtitle">Join the Journey</h4>
            <h3>Share your experience with us!</h3>
            <p className="section-lead">Tag us @jamanvaaar on Instagram and get featured in our gallery.</p>
            <div style={{ marginTop: '40px' }}>
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
