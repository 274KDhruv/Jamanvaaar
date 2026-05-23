import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Hero from '../components/Hero.jsx'
import ExperienceFlow from '../components/ExperienceFlow.jsx'
import FoodShowcase from '../components/FoodShowcase.jsx'
import WhyJamanvaaar from '../components/WhyJamanvaaar.jsx'
import Occasions from '../components/Occasions.jsx'
import FounderSection from '../components/FounderSection.jsx'
import { RangoliDivider, DecorativeQuote } from '../components/GujaratiDecorations'
import './Home.css'

const testimonials = [
  {
    name: 'Anupamma Bansal Agarwal',
    initials: 'AB',
    review: 'It is a must visit!! Jalsa padi gayo! A very fulfilling experience indeed... :)'
  },
  {
    name: 'Karan Mehta',
    initials: 'K',
    review: 'I visited this Gujarati Supper club just a few days ago with my wife. Wow what an experience! The food was banging, huge royal thali, very intimate vibe felt like I was experiencing Gujarat in Juhu and had few other strangers on my table who were senior level doctors at a reputed Mumbai hospital who became friends and shared some amazing thoughts. What a meal! What an experience! Will be visiting Jamanvaaar once a month not just for food but also to make new friends.'
  },
  {
    name: 'Nirantra Singh Rajput',
    initials: 'NS',
    review: "Gujarati food is full of flavors, textures, and aromas that will leave you craving for more. With its unique flavor profile, diverse dishes, and emphasis on fresh ingredients, this vegetarian paradise is a haven for foodies. From iconic snacks like Dhokla and Khandvi to comforting main courses like Undhiyu and Kadhi, every dish is a testament to the region's rich culinary heritage, making Gujarati cuisine a must-try for anyone looking to explore new flavors. This is something different and new. WORTH TRYING AND HIGHLY RECOMMENDED! Jalso Padi!"
  }
]

const Home = () => {
  const [reviewIndex, setReviewIndex] = useState(0)
  const [isReviewPaused, setIsReviewPaused] = useState(false)
  const touchStartX = useRef(null)

  const goToReview = (direction) => {
    setReviewIndex((current) => (current + direction + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    if (isReviewPaused) return undefined

    const timer = window.setInterval(() => {
      setReviewIndex((current) => (current + 1) % testimonials.length)
    }, 6500)

    return () => window.clearInterval(timer)
  }, [isReviewPaused])

  const handleReviewTouchStart = (event) => {
    touchStartX.current = event.touches[0].clientX
  }

  const handleReviewTouchEnd = (event) => {
    if (touchStartX.current === null) return

    const distance = touchStartX.current - event.changedTouches[0].clientX
    if (Math.abs(distance) > 45) {
      goToReview(distance > 0 ? 1 : -1)
    }
    touchStartX.current = null
  }

  return (
    <div className="home-page">
      <Hero />
      <ExperienceFlow />
      <FoodShowcase />
      <WhyJamanvaaar />
      <Occasions />
      <FounderSection />

      <section id="reviews" className="reviews-section section-padding fade-in">
        <div className="container text-center">
          <h4 className="section-subtitle">Guest Stories</h4>
          <h2 className="section-title">Real Evenings at Jamanvaaar</h2>
          <RangoliDivider className="compact" />

          <div
            className="reviews-carousel"
            onMouseEnter={() => setIsReviewPaused(true)}
            onMouseLeave={() => setIsReviewPaused(false)}
            onTouchStart={handleReviewTouchStart}
            onTouchEnd={handleReviewTouchEnd}
          >
            <button
              className="review-nav review-nav-prev"
              type="button"
              aria-label="Previous guest story"
              onClick={() => goToReview(-1)}
            >
              <ChevronLeft size={22} />
            </button>

            <div className="reviews-viewport">
              <div className="reviews-track" style={{ '--review-index': reviewIndex }}>
                {[...testimonials, ...testimonials].map((testimonial, index) => (
                  <article className="review-card" key={`${testimonial.name}-${index}`}>
                    <div className="review-card-header">
                      <div className="review-avatar" aria-hidden="true">
                        {testimonial.initials}
                      </div>
                      <div>
                        <h3 className="review-name">{testimonial.name}</h3>
                        <span className="review-gujarati gujarati-text">અતિથિ અનુભવ</span>
                      </div>
                    </div>
                    <DecorativeQuote className="review-quote-mark" />
                    <p className="review-text">{testimonial.review}</p>
                  </article>
                ))}
              </div>
            </div>

            <button
              className="review-nav review-nav-next"
              type="button"
              aria-label="Next guest story"
              onClick={() => goToReview(1)}
            >
              <ChevronRight size={22} />
            </button>

            <div className="review-dots" aria-label="Guest story slides">
              {testimonials.map((testimonial, index) => (
                <button
                  key={testimonial.name}
                  type="button"
                  className={reviewIndex === index ? 'active' : ''}
                  aria-label={`Show review from ${testimonial.name}`}
                  onClick={() => setReviewIndex(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="final-cta section-padding fade-in bandhani-bg">
        <div className="container text-center">
          <h2 className="section-title">Ready for the Jamanvaaar Experience?</h2>
          <p className="section-lead">₹3150/- per Guest. Only 8 seats available per night.</p>
          <div style={{ marginTop: '40px' }}>
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
