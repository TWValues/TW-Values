import * as light from './light'
import * as dark from './dark'

export const getThemeId = () => ({
  light: 'light',
  dark: 'dark',
})

export const getTheme = (id) => {
  if (id == 'light') {
    return light.getTheme()
  }
  if (id == 'dark') {
    return dark.getTheme()
  }

  return light.getTheme()
}
