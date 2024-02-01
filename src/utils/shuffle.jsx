const shuffle = (array) => {
  for (let i = 0; i < array.length; ++i) {
    let idx = Math.floor(Math.random() * array.length)
    idx = Math.min(idx, array.length - 1)
    idx = Math.max(idx, 0)

    let temp = array[i]
    array[i] = array[idx]
    array[idx] = temp
  }

  return array
}

export default shuffle
