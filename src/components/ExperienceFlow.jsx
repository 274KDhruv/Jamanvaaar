import React from 'react'
import { Home, Users, Utensils, Heart } from 'lucide-react'
import './ExperienceFlow.css'

const ExperienceFlow = () => {
  const steps = [
    {
      icon: <Home size={40} />,
      title: 'Arrive',
      description: 'Step into a warm Juhu home, greeted with a heartfelt "Jai Shree Krishna".'
    },
    {
      icon: <Users size={40} />,
      title: 'Meet Strangers',
      description: 'Take your seat among 7 other guests. Breaking bread with new faces.'
    },
    {
      icon: <Utensils size={40} />,
      title: 'Eat Together',
      description: 'A royal 24+ dish Gujarati Thali served with love and tradition.'
    },
    {
      icon: <Heart size={40} />,
      title: 'Leave as Friends',
      description: 'Hours of conversation later, you leave with a full belly and a fuller heart.'
    }
  ]

  return (
    <section id="experience" className="experience-section section-padding">
      <div className="container">
        <div className="section-header text-center fade-in">
          <h4 className="section-subtitle">The Jamanvaaar Journey</h4>
          <h2 className="section-title">An Evening Like No Other</h2>
          <p className="section-lead">Experience the soulful essence of Gujarati hospitality in 4 simple steps.</p>
        </div>

        <div className="experience-grid">
          {steps.map((step, index) => (
            <div key={index} className="experience-card fade-in" style={{animationDelay: `${index * 0.2}s`}}>
              <div className="step-number">{index + 1}</div>
              <div className="step-icon-box">
                {step.icon}
              </div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-desc">{step.description}</p>
              {index < steps.length - 1 && <div className="step-connector"></div>}
            </div>
          ))}
        </div>

        <div className="experience-cta text-center fade-in">
          <p>"Sachu kav chu JALSO PADI JASE!!"</p>
        </div>
      </div>
    </section>
  )
}

export default ExperienceFlow
