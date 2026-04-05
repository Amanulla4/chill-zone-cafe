import React from 'react';

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">Visit Us</h2>
        <div className="contact-content">
          <div className="contact-info">
            <div className="info-card">
              <h3>📍 Address</h3>
              <p>CHILL INN HOTEL<br />Near City Center, Your City</p>
            </div>
            <div className="info-card">
              <h3>📞 Phone</h3>
              <a href="tel:+919067290008">+91-90672 90008</a>
            </div>
            <div className="info-card">
              <h3>⏰ Opening Hours</h3>
              <p>Monday - Sunday<br />11:00 AM - 11:00 PM</p>
            </div>
            <div className="info-card">
              <h3>🍔 Order Online</h3>
              <div className="order-links">
                <a href="https://www.zomato.com" target="_blank" rel="noopener noreferrer" className="order-btn zomato">
                  Zomato
                </a>
                <a href="https://www.swiggy.com" target="_blank" rel="noopener noreferrer" className="order-btn swiggy">
                  Swiggy
                </a>
              </div>
            </div>
          </div>
          
          <div className="contact-map">
            <iframe
              src="https://maps.google.com/maps?q=restaurant&t=&z=13&ie=UTF8&iwloc=&output=embed"
              title="Google Map"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
            <p className="map-note">📍 Search "THE CHILL ZONE CAFE" on Google Maps</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;