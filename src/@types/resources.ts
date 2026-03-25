import enTranslation from '../pages/Translate/locales/en';
import ptTranslation from '../pages/Translate/locales/pt';
const resources = {
  en: {
    translation: typeof enTranslation,
  },
  pt: {
    translation: typeof ptTranslation,
  },
} as const;

export default resources;
