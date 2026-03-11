import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../context/AuthContext';
import { FiUser, FiMail, FiLock, FiMapPin, FiPhone, FiCreditCard, FiDollarSign } from 'react-icons/fi';

const allSkills = ['plumber', 'electrician', 'carpenter', 'painter', 'welder', 'cook', 'cleaner', 'mechanic'];

export default function Signup() {
  const { t } = useTranslation();
  const { login } = useAuth();
  const navigate = useNavigate();
  const [role, setRole] = useState('customer');
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    name: '', email: '', phone: '', password: '', confirmPassword: '',
    location: '', skills: [], experience: '', aadhaar: '', hourlyRate: '',
  });

  const totalSteps = role === 'customer' ? 2 : 3;

  const toggleSkill = (skill) => {
    setForm(prev => ({
      ...prev,
      skills: prev.skills.includes(skill)
        ? prev.skills.filter(s => s !== skill)
        : [...prev.skills, skill]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (step < totalSteps) {
      setStep(step + 1);
      return;
    }
    login({ name: form.name, email: form.email }, role);
    navigate('/dashboard');
  };

  return (
    <div className="auth-page" id="signup-page">
      <div className="auth-card glass-strong">
        <h2 className="gradient-text">{t('auth.signupTitle')}</h2>
        <p className="auth-subtitle">{t('auth.signupSubtitle')}</p>

        <div className="role-toggle">
          <button className={role === 'customer' ? 'active' : ''} onClick={() => { setRole('customer'); setStep(1); }}>
            👤 {t('auth.customer')}
          </button>
          <button className={role === 'worker' ? 'active' : ''} onClick={() => { setRole('worker'); setStep(1); }}>
            🛠️ {t('auth.worker')}
          </button>
        </div>

        {/* Step Indicators */}
        <div className="signup-steps">
          {Array.from({ length: totalSteps }, (_, i) => (
            <div
              key={i}
              className={`signup-step ${i + 1 < step ? 'completed' : ''} ${i + 1 === step ? 'active' : ''}`}
            />
          ))}
        </div>

        <form onSubmit={handleSubmit}>
          {step === 1 && (
            <>
              <div className="form-group">
                <label>{t('auth.fullName')}</label>
                <div style={{ position: 'relative' }}>
                  <FiUser style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                  <input className="glass-input" style={{ paddingLeft: 40 }} placeholder="Your full name"
                    value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
                </div>
              </div>
              <div className="form-group">
                <label>{t('auth.email')}</label>
                <div style={{ position: 'relative' }}>
                  <FiMail style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                  <input className="glass-input" type="email" style={{ paddingLeft: 40 }} placeholder="you@example.com"
                    value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
                </div>
              </div>
              <div className="form-group">
                <label>{t('auth.phone')}</label>
                <div style={{ position: 'relative' }}>
                  <FiPhone style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                  <input className="glass-input" style={{ paddingLeft: 40 }} placeholder="+91 XXXXX XXXXX"
                    value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} />
                </div>
              </div>
            </>
          )}

          {step === 2 && role === 'customer' && (
            <>
              <div className="form-group">
                <label>{t('auth.password')}</label>
                <div style={{ position: 'relative' }}>
                  <FiLock style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                  <input className="glass-input" type="password" style={{ paddingLeft: 40 }} placeholder="••••••••"
                    value={form.password} onChange={e => setForm({ ...form, password: e.target.value })} />
                </div>
              </div>
              <div className="form-group">
                <label>{t('auth.location')}</label>
                <div style={{ position: 'relative' }}>
                  <FiMapPin style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                  <input className="glass-input" style={{ paddingLeft: 40 }} placeholder="Your city"
                    value={form.location} onChange={e => setForm({ ...form, location: e.target.value })} />
                </div>
              </div>
              <div className="form-group" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <input type="checkbox" id="terms" />
                <label htmlFor="terms" style={{ marginBottom: 0, fontSize: '0.85rem' }}>{t('auth.agreeTerms')}</label>
              </div>
            </>
          )}

          {step === 2 && role === 'worker' && (
            <>
              <div className="form-group">
                <label>{t('auth.password')}</label>
                <div style={{ position: 'relative' }}>
                  <FiLock style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                  <input className="glass-input" type="password" style={{ paddingLeft: 40 }} placeholder="••••••••"
                    value={form.password} onChange={e => setForm({ ...form, password: e.target.value })} />
                </div>
              </div>
              <div className="form-group">
                <label>{t('auth.selectSkills')}</label>
                <div className="skills-select">
                  {allSkills.map(skill => (
                    <button
                      key={skill}
                      type="button"
                      className={`skill-chip ${form.skills.includes(skill) ? 'selected' : ''}`}
                      onClick={() => toggleSkill(skill)}
                    >
                      {t(`categories.${skill}`)}
                    </button>
                  ))}
                </div>
              </div>
              <div className="form-group">
                <label>{t('auth.experience')}</label>
                <input className="glass-input" type="number" placeholder="e.g. 5"
                  value={form.experience} onChange={e => setForm({ ...form, experience: e.target.value })} />
              </div>
            </>
          )}

          {step === 3 && role === 'worker' && (
            <>
              <div className="form-group">
                <label>{t('auth.aadhaar')}</label>
                <div style={{ position: 'relative' }}>
                  <FiCreditCard style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                  <input className="glass-input" style={{ paddingLeft: 40 }} placeholder="XXXX XXXX XXXX"
                    value={form.aadhaar} onChange={e => setForm({ ...form, aadhaar: e.target.value })} />
                </div>
              </div>
              <div className="form-group">
                <label>{t('auth.hourlyRate')}</label>
                <div style={{ position: 'relative' }}>
                  <FiDollarSign style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                  <input className="glass-input" type="number" style={{ paddingLeft: 40 }} placeholder="e.g. 350"
                    value={form.hourlyRate} onChange={e => setForm({ ...form, hourlyRate: e.target.value })} />
                </div>
              </div>
              <div className="form-group">
                <label>{t('auth.location')}</label>
                <div style={{ position: 'relative' }}>
                  <FiMapPin style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                  <input className="glass-input" style={{ paddingLeft: 40 }} placeholder="Your city"
                    value={form.location} onChange={e => setForm({ ...form, location: e.target.value })} />
                </div>
              </div>
              <div className="form-group" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <input type="checkbox" id="terms2" />
                <label htmlFor="terms2" style={{ marginBottom: 0, fontSize: '0.85rem' }}>{t('auth.agreeTerms')}</label>
              </div>
            </>
          )}

          <div className="form-actions" style={{ display: 'flex', gap: 12 }}>
            {step > 1 && (
              <button type="button" className="btn-secondary" style={{ flex: 1 }} onClick={() => setStep(step - 1)}>
                {t('auth.back')}
              </button>
            )}
            <button className="btn-primary" type="submit" style={{ flex: 1 }}>
              {step < totalSteps ? t('auth.next') : t('auth.signup')}
            </button>
          </div>
        </form>

        <p className="auth-footer">
          {t('auth.hasAccount')} <Link to="/login">{t('auth.login')}</Link>
        </p>
      </div>
    </div>
  );
}
