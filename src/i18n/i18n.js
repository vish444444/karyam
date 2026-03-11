import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en.json';
import hi from './locales/hi.json';
import cg from './locales/cg.json';
import mr from './locales/mr.json';
import te from './locales/te.json';
import ta from './locales/ta.json';
import bn from './locales/bn.json';
import gu from './locales/gu.json';

export const languages = [
  { code: 'en', name: 'English', nativeName: 'English', flag: '🇬🇧' },
  { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी', flag: '🇮🇳' },
  { code: 'cg', name: 'Chhattisgarhi', nativeName: 'छत्तीसगढ़ी', flag: '🏠' },
  { code: 'mr', name: 'Marathi', nativeName: 'मराठी', flag: '🇮🇳' },
  { code: 'te', name: 'Telugu', nativeName: 'తెలుగు', flag: '🇮🇳' },
  { code: 'ta', name: 'Tamil', nativeName: 'தமிழ்', flag: '🇮🇳' },
  { code: 'bn', name: 'Bengali', nativeName: 'বাংলা', flag: '🇮🇳' },
  { code: 'gu', name: 'Gujarati', nativeName: 'ગુજરાતી', flag: '🇮🇳' },
];

const savedLang = typeof window !== 'undefined' ? localStorage.getItem('karyam-lang') : null;

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    hi: { translation: hi },
    cg: { translation: cg },
    mr: { translation: mr },
    te: { translation: te },
    ta: { translation: ta },
    bn: { translation: bn },
    gu: { translation: gu },
  },
  lng: savedLang || 'en',
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
});

export default i18n;
