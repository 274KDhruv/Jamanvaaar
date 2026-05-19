import React from 'react'
import { Link } from 'react-router-dom'
import { PaisleyCorner, RangoliDivider } from '../components/GujaratiDecorations'
import './LegalPages.css'

const Privacy = () => {
  const sections = [
    { id: '1', title: 'Who We Are' },
    { id: '2', title: 'Data We Collect' },
    { id: '3', title: 'Legal Basis' },
    { id: '4', title: 'How We Use Your Data' },
    { id: '5', title: 'Data Retention' },
    { id: '6', title: 'Children\'s Data' },
    { id: '7', title: 'Do We Share Your Data?' },
    { id: '8', title: 'Your Rights' },
    { id: '9', title: 'Security' },
    { id: '10', title: 'Cookie Policy' },
    { id: '11', title: 'WhatsApp Communication' },
    { id: '12', title: 'Changes to This Policy' },
    { id: '13', title: 'Contact & Grievances' },
  ]

  return (
    <div className="legal-page-container bandhani-bg grain-overlay">
      <section className="legal-hero">
        <div className="legal-hero-content">
          <h4 className="legal-subtitle">Data Protection</h4>
          <h1 className="legal-title">Privacy Policy & Cookie Policy</h1>
          <p className="gujarati-text gujarati-accent" style={{ fontSize: '1.25rem', color: 'var(--haldi-yellow)' }}>
            જમણવાર · ગોપનીયતા નીતિ
          </p>
          <div className="legal-meta">
            <span>Effective Date: 11 May 2025</span>
            <span>Version 1.0</span>
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
            <h3>✦ PLAIN LANGUAGE SUMMARY — READ THIS FIRST</h3>
            <p>
              We are Jamanvaaar — Mumbai's first pure organic, seasonal, vegetarian Gujarati
              supper club, hosted at Juhu, Mumbai. We are a strictly private dining experience
              accommodating only 8 guests per session, operating Thursday, Friday, and Saturday
              evenings.
            </p>
            <p style={{ marginTop: '10px', fontWeight: '500' }}>
              The short version: We collect your name, phone number, email, number of guests,
              date preference, and any special requests — only to confirm your seat and to send you
              future dinner invitations. We do not sell your data. We do not share it with
              advertisers. We do not store it permanently. We do not collect children's data.
            </p>
          </div>

          {/* Quick Navigation */}
          <div className="toc-box">
            <h3>Table of Contents</h3>
            <div className="toc-grid">
              {sections.map((sec) => (
                <a key={sec.id} href={`#sec-${sec.id}`} className="toc-link">
                  <span>Section {sec.id.padStart(2, '0')}:</span> {sec.title}
                </a>
              ))}
            </div>
          </div>

          {/* Section 1 */}
          <section id="sec-1" className="legal-section">
            <span className="section-label">Section 01</span>
            <h2 className="section-heading-premium">Who We Are</h2>
            <div className="legal-text">
              <p>
                Jamanvaaar is Mumbai's first pure organic, seasonal, vegetarian Gujarati supper club.
                A private, curated dining gathering limited strictly to 8 guests per session, personally
                hosted by Tejal Rakesh Mehta at Juhu, Mumbai.
              </p>
              <p>
                We are registered with FSSAI and under the GST framework of India.
              </p>
            </div>
            
            <div className="table-wrapper">
              <table className="legal-table">
                <thead>
                  <tr>
                    <th style={{ width: '40%' }}>Detail</th>
                    <th>Information</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Business Name</strong></td>
                    <td>Jamanvaaar</td>
                  </tr>
                  <tr>
                    <td><strong>Founder & Host</strong></td>
                    <td>Tejal Rakesh Mehta</td>
                  </tr>
                  <tr>
                    <td><strong>Nature of Business</strong></td>
                    <td>Private Supper Club — strictly 8 guests per session</td>
                  </tr>
                  <tr>
                    <td><strong>Location</strong></td>
                    <td>Juhu, Mumbai, Maharashtra, India</td>
                  </tr>
                  <tr>
                    <td><strong>Website</strong></td>
                    <td><a href="https://www.jamanvaaar.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary-red)', textDecoration: 'underline' }}>www.jamanvaaar.com</a></td>
                  </tr>
                  <tr>
                    <td><strong>Email</strong></td>
                    <td><a href="mailto:info@jamanvaaar.com" style={{ color: 'var(--primary-red)', textDecoration: 'underline' }}>info@jamanvaaar.com</a></td>
                  </tr>
                  <tr>
                    <td><strong>Phone</strong></td>
                    <td>+91 98333 03708</td>
                  </tr>
                  <tr>
                    <td><strong>Applicable Law</strong></td>
                    <td>Digital Personal Data Protection Act, 2023; IT Act, 2000; Consumer Protection Act</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 2 */}
          <section id="sec-2" className="legal-section">
            <span className="section-label">Section 02</span>
            <h2 className="section-heading-premium">What Personal Data We Collect</h2>
            <div className="legal-text">
              <p>We collect only the minimum information necessary to confirm your reservation.</p>
            </div>

            <div className="table-wrapper">
              <table className="legal-table">
                <thead>
                  <tr>
                    <th>Data Collected</th>
                    <th>Why We Need It</th>
                    <th>Mandatory?</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Full Name</strong></td>
                    <td>To identify and welcome you personally</td>
                    <td>Yes</td>
                  </tr>
                  <tr>
                    <td><strong>Phone Number</strong></td>
                    <td>To confirm booking and communicate via WhatsApp</td>
                    <td>Yes</td>
                  </tr>
                  <tr>
                    <td><strong>Email Address</strong></td>
                    <td>To send booking confirmation and future invitations</td>
                    <td>Yes</td>
                  </tr>
                  <tr>
                    <td><strong>Number of Guests</strong></td>
                    <td>To manage our strict 8-seat capacity</td>
                    <td>Yes</td>
                  </tr>
                  <tr>
                    <td><strong>Preferred Date & Time</strong></td>
                    <td>To assign your specific session slot</td>
                    <td>Yes</td>
                  </tr>
                  <tr>
                    <td><strong>Special Requests</strong></td>
                    <td>To accommodate dietary needs or celebrations</td>
                    <td>No — Optional</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="legal-callout">
              <p>
                <strong>We do not collect:</strong> Aadhaar, PAN, passport details, credit/debit card numbers,
                health records, biometric data, location data, social media profiles, or browsing history.
              </p>
            </div>
          </section>

          {/* Section 3 */}
          <section id="sec-3" className="legal-section">
            <span className="section-label">Section 03</span>
            <h2 className="section-heading-premium">Legal Basis — Why We Are Permitted to Collect Your Data</h2>
            <div className="legal-text">
              <p>Under India's Digital Personal Data Protection Act, 2023, our lawful bases are:</p>
            </div>
            <ul className="legal-list">
              <li>
                <strong>a) Your Consent</strong>
                <br />By submitting the reservation form, you give us your free, specific, informed, and
                unambiguous consent. You may withdraw this consent at any time by writing to us.
              </li>
              <li>
                <strong>b) Contractual Necessity</strong>
                <br />Processing your details is necessary to confirm and deliver your dining experience at
                our 8-seat table.
              </li>
              <li>
                <strong>c) Legitimate Interests</strong>
                <br />Sending you future dinner invitations is our legitimate interest. You may opt out at any
                time by emailing <a href="mailto:info@jamanvaaar.com" style={{ color: 'var(--primary-red)', textDecoration: 'underline' }}>info@jamanvaaar.com</a> with the subject line "Remove Me".
              </li>
            </ul>
          </section>

          {/* Section 4 */}
          <section id="sec-4" className="legal-section">
            <span className="section-label">Section 04</span>
            <h2 className="section-heading-premium">How We Use Your Personal Data</h2>
            <div className="legal-text">
              <p>We use your personal data only for the following purposes:</p>
            </div>

            <div className="table-wrapper">
              <table className="legal-table">
                <thead>
                  <tr>
                    <th>Purpose</th>
                    <th>Description</th>
                    <th>Data Used</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Booking Confirmation</strong></td>
                    <td>To confirm your reserved seat at our 8-guest session</td>
                    <td>Name, Email, Phone</td>
                  </tr>
                  <tr>
                    <td><strong>Event Preparation</strong></td>
                    <td>To prepare seating, food, and personalised welcome</td>
                    <td>Name, Guests, Requests</td>
                  </tr>
                  <tr>
                    <td><strong>Reminders</strong></td>
                    <td>To send a reminder before your session date</td>
                    <td>Name, Phone, Email</td>
                  </tr>
                  <tr>
                    <td><strong>Dinner Invitations</strong></td>
                    <td>To invite you to future sessions (with consent)</td>
                    <td>Name, Email, Phone</td>
                  </tr>
                  <tr>
                    <td><strong>Cancellation Processing</strong></td>
                    <td>To process amendments on medical grounds</td>
                    <td>Name, Phone, Email</td>
                  </tr>
                  <tr>
                    <td><strong>Legal Compliance</strong></td>
                    <td>To comply with any lawful court or government request</td>
                    <td>As required by law</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="legal-callout" style={{ borderLeft: '4px solid var(--primary-red)' }}>
              <p>
                <strong>We will NEVER use your data for:</strong> selling to third parties, advertising, profiling,
                or automated decision-making.
              </p>
            </div>
          </section>

          {/* Section 5 */}
          <section id="sec-5" className="legal-section">
            <span className="section-label">Section 05</span>
            <h2 className="section-heading-premium">Data Retention — We Do Not Store Your Data Permanently</h2>
            <div className="legal-text">
              <p>Jamanvaaar is an intimate supper club of 8 people — not a data company.</p>
            </div>
            <ul className="legal-list">
              <li>Reservation data is used only to confirm bookings for our 8-seat sessions.</li>
              <li>After your dining experience, your data is retained briefly solely to send future dinner invitations.</li>
              <li>If you request removal, your data is deleted within 7 business days.</li>
              <li>We do not sell, rent, or transfer your data to any external database.</li>
            </ul>
            <div className="legal-text">
              <p>To request deletion, email <a href="mailto:info@jamanvaaar.com" style={{ color: 'var(--primary-red)', textDecoration: 'underline' }}>info@jamanvaaar.com</a> with subject <strong>"Delete My Data"</strong>.</p>
            </div>
          </section>

          {/* Section 6 */}
          <section id="sec-6" className="legal-section">
            <span className="section-label">Section 06</span>
            <h2 className="section-heading-premium">Children's Data — We Do Not Collect It</h2>
            <div className="legal-text">
              <p>
                Jamanvaaar does not knowingly collect, process, or store personal data of any
                person under the age of 18 years.
              </p>
              <p>
                Whilst children above 10 years may attend with prior approval, no personal data of such
                children is collected, stored, or processed by us in any form.
              </p>
              <p>
                If a child has inadvertently submitted data, email us at <a href="mailto:info@jamanvaaar.com" style={{ color: 'var(--primary-red)', textDecoration: 'underline' }}>info@jamanvaaar.com</a> and we
                will delete it immediately.
              </p>
            </div>
          </section>

          {/* Section 7 */}
          <section id="sec-7" className="legal-section">
            <span className="section-label">Section 07</span>
            <h2 className="section-heading-premium">Do We Share Your Personal Data?</h2>
            <div className="legal-text">
              <p>We do not sell, trade, rent, or commercially transfer your personal data to any third party — ever.</p>
            </div>
            <ul className="legal-list">
              <li>
                <strong>a) Technology Service Providers</strong>
                <br />Our website runs on WordPress with Elementor. These platforms process form
                submissions as part of their service but do not use your data for their own purposes.
              </li>
              <li>
                <strong>b) WhatsApp (Meta Platforms, Inc.)</strong>
                <br />Booking confirmations and reminders are sent via WhatsApp. We do not instruct Meta
                to use your data for advertising.
              </li>
              <li>
                <strong>c) Legal Obligation</strong>
                <br />We may disclose your data if required by a court order or applicable Indian law.
              </li>
              <li>
                <strong>d) Business Transfer</strong>
                <br />In the unlikely event of a change of ownership, your data may transfer to the new
                operator bound by this Privacy Policy.
              </li>
            </ul>
          </section>

          {/* Section 8 */}
          <section id="sec-8" className="legal-section">
            <span className="section-label">Section 08</span>
            <h2 className="section-heading-premium">Your Rights as a Data Principal</h2>
            <div className="legal-text">
              <p>Under the Digital Personal Data Protection Act, 2023, you have the following enforceable rights:</p>
            </div>

            <div className="table-wrapper">
              <table className="legal-table">
                <thead>
                  <tr>
                    <th style={{ width: '35%' }}>Your Right</th>
                    <th>What It Means</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Right to Access</strong></td>
                    <td>Ask us what personal data we hold and receive a clear summary at any time.</td>
                  </tr>
                  <tr>
                    <td><strong>Right to Correction</strong></td>
                    <td>If your data is inaccurate, you have the right to have it corrected without delay.</td>
                  </tr>
                  <tr>
                    <td><strong>Right to Erasure</strong></td>
                    <td>Request deletion of all your personal data. We act within 7 business days.</td>
                  </tr>
                  <tr>
                    <td><strong>Right to Withdraw Consent</strong></td>
                    <td>Withdraw consent to receive dinner invitations at any time.</td>
                  </tr>
                  <tr>
                    <td><strong>Right to Grievance Redressal</strong></td>
                    <td>Raise a grievance if you believe your data has been mishandled.</td>
                  </tr>
                  <tr>
                    <td><strong>Right to Complain</strong></td>
                    <td>Lodge a complaint with India's Data Protection Board if dissatisfied with our response.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="legal-text">
              <p>
                Write to <a href="mailto:info@jamanvaaar.com" style={{ color: 'var(--primary-red)', textDecoration: 'underline' }}>info@jamanvaaar.com</a> with subject <strong>"Data Rights Request"</strong>. We
                acknowledge within 48 hours and resolve within 7 business days.
              </p>
            </div>
          </section>

          {/* Section 9 */}
          <section id="sec-9" className="legal-section">
            <span className="section-label">Section 09</span>
            <h2 className="section-heading-premium">How We Protect Your Personal Data</h2>
            <div className="legal-text">
              <p>We take reasonable technical and organisational steps to protect your data:</p>
            </div>
            <ul className="legal-list">
              <li>Our website is secured with SSL/TLS encryption (HTTPS).</li>
              <li>Access to reservation data is limited strictly to Tejal Rakesh Mehta and authorised team members.</li>
              <li>We do not store payment card details. Payments are via UPI or bank transfer only.</li>
              <li>Our WordPress website is maintained with regular security updates.</li>
              <li>We do not transmit your personal data over unsecured channels.</li>
            </ul>
          </section>

          {/* Section 10 */}
          <section id="sec-10" className="legal-section">
            <span className="section-label">Section 10</span>
            <h2 className="section-heading-premium">Cookie Policy</h2>
            <div className="legal-text">
              <p>A cookie is a small text file placed on your browser when you visit a website.</p>
              <p>
                <strong>The good news:</strong> We do not run advertising. We do not track you across the
                internet. We do not use Google Analytics or any behavioural profiling tools.
              </p>
            </div>

            <div className="table-wrapper">
              <table className="legal-table">
                <thead>
                  <tr>
                    <th>Cookie Name</th>
                    <th>Provider</th>
                    <th>Type</th>
                    <th>Purpose</th>
                    <th>Duration</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>wordpress_test_cookie</strong></td>
                    <td>WordPress</td>
                    <td>ESSENTIAL</td>
                    <td>Tests whether your browser accepts cookies.</td>
                    <td>Session</td>
                  </tr>
                  <tr>
                    <td><strong>wp-settings-&#123;user&#125;</strong></td>
                    <td>WordPress</td>
                    <td>ESSENTIAL</td>
                    <td>Stores admin panel preferences. Only set for admin users.</td>
                    <td>1 year</td>
                  </tr>
                  <tr>
                    <td><strong>Google Fonts</strong></td>
                    <td>Google LLC</td>
                    <td>FUNCTIONAL</td>
                    <td>Loads website typography. No reservation data is shared.</td>
                    <td>Short-lived</td>
                  </tr>
                  <tr>
                    <td><strong>WhatsApp Widget</strong></td>
                    <td>Meta Platforms</td>
                    <td>FUNCTIONAL</td>
                    <td>Loads the floating WhatsApp button. Meta may set a cookie if clicked.</td>
                    <td>Session</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="legal-callout">
              <p>
                <strong>Jamanvaaar does NOT use:</strong> Google Analytics, Facebook Pixel, retargeting
                cookies, advertising network cookies, or any cookie that tracks you across other
                websites.
              </p>
            </div>
          </section>

          {/* Section 11 */}
          <section id="sec-11" className="legal-section">
            <span className="section-label">Section 11</span>
            <h2 className="section-heading-premium">WhatsApp Communication</h2>
            <div className="legal-text">
              <p>
                Jamanvaaar uses WhatsApp as a primary communication channel. Our WhatsApp
                number is <strong>+91 98333 03708</strong>.
              </p>
            </div>
            <ul className="legal-list">
              <li>Communications via WhatsApp are governed by WhatsApp's Privacy Policy (Meta Platforms, Inc.).</li>
              <li>We use WhatsApp solely for booking-related communication — not for advertising or bulk marketing.</li>
              <li>We do not share your phone number with Meta for advertising targeting purposes.</li>
              <li>WhatsApp messages between you and Jamanvaaar are end-to-end encrypted.</li>
              <li>If you prefer email communication only, please inform us at the time of booking.</li>
            </ul>
          </section>

          {/* Section 12 */}
          <section id="sec-12" className="legal-section">
            <span className="section-label">Section 12</span>
            <h2 className="section-heading-premium">Changes to This Privacy Policy</h2>
            <div className="legal-text">
              <p>We may update this Privacy Policy from time to time. When we make material changes, we will:</p>
            </div>
            <ul className="legal-list">
              <li>Update the Effective Date and Version Number at the top of this page.</li>
              <li>Post the revised policy on our website at <a href="https://www.jamanvaaar.com/privacy-policy" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary-red)', textDecoration: 'underline' }}>www.jamanvaaar.com/privacy-policy</a>.</li>
              <li>Where appropriate, notify guests who have made recent reservations via email.</li>
            </ul>
            <div className="legal-text">
              <p>Current version: <strong>Version 1.0</strong>, effective <strong>11 May 2025</strong>.</p>
            </div>
          </section>

          {/* Section 13 */}
          <section id="sec-13" className="legal-section">
            <span className="section-label">Section 13</span>
            <h2 className="section-heading-premium">Contact Us & Grievance Redressal</h2>
            <div className="legal-text">
              <p>If you have any questions, concerns, or requests regarding this Privacy Policy, please contact us.</p>
            </div>

            <div className="table-wrapper">
              <table className="legal-table">
                <thead>
                  <tr>
                    <th style={{ width: '40%' }}>Reach Jamanvaaar</th>
                    <th>Detail</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Email</strong></td>
                    <td><a href="mailto:info@jamanvaaar.com" style={{ color: 'var(--primary-red)', textDecoration: 'underline' }}>info@jamanvaaar.com</a></td>
                  </tr>
                  <tr>
                    <td><strong>Phone</strong></td>
                    <td>+91 98333 03708</td>
                  </tr>
                  <tr>
                    <td><strong>Location</strong></td>
                    <td>Juhu, Mumbai, Maharashtra, India</td>
                  </tr>
                  <tr>
                    <td><strong>Website</strong></td>
                    <td><a href="https://www.jamanvaaar.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary-red)', textDecoration: 'underline' }}>www.jamanvaaar.com</a></td>
                  </tr>
                  <tr>
                    <td><strong>Data Requests</strong></td>
                    <td>Use subject line: "Privacy Request" or "Data Rights Request"</td>
                  </tr>
                  <tr>
                    <td><strong>Response Time</strong></td>
                    <td>Acknowledge within 48 hours | Resolve within 7 business days</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 style={{ fontFamily: 'var(--font-serif)', color: 'var(--primary-red)', marginTop: '35px', marginBottom: '15px' }}>
              Grievance Incharge
            </h3>
            <div className="legal-text">
              <p>
                In accordance with the Information Technology Act, 2000 and the Digital Personal
                Data Protection Act, 2023, the designated Grievance Incharge for Jamanvaaar is:
              </p>
            </div>

            <div className="table-wrapper">
              <table className="legal-table">
                <thead>
                  <tr>
                    <th style={{ width: '40%' }}>Detail</th>
                    <th>Information</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Name</strong></td>
                    <td>Rakesh Mehta</td>
                  </tr>
                  <tr>
                    <td><strong>Designation</strong></td>
                    <td>Grievance Incharge, Jamanvaaar</td>
                  </tr>
                  <tr>
                    <td><strong>Email</strong></td>
                    <td><a href="mailto:info@jamanvaaar.com" style={{ color: 'var(--primary-red)', textDecoration: 'underline' }}>info@jamanvaaar.com</a></td>
                  </tr>
                  <tr>
                    <td><strong>Phone</strong></td>
                    <td>+91 98333 03708</td>
                  </tr>
                  <tr>
                    <td><strong>Response Time</strong></td>
                    <td>Within 7 business days of receiving your grievance</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="legal-text" style={{ marginTop: '20px' }}>
              <p>
                If you are not satisfied with our response, you may approach India's Data Protection
                Board once it becomes operational under DPDPA 2023.
              </p>
            </div>
          </section>

          <div style={{ marginTop: '50px', textAlign: 'center' }}>
            <RangoliDivider className="compact" />
            <p style={{ marginTop: '20px', fontStyle: 'italic', color: 'var(--text-dark)', opacity: '0.7' }}>
              Avo Padharo Amaara Jamanvaaar Ma
            </p>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-dark)', opacity: '0.5', marginTop: '15px' }}>
              © 2025 Jamanvaaar. All Rights Reserved. Juhu, Mumbai, Maharashtra, India.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Privacy
