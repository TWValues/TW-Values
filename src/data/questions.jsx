
const QUESTIONS = [
  {
    id: "q0000",
    weight: {
      economic: 10,
    }
  },
  {
    id: "q0001",
    weight: {
      economic: 10,
    }
  },
  {
    id: "q0002",
    weight: {
      economic: 10,
    }
  },
  {
    id: "q0003",
    weight: {
      economic: 10,
    }
  },
  {
    id: "q0004",
    weight: {
      economic: 10,
    }
  },
  {
    id: "q0100",
    weight: {
      economic: -10,
    }
  },
  {
    id: "q0101",
    weight: {
      economic: -10,
    }
  },
  {
    id: "q0102",
    weight: {
      economic: -10,
    }
  },
  {
    id: "q0103",
    weight: {
      economic: -10,
    }
  },
  {
    id: "q0104",
    weight: {
      economic: -10,
    }
  },
  {
    id: "q0105",
    weight: {
      economic: -10,
    }
  },
  {
    id: "q0200",
    weight: {
      environmental: 10,
    }
  },
  {
    id: "q0201",
    weight: {
      environmental: 10,
    }
  },
  {
    id: "q0202",
    weight: {
      environmental: 10,
    }
  },
  {
    id: "q0203",
    weight: {
      environmental: 10,
    }
  },
  {
    id: "q0300",
    weight: {
      environmental: -10,
    }
  },
  {
    id: "q0301",
    weight: {
      environmental: -10,
    }
  },
  {
    id: "q0302",
    weight: {
      environmental: -10,
    }
  },
  {
    id: "q0400",
    weight: {
      civil: 10,
    }
  },
  {
    id: "q0401",
    weight: {
      civil: 10,
    }
  },
  {
    id: "q0402",
    weight: {
      civil: 10,
    }
  },
  {
    id: "q0403",
    weight: {
      civil: 10,
    }
  },
  {
    id: "q0404",
    weight: {
      civil: 10,
    }
  },
  {
    id: "q0405",
    weight: {
      civil: 10,
    }
  },
  {
    id: "q0500",
    weight: {
      civil: -10,
    }
  },
  {
    id: "q0501",
    weight: {
      civil: -10,
    }
  },
  {
    id: "q0502",
    weight: {
      civil: -10,
    }
  },
  {
    id: "q0503",
    weight: {
      civil: -10,
    }
  },
  {
    id: "q0504",
    weight: {
      civil: -10,
      diplomatic: 5,
    }
  },
  {
    id: "q0505",
    weight: {
      civil: -10,
      diplomatic: -5,
    }
  },
  {
    id: "q0600",
    weight: {
      societal: 10,
    }
  },
  {
    id: "q0601",
    weight: {
      societal: 10,
    }
  },
  {
    id: "q0602",
    weight: {
      societal: 10,

      tags: {
        homophobia: -1,
      }
    }
  },
  {
    id: "q0603",
    weight: {
      societal: 10,

      tags: {
        death_penalty_abolitionists: 1,
      }
    }
  },
  {
    id: "q0604",
    weight: {
      societal: 10,
      diplomatic: 5,
    }
  },
  {
    id: "q0605",
    weight: {
      societal: 10,
    }
  },
  {
    id: "q0606",
    weight: {
      societal: 10,

      tags: {
        feminism_buffet: -1,
      }
    }
  },
  {
    id: "q0700",
    weight: {
      societal: -10,
    }
  },
  {
    id: "q0701",
    weight: {
      societal: -10,
    }
  },
  {
    id: "q0702",
    weight: {
      societal: -10,
    }
  },
  {
    id: "q0703",
    weight: {
      societal: -10,
    }
  },
  {
    id: "q0704",
    weight: {
      societal: -10,
    }
  },
  {
    id: "q0705",
    weight: {
      societal: -10,

      tags: {
        male_chauvinism: 1,
      }
    }
  },
  {
    id: "q1000",
    weight: {
      sovereignty: 10,

      tags: {
        roc_independence: 1,
      }
    }
  },
  {
    id: "q1001",
    weight: {
      sovereignty: 15,
      diplomatic: -10,

      tags: {
        tw_independence: 1,
      }
    }
  },
  {
    id: "q1002",
    weight: {
      sovereignty: 10,
      diplomatic: -5,
    }
  },
  {
    id: "q1100",
    weight: {
      sovereignty: -10,
    }
  },
  {
    id: "q1101",
    weight: {
      sovereignty: -10,

      tags: {
        roc_unification: 1,
      }
    }
  },
  {
    id: "q1102",
    weight: {
      sovereignty: -10,
    }
  },
  {
    id: "q1103",
    weight: {
      sovereignty: -15,
      us_china_relation: -10,

      tags: {
        prc_unification: 1,
      }
    }
  },
  {
    id: "q1200",
    weight: {
      us_china_relation: 10,
      diplomatic: -5,
    }
  },
  {
    id: "q1201",
    weight: {
      us_china_relation: 10,
    }
  },
  {
    id: "q1202",
    weight: {
      us_china_relation: 10,
    }
  },
  {
    id: "q1203",
    weight: {
      us_china_relation: 10,
      diplomatic: -5,
    }
  },
  {
    id: "q1300",
    weight: {
      us_china_relation: -10,
      diplomatic: 5,
    }
  },
  {
    id: "q1301",
    weight: {
      us_china_relation: -10,
    }
  },
  {
    id: "q1302",
    weight: {
      us_china_relation: -10,
      diplomatic: 5,
    }
  },
  {
    id: "q1303",
    weight: {
      us_china_relation: -10,
      diplomatic: 5,
    }
  },
]

export default QUESTIONS
