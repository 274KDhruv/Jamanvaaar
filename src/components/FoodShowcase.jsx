import React from 'react'
import thali from '../assets/hero-thali.png'
import aamras from '../assets/aamras.png'
import dhokla from '../assets/dhokla.png'
import khandvi from '../assets/khandvi.png'
import undhiyu from '../assets/undhiyu.png'
import dining from '../assets/dining-room-12.jpg'
import './FoodShowcase.css'

const FoodShowcase = () => {
  const dishes = [
    { name: 'Royal Gujarati Thali', img: thali, tag: 'The Masterpiece' },
    { name: 'Saffron Aamras', img: aamras, tag: 'Seasonal Bliss' },
    { name: 'Khaman Dhokla', img: dhokla, tag: 'Steamed Perfection' },
    { name: 'Classic Khandvi', img: khandvi, tag: 'Hand-rolled Love' },
    { name: 'Grand Undhiyu', img: undhiyu, tag: 'Seasonal Tradition' },
    { name: 'Intimate Dining', img: dining, tag: 'The Atmosphere' },
  ]

  return (
    <section className="food-showcase-section section-padding">
      <div className="container">
        <div className="section-header text-center fade-in">
          <h2 className="section-title">What You'll Experience</h2>
          <p className="section-lead">A feast for the eyes before it reaches your plate.</p>
        </div>

        <div className="food-grid">
          {dishes.map((dish, index) => (
            <div key={index} className="food-item fade-in" style={{animationDelay: `${index * 0.15}s`}}>
              <div className="food-img-wrapper">
                <img src={dish.img} alt={dish.name} />
                <div className="food-overlay">
                  <div className="food-info">
                    <span className="food-tag">{dish.tag}</span>
                    <h3 className="food-name">{dish.name}</h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="food-footer-cta text-center fade-in">
          <p className="menu-disclaimer">Each table is served a different curated menu, making every JamanVaaar experience unique.</p>
        </div>
      </div>
    </section>
  )
}

export default FoodShowcase
