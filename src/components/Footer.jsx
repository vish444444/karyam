import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FiTwitter, FiInstagram, FiFacebook, FiYoutube } from 'react-icons/fi';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h3 className="gradient-text">{t('footer.brand')}</h3>
            <p>{t('footer.brandDesc')}</p>
            <div className="social-links">
              <a href="#" className="social-link" aria-label="Twitter"><FiTwitter /></a>
              <a href="#" className="social-link" aria-label="Instagram"><FiInstagram /></a>
              <a href="#" className="social-link" aria-label="Facebook"><FiFacebook /></a>
              <a href="#" className="social-link" aria-label="YouTube"><FiYoutube /></a>
            </div>
          </div>
          <div className="footer-col">
            <h4>{t('footer.quickLinks')}</h4>
            <Link to="/">{t('nav.home')}</Link>
            <Link to="/categories">{t('nav.services')}</Link>
            <Link to="/how-it-works">{t('nav.howItWorks')}</Link>
            <Link to="/marketplace">{t('nav.marketplace')}</Link>
          </div>
          <div className="footer-col">
            <h4>{t('footer.support')}</h4>
            <a href="#">{t('footer.helpCenter')}</a>
            <a href="#">{t('footer.contactUs')}</a>
            <a href="#">{t('footer.termsOfService')}</a>
            <a href="#">{t('footer.privacyPolicy')}</a>
          </div>
          <div className="footer-col">
            <h4>{t('footer.about')}</h4>
            <a href="#">Dev Vrat Sao</a>
            <a href="#">GEC Raipur</a>
            <a href="mailto:devvratsao2810@gmail.com">devvratsao2810@gmail.com</a>
            <a href="tel:7247748131">7247748131</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>{t('footer.copyright')} {t('footer.madeWith')}</p>
        </div>
      </div>
    </footer>
  );
}
