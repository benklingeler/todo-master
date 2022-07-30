import i18next from 'i18next';
import enLocals from '../locals/en.locals.json';
import deLocals from '../locals/de.locals.json';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    resources: {
      de: { translation: deLocals },
      en: { translation: enLocals },
    },
  });
