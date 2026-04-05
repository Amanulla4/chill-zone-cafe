import React from 'react';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <div className="hero-logo">
          <h1 className="hero-title">
            <span className="the">THE</span>
            <span className="chill">CHILL ZONE</span>
            <span className="cafe">CAFE & MOCKTAIL</span>
          </h1>
        </div>
        <p className="hero-tagline">Sip. Chill. Celebrate.</p>
        <p className="hero-description">
          Craft Beers | Mocktails | Delicious Food | Birthday Events
        </p>
        <div className="hero-buttons">
          <a href="#menu" className="btn btn-primary">View Menu</a>
          <a href="tel:+919067290008" className="btn btn-outline">Call Now</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;