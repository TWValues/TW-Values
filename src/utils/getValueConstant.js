import Balance from '../assets/values/Balance.svg'
import DollarSign from '../assets/values/DollarSign.svg'
import Globe from '../assets/values/Globe.svg'
import Flag from '../assets/values/Flag.svg'
import Liberty from '../assets/values/Liberty.svg'
import Crown from '../assets/values/Crown.svg'
import RecyclingSymbol from '../assets/values/RecyclingSymbol.svg'
import Factory from '../assets/values/Factory.svg'
import RainbowFlag from '../assets/values/RainbowFlag.svg'
import Family from '../assets/values/Family.svg'
import FlagOfTWIndependence from '../assets/values/FlagOfTWIndependence.svg'
import ChinaTerritory from '../assets/values/ChinaTerritory.svg'
import FlagOfUSA from '../assets/values/FlagOfUSA.svg'
import FlagOfPRC from '../assets/values/FlagOfPRC.svg'

export const getValueConstant = () => ({
  equality: {
    color: 'crimson',
    image: Balance,
  },
  efficiency: {
    color: 'mediumslateblue',
    image: DollarSign,
  },
  globe: {
    color: 'royalblue',
    image: Globe,
  },
  nation: {
    color: 'darkorange',
    image: Flag,
  },
  liberty: {
    color: 'gold',
    image: Liberty,
  },
  authority: {
    color: 'red',
    image: Crown,
  },
  ecology: {
    color: 'forestgreen',
    image: RecyclingSymbol,
  },
  production: {
    color: 'lightslategray',
    image: Factory,
  },
  progress: {
    color: 'magenta',
    image: RainbowFlag,
  },
  tradition: {
    color: 'maroon',
    image: Family,
  },
  independence: {
    color: 'green',
    image: FlagOfTWIndependence,
  },
  unification: {
    color: 'red',
    image: ChinaTerritory,
  },
  pro_american: {
    color: 'blue',
    image: FlagOfUSA,
  },
  pro_chinese: {
    color: 'red',
    image: FlagOfPRC,
  },
})
