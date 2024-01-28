import { expect, test } from 'vitest'
import { calculateScores, MULTIPLIER } from './Quiz'
import { getPoliticalPartyMatchScores } from './Result'
import QUESTIONS from '../../data/question'
import POLITICAL_PARTIES from '../../data/politicalparty'

const checkWeights = (weights, partyId) => {
  const getParty = (id) => POLITICAL_PARTIES.filter(value => value.id == id)[0]
  const party = getParty(partyId)
  const threshold = 5
  expect(weights.economic).toBeGreaterThanOrEqual(party.weight.economic - threshold)
  expect(weights.economic).toBeLessThanOrEqual(party.weight.economic + threshold)
  expect(weights.civil).toBeGreaterThanOrEqual(party.weight.civil - threshold)
  expect(weights.civil).toBeLessThanOrEqual(party.weight.civil + threshold)
  expect(weights.environmental).toBeGreaterThanOrEqual(party.weight.environmental - threshold)
  expect(weights.environmental).toBeLessThanOrEqual(party.weight.environmental + threshold)
  expect(weights.societal).toBeGreaterThanOrEqual(party.weight.societal - threshold)
  expect(weights.societal).toBeLessThanOrEqual(party.weight.societal + threshold)
  expect(weights.sovereignty).toBeGreaterThanOrEqual(party.weight.sovereignty - threshold)
  expect(weights.sovereignty).toBeLessThanOrEqual(party.weight.sovereignty + threshold)
  expect(weights.us_china_relation).toBeGreaterThanOrEqual(party.weight.us_china_relation - threshold)
  expect(weights.us_china_relation).toBeLessThanOrEqual(party.weight.us_china_relation + threshold)
}

test('kmt', () => {
  const choices = {
    q0000: MULTIPLIER.a,
    q0001: MULTIPLIER.d,
    q0002: MULTIPLIER.a,
    q0003: MULTIPLIER.d,
    q0004: MULTIPLIER.d,
    q0100: MULTIPLIER.n,
    q0101: MULTIPLIER.sa,
    q0102: MULTIPLIER.a,
    q0103: MULTIPLIER.d,
    q0104: MULTIPLIER.a,
    q0105: MULTIPLIER.d,
    q0200: MULTIPLIER.a,
    q0201: MULTIPLIER.a,
    q0300: MULTIPLIER.d,
    q0301: MULTIPLIER.n,
    q0302: MULTIPLIER.n,
    q0400: MULTIPLIER.a,
    q0401: MULTIPLIER.d,
    q0402: MULTIPLIER.d,
    q0403: MULTIPLIER.n,
    q0404: MULTIPLIER.a,
    q0405: MULTIPLIER.d,
    q0500: MULTIPLIER.sa,
    q0501: MULTIPLIER.d,
    q0502: MULTIPLIER.a,
    q0503: MULTIPLIER.a,
    q0504: MULTIPLIER.a,
    q0505: MULTIPLIER.a,
    q0600: MULTIPLIER.a,
    q0601: MULTIPLIER.d,
    q0602: MULTIPLIER.sd,
    q0603: MULTIPLIER.sd,
    q0604: MULTIPLIER.sd,
    q0605: MULTIPLIER.d,
    q0700: MULTIPLIER.sa,
    q0701: MULTIPLIER.a,
    q0702: MULTIPLIER.a,
    q0703: MULTIPLIER.n,
    q0704: MULTIPLIER.a,
    q0705: MULTIPLIER.a,
    q0800: MULTIPLIER.a,
    q0801: MULTIPLIER.d,
    q0802: MULTIPLIER.d,
    q0803: MULTIPLIER.sd,
    q0900: MULTIPLIER.a,
    q0901: MULTIPLIER.a,
    q0902: MULTIPLIER.d,
    q1000: MULTIPLIER.n,
    q1001: MULTIPLIER.sd,
    q1002: MULTIPLIER.d,
    q1003: MULTIPLIER.d,
    q1100: MULTIPLIER.a,
    q1101: MULTIPLIER.d,
    q1102: MULTIPLIER.a,
    q1103: MULTIPLIER.a,
    q1200: MULTIPLIER.d,
    q1201: MULTIPLIER.d,
    q1202: MULTIPLIER.d,
    q1203: MULTIPLIER.d,
    q1300: MULTIPLIER.a,
    q1301: MULTIPLIER.a,
    q1302: MULTIPLIER.a,
  }

  const weights = calculateScores(QUESTIONS, choices)
  checkWeights(weights, 'kmt')
  const match = getPoliticalPartyMatchScores(weights)
  const party = match.at(0)
  expect(party.id).toEqual('kmt')
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
    q0300: MULTIPLIER.d,
    q0301: MULTIPLIER.n,
    q0302: MULTIPLIER.n,
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
    q0604: MULTIPLIER.d,
    q0605: MULTIPLIER.a,
    q0700: MULTIPLIER.d,
    q0701: MULTIPLIER.d,
    q0702: MULTIPLIER.d,
    q0703: MULTIPLIER.n,
    q0704: MULTIPLIER.a,
    q0705: MULTIPLIER.d,
    q0800: MULTIPLIER.a,
    q0801: MULTIPLIER.a,
    q0802: MULTIPLIER.a,
    q0803: MULTIPLIER.a,
    q0900: MULTIPLIER.a,
    q0901: MULTIPLIER.a,
    q0902: MULTIPLIER.d,
    q1000: MULTIPLIER.a,
    q1001: MULTIPLIER.a,
    q1002: MULTIPLIER.a,
    q1003: MULTIPLIER.n,
    q1100: MULTIPLIER.d,
    q1101: MULTIPLIER.d,
    q1102: MULTIPLIER.d,
    q1103: MULTIPLIER.d,
    q1200: MULTIPLIER.a,
    q1201: MULTIPLIER.a,
    q1202: MULTIPLIER.a,
    q1203: MULTIPLIER.a,
    q1300: MULTIPLIER.d,
    q1301: MULTIPLIER.d,
    q1302: MULTIPLIER.a,
  }

  const weights = calculateScores(QUESTIONS, choices)
  checkWeights(weights, 'dpp')
  const match = getPoliticalPartyMatchScores(weights)
  const party = match.at(0)
  expect(party.id).toEqual('dpp')
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
    q0105: MULTIPLIER.d,
    q0200: MULTIPLIER.a,
    q0201: MULTIPLIER.a,
    q0300: MULTIPLIER.d,
    q0301: MULTIPLIER.n,
    q0302: MULTIPLIER.n,
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
    q0504: MULTIPLIER.d,
    q0505: MULTIPLIER.sd,
    q0600: MULTIPLIER.a,
    q0601: MULTIPLIER.a,
    q0602: MULTIPLIER.sa,
    q0603: MULTIPLIER.sa,
    q0604: MULTIPLIER.n,
    q0605: MULTIPLIER.n,
    q0700: MULTIPLIER.sd,
    q0701: MULTIPLIER.d,
    q0702: MULTIPLIER.d,
    q0703: MULTIPLIER.d,
    q0704: MULTIPLIER.n,
    q0705: MULTIPLIER.d,
    q0800: MULTIPLIER.a,
    q0801: MULTIPLIER.a,
    q0802: MULTIPLIER.a,
    q0803: MULTIPLIER.a,
    q0900: MULTIPLIER.d,
    q0901: MULTIPLIER.d,
    q0902: MULTIPLIER.d,
    q1000: MULTIPLIER.a,
    q1001: MULTIPLIER.a,
    q1002: MULTIPLIER.a,
    q1003: MULTIPLIER.a,
    q1100: MULTIPLIER.d,
    q1101: MULTIPLIER.d,
    q1102: MULTIPLIER.d,
    q1103: MULTIPLIER.d,
    q1200: MULTIPLIER.a,
    q1201: MULTIPLIER.a,
    q1202: MULTIPLIER.a,
    q1203: MULTIPLIER.sa,
    q1300: MULTIPLIER.d,
    q1301: MULTIPLIER.sd,
    q1302: MULTIPLIER.a,
  }

  const weights = calculateScores(QUESTIONS, choices)
  checkWeights(weights, 'npp')
  const match = getPoliticalPartyMatchScores(weights)
  const party = match.at(0)
  expect(party.id).toEqual('npp')
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
    q0201: MULTIPLIER.a,
    q0300: MULTIPLIER.d,
    q0301: MULTIPLIER.n,
    q0302: MULTIPLIER.n,
    q0400: MULTIPLIER.a,
    q0401: MULTIPLIER.d,
    q0402: MULTIPLIER.d,
    q0403: MULTIPLIER.n,
    q0404: MULTIPLIER.a,
    q0405: MULTIPLIER.a,
    q0500: MULTIPLIER.n,
    q0501: MULTIPLIER.d,
    q0502: MULTIPLIER.a,
    q0503: MULTIPLIER.a,
    q0504: MULTIPLIER.a,
    q0505: MULTIPLIER.a,
    q0600: MULTIPLIER.a,
    q0601: MULTIPLIER.d,
    q0602: MULTIPLIER.a,
    q0603: MULTIPLIER.sd,
    q0604: MULTIPLIER.d,
    q0605: MULTIPLIER.n,
    q0700: MULTIPLIER.a,
    q0701: MULTIPLIER.a,
    q0702: MULTIPLIER.d,
    q0703: MULTIPLIER.d,
    q0704: MULTIPLIER.n,
    q0705: MULTIPLIER.a,
    q0800: MULTIPLIER.a,
    q0801: MULTIPLIER.d,
    q0802: MULTIPLIER.a,
    q0803: MULTIPLIER.sd,
    q0900: MULTIPLIER.a,
    q0901: MULTIPLIER.a,
    q0902: MULTIPLIER.d,
    q1000: MULTIPLIER.n,
    q1001: MULTIPLIER.d,
    q1002: MULTIPLIER.d,
    q1003: MULTIPLIER.d,
    q1100: MULTIPLIER.n,
    q1101: MULTIPLIER.d,
    q1102: MULTIPLIER.d,
    q1103: MULTIPLIER.n,
    q1200: MULTIPLIER.d,
    q1201: MULTIPLIER.d,
    q1202: MULTIPLIER.d,
    q1203: MULTIPLIER.d,
    q1300: MULTIPLIER.a,
    q1301: MULTIPLIER.a,
    q1302: MULTIPLIER.a,
  }

  const weights = calculateScores(QUESTIONS, choices)
  checkWeights(weights, 'tpp')
  const match = getPoliticalPartyMatchScores(weights)
  const party = match.at(0)
  expect(party.id).toEqual('tpp')
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
    q0200: MULTIPLIER.a,
    q0201: MULTIPLIER.a,
    q0300: MULTIPLIER.d,
    q0301: MULTIPLIER.n,
    q0302: MULTIPLIER.n,
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
    q0604: MULTIPLIER.n,
    q0605: MULTIPLIER.n,
    q0700: MULTIPLIER.d,
    q0701: MULTIPLIER.d,
    q0702: MULTIPLIER.d,
    q0703: MULTIPLIER.d,
    q0704: MULTIPLIER.d,
    q0705: MULTIPLIER.d,
    q0800: MULTIPLIER.sa,
    q0801: MULTIPLIER.sa,
    q0802: MULTIPLIER.sa,
    q0803: MULTIPLIER.a,
    q0900: MULTIPLIER.sd,
    q0901: MULTIPLIER.sd,
    q0902: MULTIPLIER.d,
    q1000: MULTIPLIER.a,
    q1001: MULTIPLIER.a,
    q1002: MULTIPLIER.a,
    q1003: MULTIPLIER.a,
    q1100: MULTIPLIER.d,
    q1101: MULTIPLIER.d,
    q1102: MULTIPLIER.d,
    q1103: MULTIPLIER.d,
    q1200: MULTIPLIER.a,
    q1201: MULTIPLIER.a,
    q1202: MULTIPLIER.a,
    q1203: MULTIPLIER.n,
    q1300: MULTIPLIER.d,
    q1301: MULTIPLIER.n,
    q1302: MULTIPLIER.a,
  }

  const weights = calculateScores(QUESTIONS, choices)
  checkWeights(weights, 'gpt')
  const match = getPoliticalPartyMatchScores(weights)
  const party = match.at(0)
  expect(party.id).toEqual('gpt')
  expect(party.rate).toBeGreaterThanOrEqual(0.95)
})
