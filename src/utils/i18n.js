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

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'zh-TW',
    interpolation: {
      escapeValue: false
    },
    react: {
      useSuspense: true,
    }
  })

export default i18n
