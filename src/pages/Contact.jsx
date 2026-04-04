import React from 'react'
import { MapPin, Phone, Mail, Clock, Instagram, Send } from 'lucide-react'
import BookingForm from '../components/BookingForm'
import './Contact.css'

const Contact = () => {
  return (
    <div className="contact-page-premium section-padding">
      <div className="container contact-grid-premium">
        <div className="contact-info-side fade-in">
          <h4 className="section-subtitle">Reserve your Seat</h4>
          <h1 className="section-title">Join our 8-seater table</h1>
          <p className="contact-intro">
            Ready to experience the best thali in Mumbai? Our table is set and we're waiting for you. 
            Remember, we only accommodate <strong>8 guests per session</strong> to keep things personal and soulful.
          </p>
          
          <div className="contact-details-box">
            <div className="contact-premium-item">
              <div className="contact-icon-premium"><MapPin size={24} /></div>
              <div className="contact-text">
                <h4>Location</h4>
                <p>1st Floor, Mehra House, near Amar Juice Centre, JVPD Scheme, Juhu, Mumbai, 400049</p>
              </div>
            </div>
            
            <div className="contact-premium-item">
              <div className="contact-icon-premium"><Phone size={24} /></div>
              <div className="contact-text">
                <h4>Phone</h4>
                <p>+91 98333 03708</p>
                <span className="availability">Available for Calls & WhatsApp</span>
              </div>
            </div>
            
            <div className="contact-premium-item">
              <div className="contact-icon-premium"><Clock size={24} /></div>
              <div className="contact-text">
                <h4>Session Times</h4>
                <p>Thursday, Friday & Saturday</p>
                <p>7:30 PM Onwards</p>
              </div>
            </div>
          </div>
          
          <div className="contact-cta-card">
            <h3>Pricing Details</h3>
            <p className="price-tag">Starting <strong>₹XXXX</strong> per guest</p>
            <p className="price-note">Incl. of a full 24+ royal dish spread served with love.</p>
          </div>
        </div>
        
        <div className="contact-form-side-premium fade-in">
          <div className="form-container-card">
            <h2 className="form-title">Booking Inquiry</h2>
            <p className="form-subtitle">Fill in the details and we'll get back to you shortly.</p>
            <BookingForm />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
