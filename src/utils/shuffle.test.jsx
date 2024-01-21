import { expect, test } from 'vitest'
import shuffle from './shuffle'

test('shuffle should give different results on each call.', () => {
  const getArray = (len) => {
    let arr = []
    for (let i = 0; i < len; ++i) {
      arr.push(i)
    }

    return arr
  }

  expect(shuffle(getArray(1024))).not.toEqual(shuffle(getArray(1024)))
})
