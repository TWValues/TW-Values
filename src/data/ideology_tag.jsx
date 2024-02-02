import MULTIPLIER from '../utils/multiplier'

export const IDEOLOGY_TAGS = [
  {
    id: 'roc_unification',
    predicate: (choices) => choices['q1103'] > MULTIPLIER.n,
  },
  {
    id: 'roc_independence',
    predicate: (choices) => choices['q1000'] > MULTIPLIER.n,
  },
  {
    id: 'tw_independence',
    predicate: (choices) => choices['q1001'] > MULTIPLIER.n,
  },
  {
    id: 'prc_unification',
    predicate: (choices) => choices['q1101'] > MULTIPLIER.n,
  },
  {
    id: 'death_penalty_abolitionists',
    predicate: (choices) => choices['q0603'] > MULTIPLIER.n,
  },
  {
    id: 'homophobia',
    predicate: (choices) => choices['q0602'] < MULTIPLIER.n,
  },
  {
    id: 'male_chauvinism',
    predicate: (choices) => choices['q0705'] > MULTIPLIER.n,
  },
  {
    id: 'feminism_buffet',
    predicate: (choices) => choices['q0605'] < MULTIPLIER.n,
  },
  {
    id: 'political_apathy',
    predicate: (choices) => {
      const all = Object.entries(choices)
      const weak = all.filter((value) => MULTIPLIER.sd <= value[1] && value[1] <= MULTIPLIER.sa)

      return weak.length >= 0.8 * all.length
    },
  },
]

export const getMatchedIdeologyTags = (choices) =>
  IDEOLOGY_TAGS.filter((value) => value.predicate(choices)).map((value) => value.id)
