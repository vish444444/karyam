import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

export default function HowItWorks() {
  const { t } = useTranslation();

  const steps = [
    { num: 1, icon: '🔍', key: 'step1' },
    { num: 2, icon: '✅', key: 'step2' },
    { num: 3, icon: '📅', key: 'step3' },
    { num: 4, icon: '⭐', key: 'step4' },
  ];

  return (
    <div className="page-content">
      <section className="section" style={{ paddingTop: 120 }} id="how-it-works-page">
        <div className="container">
          <div className="section-header">
            <h2 className="gradient-text" style={{ fontSize: '2.5rem' }}>{t('howItWorks.title')}</h2>
            <p style={{ fontSize: '1.15rem' }}>{t('howItWorks.subtitle')}</p>
          </div>

          <div className="grid-4 stagger-children" style={{ marginBottom: 64 }}>
            {steps.map(step => (
              <div className="step-card glass-card" key={step.num}>
                <div className="step-number">{step.num}</div>
                <div className="step-icon">{step.icon}</div>
                <h3>{t(`howItWorks.${step.key}Title`)}</h3>
                <p>{t(`howItWorks.${step.key}Desc`)}</p>
              </div>
            ))}
          </div>

          {/* For Customer & Workers */}
          <div className="grid-2 stagger-children" style={{ gap: 32, marginBottom: 48 }}>
            <div className="glass-card" style={{ padding: 40 }}>
              <div style={{ fontSize: '2.5rem', marginBottom: 16 }}>👤</div>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: 12 }}>
                <span className="gradient-text">{t('howItWorks.forCustomers')}</span>
              </h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
                {t('howItWorks.forCustomersDesc')}
              </p>
              <ul style={{ marginTop: 16, display: 'flex', flexDirection: 'column', gap: 8 }}>
                {['✓ Verified & background-checked workers',
                  '✓ Transparent hourly/daily pricing',
                  '✓ Ratings & reviews from real customers',
                  '✓ Direct communication — no middlemen',
                  '✓ Flexible booking at your convenience'].map((item, i) => (
                  <li key={i} style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="glass-card" style={{ padding: 40 }}>
              <div style={{ fontSize: '2.5rem', marginBottom: 16 }}>🛠️</div>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: 12 }}>
                <span className="gradient-text-2">{t('howItWorks.forWorkers')}</span>
              </h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
                {t('howItWorks.forWorkersDesc')}
              </p>
              <ul style={{ marginTop: 16, display: 'flex', flexDirection: 'column', gap: 8 }}>
                {['✓ Set your own hourly rates',
                  '✓ Get direct job requests',
                  '✓ No commission to middlemen',
                  '✓ Build your digital reputation',
                  '✓ Flexible work schedule'].map((item, i) => (
                  <li key={i} style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* CTA */}
          <div className="cta-banner glass-card" style={{ marginTop: 32 }}>
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
