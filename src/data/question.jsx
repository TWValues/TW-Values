const WEIGHTS = {
  p100: 16,
  p075: 12,
  p050: 8,
}

export const getQuestions = () => [
  {
    id: 'q0000',
    weight: {
      economic: WEIGHTS.p100,
    },
  },
  {
    id: 'q0001',
    weight: {
      economic: WEIGHTS.p100,
    },
  },
  {
    id: 'q0002',
    weight: {
      economic: WEIGHTS.p100,
    },
  },
  {
    id: 'q0003',
    weight: {
      economic: WEIGHTS.p100,
    },
  },
  {
    id: 'q0004',
    weight: {
      economic: WEIGHTS.p100,
    },
  },
  {
    id: 'q0100',
    weight: {
      economic: -WEIGHTS.p100,
    },
  },
  {
    id: 'q0101',
    weight: {
      economic: -WEIGHTS.p100,
    },
  },
  {
    id: 'q0102',
    weight: {
      economic: -WEIGHTS.p100,
    },
  },
  {
    id: 'q0103',
    weight: {
      economic: -WEIGHTS.p100,
    },
  },
  {
    id: 'q0104',
    weight: {
      economic: -WEIGHTS.p100,
    },
  },
  {
    id: 'q0105',
    weight: {
      economic: -WEIGHTS.p100,
    },
  },
  {
    id: 'q0200',
    weight: {
      diplomatic: WEIGHTS.p100,
    },
  },
  {
    id: 'q0201',
    weight: {
      diplomatic: WEIGHTS.p100,
    },
  },
  {
    id: 'q0202',
    weight: {
      diplomatic: WEIGHTS.p075,
      sovereignty: -WEIGHTS.p050,
    },
  },
  {
    id: 'q0203',
    weight: {
      diplomatic: WEIGHTS.p100,
      civil: WEIGHTS.p075,
    },
  },
  {
    id: 'q0300',
    weight: {
      diplomatic: -WEIGHTS.p100,
      economic: -WEIGHTS.p050,
    },
  },
  {
    id: 'q0301',
    weight: {
      diplomatic: -WEIGHTS.p100,
    },
  },
  {
    id: 'q0302',
    weight: {
      diplomatic: -WEIGHTS.p100,
    },
  },
  {
    id: 'q0303',
    weight: {
      diplomatic: -WEIGHTS.p100,
    },
  },
  {
    id: 'q0400',
    weight: {
      civil: WEIGHTS.p100,
      societal: WEIGHTS.p050,
    },
  },
  {
    id: 'q0401',
    weight: {
      civil: WEIGHTS.p100,
    },
  },
  {
    id: 'q0402',
    weight: {
      civil: WEIGHTS.p100,
    },
  },
  {
    id: 'q0403',
    weight: {
      civil: WEIGHTS.p100,
    },
  },
  {
    id: 'q0404',
    weight: {
      civil: WEIGHTS.p100,
    },
  },
  {
    id: 'q0405',
    weight: {
      civil: WEIGHTS.p100,
    },
  },
  {
    id: 'q0500',
    weight: {
      civil: -WEIGHTS.p100,
    },
  },
  {
    id: 'q0501',
    weight: {
      civil: -WEIGHTS.p100,
    },
  },
  {
    id: 'q0502',
    weight: {
      civil: -WEIGHTS.p100,
    },
  },
  {
    id: 'q0503',
    weight: {
      civil: -WEIGHTS.p100,
      diplomatic: -WEIGHTS.p075,
    },
  },
  {
    id: 'q0504',
    weight: {
      civil: -WEIGHTS.p100,
    },
  },
  {
    id: 'q0505',
    weight: {
      civil: -WEIGHTS.p100,
    },
  },
  {
    id: 'q0506',
    weight: {
      civil: -WEIGHTS.p100,
    },
  },
  {
    id: 'q0600',
    weight: {
      societal: WEIGHTS.p100,
    },
  },
  {
    id: 'q0601',
    weight: {
      societal: WEIGHTS.p100,
    },
  },
  {
    id: 'q0602',
    weight: {
      societal: WEIGHTS.p100,
    },
  },
  {
    id: 'q0603',
    weight: {
      societal: WEIGHTS.p100,
    },
  },
  {
    id: 'q0604',
    weight: {
      societal: WEIGHTS.p100,
    },
  },
  {
    id: 'q0605',
    weight: {
      societal: WEIGHTS.p100,
    },
  },
  {
    id: 'q0700',
    weight: {
      societal: -WEIGHTS.p100,
      civil: -WEIGHTS.p050,
    },
  },
  {
    id: 'q0701',
    weight: {
      societal: -WEIGHTS.p100,
      civil: -WEIGHTS.p050,
    },
  },
  {
    id: 'q0702',
    weight: {
      societal: -WEIGHTS.p100,
    },
  },
  {
    id: 'q0703',
    weight: {
      societal: -WEIGHTS.p100,
      civil: -WEIGHTS.p050,
    },
  },
  {
    id: 'q0704',
    weight: {
      societal: -WEIGHTS.p100,
      civil: -WEIGHTS.p050,
    },
  },
  {
    id: 'q0705',
    weight: {
      societal: -WEIGHTS.p100,
    },
  },
  {
    id: 'q0800',
    weight: {
      environmental: WEIGHTS.p100,
    },
  },
  {
    id: 'q0801',
    weight: {
      environmental: WEIGHTS.p100,
    },
  },
  {
    id: 'q0802',
    weight: {
      environmental: WEIGHTS.p100,
    },
  },
  {
    id: 'q0803',
    weight: {
      environmental: WEIGHTS.p100,
    },
  },
  {
    id: 'q0900',
    weight: {
      environmental: -WEIGHTS.p100,
    },
  },
  {
    id: 'q0901',
    weight: {
      environmental: -WEIGHTS.p100,
    },
  },
  {
    id: 'q0902',
    weight: {
      environmental: -WEIGHTS.p100,
    },
  },
  {
    id: 'q1000',
    weight: {
      sovereignty: WEIGHTS.p100,
    },
  },
  {
    id: 'q1001',
    weight: {
      sovereignty: WEIGHTS.p100,
      diplomatic: -WEIGHTS.p075,
    },
  },
  {
    id: 'q1002',
    weight: {
      sovereignty: WEIGHTS.p100,
      diplomatic: -WEIGHTS.p050,
    },
  },
  {
    id: 'q1003',
    weight: {
      sovereignty: WEIGHTS.p100,
    },
  },
  {
    id: 'q1100',
    weight: {
      sovereignty: -WEIGHTS.p100,
    },
  },
  {
    id: 'q1101',
    weight: {
      sovereignty: -WEIGHTS.p100,
      us_vs_china: -WEIGHTS.p075,
    },
  },
  {
    id: 'q1102',
    weight: {
      sovereignty: -WEIGHTS.p100,
      us_vs_china: -WEIGHTS.p075,
    },
  },
  {
    id: 'q1103',
    weight: {
      sovereignty: -WEIGHTS.p075,
      diplomatic: WEIGHTS.p050,
    },
  },
  {
    id: 'q1104',
    weight: {},
  },
  {
    id: 'q1200',
    weight: {
      us_vs_china: WEIGHTS.p100,
    },
  },
  {
    id: 'q1201',
    weight: {
      us_vs_china: WEIGHTS.p100,
    },
  },
  {
    id: 'q1202',
    weight: {
      us_vs_china: WEIGHTS.p100,
    },
  },
  {
    id: 'q1300',
    weight: {
      us_vs_china: -WEIGHTS.p100,
    },
  },
  {
    id: 'q1301',
    weight: {
      us_vs_china: -WEIGHTS.p100,
      diplomatic: -WEIGHTS.p050,
    },
  },
  {
    id: 'q1302',
    weight: {
      us_vs_china: -WEIGHTS.p100,
    },
  },
]
