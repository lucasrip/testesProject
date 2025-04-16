import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import enTranslation from './locales/en';
import ptTranslation from './locales/pt';

// removere enTranslation ptTranslation e resources

const resources = {
  en: {
    translation: enTranslation,
  },
  pt: {
    translation: ptTranslation,
  },
};

const i18nConfig = {
  resources,
  debug: true,
  fallbackLng: 'pt',
  defaultNS: 'translation',
  ns: ['translation'],
  interpolation: {
    escapeValue: false,
  },
};

i18next.use(LanguageDetector).use(initReactI18next).init(i18nConfig);

export default i18next;
