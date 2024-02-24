import { create } from 'zustand'
import { getThemeId, getTheme } from '../themes/theme'

export const useThemeStore = create((set) => ({
  theme: (() => {
    const themeId = localStorage.getItem('ui.theme')
    if (themeId && themeId in getThemeId()) {
      return getTheme(themeId)
    }
    return getTheme(getThemeId().light)
  })(),
  setTheme: (themeId) =>
    set(() => {
      localStorage.setItem('ui.theme', themeId)
      return { theme: getTheme(themeId) }
    }),
}))
