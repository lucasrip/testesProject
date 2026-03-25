import resources from './resources';
import 'i18next';
import enTranslation from '../pages/Translate/locales/en';
import ptTranslation from '../pages/Translate/locales/pt';

type Resources = {
  en: {
    translation: typeof enTranslation;
  };
  pt: {
    translation: typeof ptTranslation;
  };
};
declare module 'i18next' {
  interface CustomTypeOptions {
    resources: Resources['en'];
    returnNull: false;
    defaultNS: 'translation';
  }
}
