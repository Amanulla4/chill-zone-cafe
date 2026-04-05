import React from 'react';

function Events() {
  return (
    <section id="events" className="events-section">
      <div className="container">
        <div className="events-card">
          <h2>🎉 Book Now for Birthday & Events 🎂</h2>
          <p>Celebrate your special moments with us! We host:</p>
          <div className="events-list">
            <span>🎈 Birthday Parties</span>
            <span>🎊 Corporate Events</span>
            <span>💍 Anniversaries</span>
            <span>🥂 Private Gatherings</span>
          </div>
          <p className="events-phone">Call us to book your event:</p>
          <a href="tel:+919067290008" className="events-number">+91-90672 90008</a>
          <div className="events-note">
            <p>✨ Customized menu available for events ✨</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Events;