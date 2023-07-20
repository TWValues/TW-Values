
const IDEOLOGIES = [
  {
    id: "anarcho_communism",
    state: {
      economic: 100,
      diplomatic: 50,
      civil: 100,
      societal: 90
    }
  },
  {
    id: "libertarian_communism",
    state: {
      economic: 100,
      diplomatic: 70,
      civil: 80,
      societal: 80
    }
  },
  {
    id: "trotskyism",
    state: {
      economic: 100,
      diplomatic: 100,
      civil: 60,
      societal: 80
    }
  },
  {
    id: "marxism",
    state: {
      economic: 100,
      diplomatic: 70,
      civil: 40,
      societal: 80
    }
  },
  {
    id: "de_leonism",
    state: {
      economic: 100,
      diplomatic: 30,
      civil: 30,
      societal: 80
    }
  },
  {
    id: "leninism",
    state: {
      economic: 100,
      diplomatic: 40,
      civil: 20,
      societal: 70
    }
  },
  {
    id: "stalinism_maoism",
    state: {
      economic: 100,
      diplomatic: 20,
      civil: 0,
      societal: 60
    }
  },
  {
    id: "religious_communism",
    state: {
      economic: 100,
      diplomatic: 50,
      civil: 30,
      societal: 30
    }
  },
  {
    id: "state_socialism",
    state: {
      economic: 80,
      diplomatic: 30,
      civil: 30,
      societal: 70
    }
  },
  {
    id: "theocratic_socialism",
    state: {
      economic: 80,
      diplomatic: 50,
      civil: 30,
      societal: 20
    }
  },
  {
    id: "religious_socialism",
    state: {
      economic: 80,
      diplomatic: 50,
      civil: 70,
      societal: 20
    }
  },
  {
    id: "democratic_socialism",
    state: {
      economic: 80,
      diplomatic: 50,
      civil: 50,
      societal: 80
    }
  },
  {
    id: "revolutionary_socialism",
    state: {
      economic: 80,
      diplomatic: 20,
      civil: 50,
      societal: 70
    }
  },
  {
    id: "libertarian_socialism",
    state: {
      economic: 80,
      diplomatic: 80,
      civil: 80,
      societal: 80
    }
  },
  {
    id: "anarcho_syndicalism",
    state: {
      economic: 80,
      diplomatic: 50,
      civil: 100,
      societal: 80
    }
  },
  {
    id: "left_wing_populism",
    state: {
      economic: 60,
      diplomatic: 40,
      civil: 30,
      societal: 70
    }
  },
  {
    id: "theocratic_distributism",
    state: {
      economic: 60,
      diplomatic: 40,
      civil: 30,
      societal: 20
    }
  },
  {
    id: "distributism",
    state: {
      economic: 60,
      diplomatic: 50,
      civil: 50,
      societal: 20
    }
  },
  {
    id: "social_liberalism",
    state: {
      economic: 60,
      diplomatic: 60,
      civil: 60,
      societal: 80
    }
  },
  {
    id: "christian_democracy",
    state: {
      economic: 60,
      diplomatic: 60,
      civil: 50,
      societal: 30
    }
  },
  {
    id: "social_democracy",
    state: {
      economic: 60,
      diplomatic: 70,
      civil: 60,
      societal: 80
    }
  },
  {
    id: "progressivism",
    state: {
      economic: 60,
      diplomatic: 80,
      civil: 60,
      societal: 100
    }
  },
  {
    id: "anarcho_mutualism",
    state: {
      economic: 60,
      diplomatic: 50,
      civil: 100,
      societal: 70
    }
  },
  {
    id: "national_totalitarianism",
    state: {
      economic: 50,
      diplomatic: 20,
      civil: 0,
      societal: 50
    }
  },
  {
    id: "global_totalitarianism",
    state: {
      economic: 50,
      diplomatic: 80,
      civil: 0,
      societal: 50
    }
  },
  {
    id: "technocracy",
    state: {
      economic: 60,
      diplomatic: 60,
      civil: 20,
      societal: 70
    }
  },
  {
    id: "centrist",
    state: {
      economic: 50,
      diplomatic: 50,
      civil: 50,
      societal: 50
    }
  },
  {
    id: "liberalism",
    state: {
      economic: 50,
      diplomatic: 60,
      civil: 60,
      societal: 60
    }
  },
  {
    id: "religious_anarchism",
    state: {
      economic: 50,
      diplomatic: 50,
      civil: 100,
      societal: 20
    }
  },
  {
    id: "right_wing_populism",
    state: {
      economic: 40,
      diplomatic: 30,
      civil: 30,
      societal: 30
    }
  },
  {
    id: "moderate_conservatism",
    state: {
      economic: 40,
      diplomatic: 40,
      civil: 50,
      societal: 30
    }
  },
  {
    id: "reactionary",
    state: {
      economic: 40,
      diplomatic: 40,
      civil: 40,
      societal: 10
    }
  },
  {
    id: "social_libertarianism",
    state: {
      economic: 60,
      diplomatic: 70,
      civil: 80,
      societal: 70
    }
  },
  {
    id: "libertarianism",
    state: {
      economic: 40,
      diplomatic: 60,
      civil: 80,
      societal: 60
    }
  },
  {
    id: "anarcho_egoism",
    state: {
      economic: 40,
      diplomatic: 50,
      civil: 100,
      societal: 50
    }
  },
  {
    id: "nazism",
    state: {
      economic: 40,
      diplomatic: 0,
      civil: 0,
      societal: 5
    }
  },
  {
    id: "autocracy",
    state: {
      economic: 50,
      diplomatic: 20,
      civil: 20,
      societal: 50
    }
  },
  {
    id: "fascism",
    state: {
      economic: 40,
      diplomatic: 20,
      civil: 20,
      societal: 20
    }
  },
  {
    id: "capitalist_fascism",
    state: {
      economic: 20,
      diplomatic: 20,
      civil: 20,
      societal: 20
    }
  },
  {
    id: "conservatism",
    state: {
      economic: 30,
      diplomatic: 40,
      civil: 40,
      societal: 20
    }
  },
  {
    id: "neo_liberalism",
    state: {
      economic: 30,
      diplomatic: 30,
      civil: 50,
      societal: 60
    }
  },
  {
    id: "classical_liberalism",
    state: {
      economic: 30,
      diplomatic: 60,
      civil: 60,
      societal: 80
    }
  },
  {
    id: "authoritarian_capitalism",
    state: {
      economic: 20,
      diplomatic: 30,
      civil: 20,
      societal: 40
    }
  },
  {
    id: "state_capitalism",
    state: {
      economic: 20,
      diplomatic: 50,
      civil: 30,
      societal: 50
    }
  },
  {
    id: "neo_conservatism",
    state: {
      economic: 20,
      diplomatic: 20,
      civil: 40,
      societal: 20
    }
  },
  {
    id: "fundamentalism",
    state: {
      economic: 20,
      diplomatic: 30,
      civil: 30,
      societal: 5
    }
  },
  {
    id: "libertarian_capitalism",
    state: {
      economic: 20,
      diplomatic: 50,
      civil: 80,
      societal: 60
    }
  },
  {
    id: "market_anarchism",
    state: {
      economic: 20,
      diplomatic: 50,
      civil: 100,
      societal: 50
    }
  },
  {
    id: "objectivism",
    state: {
      economic: 10,
      diplomatic: 50,
      civil: 90,
      societal: 40
    }
  },
  {
    id: "totalitarian_capitalism",
    state: {
      economic: 0,
      diplomatic: 30,
      civil: 0,
      societal: 50
    }
  },
  {
    id: "ultra_capitalism",
    state: {
      economic: 0,
      diplomatic: 40,
      civil: 50,
      societal: 50
    }
  },
  {
    id: "anarcho_capitalism",
    state: {
      economic: 0,
      diplomatic: 50,
      civil: 100,
      societal: 50
    }
  }
]

export default IDEOLOGIES
