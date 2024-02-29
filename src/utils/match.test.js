import { expect, test } from 'vitest'
import { getValueScores, getPoliticalPartyMatchScores } from './match'
import { getQuestions } from '../data/question'
import { getIdeology } from '../data/ideology'
import { getPoliticalParty } from '../data/political_party'
import MULTIPLIER from './multiplier'

expect.extend({
  toEqualWithError(received, value, error) {
    const { isNot } = this
    const min = value - error
    const max = value + error
    return {
      pass: received >= min && received <= max,
      message: () => `expected ${received}${isNot ? ' not' : ''} to be within [${min}, ${max}]`,
    }
  },
  toEqualWithinRange(received, min, max) {
    const { isNot } = this
    return {
      pass: received >= min && received <= max,
      message: () => `expected ${received}${isNot ? ' not' : ''} to be within [${min}, ${max}]`,
    }
  },
})

const checkPartyWeights = (weights, partyId) => {
  const party = getPoliticalParty(partyId)
  const error = 2
  expect(weights.economic).toEqualWithError(party.weight.economic, error)
  expect(weights.civil).toEqualWithError(party.weight.civil, error)
  expect(weights.environmental).toEqualWithError(party.weight.environmental, error)
  expect(weights.societal).toEqualWithError(party.weight.societal, error)
  expect(weights.sovereignty).toEqualWithError(party.weight.sovereignty, error)
  expect(weights.us_vs_china).toEqualWithError(party.weight.us_vs_china, error)
}

test('party:kmt', () => {
  const choices = {
    q0000: MULTIPLIER.a,
    q0001: MULTIPLIER.d,
    q0002: MULTIPLIER.a,
    q0003: MULTIPLIER.d,
    q0004: MULTIPLIER.d,
    q0100: MULTIPLIER.a,
    q0101: MULTIPLIER.ca,
    q0102: MULTIPLIER.a,
    q0103: MULTIPLIER.d,
    q0104: MULTIPLIER.a,
    q0105: MULTIPLIER.ca,
    q0200: MULTIPLIER.a,
    q0201: MULTIPLIER.a,
    q0202: MULTIPLIER.a,
    q0203: MULTIPLIER.a,
    q0300: MULTIPLIER.d,
    q0301: MULTIPLIER.n,
    q0302: MULTIPLIER.n,
    q0303: MULTIPLIER.d,
    q0400: MULTIPLIER.a,
    q0401: MULTIPLIER.d,
    q0402: MULTIPLIER.d,
    q0403: MULTIPLIER.n,
    q0404: MULTIPLIER.a,
    q0405: MULTIPLIER.d,
    q0500: MULTIPLIER.ca,
    q0501: MULTIPLIER.d,
    q0502: MULTIPLIER.a,
    q0503: MULTIPLIER.a,
    q0504: MULTIPLIER.a,
    q0505: MULTIPLIER.a,
    q0506: MULTIPLIER.d,
    q0600: MULTIPLIER.a,
    q0601: MULTIPLIER.d,
    q0602: MULTIPLIER.cd,
    q0603: MULTIPLIER.cd,
    q0604: MULTIPLIER.cd,
    q0605: MULTIPLIER.d,
    q0700: MULTIPLIER.a,
    q0701: MULTIPLIER.d,
    q0702: MULTIPLIER.a,
    q0703: MULTIPLIER.n,
    q0704: MULTIPLIER.a,
    q0705: MULTIPLIER.a,
    q0800: MULTIPLIER.a,
    q0801: MULTIPLIER.d,
    q0802: MULTIPLIER.d,
    q0803: MULTIPLIER.cd,
    q0900: MULTIPLIER.a,
    q0901: MULTIPLIER.a,
    q0902: MULTIPLIER.d,
    q1000: MULTIPLIER.d,
    q1001: MULTIPLIER.cd,
    q1002: MULTIPLIER.d,
    q1003: MULTIPLIER.d,
    q1100: MULTIPLIER.a,
    q1101: MULTIPLIER.d,
    q1102: MULTIPLIER.a,
    q1103: MULTIPLIER.a,
    q1104: MULTIPLIER.a,
    q1200: MULTIPLIER.d,
    q1201: MULTIPLIER.cd,
    q1202: MULTIPLIER.d,
    q1300: MULTIPLIER.a,
    q1301: MULTIPLIER.a,
    q1302: MULTIPLIER.d,
  }

  const weights = getValueScores(getQuestions(), choices)
  checkPartyWeights(weights, 'kmt')
  const party = getPoliticalPartyMatchScores(weights).at(0)
  expect(party.id).toEqual('kmt')
  expect(party.diff).toBeLessThanOrEqual(0.03)
})

test('party:lp', () => {
  const choices = {
    q0000: MULTIPLIER.ca,
    q0001: MULTIPLIER.a,
    q0002: MULTIPLIER.ca,
    q0003: MULTIPLIER.a,
    q0004: MULTIPLIER.a,
    q0100: MULTIPLIER.cd,
    q0101: MULTIPLIER.d,
    q0102: MULTIPLIER.d,
    q0103: MULTIPLIER.cd,
    q0104: MULTIPLIER.d,
    q0105: MULTIPLIER.n,
    q0200: MULTIPLIER.a,
    q0201: MULTIPLIER.n,
    q0202: MULTIPLIER.n,
    q0203: MULTIPLIER.n,
    q0300: MULTIPLIER.n,
    q0301: MULTIPLIER.n,
    q0302: MULTIPLIER.n,
    q0303: MULTIPLIER.n,
    q0400: MULTIPLIER.n,
    q0401: MULTIPLIER.n,
    q0402: MULTIPLIER.n,
    q0403: MULTIPLIER.n,
    q0404: MULTIPLIER.n,
    q0405: MULTIPLIER.n,
    q0500: MULTIPLIER.n,
    q0501: MULTIPLIER.n,
    q0502: MULTIPLIER.n,
    q0503: MULTIPLIER.n,
    q0504: MULTIPLIER.n,
    q0505: MULTIPLIER.n,
    q0506: MULTIPLIER.d,
    q0600: MULTIPLIER.a,
    q0601: MULTIPLIER.n,
    q0602: MULTIPLIER.n,
    q0603: MULTIPLIER.n,
    q0604: MULTIPLIER.cd,
    q0605: MULTIPLIER.n,
    q0700: MULTIPLIER.n,
    q0701: MULTIPLIER.n,
    q0702: MULTIPLIER.n,
    q0703: MULTIPLIER.n,
    q0704: MULTIPLIER.n,
    q0705: MULTIPLIER.d,
    q0800: MULTIPLIER.n,
    q0801: MULTIPLIER.n,
    q0802: MULTIPLIER.n,
    q0803: MULTIPLIER.n,
    q0900: MULTIPLIER.n,
    q0901: MULTIPLIER.n,
    q0902: MULTIPLIER.n,
    q1000: MULTIPLIER.d,
    q1001: MULTIPLIER.cd,
    q1002: MULTIPLIER.cd,
    q1003: MULTIPLIER.d,
    q1100: MULTIPLIER.ca,
    q1101: MULTIPLIER.a,
    q1102: MULTIPLIER.ca,
    q1103: MULTIPLIER.ca,
    q1104: MULTIPLIER.d,
    q1200: MULTIPLIER.cd,
    q1201: MULTIPLIER.cd,
    q1202: MULTIPLIER.cd,
    q1300: MULTIPLIER.a,
    q1301: MULTIPLIER.a,
    q1302: MULTIPLIER.ca,
  }

  const weights = getValueScores(getQuestions(), choices)
  checkPartyWeights(weights, 'lp')
  const party = getPoliticalPartyMatchScores(weights).at(0)
  expect(party.id).toEqual('lp')
  expect(party.diff).toBeLessThanOrEqual(0.03)
})

test('party:dpp', () => {
  const choices = {
    q0000: MULTIPLIER.a,
    q0001: MULTIPLIER.d,
    q0002: MULTIPLIER.a,
    q0003: MULTIPLIER.a,
    q0004: MULTIPLIER.a,
    q0100: MULTIPLIER.d,
    q0101: MULTIPLIER.ca,
    q0102: MULTIPLIER.n,
    q0103: MULTIPLIER.d,
    q0104: MULTIPLIER.d,
    q0105: MULTIPLIER.a,
    q0200: MULTIPLIER.a,
    q0201: MULTIPLIER.a,
    q0202: MULTIPLIER.d,
    q0203: MULTIPLIER.a,
    q0300: MULTIPLIER.d,
    q0301: MULTIPLIER.n,
    q0302: MULTIPLIER.n,
    q0303: MULTIPLIER.d,
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
    q0506: MULTIPLIER.d,
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
    q1000: MULTIPLIER.ca,
    q1001: MULTIPLIER.n,
    q1002: MULTIPLIER.ca,
    q1003: MULTIPLIER.d,
    q1100: MULTIPLIER.d,
    q1101: MULTIPLIER.d,
    q1102: MULTIPLIER.d,
    q1103: MULTIPLIER.d,
    q1104: MULTIPLIER.d,
    q1200: MULTIPLIER.a,
    q1201: MULTIPLIER.n,
    q1202: MULTIPLIER.a,
    q1300: MULTIPLIER.d,
    q1301: MULTIPLIER.d,
    q1302: MULTIPLIER.d,
  }

  const weights = getValueScores(getQuestions(), choices)
  checkPartyWeights(weights, 'dpp')
  const party = getPoliticalPartyMatchScores(weights).at(0)
  expect(party.id).toEqual('dpp')
  expect(party.diff).toBeLessThanOrEqual(0.03)
})

test('party:np', () => {
  const choices = {
    q0000: MULTIPLIER.a,
    q0001: MULTIPLIER.d,
    q0002: MULTIPLIER.a,
    q0003: MULTIPLIER.d,
    q0004: MULTIPLIER.d,
    q0100: MULTIPLIER.ca,
    q0101: MULTIPLIER.ca,
    q0102: MULTIPLIER.a,
    q0103: MULTIPLIER.a,
    q0104: MULTIPLIER.a,
    q0105: MULTIPLIER.ca,
    q0200: MULTIPLIER.a,
    q0201: MULTIPLIER.a,
    q0202: MULTIPLIER.a,
    q0203: MULTIPLIER.a,
    q0300: MULTIPLIER.d,
    q0301: MULTIPLIER.a,
    q0302: MULTIPLIER.n,
    q0303: MULTIPLIER.d,
    q0400: MULTIPLIER.n,
    q0401: MULTIPLIER.d,
    q0402: MULTIPLIER.d,
    q0403: MULTIPLIER.d,
    q0404: MULTIPLIER.d,
    q0405: MULTIPLIER.d,
    q0500: MULTIPLIER.ca,
    q0501: MULTIPLIER.d,
    q0502: MULTIPLIER.a,
    q0503: MULTIPLIER.a,
    q0504: MULTIPLIER.a,
    q0505: MULTIPLIER.a,
    q0506: MULTIPLIER.a,
    q0600: MULTIPLIER.a,
    q0601: MULTIPLIER.d,
    q0602: MULTIPLIER.cd,
    q0603: MULTIPLIER.cd,
    q0604: MULTIPLIER.cd,
    q0605: MULTIPLIER.d,
    q0700: MULTIPLIER.ca,
    q0701: MULTIPLIER.a,
    q0702: MULTIPLIER.a,
    q0703: MULTIPLIER.n,
    q0704: MULTIPLIER.a,
    q0705: MULTIPLIER.a,
    q0800: MULTIPLIER.a,
    q0801: MULTIPLIER.d,
    q0802: MULTIPLIER.d,
    q0803: MULTIPLIER.cd,
    q0900: MULTIPLIER.a,
    q0901: MULTIPLIER.a,
    q0902: MULTIPLIER.d,
    q1000: MULTIPLIER.cd,
    q1001: MULTIPLIER.cd,
    q1002: MULTIPLIER.d,
    q1003: MULTIPLIER.d,
    q1100: MULTIPLIER.a,
    q1101: MULTIPLIER.a,
    q1102: MULTIPLIER.a,
    q1103: MULTIPLIER.a,
    q1104: MULTIPLIER.d,
    q1200: MULTIPLIER.d,
    q1201: MULTIPLIER.cd,
    q1202: MULTIPLIER.cd,
    q1300: MULTIPLIER.a,
    q1301: MULTIPLIER.a,
    q1302: MULTIPLIER.d,
  }

  const weights = getValueScores(getQuestions(), choices)
  checkPartyWeights(weights, 'np')
  const party = getPoliticalPartyMatchScores(weights).at(0)
  expect(party.id).toEqual('np')
  expect(party.diff).toBeLessThanOrEqual(0.03)
})

test('party:gpt', () => {
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
    q0105: MULTIPLIER.a,
    q0200: MULTIPLIER.a,
    q0201: MULTIPLIER.a,
    q0202: MULTIPLIER.n,
    q0203: MULTIPLIER.a,
    q0300: MULTIPLIER.d,
    q0301: MULTIPLIER.n,
    q0302: MULTIPLIER.n,
    q0303: MULTIPLIER.d,
    q0400: MULTIPLIER.a,
    q0401: MULTIPLIER.d,
    q0402: MULTIPLIER.a,
    q0403: MULTIPLIER.a,
    q0404: MULTIPLIER.a,
    q0405: MULTIPLIER.a,
    q0500: MULTIPLIER.d,
    q0501: MULTIPLIER.d,
    q0502: MULTIPLIER.n,
    q0503: MULTIPLIER.d,
    q0504: MULTIPLIER.d,
    q0505: MULTIPLIER.d,
    q0506: MULTIPLIER.d,
    q0600: MULTIPLIER.a,
    q0601: MULTIPLIER.a,
    q0602: MULTIPLIER.ca,
    q0603: MULTIPLIER.a,
    q0604: MULTIPLIER.n,
    q0605: MULTIPLIER.n,
    q0700: MULTIPLIER.d,
    q0701: MULTIPLIER.d,
    q0702: MULTIPLIER.d,
    q0703: MULTIPLIER.d,
    q0704: MULTIPLIER.d,
    q0705: MULTIPLIER.cd,
    q0800: MULTIPLIER.ca,
    q0801: MULTIPLIER.a,
    q0802: MULTIPLIER.ca,
    q0803: MULTIPLIER.a,
    q0900: MULTIPLIER.cd,
    q0901: MULTIPLIER.cd,
    q0902: MULTIPLIER.d,
    q1000: MULTIPLIER.ca,
    q1001: MULTIPLIER.n,
    q1002: MULTIPLIER.a,
    q1003: MULTIPLIER.n,
    q1100: MULTIPLIER.d,
    q1101: MULTIPLIER.d,
    q1102: MULTIPLIER.d,
    q1103: MULTIPLIER.d,
    q1104: MULTIPLIER.d,
    q1200: MULTIPLIER.a,
    q1201: MULTIPLIER.n,
    q1202: MULTIPLIER.a,
    q1300: MULTIPLIER.d,
    q1301: MULTIPLIER.d,
    q1302: MULTIPLIER.d,
  }

  const weights = getValueScores(getQuestions(), choices)
  checkPartyWeights(weights, 'gpt')
  const party = getPoliticalPartyMatchScores(weights).at(0)
  expect(party.id).toEqual('gpt')
  expect(party.diff).toBeLessThanOrEqual(0.03)
})

test('party:pfp', () => {
  const pfp = getPoliticalParty('pfp')
  const kmt = getPoliticalParty('kmt')
  const np = getPoliticalParty('np')
  expect(pfp.weight.economic).toEqual(kmt.weight.economic)
  expect(pfp.weight.civil).toEqual(kmt.weight.civil)
  expect(pfp.weight.environmental).toEqual(kmt.weight.environmental)
  expect(pfp.weight.societal).toEqual(kmt.weight.societal)
  expect(pfp.weight.sovereignty).toEqualWithError((np.weight.sovereignty + kmt.weight.sovereignty) / 2, 0)
  expect(pfp.weight.us_vs_china).toEqualWithinRange(np.weight.us_vs_china, kmt.weight.us_vs_china)
})

test('party:tsu', () => {
  const tsu = getPoliticalParty('tsu')
  const dpp = getPoliticalParty('dpp')
  const ideology = getIdeology('liberal_conservatism')
  for (const [key, value] of Object.entries(ideology.weight)) {
    if (key in tsu.weight) {
      expect(tsu.weight[key]).toEqual(value)
    }
  }
  expect(tsu.weight.sovereignty).toEqual(dpp.weight.sovereignty + 10)
  expect(tsu.weight.us_vs_china).toEqual(dpp.weight.us_vs_china)
})

test('party:cupp', () => {
  const cupp = getPoliticalParty('cupp')
  const np = getPoliticalParty('np')
  expect(cupp.weight.societal).toBeLessThanOrEqual(np.weight.societal)
  expect(cupp.weight.sovereignty).toBeLessThanOrEqual(np.weight.sovereignty - 10)
  expect(cupp.weight.us_vs_china).toBeLessThanOrEqual(np.weight.us_vs_china - 10)
})

test('party:npp', () => {
  const choices = {
    q0000: MULTIPLIER.a,
    q0001: MULTIPLIER.a,
    q0002: MULTIPLIER.a,
    q0003: MULTIPLIER.a,
    q0004: MULTIPLIER.ca,
    q0100: MULTIPLIER.d,
    q0101: MULTIPLIER.a,
    q0102: MULTIPLIER.d,
    q0103: MULTIPLIER.d,
    q0104: MULTIPLIER.d,
    q0105: MULTIPLIER.a,
    q0200: MULTIPLIER.a,
    q0201: MULTIPLIER.a,
    q0202: MULTIPLIER.cd,
    q0203: MULTIPLIER.a,
    q0300: MULTIPLIER.d,
    q0301: MULTIPLIER.n,
    q0302: MULTIPLIER.n,
    q0303: MULTIPLIER.d,
    q0400: MULTIPLIER.a,
    q0401: MULTIPLIER.d,
    q0402: MULTIPLIER.a,
    q0403: MULTIPLIER.a,
    q0404: MULTIPLIER.a,
    q0405: MULTIPLIER.n,
    q0500: MULTIPLIER.d,
    q0501: MULTIPLIER.d,
    q0502: MULTIPLIER.a,
    q0503: MULTIPLIER.cd,
    q0504: MULTIPLIER.d,
    q0505: MULTIPLIER.d,
    q0506: MULTIPLIER.d,
    q0600: MULTIPLIER.a,
    q0601: MULTIPLIER.a,
    q0602: MULTIPLIER.ca,
    q0603: MULTIPLIER.ca,
    q0604: MULTIPLIER.n,
    q0605: MULTIPLIER.n,
    q0700: MULTIPLIER.cd,
    q0701: MULTIPLIER.d,
    q0702: MULTIPLIER.d,
    q0703: MULTIPLIER.d,
    q0704: MULTIPLIER.n,
    q0705: MULTIPLIER.cd,
    q0800: MULTIPLIER.a,
    q0801: MULTIPLIER.a,
    q0802: MULTIPLIER.ca,
    q0803: MULTIPLIER.a,
    q0900: MULTIPLIER.d,
    q0901: MULTIPLIER.d,
    q0902: MULTIPLIER.d,
    q1000: MULTIPLIER.ca,
    q1001: MULTIPLIER.n,
    q1002: MULTIPLIER.a,
    q1003: MULTIPLIER.ca,
    q1100: MULTIPLIER.d,
    q1101: MULTIPLIER.d,
    q1102: MULTIPLIER.d,
    q1103: MULTIPLIER.d,
    q1104: MULTIPLIER.d,
    q1200: MULTIPLIER.a,
    q1201: MULTIPLIER.n,
    q1202: MULTIPLIER.a,
    q1300: MULTIPLIER.a,
    q1301: MULTIPLIER.d,
    q1302: MULTIPLIER.d,
  }

  const weights = getValueScores(getQuestions(), choices)
  checkPartyWeights(weights, 'npp')
  const party = getPoliticalPartyMatchScores(weights).at(0)
  expect(party.id).toEqual('npp')
  expect(party.diff).toBeLessThanOrEqual(0.03)
})

test('party:sdp', () => {
  const sdp = getPoliticalParty('sdp')
  const dpp = getPoliticalParty('dpp')
  const ideology = getIdeology('social_democracy')
  for (const [key, value] of Object.entries(ideology.weight)) {
    if (key in sdp.weight) {
      expect(sdp.weight[key]).toEqual(value)
    }
  }
  expect(sdp.weight.sovereignty).toEqual(dpp.weight.sovereignty)
  expect(sdp.weight.us_vs_china).toEqual(dpp.weight.us_vs_china)
})

test('party:tsp', () => {
  const tsp = getPoliticalParty('tsp')
  const dpp = getPoliticalParty('dpp')
  expect(tsp.weight.sovereignty).toEqual(dpp.weight.sovereignty + 10)
  expect(tsp.weight.us_vs_china).toEqual(dpp.weight.us_vs_china)
})

test('party:tpp', () => {
  const choices = {
    q0000: MULTIPLIER.a,
    q0001: MULTIPLIER.d,
    q0002: MULTIPLIER.a,
    q0003: MULTIPLIER.d,
    q0004: MULTIPLIER.d,
    q0100: MULTIPLIER.d,
    q0101: MULTIPLIER.a,
    q0102: MULTIPLIER.d,
    q0103: MULTIPLIER.d,
    q0104: MULTIPLIER.ca,
    q0105: MULTIPLIER.a,
    q0200: MULTIPLIER.a,
    q0201: MULTIPLIER.a,
    q0202: MULTIPLIER.a,
    q0203: MULTIPLIER.a,
    q0300: MULTIPLIER.d,
    q0301: MULTIPLIER.n,
    q0302: MULTIPLIER.n,
    q0303: MULTIPLIER.d,
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
    q0506: MULTIPLIER.a,
    q0600: MULTIPLIER.a,
    q0601: MULTIPLIER.d,
    q0602: MULTIPLIER.n,
    q0603: MULTIPLIER.n,
    q0604: MULTIPLIER.cd,
    q0605: MULTIPLIER.n,
    q0700: MULTIPLIER.a,
    q0701: MULTIPLIER.n,
    q0702: MULTIPLIER.d,
    q0703: MULTIPLIER.d,
    q0704: MULTIPLIER.n,
    q0705: MULTIPLIER.a,
    q0800: MULTIPLIER.a,
    q0801: MULTIPLIER.d,
    q0802: MULTIPLIER.a,
    q0803: MULTIPLIER.cd,
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
    q1103: MULTIPLIER.a,
    q1104: MULTIPLIER.n,
    q1200: MULTIPLIER.d,
    q1201: MULTIPLIER.d,
    q1202: MULTIPLIER.d,
    q1300: MULTIPLIER.a,
    q1301: MULTIPLIER.n,
    q1302: MULTIPLIER.d,
  }

  const weights = getValueScores(getQuestions(), choices)
  checkPartyWeights(weights, 'tpp')
  const party = getPoliticalPartyMatchScores(weights).at(0)
  expect(party.id).toEqual('tpp')
  expect(party.diff).toBeLessThanOrEqual(0.03)
})
