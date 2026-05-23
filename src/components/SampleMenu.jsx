import React from 'react'
import { Utensils, Coffee, IceCream } from 'lucide-react'
import { JalebiIllustration, ThaliIllustration } from './GujaratiDecorations'
import './SampleMenu.css'

const SampleMenu = () => {
  const menuCategories = [
    {
      title: 'Faral (Starters)',
      icon: <Utensils size={24} />,
      items: [
        { name: 'Khaman Dhokla', desc: 'Steamed gram flour cakes, tempered with mustard seeds.' },
        { name: 'Hand-rolled Khandvi', desc: 'Delicate gram flour rolls with coconut and coriander.' },
        { name: 'Patra', desc: 'Colocasia leaves with a tangy gram flour paste.' },
        { name: 'Lilva Kachori', desc: 'Crusty peas-filled dumplings, seasonal favorite.' }
      ]
    },
    {
      title: 'The Royal Thali (Mains)',
      icon: <Coffee size={24} />,
      items: [
        { name: 'Grand Undhiyu', desc: 'A winter specialty slow-cooked in traditional clay pots.' },
        { name: 'Gujarati Kadhi', desc: 'Creamy yogurt-based curry, perfectly tempered.' },
        { name: 'Vatana Bateta Nu Shaak', desc: 'Traditional potato and pea curry with farm-fresh spices.' },
        { name: 'Phulka / Poori / Bajra Rotla', desc: 'Variety of hand-rolled Indian breads.' }
      ]
    },
    {
      title: 'Mishthan (Desserts)',
      icon: <IceCream size={24} />,
      items: [
        { name: 'Saffron Aamras', desc: 'Pure mango pulp infused with fresh saffron strands.' },
        { name: 'Basundi', desc: 'Slow-reduced milk with cardamom and nuts.' },
        { name: 'Shrikhand', desc: 'Thick strained yogurt with mango or cardamom flavors.' },
        { name: 'Warm Jalebi', desc: 'Crispy fried swirls soaked in saffron syrup.' }
      ]
    }
  ]

  return (
    <section id="menu" className="sample-menu-section section-padding">
      {/* Decorative Food Watermarks */}
      <JalebiIllustration className="watermark-center-left" />
      <ThaliIllustration className="watermark-center-right" />

      <div className="container">
        <div className="section-header text-center fade-in">
          <h4 className="section-subtitle">Menu Preview</h4>
          <h2 className="section-title">A Taste of Tradition</h2>
          <p className="section-lead">Every week, we curate a royal spread of 26 items, prepared with farm-fresh ingredients and generational love.</p>
        </div>

        <div className="menu-grid">
          {menuCategories.map((category, index) => (
            <div key={index} className="menu-category-card fade-in" style={{animationDelay: `${index * 0.2}s`}}>
              <div className="category-header">
                <div className="category-icon">{category.icon}</div>
                <h3>{category.title}</h3>
              </div>
              <ul className="menu-item-list">
                {category.items.map((item, idx) => (
                  <li key={idx} className="menu-item">
                    <div className="item-name-row">
                      <span className="item-name">{item.name}</span>
                      <span className="item-dots"></span>
                    </div>
                    <p className="item-desc">{item.desc}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="menu-note text-center fade-in">
          <p>* Menu items vary by season and availability. We celebrate the best of Nature's cycle.</p>
        </div>
      </div>
    </section>
  )
}

export default SampleMenu
