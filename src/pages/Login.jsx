import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../context/AuthContext';
import { FiMail, FiLock, FiSmartphone } from 'react-icons/fi';
import { FcGoogle } from 'react-icons/fc';

export default function Login() {
  const { t } = useTranslation();
  const { login } = useAuth();
  const navigate = useNavigate();
  const [role, setRole] = useState('customer');
  const [form, setForm] = useState({ email: '', password: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ name: role === 'customer' ? 'Vinesh' : 'Rajesh', email: form.email }, role);
    navigate('/dashboard');
  };

  return (
    <div className="auth-page" id="login-page">
      <div className="auth-card glass-strong">
        <h2 className="gradient-text">{t('auth.loginTitle')}</h2>
        <p className="auth-subtitle">{t('auth.loginSubtitle')}</p>

        <div className="role-toggle" id="role-toggle">
          <button
            className={role === 'customer' ? 'active' : ''}
            onClick={() => setRole('customer')}
          >
            👤 {t('auth.customer')}
          </button>
          <button
            className={role === 'worker' ? 'active' : ''}
            onClick={() => setRole('worker')}
          >
            🛠️ {t('auth.worker')}
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>{t('auth.email')}</label>
            <div style={{ position: 'relative' }}>
              <FiMail style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
              <input
                className="glass-input"
                type="email"
                placeholder="you@example.com"
                style={{ paddingLeft: 40 }}
                value={form.email}
                onChange={e => setForm({ ...form, email: e.target.value })}
                id="email-input"
              />
            </div>
          </div>

          <div className="form-group">
            <label>{t('auth.password')}</label>
            <div style={{ position: 'relative' }}>
              <FiLock style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
              <input
                className="glass-input"
                type="password"
                placeholder="••••••••"
                style={{ paddingLeft: 40 }}
                value={form.password}
                onChange={e => setForm({ ...form, password: e.target.value })}
                id="password-input"
              />
            </div>
          </div>

          <div style={{ textAlign: 'right', marginBottom: 16 }}>
            <a href="#" style={{ color: 'var(--accent-1)', fontSize: '0.85rem', fontWeight: 500 }}>
              {t('auth.forgotPassword')}
            </a>
          </div>

          <div className="form-actions">
            <button className="btn-primary" type="submit" id="login-submit">
              {t('auth.login')}
            </button>
          </div>
        </form>

        <div style={{ textAlign: 'center', margin: '24px 0 16px', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
          — {t('auth.or')} —
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <button className="btn-secondary" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10 }}>
            <FcGoogle size={20} /> {t('auth.googleLogin')}
          </button>
          <button className="btn-secondary" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10 }}>
            <FiSmartphone size={18} /> {t('auth.phoneLogin')}
          </button>
        </div>

        <p className="auth-footer">
          {t('auth.noAccount')} <Link to="/signup">{t('auth.signup')}</Link>
        </p>
      </div>
    </div>
  );
}
