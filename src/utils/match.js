import { getIdeologies } from '../data/ideology'
import { getPoliticalParties } from '../data/political_party'

export const getValueScores = (questions, choices) => {
  const getScore = (props) => {
    const getScoreWithMultiplier = (props) => {
      return props.reduce((accu, value) => accu + value.prop * choices[value.id], 0.0)
    }
    const getAbsMaxScore = (props) => {
      return props.reduce((accu, value) => accu + Math.abs(value.prop), 0.0)
    }
    const getPercentage = (bias, total) => (100 * (bias + total)) / (2 * total)

    const score = getScoreWithMultiplier(props)
    const maxScore = getAbsMaxScore(props)
    return Math.round(getPercentage(score, maxScore))
  }

  return {
    economic: getScore(questions.map((value) => ({ id: value.id, prop: value.weight.economic || 0.0 }))),
    diplomatic: getScore(questions.map((value) => ({ id: value.id, prop: value.weight.diplomatic || 0.0 }))),
    civil: getScore(questions.map((value) => ({ id: value.id, prop: value.weight.civil || 0.0 }))),
    environmental: getScore(questions.map((value) => ({ id: value.id, prop: value.weight.environmental || 0.0 }))),
    societal: getScore(questions.map((value) => ({ id: value.id, prop: value.weight.societal || 0.0 }))),
    sovereignty: getScore(questions.map((value) => ({ id: value.id, prop: value.weight.sovereignty || 0.0 }))),
    us_vs_china: getScore(questions.map((value) => ({ id: value.id, prop: value.weight.us_vs_china || 0.0 }))),
  }
}

export const getIdeologyMatchScores = (weight) =>
  getIdeologies()
    .map((ideology) => {
      const newWeight = {
        economic: weight.economic,
        diplomatic: weight.diplomatic,
        civil: weight.civil,
        societal: Math.round(0.25 * weight.environmental + 0.75 * weight.societal), // environmental is considered as societal in ideology match
      }
      const distance =
        Math.pow(Math.abs(ideology.weight.economic - newWeight.economic), 2) +
        Math.pow(Math.abs(ideology.weight.diplomatic - newWeight.diplomatic), 2) +
        Math.pow(Math.abs(ideology.weight.civil - newWeight.civil), 2) +
        Math.pow(Math.abs(ideology.weight.societal - newWeight.societal), 2)
      const diff = Math.sqrt(distance / 4.0) / 100.0
      return {
        id: ideology.id,
        distance,
        diff,
        weight: {
          target: ideology.weight,
          user: newWeight,
        },
      }
    })
    .sort((lhs, rhs) => (lhs.distance < rhs.distance ? -1 : lhs.distance > rhs.distance ? 1 : 0))

export const getPoliticalPartyMatchScores = (weight) =>
  getPoliticalParties()
    .map((party) => {
      const coeff = {
        economic: 1.0,
        civil: 1.0,
        environmental: 0.5,
        societal: 1.0,
        sovereignty: 1.0,
        us_vs_china: 0.5,
      }
      const distance =
        Math.pow(Math.abs(party.weight.economic - weight.economic), 2) * coeff.economic +
        Math.pow(Math.abs(party.weight.civil - weight.civil), 2) * coeff.civil +
        Math.pow(Math.abs(party.weight.environmental - weight.environmental), 2) * coeff.environmental +
        Math.pow(Math.abs(party.weight.societal - weight.societal), 2) * coeff.societal +
        Math.pow(Math.abs(party.weight.sovereignty - weight.sovereignty), 2) * coeff.sovereignty +
        Math.pow(Math.abs(party.weight.us_vs_china - weight.us_vs_china), 2) * coeff.us_vs_china
      const diff = Math.sqrt(distance / 6.0) / 100.0
      return {
        id: party.id,
        icon: party.icon,
        distance,
        diff,
        weight: {
          target: party.weight,
          user: weight,
        },
      }
    })
    .sort((lhs, rhs) => (lhs.distance < rhs.distance ? -1 : lhs.distance > rhs.distance ? 1 : 0))
