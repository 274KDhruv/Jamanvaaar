import React from 'react'
import { Link } from 'react-router-dom'
import { PaisleyCorner, RangoliDivider } from '../components/GujaratiDecorations'
import './LegalPages.css'

const Terms = () => {
  const sections = [
    { id: '1', title: 'Reservation, Deposit & Minimum Spend' },
    { id: '2', title: 'Community Standards & Zero Tolerance' },
    { id: '3', title: 'Photography & Social Media' },
    { id: '4', title: 'Cancellation & Timing' },
    { id: '5', title: 'Our Concept & Menu' },
    { id: '6', title: 'Alcohol & Outside Food' },
    { id: '7', title: 'Dress Code' },
    { id: '8', title: 'Timings & Access' },
    { id: '9', title: 'Liability' },
    { id: '10', title: 'Payment Policy' },
    { id: '11', title: 'FSSAI License' },
    { id: '12', title: 'Governing Law' },
    { id: '13', title: 'Amendments to Terms' },
  ]

  return (
    <div className="legal-page-container bandhani-bg grain-overlay">
      <section className="legal-hero">
        <div className="legal-hero-content">
          <h4 className="legal-subtitle">Guest Agreement</h4>
          <h1 className="legal-title">Terms & Conditions</h1>
          <p className="gujarati-text gujarati-accent" style={{ fontSize: '1.25rem', color: 'var(--haldi-yellow)' }}>
            જમણવાર · અતિથિ દેવો ભવ:
          </p>
          <div className="legal-meta">
            <span>Effective Date: May 2025</span>
            <span>Jurisdiction: Mumbai, Maharashtra, India</span>
          </div>
        </div>
      </section>

      <div className="legal-main-content">
        <div className="legal-card">
          {/* Decorative Corner Ornaments */}
          <PaisleyCorner position="top-left" />
          <PaisleyCorner position="top-right" />
          
          <div className="text-center" style={{ marginBottom: '40px' }}>
            <h2 style={{ fontFamily: 'var(--font-serif)', color: 'var(--primary-red)', marginBottom: '8px' }}>
              JAMANVAAAR
            </h2>
            <p style={{ color: 'var(--terracotta)', fontWeight: '600', letterSpacing: '1px' }}>
              Gourmet Gujarati Supper Club · Vile Parle, Mumbai
            </p>
            <div style={{ margin: '15px auto 0', maxWidth: '300px' }}>
              <RangoliDivider className="compact" />
            </div>
          </div>

          <div className="plain-summary-box">
            <h3>✦ Guest Policy, Community Standards & Dining Information</h3>
            <p>
              By making a reservation and/or attending a dining session at JAMANVAAAR, guests
              acknowledge that they have read, understood, and agreed to be bound by these Terms
              and Conditions. These terms constitute a legally binding agreement between
              JAMANVAAAR ('the Establishment') and the guest ('you'/'your').
            </p>
          </div>

          {/* Quick Navigation */}
          <div className="toc-box">
            <h3>Table of Contents</h3>
            <div className="toc-grid">
              {sections.map((sec) => (
                <a key={sec.id} href={`#sec-${sec.id}`} className="toc-link">
                  <span>{sec.id}.</span> {sec.title}
                </a>
              ))}
            </div>
          </div>

          <ol className="terms-number-list">
            <li id="sec-1">
              <h3 className="terms-section-title">RESERVATION, DEPOSIT & MINIMUM SPEND</h3>
              <ul className="terms-sublist">
                <li>A pre-booking confirmation deposit of <strong>₹3,150/-</strong> per person is mandatory as part of our minimum-spend policy.</li>
                <li>Children below 10 years of age dine complimentary, subject to prior written approval from JAMANVAAAR.</li>
                <li>Children above 10 years of age are charged at the adult rate.</li>
                <li>We welcome Jain guests with a minimum reservation of 4 seats.</li>
                <li>All reservations are subject to availability and final confirmation by JAMANVAAAR.</li>
              </ul>
            </li>

            <li id="sec-2">
              <h3 className="terms-section-title">COMMUNITY STANDARDS & ZERO TOLERANCE POLICY</h3>
              <ul className="terms-sublist">
                <li>JAMANVAAAR maintains a strict zero tolerance policy towards any form of abuse — verbal, physical, or otherwise — directed at our staff, hosts, or fellow guests.</li>
                <li>All guests are requested to treat our space and each other with respect, decorum, and decency at all times.</li>
                <li>Any guest engaging in abusive, disrespectful, or disruptive behaviour will be asked to leave immediately without any refund.</li>
                <li>Guests must not roam unaccompanied through private or restricted areas of the premises.</li>
                <li>Noise levels and general conduct must remain in keeping with the intimate fine-dining atmosphere of JAMANVAAAR. Discipline shall be maintained at all times.</li>
              </ul>
            </li>

            <li id="sec-3">
              <h3 className="terms-section-title">PHOTOGRAPHY & SOCIAL MEDIA POLICY</h3>
              <ul className="terms-sublist">
                <li>Photography is permitted for personal use only.</li>
                <li>Images or recordings taken at JAMANVAAAR must not be used for any commercial purpose without prior written consent.</li>
                <li>Guests must not photograph or record other guests without their explicit permission.</li>
                <li>Content posted on social media must not misrepresent the JAMANVAAAR experience or be defamatory in nature.</li>
              </ul>
            </li>

            <li id="sec-4">
              <h3 className="terms-section-title">CANCELLATION & TIMING POLICY</h3>
              <ul className="terms-sublist">
                <li>One amendment to a booking is permitted, up to 10 days before the scheduled dining date, and only on medical grounds supported by valid documentation.</li>
                <li>We operate a strict 2-hour table time policy to maintain the flow and integrity of the dining experience.</li>
                <li>If a guest is running 10–15 minutes late, JAMANVAAAR will endeavour to accommodate them; however, this cannot be guaranteed.</li>
                <li>No-shows and late cancellations beyond the permitted window shall result in forfeiture of the full deposit paid.</li>
              </ul>
            </li>

            <li id="sec-5">
              <h3 className="terms-section-title">OUR CONCEPT & MENU POLICY</h3>
              <ul className="terms-sublist">
                <li>JAMANVAAAR is Mumbai's first pure organic, seasonal, vegetarian supper club, committed to a farm-to-table dining experience.</li>
                <li>In honour of authentic seasonal cooking, the menu is not disclosed in advance. Each seating is a curated, surprise tasting journey crafted fresh for that session.</li>
                <li>JAMANVAAAR accommodates dietary restrictions known at the time of booking; guests must inform us in advance.</li>
              </ul>
            </li>

            <li id="sec-6">
              <h3 className="terms-section-title">ALCOHOL & OUTSIDE FOOD POLICY</h3>
              <ul className="terms-sublist">
                <li>As a supper club rooted in traditional Gujarati values, no alcohol or aerated beverages are served on the premises.</li>
                <li>Guests are strictly prohibited from bringing their own beverages of any kind.</li>
                <li>Outside food, desserts, cakes, or items from external suppliers are not permitted on the premises.</li>
                <li>Violation of this policy may result in the guest being asked to leave without refund.</li>
              </ul>
            </li>

            <li id="sec-7">
              <h3 className="terms-section-title">DRESS CODE</h3>
              <ul className="terms-sublist">
                <li>Smart casual attire is required. Guests are encouraged to dress appropriately for the occasion.</li>
                <li>JAMANVAAAR reserves the right to refuse entry to guests who do not comply with the dress code.</li>
              </ul>
            </li>

            <li id="sec-8">
              <h3 className="terms-section-title">TIMINGS & ACCESS</h3>
              <ul className="terms-sublist">
                <li>Thursday, Friday & Saturday — Doors Open: 7:30 PM | Table Seating: 8:00 PM.</li>
                <li>No valet parking is available. Limited street parking; guests are advised to arrive by driver or taxi. Parking is entirely at the vehicle owner's risk.</li>
                <li>Lift access is available for entry. However, disability-friendly restroom facilities are currently unavailable.</li>
              </ul>
            </li>

            <li id="sec-9">
              <h3 className="terms-section-title">LIABILITY — NO LOSS OF PERSONAL BELONGINGS</h3>
              <ul className="terms-sublist">
                <li>JAMANVAAAR accepts no responsibility or liability for loss, theft, or damage to personal belongings brought onto the premises.</li>
                <li>Guests are advised to keep their valuables secure at all times.</li>
                <li>By attending a session, guests expressly waive any claim against JAMANVAAAR in respect of loss or damage to personal property.</li>
              </ul>
            </li>

            <li id="sec-10">
              <h3 className="terms-section-title">PAYMENT POLICY</h3>
              <ul className="terms-sublist">
                <li>Cash payments are not accepted. All payments must be made via digital or electronic means only.</li>
                <li>
                  Accepted methods: QR Code (available on request) or Bank Transfer — 
                  <br /><strong>AU Small Finance Bank</strong>, Four Bungalows Branch; 
                  <br />A/C No.: <strong>2502252478691049</strong>; 
                  <br />IFSC: <strong>AUBL0002524</strong>; 
                  <br />SWIFT: <strong>AUBLINBBXXX</strong>.
                </li>
                <li>Credit/Debit Card payments via payment link attract an additional bank commission: 3% for Visa/Mastercard and 5% for Amex/Diners.</li>
                <li style={{ borderLeft: '3px solid var(--primary-red)', paddingLeft: '10px', margin: '15px 0' }}>
                  <strong>Confidentiality of Thali Pricing:</strong> No guest shall share the JAMANVAAAR Thali cost with any other person
                  or post it on any social media platform including Instagram, Facebook, WhatsApp, or any other public or private channel. The Thali pricing is
                  shared exclusively and confidentially with confirmed booking guests only. Any violation may result in cancellation of the booking without refund.
                </li>
                <li style={{ borderLeft: '3px solid var(--primary-red)', paddingLeft: '10px', margin: '15px 0' }}>
                  <strong>Confidentiality of Location:</strong> No guest shall share or post the JAMANVAAAR address or location on any
                  social media platform including Instagram, Facebook, WhatsApp, or any other public or private channel. The venue address is shared exclusively and
                  confidentially with confirmed booking guests only. Any violation may result in cancellation of the booking without refund.
                </li>
              </ul>
            </li>

            <li id="sec-11">
              <h3 className="terms-section-title">FSSAI LICENSE</h3>
              <ul className="terms-sublist">
                <li>JAMANVAAAR operates under a valid FSSAI License as required under the Food Safety and Standards Act, 2006.</li>
                <li>FSSAI License Number is available upon request. All food prepared and served complies with applicable food safety and hygiene standards.</li>
              </ul>
            </li>

            <li id="sec-12">
              <h3 className="terms-section-title">GOVERNING LAW & JURISDICTION</h3>
              <ul className="terms-sublist">
                <li>These Terms and Conditions shall be governed by and construed in accordance with the laws of India.</li>
                <li>Any dispute arising out of or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts of Mumbai, Maharashtra.</li>
                <li>These Terms constitute the entire agreement between JAMANVAAAR and the guest with respect to the dining engagement.</li>
              </ul>
            </li>

            <li id="sec-13">
              <h3 className="terms-section-title">AMENDMENTS TO TERMS</h3>
              <ul className="terms-sublist">
                <li>JAMANVAAAR reserves the right to amend, modify, or update these Terms at any time without prior notice.</li>
                <li>Updated Terms will be published on the JAMANVAAAR website (www.jamanvaaar.com). Continued use of services after any amendment constitutes acceptance of the revised Terms.</li>
              </ul>
            </li>
          </ol>

          <div style={{ marginTop: '50px', textAlign: 'center' }}>
            <RangoliDivider className="compact" />
            <p style={{ marginTop: '20px', fontStyle: 'italic', color: 'var(--text-dark)', opacity: '0.7' }}>
              Avo Padharo Amaara Jamanvaaar Ma
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Terms
