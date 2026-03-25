import enTranslation from '../i18n/locales/en';
import ptTranslation from '../i18n/locales/pt';
const resources = {
  en: {
    translation: typeof enTranslation,
  },
  pt: {
    translation: typeof ptTranslation,
  },
} as const;

export default resources;
