import { Grid } from 'antd'

const useBreakpoint = () => {
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

export default useBreakpoint
