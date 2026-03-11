import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const mockProducts = [
  { name: 'Handwoven Bamboo Basket', artisan: 'Kamla Sahu', price: 350, category: 'handmade', icon: '🧺', eco: true },
  { name: 'Recycled Paper Notebook', artisan: 'Ritu Verma', price: 120, category: 'wasteToBest', icon: '📔', eco: true },
  { name: 'Terracotta Plant Pots (Set of 3)', artisan: 'Mohan Prajapati', price: 450, category: 'handmade', icon: '🏺', eco: false },
  { name: 'Organic Honey (500g)', artisan: 'Tribal Honey Collective', price: 280, category: 'ecoFriendly', icon: '🍯', eco: true },
  { name: 'Upcycled Denim Tote Bag', artisan: 'Sunita Workshop', price: 199, category: 'wasteToBest', icon: '👜', eco: true },
  { name: 'Hand-painted Diyas (Pack of 6)', artisan: 'Lakshmi Devi', price: 150, category: 'handmade', icon: '🪔', eco: false },
  { name: 'Coconut Shell Candle Holders', artisan: 'Kerala Crafts', price: 220, category: 'ecoFriendly', icon: '🕯️', eco: true },
  { name: 'Jute Macramé Wall Hanging', artisan: 'Meera Arts', price: 599, category: 'handmade', icon: '🧶', eco: false },
  { name: 'Bottle Cap Mosaic Frame', artisan: 'Green Hands NGO', price: 175, category: 'wasteToBest', icon: '🖼️', eco: true },
];

const filters = ['all', 'handmade', 'ecoFriendly', 'wasteToBest'];

export default function Marketplace() {
  const { t } = useTranslation();
  const [activeFilter, setActiveFilter] = useState('all');

  const filtered = activeFilter === 'all'
    ? mockProducts
    : mockProducts.filter(p => p.category === activeFilter);

  return (
    <div className="page-content">
      <section className="section" style={{ paddingTop: 100 }} id="marketplace-page">
        <div className="container">
          <div className="section-header">
            <h2 className="gradient-text">{t('marketplace.title')}</h2>
            <p>{t('marketplace.subtitle')}</p>
          </div>

          {/* Filter Chips */}
          <div className="filter-bar" id="marketplace-filters">
            {filters.map(f => (
              <button
                key={f}
                className={`filter-chip ${activeFilter === f ? 'active' : ''}`}
                onClick={() => setActiveFilter(f)}
              >
                {t(`marketplace.${f}`)}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid-3 stagger-children">
            {filtered.map((p, idx) => (
              <div className="product-card glass-card" key={idx}>
                <div className="product-image">
                  <span>{p.icon}</span>
                </div>
                <div className="product-info">
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                    <h4>{p.name}</h4>
                  </div>
                  {p.eco && <span className="eco-badge" style={{ marginBottom: 8, display: 'inline-block' }}>🌿 Eco-Friendly</span>}
                  <p className="artisan">{t('marketplace.by')} {p.artisan}</p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span className="product-price gradient-text">₹{p.price}</span>
                    <button className="btn-primary btn-small">{t('marketplace.addToCart')}</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
