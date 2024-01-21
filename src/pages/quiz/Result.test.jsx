import { expect, test } from 'vitest'
import { calculateScores, MULTIPLIER } from './Quiz'
import { getPoliticalPartyMatchScores } from './Result'
import QUESTIONS from '../../data/questions'

test('kmt', () => {
  const choices = {
    q0000: MULTIPLIER.a,
    q0001: MULTIPLIER.d,
    q0002: MULTIPLIER.a,
    q0003: MULTIPLIER.d,
    q0004: MULTIPLIER.d,
    q0100: MULTIPLIER.d,
    q0101: MULTIPLIER.sa,
    q0102: MULTIPLIER.a,
    q0103: MULTIPLIER.a,
    q0104: MULTIPLIER.a,
    q0105: MULTIPLIER.d,
    q0200: MULTIPLIER.a,
    q0201: MULTIPLIER.d,
    q0202: MULTIPLIER.d,
    q0203: MULTIPLIER.sd,
    q0300: MULTIPLIER.a,
    q0301: MULTIPLIER.a,
    q0302: MULTIPLIER.d,
    q0400: MULTIPLIER.a,
    q0401: MULTIPLIER.d,
    q0402: MULTIPLIER.d,
    q0403: MULTIPLIER.d,
    q0404: MULTIPLIER.a,
    q0405: MULTIPLIER.d,
    q0500: MULTIPLIER.a,
    q0501: MULTIPLIER.d,
    q0502: MULTIPLIER.a,
    q0503: MULTIPLIER.a,
    q0504: MULTIPLIER.a,
    q0505: MULTIPLIER.a,
    q0600: MULTIPLIER.a,
    q0601: MULTIPLIER.d,
    q0602: MULTIPLIER.d,
    q0603: MULTIPLIER.sd,
    q0604: MULTIPLIER.a,
    q0605: MULTIPLIER.sd,
    q0606: MULTIPLIER.d,
    q0700: MULTIPLIER.a,
    q0701: MULTIPLIER.a,
    q0702: MULTIPLIER.a,
    q0703: MULTIPLIER.a,
    q0704: MULTIPLIER.a,
    q0705: MULTIPLIER.a,
    q1000: MULTIPLIER.d,
    q1001: MULTIPLIER.sd,
    q1002: MULTIPLIER.d,
    q1100: MULTIPLIER.a,
    q1101: MULTIPLIER.a,
    q1102: MULTIPLIER.a,
    q1103: MULTIPLIER.d,
    q1104: MULTIPLIER.a,
    q1200: MULTIPLIER.d,
    q1201: MULTIPLIER.d,
    q1202: MULTIPLIER.d,
    q1203: MULTIPLIER.d,
    q1300: MULTIPLIER.a,
    q1301: MULTIPLIER.a,
    q1302: MULTIPLIER.a,
  }

  const weights = calculateScores(QUESTIONS, choices)
  const match = getPoliticalPartyMatchScores(weights)
  const party = match.at(0)
  expect(party.id).toBe('kmt')
  expect(party.rate).toBeGreaterThanOrEqual(0.95)
})

test('dpp', () => {
  const choices = {
    q0000: MULTIPLIER.a,
    q0001: MULTIPLIER.d,
    q0002: MULTIPLIER.a,
    q0003: MULTIPLIER.a,
    q0004: MULTIPLIER.a,
    q0100: MULTIPLIER.d,
    q0101: MULTIPLIER.sa,
    q0102: MULTIPLIER.n,
    q0103: MULTIPLIER.d,
    q0104: MULTIPLIER.d,
    q0105: MULTIPLIER.d,
    q0200: MULTIPLIER.a,
    q0201: MULTIPLIER.a,
    q0202: MULTIPLIER.a,
    q0203: MULTIPLIER.a,
    q0300: MULTIPLIER.a,
    q0301: MULTIPLIER.a,
    q0302: MULTIPLIER.d,
    q0400: MULTIPLIER.a,
    q0401: MULTIPLIER.d,
    q0402: MULTIPLIER.d,
    q0403: MULTIPLIER.a,
    q0404: MULTIPLIER.a,
    q0405: MULTIPLIER.d,
    q0500: MULTIPLIER.d,
    q0501: MULTIPLIER.a,
    q0502: MULTIPLIER.a,
    q0503: MULTIPLIER.d,
    q0504: MULTIPLIER.d,
    q0505: MULTIPLIER.d,
    q0600: MULTIPLIER.a,
    q0601: MULTIPLIER.d,
    q0602: MULTIPLIER.a,
    q0603: MULTIPLIER.a,
    q0604: MULTIPLIER.a,
    q0605: MULTIPLIER.d,
    q0606: MULTIPLIER.a,
    q0700: MULTIPLIER.d,
    q0701: MULTIPLIER.d,
    q0702: MULTIPLIER.d,
    q0703: MULTIPLIER.a,
    q0704: MULTIPLIER.n,
    q0705: MULTIPLIER.d,
    q1000: MULTIPLIER.a,
    q1001: MULTIPLIER.a,
    q1002: MULTIPLIER.a,
    q1100: MULTIPLIER.d,
    q1101: MULTIPLIER.d,
    q1102: MULTIPLIER.d,
    q1103: MULTIPLIER.d,
    q1104: MULTIPLIER.d,
    q1200: MULTIPLIER.a,
    q1201: MULTIPLIER.a,
    q1202: MULTIPLIER.a,
    q1203: MULTIPLIER.a,
    q1300: MULTIPLIER.d,
    q1301: MULTIPLIER.d,
    q1302: MULTIPLIER.a,
  }

  const weights = calculateScores(QUESTIONS, choices)
  const match = getPoliticalPartyMatchScores(weights)
  const party = match.at(0)
  expect(party.id).toBe('dpp')
  expect(party.rate).toBeGreaterThanOrEqual(0.95)
})

test('npp', () => {
  const choices = {
    q0000: MULTIPLIER.a,
    q0001: MULTIPLIER.a,
    q0002: MULTIPLIER.a,
    q0003: MULTIPLIER.a,
    q0004: MULTIPLIER.a,
    q0100: MULTIPLIER.sd,
    q0101: MULTIPLIER.a,
    q0102: MULTIPLIER.d,
    q0103: MULTIPLIER.d,
    q0104: MULTIPLIER.d,
    q0105: MULTIPLIER.sd,
    q0200: MULTIPLIER.a,
    q0201: MULTIPLIER.a,
    q0202: MULTIPLIER.a,
    q0203: MULTIPLIER.a,
    q0300: MULTIPLIER.d,
    q0301: MULTIPLIER.d,
    q0302: MULTIPLIER.d,
    q0400: MULTIPLIER.a,
    q0401: MULTIPLIER.d,
    q0402: MULTIPLIER.a,
    q0403: MULTIPLIER.a,
    q0404: MULTIPLIER.a,
    q0405: MULTIPLIER.n,
    q0500: MULTIPLIER.sd,
    q0501: MULTIPLIER.d,
    q0502: MULTIPLIER.a,
    q0503: MULTIPLIER.d,
    q0504: MULTIPLIER.n,
    q0505: MULTIPLIER.sd,
    q0600: MULTIPLIER.a,
    q0601: MULTIPLIER.a,
    q0602: MULTIPLIER.sa,
    q0603: MULTIPLIER.sa,
    q0604: MULTIPLIER.a,
    q0605: MULTIPLIER.n,
    q0606: MULTIPLIER.n,
    q0700: MULTIPLIER.sd,
    q0701: MULTIPLIER.d,
    q0702: MULTIPLIER.d,
    q0703: MULTIPLIER.d,
    q0704: MULTIPLIER.n,
    q0705: MULTIPLIER.sd,
    q1000: MULTIPLIER.a,
    q1001: MULTIPLIER.a,
    q1002: MULTIPLIER.a,
    q1100: MULTIPLIER.sd,
    q1101: MULTIPLIER.sd,
    q1102: MULTIPLIER.d,
    q1103: MULTIPLIER.sd,
    q1104: MULTIPLIER.sd,
    q1200: MULTIPLIER.a,
    q1201: MULTIPLIER.n,
    q1202: MULTIPLIER.a,
    q1203: MULTIPLIER.a,
    q1300: MULTIPLIER.d,
    q1301: MULTIPLIER.sd,
    q1302: MULTIPLIER.a,
  }

  const weights = calculateScores(QUESTIONS, choices)
  const match = getPoliticalPartyMatchScores(weights)
  const party = match.at(0)
  expect(party.id).toBe('npp')
  expect(party.rate).toBeGreaterThanOrEqual(0.95)
})

test('tpp', () => {
  const choices = {
    q0000: MULTIPLIER.a,
    q0001: MULTIPLIER.d,
    q0002: MULTIPLIER.a,
    q0003: MULTIPLIER.d,
    q0004: MULTIPLIER.d,
    q0100: MULTIPLIER.d,
    q0101: MULTIPLIER.sa,
    q0102: MULTIPLIER.d,
    q0103: MULTIPLIER.d,
    q0104: MULTIPLIER.d,
    q0105: MULTIPLIER.sa,
    q0200: MULTIPLIER.a,
    q0201: MULTIPLIER.d,
    q0202: MULTIPLIER.a,
    q0203: MULTIPLIER.sd,
    q0300: MULTIPLIER.a,
    q0301: MULTIPLIER.a,
    q0302: MULTIPLIER.d,
    q0400: MULTIPLIER.a,
    q0401: MULTIPLIER.d,
    q0402: MULTIPLIER.a,
    q0403: MULTIPLIER.a,
    q0404: MULTIPLIER.a,
    q0405: MULTIPLIER.a,
    q0500: MULTIPLIER.d,
    q0501: MULTIPLIER.d,
    q0502: MULTIPLIER.a,
    q0503: MULTIPLIER.a,
    q0504: MULTIPLIER.a,
    q0505: MULTIPLIER.a,
    q0600: MULTIPLIER.a,
    q0601: MULTIPLIER.d,
    q0602: MULTIPLIER.a,
    q0603: MULTIPLIER.sd,
    q0604: MULTIPLIER.a,
    q0605: MULTIPLIER.d,
    q0606: MULTIPLIER.d,
    q0700: MULTIPLIER.a,
    q0701: MULTIPLIER.a,
    q0702: MULTIPLIER.d,
    q0703: MULTIPLIER.n,
    q0704: MULTIPLIER.n,
    q0705: MULTIPLIER.a,
    q1000: MULTIPLIER.a,
    q1001: MULTIPLIER.d,
    q1002: MULTIPLIER.d,
    q1100: MULTIPLIER.d,
    q1101: MULTIPLIER.n,
    q1102: MULTIPLIER.a,
    q1103: MULTIPLIER.d,
    q1104: MULTIPLIER.d,
    q1200: MULTIPLIER.d,
    q1201: MULTIPLIER.d,
    q1202: MULTIPLIER.d,
    q1203: MULTIPLIER.d,
    q1300: MULTIPLIER.a,
    q1301: MULTIPLIER.a,
    q1302: MULTIPLIER.a,
  }

  const weights = calculateScores(QUESTIONS, choices)
  const match = getPoliticalPartyMatchScores(weights)
  const party = match.at(0)
  expect(party.id).toBe('tpp')
  expect(party.rate).toBeGreaterThanOrEqual(0.95)
})

test('gpt', () => {
  const choices = {
    q0000: MULTIPLIER.a,
    q0001: MULTIPLIER.a,
    q0002: MULTIPLIER.a,
    q0003: MULTIPLIER.a,
    q0004: MULTIPLIER.a,
    q0100: MULTIPLIER.d,
    q0101: MULTIPLIER.a,
    q0102: MULTIPLIER.d,
    q0103: MULTIPLIER.d,
    q0104: MULTIPLIER.d,
    q0105: MULTIPLIER.d,
    q0200: MULTIPLIER.sa,
    q0201: MULTIPLIER.sa,
    q0202: MULTIPLIER.sa,
    q0203: MULTIPLIER.a,
    q0300: MULTIPLIER.sd,
    q0301: MULTIPLIER.d,
    q0302: MULTIPLIER.sd,
    q0400: MULTIPLIER.a,
    q0401: MULTIPLIER.d,
    q0402: MULTIPLIER.a,
    q0403: MULTIPLIER.a,
    q0404: MULTIPLIER.a,
    q0405: MULTIPLIER.sa,
    q0500: MULTIPLIER.sd,
    q0501: MULTIPLIER.d,
    q0502: MULTIPLIER.a,
    q0503: MULTIPLIER.d,
    q0504: MULTIPLIER.d,
    q0505: MULTIPLIER.d,
    q0600: MULTIPLIER.a,
    q0601: MULTIPLIER.a,
    q0602: MULTIPLIER.sa,
    q0603: MULTIPLIER.a,
    q0604: MULTIPLIER.a,
    q0605: MULTIPLIER.a,
    q0606: MULTIPLIER.n,
    q0700: MULTIPLIER.d,
    q0701: MULTIPLIER.d,
    q0702: MULTIPLIER.d,
    q0703: MULTIPLIER.d,
    q0704: MULTIPLIER.d,
    q0705: MULTIPLIER.d,
    q1000: MULTIPLIER.a,
    q1001: MULTIPLIER.a,
    q1002: MULTIPLIER.a,
    q1100: MULTIPLIER.d,
    q1101: MULTIPLIER.d,
    q1102: MULTIPLIER.d,
    q1103: MULTIPLIER.d,
    q1104: MULTIPLIER.d,
    q1200: MULTIPLIER.a,
    q1201: MULTIPLIER.a,
    q1202: MULTIPLIER.a,
    q1203: MULTIPLIER.n,
    q1300: MULTIPLIER.d,
    q1301: MULTIPLIER.n,
    q1302: MULTIPLIER.a,
  }

  const weights = calculateScores(QUESTIONS, choices)
  const match = getPoliticalPartyMatchScores(weights)
  const party = match.at(0)
  expect(party.id).toBe('gpt')
  expect(party.rate).toBeGreaterThanOrEqual(0.95)
})