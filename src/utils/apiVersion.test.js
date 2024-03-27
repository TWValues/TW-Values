import { expect, test } from 'vitest'
import { isApiVersionCompatible, isApiVersionEqual, API_VERSION_VALUE } from './apiVersion'

test('identical apiVersion', () => {
  expect(isApiVersionCompatible(API_VERSION_VALUE)).toBe(true)
  expect(isApiVersionEqual(API_VERSION_VALUE)).toBe(true)
})

test('incompatible apiVersion', () => {
  expect(isApiVersionCompatible('0')).toBe(false)
  expect(isApiVersionEqual('0')).toBe(false)
  expect(isApiVersionCompatible('0.0.0')).toBe(false)
  expect(isApiVersionEqual('0.0.0')).toBe(false)
})

test('legacy apiVersion=1', () => {
  expect(isApiVersionCompatible('1')).toBe(true)
  expect(isApiVersionEqual('1')).toBe(true)
})

test('apiVersion with identical major number only', () => {
  expect(isApiVersionCompatible('1.1000.0')).toBe(true)
  expect(isApiVersionEqual('1.1000.0')).toBe(false)
})
