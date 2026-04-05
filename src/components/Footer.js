import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <h3>THE CHILL ZONE</h3>
            <p>Cafe & Mocktail</p>
          </div>
          <div className="footer-links">
            <a href="#home">Home</a>
            <a href="#menu">Menu</a>
            <a href="#gallery">Gallery</a>
            <a href="#events">Events</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="footer-social">
            <p>Follow us:</p>
            <div className="social-icons">
              <a href="#">📷 Instagram</a>
              <a href="#">📘 Facebook</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 THE CHILL ZONE CAFE & MOCKTAIL. All rights reserved.</p>
          <p className="footer-credit">Made with ❤️ for The Chill Zone</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;