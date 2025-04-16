import resources from './resources';
import 'i18next';
import enTranslation from '../i18n/locales/en';
import ptTranslation from '../i18n/locales/pt';


type Resources = {
  en: {
    translation: typeof enTranslation,
  },
  pt: {
    translation: typeof ptTranslation,
  },
};
declare module 'i18next' {
  interface CustomTypeOptions {
    resources:  Resources['en'];
    returnNull: false;
    defaultNS: 'translation';
  }
}
 

