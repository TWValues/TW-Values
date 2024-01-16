import KMTIcon from '../assets/parties/KMTIcon.svg'
import DPPIcon from '../assets/parties/DPPIcon.svg'
import NPIcon from '../assets/parties/NPIcon.svg'
import NPPIcon from '../assets/parties/NPPIcon.svg'
import TSPIcon from '../assets/parties/TSPIcon.svg'
import TPPIcon from '../assets/parties/TPPIcon.svg'
import CUPPIcon from '../assets/parties/CUPPIcon.svg'

const POLITICAL_PARTIES = [
  {
    id: "kmt",
    icon: KMTIcon,
    state: {
      economic: 40,
      environmental: 40,
      civil: 40,
      societal: 30,
      sovereignty: 40,
      us_china_relation: 35,
    }
  },
  {
    id: "dpp",
    icon: DPPIcon,
    state: {
      economic: 55,
      environmental: 60,
      civil: 55,
      societal: 55,
      sovereignty: 65,
      us_china_relation: 70,
    }
  },
  {
    id: "np",
    icon: NPIcon,
    state: {
      economic: 60,
      environmental: 40,
      civil: 35,
      societal: 25,
      sovereignty: 20,
      us_china_relation: 20,
    }
  },
  {
    id: "npp",
    icon: NPPIcon,
    state: {
      economic: 75,
      environmental: 75,
      civil: 75,
      societal: 80,
      sovereignty: 75,
      us_china_relation: 70,
    }
  },
  {
    id: "tpp",
    icon: TPPIcon,
    state: {
      economic: 45,
      environmental: 45,
      civil: 50,
      societal: 50,
      sovereignty: 50,
      us_china_relation: 45,
    }
  },
  {
    id: "tsp",
    icon: TSPIcon,
    state: {
      economic: 60,
      environmental: 50,
      civil: 75,
      societal: 60,
      sovereignty: 90,
      us_china_relation: 80,
    }
  },
  {
    id: "cupp",
    icon: CUPPIcon,
    state: {
      economic: 80,
      environmental: 20,
      civil: 10,
      societal: 20,
      sovereignty: 10,
      us_china_relation: 10,
    }
  },
]

export default POLITICAL_PARTIES
