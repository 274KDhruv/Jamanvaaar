import React from 'react'
import './GujaratiDecorations.css'

/* ── Rangoli Divider ── */
export const RangoliDivider = ({ className = '' }) => (
  <div className={`rangoli-divider ${className}`} aria-hidden="true">
    <svg viewBox="0 0 600 40" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
      {/* Left decorative wing */}
      <path d="M0 20 Q50 20 80 10 Q110 0 140 10 Q170 20 200 15 Q220 12 240 18" 
            stroke="var(--turmeric-gold)" strokeWidth="1.5" fill="none" opacity="0.6" />
      <path d="M0 22 Q50 22 80 32 Q110 42 140 32 Q170 22 200 27 Q220 30 240 24" 
            stroke="var(--terracotta)" strokeWidth="1" fill="none" opacity="0.4" />
      
      {/* Central paisley motif */}
      <g transform="translate(270, 4)">
        <path d="M30 0 C45 0 55 10 55 20 C55 30 45 35 30 32 C20 30 12 25 8 18 C4 11 15 0 30 0Z" 
              fill="none" stroke="var(--turmeric-gold)" strokeWidth="1.5" />
        <path d="M30 5 C40 5 48 12 48 20 C48 28 40 32 30 30 C22 28 16 24 13 18 C10 12 18 5 30 5Z" 
              fill="var(--turmeric-gold)" opacity="0.15" />
        <circle cx="30" cy="18" r="3" fill="var(--terracotta)" opacity="0.6" />
        <circle cx="25" cy="12" r="1.5" fill="var(--turmeric-gold)" opacity="0.5" />
        <circle cx="35" cy="12" r="1.5" fill="var(--turmeric-gold)" opacity="0.5" />
        <circle cx="22" cy="22" r="1.5" fill="var(--turmeric-gold)" opacity="0.5" />
        <circle cx="38" cy="22" r="1.5" fill="var(--turmeric-gold)" opacity="0.5" />
      </g>
      
      {/* Right decorative wing (mirrored) */}
      <path d="M600 20 Q550 20 520 10 Q490 0 460 10 Q430 20 400 15 Q380 12 360 18" 
            stroke="var(--turmeric-gold)" strokeWidth="1.5" fill="none" opacity="0.6" />
      <path d="M600 22 Q550 22 520 32 Q490 42 460 32 Q430 22 400 27 Q380 30 360 24" 
            stroke="var(--terracotta)" strokeWidth="1" fill="none" opacity="0.4" />
      
      {/* Small dots along the curves */}
      <circle cx="100" cy="8" r="2" fill="var(--turmeric-gold)" opacity="0.4" />
      <circle cx="180" cy="16" r="2" fill="var(--turmeric-gold)" opacity="0.3" />
      <circle cx="500" cy="8" r="2" fill="var(--turmeric-gold)" opacity="0.4" />
      <circle cx="420" cy="16" r="2" fill="var(--turmeric-gold)" opacity="0.3" />
    </svg>
  </div>
)

/* ── Paisley Corner Ornament ── */
export const PaisleyCorner = ({ position = 'top-left', className = '' }) => (
  <div className={`paisley-corner paisley-${position} ${className}`} aria-hidden="true">
    <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 110 C10 60 30 20 80 10 C60 25 45 50 42 80 C40 95 25 105 10 110Z" 
            stroke="var(--turmeric-gold)" strokeWidth="1.2" fill="var(--turmeric-gold)" fillOpacity="0.06" />
      <path d="M15 100 C18 60 35 30 75 18 C55 35 42 55 40 75 C38 88 28 98 15 100Z" 
            stroke="var(--turmeric-gold)" strokeWidth="0.8" fill="none" opacity="0.4" />
      <circle cx="50" cy="50" r="2" fill="var(--turmeric-gold)" opacity="0.5" />
      <circle cx="35" cy="70" r="1.5" fill="var(--terracotta)" opacity="0.4" />
      <circle cx="60" cy="35" r="1.5" fill="var(--terracotta)" opacity="0.4" />
    </svg>
  </div>
)

/* ── Diya (Lamp) Icon ── */
export const DiyaIcon = ({ size = 32, className = '' }) => (
  <svg className={`diya-icon ${className}`} width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Flame */}
    <path d="M24 6 C24 6 19 14 19 18 C19 21 21 24 24 24 C27 24 29 21 29 18 C29 14 24 6 24 6Z" 
          fill="var(--turmeric-gold)" opacity="0.9" />
    <path d="M24 10 C24 10 21 15 21 18 C21 20 22 22 24 22 C26 22 27 20 27 18 C27 15 24 10 24 10Z" 
          fill="var(--haldi-yellow)" />
    {/* Lamp base */}
    <ellipse cx="24" cy="30" rx="12" ry="4" fill="var(--terracotta)" />
    <path d="M12 30 Q12 38 16 40 L32 40 Q36 38 36 30" fill="var(--terracotta)" opacity="0.8" />
    <ellipse cx="24" cy="30" rx="8" ry="2.5" fill="var(--copper-accent)" opacity="0.6" />
    {/* Decorative dots */}
    <circle cx="18" cy="35" r="1" fill="var(--turmeric-gold)" opacity="0.6" />
    <circle cx="24" cy="36" r="1" fill="var(--turmeric-gold)" opacity="0.6" />
    <circle cx="30" cy="35" r="1" fill="var(--turmeric-gold)" opacity="0.6" />
  </svg>
)

/* ── Aipan Border Strip ── */
export const AipanBorder = ({ className = '' }) => (
  <div className={`aipan-strip ${className}`} aria-hidden="true">
    <svg viewBox="0 0 800 12" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
      <line x1="0" y1="6" x2="800" y2="6" stroke="var(--turmeric-gold)" strokeWidth="1" opacity="0.3" />
      {Array.from({ length: 20 }).map((_, i) => (
        <g key={i} transform={`translate(${i * 40 + 20}, 6)`}>
          <path d="M-6 0 L0 -5 L6 0 L0 5 Z" fill="var(--turmeric-gold)" opacity="0.25" />
          <circle r="1.5" fill="var(--terracotta)" opacity="0.5" />
        </g>
      ))}
    </svg>
  </div>
)

/* ── Decorative Quote Marks ── */
export const DecorativeQuote = ({ className = '' }) => (
  <div className={`decorative-quote ${className}`} aria-hidden="true">
    <svg width="48" height="36" viewBox="0 0 48 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 36V22C0 10 6 2 18 0L20 6C12 8 8 14 8 20H18V36H0Z" fill="var(--turmeric-gold)" opacity="0.2" />
      <path d="M28 36V22C28 10 34 2 46 0L48 6C40 8 36 14 36 20H46V36H28Z" fill="var(--turmeric-gold)" opacity="0.2" />
    </svg>
  </div>
)

/* ── Lightly Drawn Gujarati Thali Illustration ── */
export const ThaliIllustration = ({ className = '' }) => (
  <div className={`food-illustration thali-draw ${className}`} aria-hidden="true">
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Outer Plate Border */}
      <circle cx="100" cy="100" r="90" stroke="var(--turmeric-gold)" strokeWidth="1.5" opacity="0.25" />
      <circle cx="100" cy="100" r="84" stroke="var(--turmeric-gold)" strokeWidth="1" strokeDasharray="3 3" opacity="0.2" />
      
      {/* Rotli (Flatbread) in the center-left */}
      <path d="M60 110 C50 90 70 70 90 80 C110 90 100 120 80 120 C70 120 65 118 60 110 Z" 
            stroke="var(--turmeric-gold)" strokeWidth="1.2" opacity="0.3" fill="var(--turmeric-gold)" fillOpacity="0.02" />
      <path d="M72 95 Q82 88 88 102" stroke="var(--turmeric-gold)" strokeWidth="0.8" strokeDasharray="2 2" opacity="0.2" />

      {/* Katori 1 (Shaak / Curry) */}
      <circle cx="60" cy="60" r="20" stroke="var(--turmeric-gold)" strokeWidth="1.2" opacity="0.3" fill="var(--turmeric-gold)" fillOpacity="0.03" />
      <circle cx="60" cy="60" r="16" stroke="var(--terracotta)" strokeWidth="0.8" opacity="0.25" />
      <circle cx="55" cy="55" r="2" fill="var(--turmeric-gold)" opacity="0.3" />
      <circle cx="65" cy="65" r="2.5" fill="var(--terracotta)" opacity="0.3" />
      <circle cx="62" cy="52" r="1.5" fill="var(--turmeric-gold)" opacity="0.2" />

      {/* Katori 2 (Dal) */}
      <circle cx="100" cy="45" r="20" stroke="var(--turmeric-gold)" strokeWidth="1.2" opacity="0.3" fill="var(--turmeric-gold)" fillOpacity="0.03" />
      <circle cx="100" cy="45" r="16" stroke="var(--terracotta)" strokeWidth="0.8" opacity="0.25" />
      {/* Dal mustard seed dots */}
      <circle cx="96" cy="42" r="1" fill="var(--text-dark)" opacity="0.2" />
      <circle cx="102" cy="48" r="1" fill="var(--text-dark)" opacity="0.2" />
      <circle cx="104" cy="40" r="1" fill="var(--text-dark)" opacity="0.2" />

      {/* Katori 3 (Kadki / Kadhi) */}
      <circle cx="140" cy="60" r="20" stroke="var(--turmeric-gold)" strokeWidth="1.2" opacity="0.3" fill="var(--turmeric-gold)" fillOpacity="0.03" />
      <circle cx="140" cy="60" r="16" stroke="var(--terracotta)" strokeWidth="0.8" opacity="0.25" />
      
      {/* Rice (Bhaat) heap bottom-right */}
      <path d="M110 130 C110 115 150 115 150 130 C150 145 110 145 110 130 Z" 
            stroke="var(--turmeric-gold)" strokeWidth="1.2" opacity="0.3" fill="var(--turmeric-gold)" fillOpacity="0.02" />
      {/* Rice grains drawing */}
      <path d="M125 125 L129 123" stroke="var(--turmeric-gold)" strokeWidth="1" opacity="0.3" />
      <path d="M132 132 L136 130" stroke="var(--turmeric-gold)" strokeWidth="1" opacity="0.3" />
      <path d="M140 126 L143 129" stroke="var(--turmeric-gold)" strokeWidth="1" opacity="0.3" />

      {/* Sweet / Mithai (Gulab Jamun or Shrikhand cup) */}
      <circle cx="150" cy="98" r="16" stroke="var(--turmeric-gold)" strokeWidth="1" opacity="0.25" />
      <circle cx="150" cy="98" r="8" stroke="var(--terracotta)" strokeWidth="1" opacity="0.25" fill="var(--terracotta)" fillOpacity="0.05" />
      
      {/* Salad / Pickle (Athanu) */}
      <path d="M78 142 Q86 135 90 145" stroke="var(--terracotta)" strokeWidth="1.2" opacity="0.35" />
      <circle cx="82" cy="144" r="2" fill="var(--terracotta)" opacity="0.3" />
    </svg>
  </div>
)

/* ── Lightly Drawn Khaman Dhokla Illustration ── */
export const DhoklaIllustration = ({ className = '' }) => (
  <div className={`food-illustration dhokla-draw ${className}`} aria-hidden="true">
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Plate outline */}
      <ellipse cx="100" cy="110" rx="85" ry="50" stroke="var(--turmeric-gold)" strokeWidth="1.2" opacity="0.2" />
      <ellipse cx="100" cy="110" rx="77" ry="43" stroke="var(--turmeric-gold)" strokeWidth="0.8" strokeDasharray="3 2" opacity="0.15" />
      
      {/* Stacked Dhokla Cube 1 (Front Left) */}
      <g opacity="0.35">
        {/* Top Face */}
        <path d="M45 100 L85 85 L115 95 L75 110 Z" stroke="var(--turmeric-gold)" strokeWidth="1.2" fill="var(--turmeric-gold)" fillOpacity="0.05" />
        {/* Left Side Face */}
        <path d="M45 100 L45 125 L75 135 L75 110 Z" stroke="var(--turmeric-gold)" strokeWidth="1.2" />
        {/* Right Side Face */}
        <path d="M75 110 L75 135 L115 120 L115 95 Z" stroke="var(--turmeric-gold)" strokeWidth="1.2" />
        {/* Spongy texture dots on top face */}
        <circle cx="65" cy="98" r="1" fill="var(--terracotta)" />
        <circle cx="80" cy="95" r="1.2" fill="var(--terracotta)" />
        <circle cx="95" cy="92" r="1" fill="var(--terracotta)" />
        <circle cx="85" cy="102" r="0.8" fill="var(--terracotta)" />
      </g>

      {/* Stacked Dhokla Cube 2 (Back Right) */}
      <g opacity="0.25">
        <path d="M95 75 L135 60 L165 70 L125 85 Z" stroke="var(--turmeric-gold)" strokeWidth="1.2" fill="var(--turmeric-gold)" fillOpacity="0.03" />
        <path d="M95 75 L95 100 L125 110 L125 85 Z" stroke="var(--turmeric-gold)" strokeWidth="1.2" />
        <path d="M125 85 L125 110 L165 95 L165 70 Z" stroke="var(--turmeric-gold)" strokeWidth="1.2" />
      </g>

      {/* Garnishings (Coriander & Chilies) */}
      {/* Chili strip */}
      <path d="M60 88 Q78 82 92 90" stroke="var(--mehendi-green)" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
      <path d="M110 75 Q125 70 135 80" stroke="var(--mehendi-green)" strokeWidth="1.2" strokeLinecap="round" opacity="0.3" />
      
      {/* Mustard Seeds (dots scatter) */}
      <circle cx="70" cy="120" r="1.5" fill="var(--text-dark)" opacity="0.3" />
      <circle cx="120" cy="105" r="1.5" fill="var(--text-dark)" opacity="0.25" />
      <circle cx="100" cy="125" r="1.2" fill="var(--text-dark)" opacity="0.3" />
      <circle cx="50" cy="115" r="1.5" fill="var(--text-dark)" opacity="0.2" />
    </svg>
  </div>
)

/* ── Lightly Drawn Chaas Matka (Clay Pot) Illustration ── */
export const MatkaIllustration = ({ className = '' }) => (
  <div className={`food-illustration matka-draw ${className}`} aria-hidden="true">
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Matka Pot Base */}
      <path d="M100 170 C55 170 45 125 45 105 C45 80 75 75 90 75 L110 75 C125 75 155 80 155 105 C155 125 145 170 100 170 Z" 
            stroke="var(--turmeric-gold)" strokeWidth="1.5" opacity="0.3" fill="var(--turmeric-gold)" fillOpacity="0.02" />
      
      {/* Neck & Rim */}
      <ellipse cx="100" cy="70" rx="22" ry="7" stroke="var(--turmeric-gold)" strokeWidth="1.5" opacity="0.3" fill="var(--cream-base)" />
      <path d="M78 70 C78 75 88 80 100 80 C112 80 122 75 122 70" stroke="var(--turmeric-gold)" strokeWidth="1.2" opacity="0.3" />

      {/* Decorative Traditional Border Patterns on the Clay Pot (Bandhani/Aipan vibes) */}
      <path d="M50 115 Q100 125 150 115" stroke="var(--terracotta)" strokeWidth="1" strokeDasharray="3 3" opacity="0.3" />
      <path d="M47 105 Q100 115 153 105" stroke="var(--turmeric-gold)" strokeWidth="1.2" opacity="0.3" />
      
      {/* Decorative Hanging Thread (Nada Chhadi) around the neck */}
      <path d="M77 72 Q72 88 80 92" stroke="var(--terracotta)" strokeWidth="1" opacity="0.4" />
      <path d="M123 72 Q128 85 122 90" stroke="var(--terracotta)" strokeWidth="1" opacity="0.4" />
      <circle cx="80" cy="93" r="2.5" fill="var(--terracotta)" opacity="0.4" />
      <circle cx="121" cy="91" r="2.5" fill="var(--terracotta)" opacity="0.4" />

      {/* Traditional hand-painted swastika or floral motif on pot center */}
      <g transform="translate(90, 95)" opacity="0.25">
        <path d="M10 0 L10 20 M0 10 L20 10 M10 0 L20 0 M20 10 L20 20 M10 20 L0 20 M0 10 L0 0" 
              stroke="var(--terracotta)" strokeWidth="1.2" fill="none" />
        <circle cx="5" cy="5" r="1.2" fill="var(--terracotta)" />
        <circle cx="15" cy="5" r="1.2" fill="var(--terracotta)" />
        <circle cx="5" cy="15" r="1.2" fill="var(--terracotta)" />
        <circle cx="15" cy="15" r="1.2" fill="var(--terracotta)" />
      </g>
      
      {/* Earthen cup (Kulhad) on the side */}
      <g transform="translate(130, 130)" opacity="0.25">
        <path d="M10 10 L5 35 C5 38 25 38 25 35 L20 10 Z" stroke="var(--turmeric-gold)" strokeWidth="1.2" />
        <ellipse cx="15" cy="10" rx="5" ry="2.2" stroke="var(--turmeric-gold)" strokeWidth="1" />
      </g>
    </svg>
  </div>
)

/* ── Lightly Drawn Jalebi & Fafda Illustration ── */
export const JalebiIllustration = ({ className = '' }) => (
  <div className={`food-illustration jalebi-draw ${className}`} aria-hidden="true">
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Fafda (crisp golden rectangular strips) */}
      <g opacity="0.3">
        {/* Strip 1 */}
        <path d="M35 155 L65 45 C66 40 76 43 75 48 L45 158 Z" stroke="var(--turmeric-gold)" strokeWidth="1.2" fill="var(--turmeric-gold)" fillOpacity="0.03" />
        {/* Crisp ridge texture lines */}
        <path d="M48 115 L52 100" stroke="var(--terracotta)" strokeWidth="0.8" />
        <path d="M56 85 L60 70" stroke="var(--terracotta)" strokeWidth="0.8" />
        
        {/* Strip 2 (overlapping slightly) */}
        <path d="M50 162 L90 60 C91 55 101 58 100 63 L60 165 Z" stroke="var(--turmeric-gold)" strokeWidth="1.2" fill="var(--turmeric-gold)" fillOpacity="0.03" />
      </g>

      {/* Crunchy Jalebi Spiral 1 (Front Right) */}
      <path d="M140 130 
               C115 130 110 105 130 95 
               C150 85 170 105 155 125 
               C140 145 100 135 95 105
               C90 75 130 60 155 75
               C175 87 180 110 165 120" 
            stroke="var(--terracotta)" strokeWidth="1.8" strokeLinecap="round" opacity="0.4" fill="none" />
      
      {/* Glazing shimmer highlight lines inside spiral */}
      <path d="M130 110 C125 108 128 98 138 98" stroke="var(--turmeric-gold)" strokeWidth="0.8" opacity="0.3" />

      {/* Crunchy Jalebi Spiral 2 (Back Right Small) */}
      <path d="M120 70
               C105 70 102 55 115 50
               C127 45 137 55 128 65
               C120 75 102 70 100 55"
            stroke="var(--terracotta)" strokeWidth="1.4" strokeLinecap="round" opacity="0.25" fill="none" />
      
      {/* Spicy papaya sambharo or chili garnish on the side */}
      <path d="M78 152 Q82 144 88 150" stroke="var(--mehendi-green)" strokeWidth="1.2" strokeLinecap="round" opacity="0.3" />
      <path d="M85 156 Q92 148 95 154" stroke="var(--mehendi-green)" strokeWidth="1" strokeLinecap="round" opacity="0.3" />
    </svg>
  </div>
)

