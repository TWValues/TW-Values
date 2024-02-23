import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import langEn from '../locales/en/translation.json'
import langZhTw from '../locales/zh-TW/translation.json'
import langZhCn from '../locales/zh-CN/translation.json'

const resources = {
  en: {
    translation: langEn,
  },
  zhtw: {
    translation: langZhTw,
  },
  zhcn: {
    translation: langZhCn,
  },
}

const loadLanguage = () => {
  const language = localStorage.getItem('ui.language')
  if (language === null || !(language in resources)) {
    return 'zhtw'
  }

  return language
}

i18n.use(initReactI18next).init({
  resources,
  lng: loadLanguage(),
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: true,
  },
})

export default i18n
