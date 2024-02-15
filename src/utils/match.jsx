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
    environmental: getScore(questions.map((value) => ({ id: value.id, prop: value.weight.environmental || 0.0 }))),
    civil: getScore(questions.map((value) => ({ id: value.id, prop: value.weight.civil || 0.0 }))),
    societal: getScore(questions.map((value) => ({ id: value.id, prop: value.weight.societal || 0.0 }))),
    diplomatic: getScore(questions.map((value) => ({ id: value.id, prop: value.weight.diplomatic || 0.0 }))),
    sovereignty: getScore(questions.map((value) => ({ id: value.id, prop: value.weight.sovereignty || 0.0 }))),
    us_vs_china: getScore(questions.map((value) => ({ id: value.id, prop: value.weight.us_vs_china || 0.0 }))),
  }
}

export const getIdeologyMatchScores = (weights) => {
  const ideologyScores = getIdeologies()
    .map((value) => {
      let distance = 0.0
      distance += Math.pow(Math.abs(value.weight.economic - weights.economic), 2)
      distance += Math.pow(Math.abs(value.weight.diplomatic - weights.diplomatic), 2)
      distance += Math.pow(Math.abs(value.weight.civil - weights.civil), 2)
      distance += Math.pow(
        Math.abs(value.weight.societal - (0.25 * weights.environmental + 0.75 * weights.societal)),
        2,
      )
      return {
        id: value.id,
        distance: distance,
        diff: Math.sqrt(distance / 4.0) / 100.0,
      }
    })
    .sort((lhs, rhs) => (lhs.distance < rhs.distance ? -1 : lhs.distance > rhs.distance ? 1 : 0))

  return ideologyScores
}

export const getPoliticalPartyMatchScores = (weights) => {
  const politicalScores = getPoliticalParties()
    .map((value) => {
      let distance = 0.0
      distance += Math.pow(Math.abs(value.weight.economic - weights.economic), 2)
      distance += Math.pow(Math.abs(value.weight.civil - weights.civil), 2)
      distance += Math.pow(Math.abs(value.weight.environmental - weights.environmental), 2)
      distance += Math.pow(Math.abs(value.weight.societal - weights.societal), 2)
      distance += Math.pow(Math.abs(value.weight.sovereignty - weights.sovereignty), 2)
      distance += Math.pow(Math.abs(value.weight.us_vs_china - weights.us_vs_china), 2)
      return {
        ...value,
        distance: distance,
        diff: Math.sqrt(distance / 6.0) / 100.0,
      }
    })
    .sort((lhs, rhs) => (lhs.distance < rhs.distance ? -1 : lhs.distance > rhs.distance ? 1 : 0))

  return politicalScores
}
