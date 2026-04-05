import React, { useState } from 'react';

function Menu() {
  const [activeCategory, setActiveCategory] = useState('mocktails');

  const categories = {
    mocktails: {
      name: 'Mocktails',
      items: [
        'FRESH MINT MOJITO', 'GREEN APPLE SPARK', 'BLUE ORANGE TWIST',
        'WATERMELON CHILL', 'VIRGIN', 'PINACOLDA', 'ICE TEA'
      ]
    },
    milkshakes: {
      name: 'Milkshakes',
      items: ['STRAWBERRY', 'BUTTERSCOTCH', 'OREO', 'CHOCOLATE', 'KITKAT', 'NUTELLA SHAKE', 'BANANA SHAKE', 'BANANA NUTELLA SHAKE']
    },
    coffee: {
      name: 'Coffee',
      items: [
        { name: 'HOT COFFEE', price: 80 },
        { name: 'COLD COFFEE', price: 90 },
        { name: 'THICK COLD COFFEE', price: 100 },
        { name: 'ICE COLD COFFEE', price: 80 },
        { name: 'COLD CHOCOLATE COFFEE', price: 160 },
        { name: 'COLD COFFEE WITH CRUSH', price: 100 },
        { name: 'COLD COFFEE WITH ICECREAM', price: 130 },
        { name: 'OREO COFFEE', price: 150 },
        { name: 'CARAMEL COFFEE', price: 150 },
        { name: 'KITKAT COFFEE', price: 150 }
      ]
    },
    burgers: {
      name: 'Burgers',
      items: [
        { name: 'VEG CHEESE', price: 70 },
        { name: 'CHEESE MEXICAN', price: 70 },
        { name: 'TANDOORI CHEESE', price: 50 },
        { name: 'CHEESE ISLAND', price: 50 },
        { name: 'COCKTAIL', price: 50 }
      ]
    },
    pizza: {
      name: 'Pizza',
      items: [
        { name: 'MARGHERITA', price: 200 },
        { name: 'VEG CHEESE', price: 200 },
        { name: 'SPICY VEG', price: 210 },
        { name: 'HOT & SPICY', price: 220 },
        { name: 'CHEESE & CORN', price: 220 },
        { name: 'PANEER TIKKA DELIGHT', price: 240 },
        { name: 'PERI PERI PANEER', price: 240 },
        { name: 'PANEER CORN', price: 250 },
        { name: 'FANTASTIC ITALIAN', price: 260 }
      ]
    },
    sandwiches: {
      name: 'Sandwiches',
      items: [
        { name: 'VEG GRILL', price: 110 },
        { name: 'VEG CHEESE GRILL', price: 120 },
        { name: 'CHILLI CHEESE', price: 130 },
        { name: 'CHEESE CORN GRILL', price: 140 },
        { name: 'PANEER CHEESE GRILL', price: 150 },
        { name: 'PANEER & CORN GRILL', price: 170 },
        { name: 'CHOCOLATE TOAST', price: 170 }
      ]
    },
    fries: {
      name: 'Fries & Sides',
      items: [
        { name: 'SALTED FRIES', price: 110 },
        { name: 'CHEESE FRIES', price: 120 },
        { name: 'PERI PERI FRIES', price: 140 },
        { name: 'PERI PERI CHEESE', price: 150 },
        { name: 'FULLY LOADED', price: 170 },
        { name: 'GARLIC BREAD', price: 20 },
        { name: 'CHEESE GARLIC BREAD', price: 20 },
        { name: 'CHEESE CHILLI TOAST', price: 20 }
      ]
    },
    momos: {
      name: 'Momos',
      items: [
        { name: 'VEG MOMOS', price: 60 },
        { name: 'PANEER MOMOS', price: 60 },
        { name: 'CHEESE MOMOS', price: 60 },
        { name: 'CHOCOLATE MOMOS', price: 60 }
      ]
    },
    pasta: {
      name: 'Pasta & Maggie',
      items: [
        { name: 'WHITE SAUCE PASTA', price: 50 },
        { name: 'RED SAUCE PASTA', price: 50 },
        { name: 'PLAIN MAGGIE', price: 40 },
        { name: 'VEGGIE MAGGIE', price: 40 },
        { name: 'MASALA MAGGIE', price: 50 },
        { name: 'GARLIC MAGGIE', price: 50 }
      ]
    },
    icecream: {
      name: 'Ice Cream',
      items: [
        { name: 'VANILLA', price: 60 },
        { name: 'BUTTERSCOTCH', price: 60 },
        { name: 'CHOCOLATE', price: 60 }
      ]
    }
  };

  return (
    <section id="menu" className="menu-section">
      <div className="container">
        <h2 className="section-title">Our Menu</h2>
        
        <div className="menu-tabs">
          {Object.keys(categories).map(cat => (
            <button
              key={cat}
              className={`menu-tab ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {categories[cat].name}
            </button>
          ))}
        </div>

        <div className="menu-content">
          <h3 className="menu-category-title">{categories[activeCategory].name}</h3>
          <div className="menu-items">
            {categories[activeCategory].items.map((item, idx) => (
              <div key={idx} className="menu-item">
                {typeof item === 'string' ? (
                  <span className="item-name">{item}</span>
                ) : (
                  <>
                    <span className="item-name">{item.name}</span>
                    <span className="item-price">₹{item.price}</span>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Menu;