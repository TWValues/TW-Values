const identity = (x) => x

export const reduceWithDelimiter = (array, delim, fn = identity) =>
  array.reduce((accu, curr) => {
    if (accu.length > 0) {
      accu += delim
    }
    accu += fn(curr)
    return accu
  }, '')
