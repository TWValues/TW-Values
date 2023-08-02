import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import translationEN from '../locales/en/translation.json'
import translationZHTW from '../locales/zh-TW/translation.json'

const resources = {
  en: {
    translation: translationEN
  },
  'zh-TW': {
    translation: translationZHTW
  },
}

const loadLanguage = () => {
  const language = localStorage.getItem('ui.language')
  if (language === null) {
    return 'zh-TW'
  }

  return language
}

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: loadLanguage(),
    interpolation: {
      escapeValue: false
    },
    react: {
      useSuspense: true,
    }
  })

export default i18n
