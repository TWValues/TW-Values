export const IDEOLOGY_TAGS = [
  {
    id: 'roc_unification',
    predicate: (choices) => choices['q1103'] > 0.0,
  },
  {
    id: 'roc_independence',
    predicate: (choices) => choices['q1000'] > 0.0,
  },
  {
    id: 'tw_independence',
    predicate: (choices) => choices['q1001'] > 0.0,
  },
  {
    id: 'prc_unification',
    predicate: (choices) => choices['q1101'] > 0.0,
  },
  {
    id: 'death_penalty_abolitionists',
    predicate: (choices) => choices['q0603'] > 0.0,
  },
  {
    id: 'homophobia',
    predicate: (choices) => choices['q0602'] < 0.0,
  },
  {
    id: 'male_chauvinism',
    predicate: (choices) => choices['q0705'] > 0.0,
  },
  {
    id: 'feminism_buffet',
    predicate: (choices) => choices['q0605'] < 0.0,
  },
]

export const getMatchedIdeologyTags = (choices) =>
  IDEOLOGY_TAGS.filter((value) => value.predicate(choices)).map((value) => value.id)
