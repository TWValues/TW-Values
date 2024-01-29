
const weights = {
  p150: 24,
  p100: 16,
  p075: 12,
  p050: 8,
}

const QUESTIONS = [
  {
    id: "q0000",
    weight: {
      economic: weights.p100,
    }
  },
  {
    id: "q0001",
    weight: {
      economic: weights.p100,
    }
  },
  {
    id: "q0002",
    weight: {
      economic: weights.p100,
    }
  },
  {
    id: "q0003",
    weight: {
      economic: weights.p100,
    }
  },
  {
    id: "q0004",
    weight: {
      economic: weights.p100,
    }
  },
  {
    id: "q0100",
    weight: {
      economic: -weights.p100,
    }
  },
  {
    id: "q0101",
    weight: {
      economic: -weights.p100,
    }
  },
  {
    id: "q0102",
    weight: {
      economic: -weights.p100,
    }
  },
  {
    id: "q0103",
    weight: {
      economic: -weights.p100,
    }
  },
  {
    id: "q0104",
    weight: {
      economic: -weights.p100,
    }
  },
  {
    id: "q0105",
    weight: {
      economic: -weights.p100,
    }
  },
  {
    id: "q0200",
    weight: {
      diplomatic: weights.p100,
    }
  },
  {
    id: "q0201",
    weight: {
      diplomatic: weights.p100,
    }
  },
  {
    id: "q0300",
    weight: {
      diplomatic: -weights.p100,
      economic: -weights.p050,
    }
  },
  {
    id: "q0301",
    weight: {
      diplomatic: -weights.p100,
    }
  },
  {
    id: "q0302",
    weight: {
      diplomatic: -weights.p100,
    }
  },
  {
    id: "q0303",
    weight: {
      diplomatic: -weights.p100,
      sovereignty: weights.p050,
    }
  },
  {
    id: "q0400",
    weight: {
      civil: weights.p100,
      societal: weights.p050,
    }
  },
  {
    id: "q0401",
    weight: {
      civil: weights.p100,
    }
  },
  {
    id: "q0402",
    weight: {
      civil: weights.p100,
    }
  },
  {
    id: "q0403",
    weight: {
      civil: weights.p100,
    }
  },
  {
    id: "q0404",
    weight: {
      civil: weights.p100,
    }
  },
  {
    id: "q0405",
    weight: {
      civil: weights.p100,
    }
  },
  {
    id: "q0500",
    weight: {
      civil: -weights.p100,
    }
  },
  {
    id: "q0501",
    weight: {
      civil: -weights.p100,
    }
  },
  {
    id: "q0502",
    weight: {
      civil: -weights.p100,
    }
  },
  {
    id: "q0503",
    weight: {
      civil: -weights.p100,
      diplomatic: -weights.p050,
    }
  },
  {
    id: "q0504",
    weight: {
      civil: -weights.p100,
    }
  },
  {
    id: "q0505",
    weight: {
      civil: -weights.p100,
    }
  },
  {
    id: "q0600",
    weight: {
      societal: weights.p100,
    }
  },
  {
    id: "q0601",
    weight: {
      societal: weights.p100,
    }
  },
  {
    id: "q0602",
    weight: {
      societal: weights.p100,

      tags: {
        homophobia: -1,
      }
    }
  },
  {
    id: "q0603",
    weight: {
      societal: weights.p100,

      tags: {
        death_penalty_abolitionists: 1,
      }
    }
  },
  {
    id: "q0604",
    weight: {
      societal: weights.p100,
    }
  },
  {
    id: "q0605",
    weight: {
      societal: weights.p100,
      sovereignty: weights.p050,

      tags: {
        feminism_buffet: -1,
      }
    }
  },
  {
    id: "q0700",
    weight: {
      societal: -weights.p100,
      civil: -weights.p050,
    }
  },
  {
    id: "q0701",
    weight: {
      societal: -weights.p100,
      civil: -weights.p050,
    }
  },
  {
    id: "q0702",
    weight: {
      societal: -weights.p100,
    }
  },
  {
    id: "q0703",
    weight: {
      societal: -weights.p100,
      civil: -weights.p050,
    }
  },
  {
    id: "q0704",
    weight: {
      societal: -weights.p100,
      civil: -weights.p050,
    }
  },
  {
    id: "q0705",
    weight: {
      societal: -weights.p100,

      tags: {
        male_chauvinism: 1,
      }
    }
  },
  {
    id: "q0800",
    weight: {
      environmental: weights.p100,
    }
  },
  {
    id: "q0801",
    weight: {
      environmental: weights.p100,
    }
  },
  {
    id: "q0802",
    weight: {
      environmental: weights.p100,
    }
  },
  {
    id: "q0803",
    weight: {
      environmental: weights.p100,
    }
  },
  {
    id: "q0900",
    weight: {
      environmental: -weights.p100,
    }
  },
  {
    id: "q0901",
    weight: {
      environmental: -weights.p100,
    }
  },
  {
    id: "q0902",
    weight: {
      environmental: -weights.p100,
    }
  },
  {
    id: "q1000",
    weight: {
      sovereignty: weights.p100,

      tags: {
        roc_independence: 1,
      }
    }
  },
  {
    id: "q1001",
    weight: {
      sovereignty: weights.p150,
      diplomatic: -weights.p100,

      tags: {
        tw_independence: 1,
      }
    }
  },
  {
    id: "q1002",
    weight: {
      sovereignty: weights.p100,
      diplomatic: -weights.p050,
    }
  },
  {
    id: "q1003",
    weight: {
      sovereignty: weights.p100,
    }
  },
  {
    id: "q1100",
    weight: {
      sovereignty: -weights.p075,
    }
  },
  {
    id: "q1101",
    weight: {
      sovereignty: -weights.p150,
      us_vs_china: -weights.p100,

      tags: {
        prc_unification: 1,
      }
    }
  },
  {
    id: "q1102",
    weight: {
      sovereignty: -weights.p100,
      us_vs_china: -weights.p075,
    }
  },
  {
    id: "q1103",
    weight: {
      tags: {
        roc_unification: 1,
      }
    }
  },
  {
    id: "q1200",
    weight: {
      us_vs_china: weights.p100,
    }
  },
  {
    id: "q1201",
    weight: {
      us_vs_china: weights.p100,
    }
  },
  {
    id: "q1202",
    weight: {
      us_vs_china: weights.p100,
    }
  },
  {
    id: "q1300",
    weight: {
      us_vs_china: -weights.p100,
      diplomatic: weights.p050,
    }
  },
  {
    id: "q1301",
    weight: {
      sovereignty: -weights.p050,
      us_vs_china: -weights.p100,
    }
  },
  {
    id: "q1302",
    weight: {
      us_vs_china: -weights.p075,
      diplomatic: weights.p050,
    }
  },
]

export default QUESTIONS
