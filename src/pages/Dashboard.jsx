import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';
import { FiCalendar, FiCheckCircle, FiDollarSign, FiHeart, FiClock, FiTrendingUp, FiStar, FiToggleLeft, FiToggleRight } from 'react-icons/fi';

const customerBookings = [
  { worker: 'Rajesh Kumar', service: 'Electrician', date: 'Mar 12, 2026', time: '10:00 AM', status: 'active', amount: '₹700' },
  { worker: 'Priya Sharma', service: 'Painter', date: 'Mar 10, 2026', time: '9:00 AM', status: 'completed', amount: '₹3,200' },
  { worker: 'Sunil Verma', service: 'Plumber', date: 'Mar 8, 2026', time: '2:00 PM', status: 'completed', amount: '₹600' },
];

const workerRequests = [
  { customer: 'Aman Gupta', service: 'Electrical Wiring', date: 'Mar 13, 2026', time: '11:00 AM', status: 'pending', amount: '₹1,050' },
  { customer: 'Neha Singh', service: 'Fan Installation', date: 'Mar 14, 2026', time: '3:00 PM', status: 'pending', amount: '₹350' },
  { customer: 'Rohit Mehra', service: 'Switch Board Repair', date: 'Mar 11, 2026', time: '10:00 AM', status: 'active', amount: '₹700' },
];

export default function Dashboard() {
  const { t } = useTranslation();
  const { user, role } = useAuth();
  const [available, setAvailable] = useState(true);

  const isCustomer = role === 'customer';

  return (
    <div className="dashboard-page" id="dashboard-page">
      <div className="container">
        {/* Header */}
        <div className="dash-header animate-fadeInUp">
          <h1>
            <span className="gradient-text">
              {isCustomer ? `${t('dashboard.welcomeCustomer')}, ${user?.name || 'User'}` : t('dashboard.welcomeWorker')}
            </span>
          </h1>
          <p style={{ color: 'var(--text-secondary)' }}>
            {isCustomer ? 'Manage your bookings and find workers' : 'Manage your jobs and earnings'}
          </p>
        </div>

        {/* Stats */}
        <div className="dash-stats stagger-children">
          {isCustomer ? (
            <>
              <div className="dash-stat-card glass-card">
                <div className="stat-icon">📅</div>
                <div className="stat-value gradient-text">3</div>
                <div className="stat-label">{t('dashboard.activeBookings')}</div>
              </div>
              <div className="dash-stat-card glass-card">
                <div className="stat-icon">✅</div>
                <div className="stat-value gradient-text">28</div>
                <div className="stat-label">{t('dashboard.completedJobs')}</div>
              </div>
              <div className="dash-stat-card glass-card">
                <div className="stat-icon">💰</div>
                <div className="stat-value gradient-text">₹12.5K</div>
                <div className="stat-label">{t('dashboard.totalSpent')}</div>
              </div>
              <div className="dash-stat-card glass-card">
                <div className="stat-icon">❤️</div>
                <div className="stat-value gradient-text">7</div>
                <div className="stat-label">{t('dashboard.favoriteWorkers')}</div>
              </div>
            </>
          ) : (
            <>
              <div className="dash-stat-card glass-card">
                <div className="stat-icon">📋</div>
                <div className="stat-value gradient-text">5</div>
                <div className="stat-label">{t('dashboard.pendingRequests')}</div>
              </div>
              <div className="dash-stat-card glass-card">
                <div className="stat-icon">✅</div>
                <div className="stat-value gradient-text">142</div>
                <div className="stat-label">{t('dashboard.completedJobs')}</div>
              </div>
              <div className="dash-stat-card glass-card">
                <div className="stat-icon">💰</div>
                <div className="stat-value gradient-text">₹48.2K</div>
                <div className="stat-label">{t('dashboard.totalEarned')}</div>
              </div>
              <div className="dash-stat-card glass-card">
                <div className="stat-icon">⭐</div>
                <div className="stat-value gradient-text">4.8</div>
                <div className="stat-label">{t('dashboard.rating')}</div>
              </div>
            </>
          )}
        </div>

        {/* Worker Availability Toggle */}
        {!isCustomer && (
          <div className="glass-card animate-fadeInUp" style={{ padding: 24, marginBottom: 32, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <h3 style={{ fontWeight: 700, marginBottom: 4 }}>{t('dashboard.availability')}</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                {available ? t('dashboard.available') : t('dashboard.unavailable')}
              </p>
            </div>
            <button
              onClick={() => setAvailable(!available)}
              style={{
                background: 'none', border: 'none', cursor: 'pointer',
                color: available ? 'var(--success)' : 'var(--text-muted)',
                fontSize: '2.5rem'
              }}
            >
              {available ? <FiToggleRight /> : <FiToggleLeft />}
            </button>
          </div>
        )}

        {/* Bookings / Requests */}
        <div className="dash-section animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
          <h2 className="gradient-text">
            {isCustomer ? t('dashboard.recentBookings') : t('dashboard.jobRequests')}
          </h2>
          <div>
            {(isCustomer ? customerBookings : workerRequests).map((b, i) => (
              <div className="booking-card glass-card" key={i}>
                <div className={`booking-status ${b.status}`}></div>
                <div className="booking-details">
                  <h4>{isCustomer ? b.worker : b.customer}</h4>
                  <p>{b.service} • {b.date} at {b.time}</p>
                </div>
                <div className="booking-amount gradient-text">{b.amount}</div>
                {b.status === 'pending' && !isCustomer && (
                  <button className="btn-primary btn-small" style={{ marginLeft: 12 }}>Accept</button>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="dash-section animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
          <div className="grid-3">
            {isCustomer ? (
              <>
                <Link to="/categories" style={{ textDecoration: 'none' }}>
                  <div className="glass-card" style={{ padding: 28, textAlign: 'center', cursor: 'pointer' }}>
                    <div style={{ fontSize: '2rem', marginBottom: 12 }}>🔍</div>
                    <h4>{t('dashboard.searchWorkers')}</h4>
                  </div>
                </Link>
                <Link to="/marketplace" style={{ textDecoration: 'none' }}>
                  <div className="glass-card" style={{ padding: 28, textAlign: 'center', cursor: 'pointer' }}>
                    <div style={{ fontSize: '2rem', marginBottom: 12 }}>🛍️</div>
                    <h4>Marketplace</h4>
                  </div>
                </Link>
                <div className="glass-card" style={{ padding: 28, textAlign: 'center', cursor: 'pointer' }}>
                  <div style={{ fontSize: '2rem', marginBottom: 12 }}>📞</div>
                  <h4>Support</h4>
                </div>
              </>
            ) : (
              <>
                <div className="glass-card" style={{ padding: 28, textAlign: 'center' }}>
                  <div style={{ fontSize: '2rem', marginBottom: 12 }}>📊</div>
                  <h4>{t('dashboard.earnings')}</h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: 8 }}>
                    {t('dashboard.thisMonth')}: ₹12,400
                  </p>
                </div>
                <div className="glass-card" style={{ padding: 28, textAlign: 'center' }}>
                  <div style={{ fontSize: '2rem', marginBottom: 12 }}>👤</div>
                  <h4>Edit Profile</h4>
                </div>
                <div className="glass-card" style={{ padding: 28, textAlign: 'center' }}>
                  <div style={{ fontSize: '2rem', marginBottom: 12 }}>📞</div>
                  <h4>Support</h4>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
