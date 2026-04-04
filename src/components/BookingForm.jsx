import React, { useState } from 'react'
import { Calendar, Users, Phone, Mail, User, Clock } from 'lucide-react'
import './BookingForm.css'

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    guests: '1',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real app, this would send data to a backend
    console.log('Reservation Submitted:', formData)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="booking-success fade-in">
        <div className="success-icon">✓</div>
        <h3>Reservation Request Received!</h3>
        <p>Thank you, {formData.name}. We will contact you shortly to confirm your seats at Jamanvaaar.</p>
        <button onClick={() => setSubmitted(false)} className="btn-primary">Make Another Reservation</button>
      </div>
    )
  }

  return (
    <div className="booking-form-container fade-in">
      <form className="booking-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label><User size={16} /> Full Name</label>
          <input 
            type="text" 
            name="name" 
            placeholder="Enter your name" 
            required 
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label><Mail size={16} /> Email Address</label>
            <input 
              type="email" 
              name="email" 
              placeholder="Enter your email" 
              required 
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label><Phone size={16} /> Phone Number</label>
            <input 
              type="tel" 
              name="phone" 
              placeholder="Your mobile number" 
              required 
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label><Calendar size={16} /> Preferred Date</label>
            <input 
              type="date" 
              name="date" 
              required 
              value={formData.date}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label><Users size={16} /> Number of Guests</label>
            <select 
              name="guests" 
              value={formData.guests}
              onChange={handleChange}
            >
              {[1,2,3,4,5,6,7,8].map(num => (
                <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="form-group">
          <label>Special Requests / Message (Optional)</label>
          <textarea 
            name="message" 
            rows="4" 
            placeholder="Tell us about allergies or special occasions..."
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>

        <button type="submit" className="btn-primary btn-block">
          Reserve your Seat
        </button>
        <p className="form-note">
          <Clock size={12} /> Note: Reservations are only for Thursday, Friday, and Saturday.
        </p>
      </form>
    </div>
  )
}

export default BookingForm
