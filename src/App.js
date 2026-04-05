import './App.css';

// Navbar Component
function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="logo">The Chill Zone</h1>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#menu">Menu</a></li>
          <li><a href="#gallery">Gallery</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

// Hero Section Component
function HeroSection() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1>Welcome to The Chill Zone</h1>
        <p>Cafe & Mocktails</p>
        <button className="cta-button">Explore Menu</button>
      </div>
    </section>
  );
}

// Menu Section Component
function MenuSection() {
  const menuCategories = [
    { 
      name: 'Milkshakes', 
      items: ['Strawberry - ₹120', 'Oreo - ₹140', 'Nutella - ₹170', 'Butterscotch - ₹130'] 
    },
    { 
      name: 'Mocktails', 
      items: ['Fresh Mint Mojito - ₹100', 'Green Apple Spark - ₹100', 'Watermelon Chill - ₹110', 'Pinacolda - ₹120'] 
    },
    { 
      name: 'Beverages', 
      items: ['Hot Coffee - ₹80', 'Cold Coffee - ₹90', 'Oreo Coffee - ₹150', 'Caramel Coffee - ₹150'] 
    },
  ];

  return (
    <section id="menu" className="menu">
      <h2>Our Menu</h2>
      <div className="menu-categories">
        {menuCategories.map((category, index) => (
          <div key={index} className="category-card">
            <h3>{category.name}</h3>
            <ul>
              {category.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

// Gallery Section Component
function GallerySection() {
  const images = [
    { src: '/images/cafe1.jpg', title: 'Cozy Corner' },
    { src: '/images/cafe2.jpg', title: 'Signature Shake' },
    { src: '/images/cafe3.jpg', title: 'Mocktails' },
    { src: '/images/cafe4.jpg', title: 'Food Spread' },
  ];

  return (
    <section id="gallery" className="gallery">
      <h2>Gallery</h2>
      <div className="gallery-grid">
        {images.map((image, index) => (
          <div key={index} className="gallery-item">
            <img src={image.src} alt={image.title} className="gallery-image" />
            <p>{image.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// Location Section Component
function LocationSection() {
  return (
    <section id="location" className="location">
      <h2>Find Us</h2>
      <div className="location-content">
        <p>📍 Latur, Maharashtra</p>
        <p>⏰ Mon - Sun: 11:00 AM - 11:00 PM</p>
        <p>📞 +91 9067290008</p>
      </div>
    </section>
  );
}

// Contact Section Component
function ContactSection() {
  return (
    <section id="contact" className="contact">
      <h2>Get in Touch</h2>
      <div className="contact-content">
        <p>Email: contact@chillzone.com</p>
        <p>Phone: +91 9067290008</p>
        <p>Follow us on Instagram & Facebook</p>
        <button className="contact-button">Contact Us</button>
      </div>
    </section>
  );
}

// Footer Component
function Footer() {
  return (
    <footer className="footer">
      <p>&copy; 2024 The Chill Zone Cafe. All rights reserved.</p>
    </footer>
  );
}

// Main App Component
function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <MenuSection />
      <GallerySection />
      <LocationSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;