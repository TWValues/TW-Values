import { Grid } from 'antd'

export const useBreakpoint = () => {
  const screens = Grid.useBreakpoint()

  if (screens.xxl) {
    return { ...screens, size: 'xxl' }
  }
  if (screens.xl) {
    return { ...screens, size: 'xl' }
  }
  if (screens.lg) {
    return { ...screens, size: 'lg' }
  }
  if (screens.md) {
    return { ...screens, size: 'md' }
  }
  return { ...screens, size: 'sm' }
}

export const getHeaderFooterMaxWidth = () => {
  return {
    sm: { maxWidth: '1080px' },
    md: { maxWidth: '1080px' },
    lg: { maxWidth: '1080px' },
    xl: { maxWidth: '1080px' },
    xxl: { maxWidth: '1080px' },
  }[useBreakpoint().size]
}

export const getContentMaxWidth = () => {
  return {
    sm: { maxWidth: '960px' },
    md: { maxWidth: '960px' },
    lg: { maxWidth: '960px' },
    xl: { maxWidth: '960px' },
    xxl: { maxWidth: '960px' },
  }[useBreakpoint().size]
}
