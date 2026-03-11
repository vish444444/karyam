import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { FiStar, FiShield, FiMapPin, FiClock, FiPhone, FiCalendar, FiArrowLeft } from 'react-icons/fi';

const worker = {
  name: 'Rajesh Kumar',
  skill: 'Electrician',
  rating: 4.8,
  reviews: 127,
  rateHourly: 350,
  rateDaily: 2500,
  exp: 8,
  location: 'Raipur, Chhattisgarh',
  phone: '+91 98765 43210',
  initials: 'RK',
  about: 'Experienced electrician specializing in household wiring, fan installation, inverter setup, and complete electrical solutions. Certified and background-verified professional with 8 years of experience.',
  skills: ['Wiring', 'Fan Installation', 'Inverter Setup', 'MCB/Switch Board', 'LED Lights', 'Generator Repair'],
};

const reviews = [
  { name: 'Aman Gupta', rating: 5, date: 'Mar 5, 2026', text: 'Excellent work! Fixed all the wiring issues in my house. Very professional and punctual.', initials: 'AG' },
  { name: 'Neha Singh', rating: 5, date: 'Feb 28, 2026', text: 'Very skilled electrician. Installed new fan and LED lights. Clean work, reasonable price.', initials: 'NS' },
  { name: 'Rohit Mehra', rating: 4, date: 'Feb 20, 2026', text: 'Good work overall. Was slightly late but the quality of work was great.', initials: 'RM' },
  { name: 'Priya Patel', rating: 5, date: 'Feb 15, 2026', text: 'Highly recommend! Set up the entire inverter system. Very knowledgeable and friendly.', initials: 'PP' },
];

export default function WorkerProfile() {
  const { t } = useTranslation();

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <FiStar key={i} style={{ fill: i < Math.floor(rating) ? '#f59e0b' : 'none', color: '#f59e0b', fontSize: '1rem' }} />
    ));
  };

  return (
    <div className="profile-page" id="worker-profile-page">
      <div className="container">
        <Link to="/categories" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: 'var(--accent-1)', fontWeight: 500, marginBottom: 24 }}>
          <FiArrowLeft /> Back to Workers
        </Link>

        {/* Profile Header */}
        <div className="profile-header-card glass-strong animate-fadeInUp">
          <div className="profile-avatar">{worker.initials}</div>
          <div className="profile-details">
            <h1>{worker.name}</h1>
            <p className="profile-skill">{worker.skill}</p>
            <div className="profile-badges">
              <span className="badge badge-verified"><FiShield size={14} /> {t('workers.verified')}</span>
              <span className="badge"><FiClock size={14} /> {worker.exp} {t('workers.experience')}</span>
              <span className="badge"><FiMapPin size={14} /> {worker.location}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <div className="stars">{renderStars(worker.rating)}</div>
              <span style={{ fontWeight: 700 }}>{worker.rating}</span>
              <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>({worker.reviews} {t('workers.reviews')})</span>
            </div>
            <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap', alignItems: 'center' }}>
              <div className="profile-rate">₹{worker.rateHourly} <span>{t('workers.perHour')}</span></div>
              <div className="profile-rate">₹{worker.rateDaily} <span>{t('workers.perDay')}</span></div>
            </div>
          </div>
        </div>

        <div className="grid-2" style={{ gap: 32, alignItems: 'start' }}>
          {/* Left Column */}
          <div>
            {/* About */}
            <div className="glass-card animate-fadeInUp" style={{ padding: 28, marginBottom: 24 }}>
              <h3 style={{ fontWeight: 700, marginBottom: 12 }}>About</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>{worker.about}</p>
            </div>

            {/* Skills */}
            <div className="glass-card animate-fadeInUp" style={{ padding: 28, marginBottom: 24, animationDelay: '0.1s' }}>
              <h3 style={{ fontWeight: 700, marginBottom: 16 }}>Skills & Services</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {worker.skills.map((s, i) => (
                  <span key={i} className="badge" style={{ padding: '8px 16px', fontSize: '0.9rem' }}>{s}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column — Booking Card */}
          <div>
            <div className="glass-card animate-fadeInUp" style={{ padding: 28, position: 'sticky', top: 100, animationDelay: '0.15s' }}>
              <h3 style={{ fontWeight: 700, marginBottom: 20 }}>Book {worker.name}</h3>

              <div className="form-group">
                <label>Service Type</label>
                <select className="glass-input">
                  {worker.skills.map((s, i) => <option key={i}>{s}</option>)}
                </select>
              </div>

              <div className="form-group">
                <label>Booking Type</label>
                <div className="role-toggle">
                  <button className="active">Hourly (₹{worker.rateHourly}/hr)</button>
                  <button>Daily (₹{worker.rateDaily}/day)</button>
                </div>
              </div>

              <div className="form-group">
                <label>Date</label>
                <input className="glass-input" type="date" />
              </div>

              <div className="form-group">
                <label>Time</label>
                <input className="glass-input" type="time" />
              </div>

              <div className="form-group">
                <label>Duration (hours)</label>
                <input className="glass-input" type="number" placeholder="e.g. 2" defaultValue={2} />
              </div>

              <div style={{ padding: '16px 0', borderTop: '1px solid var(--divider)', borderBottom: '1px solid var(--divider)', marginBottom: 20 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                  <span style={{ color: 'var(--text-secondary)' }}>Service Charge</span>
                  <span style={{ fontWeight: 600 }}>₹700</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ fontWeight: 700, fontSize: '1.1rem' }}>Total</span>
                  <span className="gradient-text" style={{ fontWeight: 800, fontSize: '1.2rem' }}>₹700</span>
                </div>
              </div>

              <button className="btn-primary" style={{ width: '100%', padding: '14px 28px', fontSize: '1.05rem' }}>
                <FiCalendar style={{ marginRight: 8 }} /> {t('workers.bookNow')}
              </button>

              <div style={{ textAlign: 'center', marginTop: 16 }}>
                <a href="#" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: 'var(--accent-1)', fontWeight: 500, fontSize: '0.9rem' }}>
                  <FiPhone size={14} /> Contact {worker.name}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews */}
        <div className="dash-section animate-fadeInUp" style={{ marginTop: 40, animationDelay: '0.2s' }}>
          <h2 className="gradient-text" style={{ marginBottom: 24, fontSize: '1.5rem' }}>Reviews ({worker.reviews})</h2>
          {reviews.map((r, i) => (
            <div className="review-card glass-card" key={i}>
              <div className="review-header">
                <div className="review-avatar">{r.initials}</div>
                <div>
                  <div className="review-author">{r.name}</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <div className="stars">{renderStars(r.rating)}</div>
                    <span className="review-date">{r.date}</span>
                  </div>
                </div>
              </div>
              <p className="review-text">{r.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
