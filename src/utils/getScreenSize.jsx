
const getScreenSize = (screens) => {
  if (screens.xxl) {
    return 'xxl'
  }
  if (screens.xl) {
    return 'xl'
  }
  if (screens.lg) {
    return 'lg'
  }
  if (screens.md) {
    return 'md'
  }

  return 'sm'
}

export default getScreenSize
