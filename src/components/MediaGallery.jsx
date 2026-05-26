import React, { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import gallery2 from '../assets/gallery-experience-2.JPG'
import gallery3 from '../assets/gallery-experience-3.JPG'
import gallery4 from '../assets/gallery-experience-4.JPG'
import gallery5 from '../assets/gallery-experience-5.JPG'
import gallery6 from '../assets/gallery-experience-6.JPG'
import './MediaGallery.css'

const MediaGallery = () => {
  const [activeIndex, setActiveIndex] = useState(null)

  const images = [
    { src: gallery2, alt: 'Guests enjoying a Jamanvaaar dining experience' },
    { src: gallery3, alt: 'Jamanvaaar host with guests in traditional attire' },
    { src: gallery4, alt: 'Guest enjoying a traditional Gujarati thali' },
    { src: gallery5, alt: 'Founder with guests at Jamanvaaar' },
    { src: gallery6, alt: 'Founder serving guests at the dining table' },
  ]

  const moveLightbox = (direction) => {
    setActiveIndex((current) => {
      if (current === null) return current
      return (current + direction + images.length) % images.length
    })
  }

  useEffect(() => {
    if (activeIndex === null) return undefined

    const handleKeydown = (event) => {
      if (event.key === 'Escape') setActiveIndex(null)
      if (event.key === 'ArrowLeft') moveLightbox(-1)
      if (event.key === 'ArrowRight') moveLightbox(1)
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeydown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeydown)
    }
  }, [activeIndex])

  return (
    <div className="media-gallery">
      <div className="gallery-grid">
        {images.map((img, index) => (
          <button
            key={img.src}
            className="gallery-item fade-in"
            style={{ animationDelay: `${index * 0.1}s` }}
            onClick={() => setActiveIndex(index)}
            type="button"
          >
            <img src={img.src} alt={img.alt} loading="lazy" />
          </button>
        ))}
      </div>

      {activeIndex !== null && (
        <div className="gallery-lightbox" role="dialog" aria-modal="true" aria-label="Expanded gallery image" onClick={() => setActiveIndex(null)}>
          <button className="lightbox-close" type="button" aria-label="Close gallery" onClick={() => setActiveIndex(null)}>
            <X size={22} />
          </button>

          <button
            className="lightbox-nav lightbox-prev"
            type="button"
            aria-label="Previous image"
            onClick={(event) => {
              event.stopPropagation()
              moveLightbox(-1)
            }}
          >
            <ChevronLeft size={28} />
          </button>

          <div className="lightbox-frame" onClick={(event) => event.stopPropagation()}>
            <img src={images[activeIndex].src} alt={images[activeIndex].alt} />
          </div>

          <button
            className="lightbox-nav lightbox-next"
            type="button"
            aria-label="Next image"
            onClick={(event) => {
              event.stopPropagation()
              moveLightbox(1)
            }}
          >
            <ChevronRight size={28} />
          </button>
        </div>
      )}
    </div>
  )
}

export default MediaGallery
