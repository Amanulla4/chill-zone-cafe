import React from 'react';

function Gallery() {
  // Placeholder gallery - add your images to public/images/
  // and uncomment the image paths below
  
  const images = [
     '/images/cafe1.jpg',
     '/images/cafe2.jpg',
    '/images/cafe3.jpg',
     '/images/cafe4.jpg',
  ];

  const hasImages = images.length > 0 && images[0] !== '/images/cafe1.jpg';

  return (
    <section id="gallery" className="gallery-section">
      <div className="container">
        <h2 className="section-title">Our Gallery</h2>
        <div className="gallery-grid">
          {hasImages ? (
            images.map((img, idx) => (
              <div key={idx} className="gallery-item">
                <img src={img} alt={`Cafe view ${idx + 1}`} />
                <div className="gallery-overlay">
                  <span>📸</span>
                </div>
              </div>
            ))
          ) : (
            <>
              <div className="gallery-item">
                <div className="gallery-placeholder">
                  <span>📷</span>
                  <p>Add your cafe images to public/images/</p>
                </div>
              </div>
              <div className="gallery-item">
                <div className="gallery-placeholder">
                  <span>🍹</span>
                  <p>Mocktails</p>
                </div>
              </div>
              <div className="gallery-item">
                <div className="gallery-placeholder">
                  <span>🍕</span>
                  <p>Delicious Food</p>
                </div>
              </div>
              <div className="gallery-item">
                <div className="gallery-placeholder">
                  <span>🎉</span>
                  <p>Birthday Events</p>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export default Gallery;