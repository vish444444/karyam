import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../context/ThemeContext';
import { useAuth } from '../context/AuthContext';
import { languages } from '../i18n/i18n';
import { FiSun, FiMoon, FiMenu, FiX, FiGlobe, FiChevronDown } from 'react-icons/fi';

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const { user, logout } = useAuth();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setLangOpen(false);
  }, [location]);

  const changeLang = (code) => {
    i18n.changeLanguage(code);
    localStorage.setItem('karyam-lang', code);
    setLangOpen(false);
  };

  const currentLang = languages.find(l => l.code === i18n.language) || languages[0];

  const navLinks = [
    { path: '/', label: t('nav.home') },
    { path: '/categories', label: t('nav.services') },
    { path: '/how-it-works', label: t('nav.howItWorks') },
    { path: '/marketplace', label: t('nav.marketplace') },
  ];

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="main-navbar">
        <div className="navbar-inner">
          <Link to="/" className="navbar-logo">
            <div className="logo-icon">क</div>
            <span>
              <span className="gradient-text">KARYAM</span>
              <span className="sanskrit"> कार्यम्</span>
            </span>
          </Link>

          <div className="navbar-links">
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className={location.pathname === link.path ? 'active' : ''}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="navbar-actions">
            {/* Language Selector */}
            <div className="lang-selector">
              <button
                className="lang-btn"
                onClick={() => setLangOpen(!langOpen)}
                id="language-selector"
              >
                <FiGlobe />
                <span>{currentLang.nativeName}</span>
                <FiChevronDown style={{ fontSize: '0.7rem' }} />
              </button>
              {langOpen && (
                <div className="lang-dropdown">
                  {languages.map(lang => (
                    <button
                      key={lang.code}
                      className={`lang-option ${i18n.language === lang.code ? 'active' : ''}`}
                      onClick={() => changeLang(lang.code)}
                    >
                      <span>{lang.flag}</span>
                      <span>
                        <span className="native-name">{lang.nativeName}</span>
                        <br />
                        <span className="eng-name">{lang.name}</span>
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Theme Toggle */}
            <button
              className="theme-toggle"
              onClick={toggleTheme}
              id="theme-toggle"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <FiSun /> : <FiMoon />}
            </button>

            {/* Auth buttons */}
            {user ? (
              <button className="btn-secondary btn-small" onClick={logout}>
                {t('nav.logout')}
              </button>
            ) : (
              <Link to="/login" className="btn-primary btn-small" id="login-btn">
                {t('nav.login')}
              </Link>
            )}

            {/* Hamburger */}
            <button
              className="hamburger"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileOpen ? 'open' : ''}`}>
        {navLinks.map(link => (
          <Link
            key={link.path}
            to={link.path}
            className={location.pathname === link.path ? 'active' : ''}
          >
            {link.label}
          </Link>
        ))}
        {user ? (
          <>
            <Link to="/dashboard">{t('nav.dashboard')}</Link>
            <button className="btn-secondary" onClick={logout}>{t('nav.logout')}</button>
          </>
        ) : (
          <>
            <Link to="/login">{t('nav.login')}</Link>
            <Link to="/signup">{t('nav.signup')}</Link>
          </>
        )}
      </div>
    </>
  );
}
