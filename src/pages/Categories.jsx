import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FiSearch, FiMapPin, FiStar, FiShield, FiClock } from 'react-icons/fi';

const allServices = [
  { key: 'plumber', icon: '🔧' },
  { key: 'electrician', icon: '⚡' },
  { key: 'carpenter', icon: '🪚' },
  { key: 'painter', icon: '🎨' },
  { key: 'welder', icon: '🔩' },
  { key: 'cook', icon: '👨‍🍳' },
  { key: 'cleaner', icon: '🧹' },
  { key: 'mechanic', icon: '🔌' },
];

const allWorkers = [
  { name: 'Rajesh Kumar', skill: 'electrician', rating: 4.8, reviews: 127, rate: 350, exp: 8, initials: 'RK' },
  { name: 'Sunil Verma', skill: 'plumber', rating: 4.9, reviews: 89, rate: 300, exp: 12, initials: 'SV' },
  { name: 'Priya Sharma', skill: 'painter', rating: 4.7, reviews: 65, rate: 400, exp: 5, initials: 'PS' },
  { name: 'Amit Sahu', skill: 'carpenter', rating: 4.6, reviews: 203, rate: 450, exp: 15, initials: 'AS' },
  { name: 'Meena Devi', skill: 'cook', rating: 4.9, reviews: 156, rate: 250, exp: 10, initials: 'MD' },
  { name: 'Ravi Yadav', skill: 'welder', rating: 4.5, reviews: 78, rate: 500, exp: 7, initials: 'RY' },
  { name: 'Sunita Bai', skill: 'cleaner', rating: 4.8, reviews: 234, rate: 200, exp: 6, initials: 'SB' },
  { name: 'Kiran Patel', skill: 'mechanic', rating: 4.7, reviews: 112, rate: 400, exp: 9, initials: 'KP' },
];

export default function Categories() {
  const { t } = useTranslation();
  const [selected, setSelected] = useState(null);
  const [search, setSearch] = useState('');

  const filtered = selected
    ? allWorkers.filter(w => w.skill === selected)
    : allWorkers;

  const searchFiltered = search
    ? filtered.filter(w => w.name.toLowerCase().includes(search.toLowerCase()))
    : filtered;

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <FiStar key={i} style={{ fill: i < Math.floor(rating) ? '#f59e0b' : 'none', color: '#f59e0b', fontSize: '0.85rem' }} />
    ));
  };

  return (
    <div className="page-content">
      <section className="section" style={{ paddingTop: 100 }} id="categories-page">
        <div className="container">
          <div className="section-header">
            <h2 className="gradient-text">{t('categories.title')}</h2>
            <p>{t('categories.subtitle')}</p>
          </div>

          {/* Category Chips */}
          <div className="filter-bar" id="category-filters">
            <button
              className={`filter-chip ${!selected ? 'active' : ''}`}
              onClick={() => setSelected(null)}
            >
              All
            </button>
            {allServices.map(s => (
              <button
                key={s.key}
                className={`filter-chip ${selected === s.key ? 'active' : ''}`}
                onClick={() => setSelected(s.key)}
              >
                {s.icon} {t(`categories.${s.key}`)}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="search-panel glass" style={{ marginBottom: 32, padding: 20 }}>
            <div style={{ position: 'relative' }}>
              <FiSearch style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
              <input
                className="glass-input"
                style={{ paddingLeft: 40 }}
                placeholder={t('search.searchPlaceholder')}
                value={search}
                onChange={e => setSearch(e.target.value)}
              />
            </div>
          </div>

          {/* Workers Grid */}
          <div className="grid-3 stagger-children">
            {searchFiltered.map((w, idx) => (
              <Link to="/worker/1" key={idx} style={{ textDecoration: 'none' }}>
                <div className="worker-card glass-card">
                  <div className="worker-card-header">
                    <div className="worker-avatar">{w.initials}</div>
                    <div className="worker-info">
                      <h4>{w.name}</h4>
                      <span className="worker-skill">{t(`categories.${w.skill}`)}</span>
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                    <div className="stars">{renderStars(w.rating)}</div>
                    <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>{w.rating} ({w.reviews})</span>
                  </div>
                  <div style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
                    <span className="badge badge-verified"><FiShield size={12} /> {t('workers.verified')}</span>
                    <span className="badge"><FiClock size={12} /> {w.exp} {t('workers.experience')}</span>
                  </div>
                  <div className="worker-meta">
                    <span className="worker-rate">₹{w.rate} <span>{t('workers.perHour')}</span></span>
                    <button className="btn-primary btn-small">{t('workers.bookNow')}</button>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {searchFiltered.length === 0 && (
            <div style={{ textAlign: 'center', padding: 60, color: 'var(--text-muted)' }}>
              <p style={{ fontSize: '1.2rem' }}>No workers found for this filter</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
