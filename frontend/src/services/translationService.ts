import i18next from 'i18next';

export const setTranslation = (language: 'en' | 'de') => {
  i18next.changeLanguage(language);
};

export const getTranslationLanguage = () => {
  return i18next.language;
};
