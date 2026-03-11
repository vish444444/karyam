import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FiSearch, FiMapPin, FiStar, FiArrowRight, FiShield, FiClock, FiDollarSign } from 'react-icons/fi';

const serviceIcons = ['🔧', '⚡', '🪚', '🎨', '🔩', '👨‍🍳', '🧹', '🔌'];

const mockWorkers = [
  { name: 'Rajesh Kumar', skill: 'electrician', rating: 4.8, reviews: 127, rate: 350, exp: 8, initials: 'RK' },
  { name: 'Sunil Verma', skill: 'plumber', rating: 4.9, reviews: 89, rate: 300, exp: 12, initials: 'SV' },
  { name: 'Priya Sharma', skill: 'painter', rating: 4.7, reviews: 65, rate: 400, exp: 5, initials: 'PS' },
  { name: 'Amit Sahu', skill: 'carpenter', rating: 4.6, reviews: 203, rate: 450, exp: 15, initials: 'AS' },
];

export default function Home() {
  const { t } = useTranslation();

  const services = [
    { key: 'plumber', icon: '🔧' },
    { key: 'electrician', icon: '⚡' },
    { key: 'carpenter', icon: '🪚' },
    { key: 'painter', icon: '🎨' },
    { key: 'welder', icon: '🔩' },
    { key: 'cook', icon: '👨‍🍳' },
    { key: 'cleaner', icon: '🧹' },
    { key: 'mechanic', icon: '🔌' },
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <FiStar
        key={i}
        style={{
          fill: i < Math.floor(rating) ? '#f59e0b' : 'none',
          color: '#f59e0b',
          fontSize: '0.85rem'
        }}
      />
    ));
  };

  return (
    <div className="page-content">
      {/* Hero Section */}
      <section className="hero" id="hero-section">
        <div className="container">
          <div className="animate-fadeInUp">
            <h1>
              <span className="gradient-text">{t('hero.title')}</span>
              <br />
              {t('hero.titleHighlight')}
            </h1>
            <p className="subtitle">{t('hero.subtitle')}</p>
            <div className="hero-actions">
              <Link to="/categories" className="btn-primary" id="find-worker-btn">
                {t('hero.findWorker')} <FiArrowRight style={{ marginLeft: 8 }} />
              </Link>
              <Link to="/signup" className="btn-secondary" id="become-worker-btn">
                {t('hero.becomeWorker')}
              </Link>
            </div>
          </div>

          <div className="hero-stats animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            <div className="hero-stat">
              <div className="stat-number gradient-text">10,000+</div>
              <div className="stat-label">{t('hero.workers')}</div>
            </div>
            <div className="hero-stat">
              <div className="stat-number gradient-text">50,000+</div>
              <div className="stat-label">{t('hero.customers')}</div>
            </div>
            <div className="hero-stat">
              <div className="stat-number gradient-text">25+</div>
              <div className="stat-label">{t('hero.services')}</div>
            </div>
            <div className="hero-stat">
              <div className="stat-number gradient-text">100+</div>
              <div className="stat-label">{t('hero.cities')}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Search Panel */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="search-panel glass-strong" id="search-panel">
            <div className="search-row">
              <div style={{ position: 'relative', flex: 1, minWidth: 200 }}>
                <FiSearch style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                <input className="glass-input" style={{ paddingLeft: 40 }} placeholder={t('search.searchPlaceholder')} />
              </div>
              <div style={{ position: 'relative', flex: 1, minWidth: 200 }}>
                <FiMapPin style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                <input className="glass-input" style={{ paddingLeft: 40 }} placeholder={t('search.locationPlaceholder')} />
              </div>
              <button className="btn-primary">{t('search.search')}</button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section" id="services-section">
        <div className="container">
          <div className="section-header">
            <h2 className="gradient-text">{t('categories.title')}</h2>
            <p>{t('categories.subtitle')}</p>
          </div>
          <div className="grid-4 stagger-children">
            {services.map(s => (
              <Link to="/categories" key={s.key} style={{ textDecoration: 'none' }}>
                <div className="service-card glass-card">
                  <div className="icon-wrapper">{s.icon}</div>
                  <h3>{t(`categories.${s.key}`)}</h3>
                  <p>{t(`categories.${s.key}Desc`)}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Preview */}
      <section className="section" id="how-it-works-preview">
        <div className="container">
          <div className="section-header">
            <h2 className="gradient-text">{t('howItWorks.title')}</h2>
            <p>{t('howItWorks.subtitle')}</p>
          </div>
          <div className="grid-4 stagger-children">
            {[
              { num: 1, icon: '🔍', key: 'step1' },
              { num: 2, icon: '✅', key: 'step2' },
              { num: 3, icon: '📅', key: 'step3' },
              { num: 4, icon: '⭐', key: 'step4' },
            ].map(step => (
              <div className="step-card glass-card" key={step.num}>
                <div className="step-number">{step.num}</div>
                <div className="step-icon">{step.icon}</div>
                <h3>{t(`howItWorks.${step.key}Title`)}</h3>
                <p>{t(`howItWorks.${step.key}Desc`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Workers */}
      <section className="section" id="featured-workers">
        <div className="container">
          <div className="section-header">
            <h2 className="gradient-text">{t('workers.title')}</h2>
            <p>{t('workers.subtitle')}</p>
          </div>
          <div className="grid-4 stagger-children">
            {mockWorkers.map((w, idx) => (
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
                    <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>{w.rating}</span>
                    <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>({w.reviews})</span>
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
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section" id="benefits">
        <div className="container">
          <div className="grid-2" style={{ gap: 32 }}>
            <div className="glass-card" style={{ padding: 36 }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: 16 }}>
                <span className="gradient-text">{t('howItWorks.forCustomers')}</span>
              </h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '1rem' }}>
                {t('howItWorks.forCustomersDesc')}
              </p>
              <div style={{ marginTop: 20, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <span className="badge"><FiShield size={14} /> Verified Workers</span>
                <span className="badge"><FiDollarSign size={14} /> Fair Pricing</span>
                <span className="badge"><FiStar size={14} /> Rated & Reviewed</span>
              </div>
            </div>
            <div className="glass-card" style={{ padding: 36 }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: 16 }}>
                <span className="gradient-text-2">{t('howItWorks.forWorkers')}</span>
              </h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '1rem' }}>
                {t('howItWorks.forWorkersDesc')}
              </p>
              <div style={{ marginTop: 20, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <span className="badge"><FiDollarSign size={14} /> Set Your Rates</span>
                <span className="badge"><FiClock size={14} /> Flexible Hours</span>
                <span className="badge"><FiArrowRight size={14} /> No Middlemen</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="section" id="cta-section">
        <div className="container">
          <div className="cta-banner glass-card">
            <h2 className="gradient-text">{t('cta.title')}</h2>
            <p>{t('cta.subtitle')}</p>
            <Link to="/signup" className="btn-primary">
              {t('cta.joinNow')} <FiArrowRight style={{ marginLeft: 8 }} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
