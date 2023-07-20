import { useLocation } from 'react-router-dom'
import { Layout } from 'antd'
import { useTranslation } from 'react-i18next'
import ValueCard from '../../components/ValueCard'

import RecyclingSymbol from '../../assets/RecyclingSymbol.svg'
import YellowFlagWaving from '../../assets/YellowFlagWaving.svg'
import FlagOfTWIndependence from '../../assets/FlagOfTWIndependence.svg'
import ChinaTerritory from '../../assets/ChinaTerritory.svg'
import FlagOfUSA from '../../assets/FlagOfUSA.svg'
import FlagOfPRC from '../../assets/FlagOfPRC.svg'

const Result = () => {

  const location = useLocation()

  // eslint-disable-next-line no-unused-vars
  const [t, i18n] = useTranslation()

  const getCategory = (percent) => {
    const threshold = [0, 10, 25, 40, 60, 75, 90]
    let index = threshold.length - 1
    while (index >= 0) {
      if ((100.0 - percent) >= threshold[index]) {
        return index
      }
      --index
    }

    return 0
  }

  return (
    <Layout style={{
      backgroundColor: 'transparent',
      display: 'flex',
      alignItems: 'center',
    }}>
      <ValueCard
        title={t('quiz.result.axes.economic.title')}
        leftTitle={t('quiz.result.axes.economic.equality')}
        rightTitle={t('quiz.result.axes.economic.market')}
        leftColor='crimson'
        rightColor='turquoise'
        percent={location.state.economic}
        leaningsTitle={t(`quiz.result.axes.economic.categories.${getCategory(location.state.economic)}`)} />
      <ValueCard
        title={t('quiz.result.axes.environmental.title')}
        leftTitle={t('quiz.result.axes.environmental.ecology')}
        rightTitle={t('quiz.result.axes.environmental.production')}
        leftImage={RecyclingSymbol}
        leftColor='forestgreen'
        rightColor='dodgerblue'
        percent={location.state.environmental}
        leaningsTitle={t(`quiz.result.axes.environmental.categories.${getCategory(location.state.environmental)}`)} />
      <ValueCard
        title={t('quiz.result.axes.civil.title')}
        leftTitle={t('quiz.result.axes.civil.liberty')}
        rightTitle={t('quiz.result.axes.civil.authority')}
        leftImage={YellowFlagWaving}
        leftColor='gold'
        rightColor='red'
        percent={location.state.civil}
        leaningsTitle={t(`quiz.result.axes.civil.categories.${getCategory(location.state.civil)}`)} />
      <ValueCard
        title={t('quiz.result.axes.societal.title')}
        leftTitle={t('quiz.result.axes.societal.progress')}
        rightTitle={t('quiz.result.axes.societal.tradition')}
        leftColor='magenta'
        rightColor='brown'
        percent={location.state.societal}
        leaningsTitle={t(`quiz.result.axes.societal.categories.${getCategory(location.state.societal)}`)} />
      <ValueCard
        title={t('quiz.result.axes.sovereignty.title')}
        leftTitle={t('quiz.result.axes.sovereignty.independence')}
        rightTitle={t('quiz.result.axes.sovereignty.unification')}
        leftImage={FlagOfTWIndependence}
        rightImage={ChinaTerritory}
        leftColor='green'
        rightColor='black'
        percent={location.state.sovereignty}
        leaningsTitle={t(`quiz.result.axes.sovereignty.categories.${getCategory(location.state.sovereignty)}`)} />
      <ValueCard
        title={t('quiz.result.axes.us_china_relation.title')}
        leftTitle={t('quiz.result.axes.us_china_relation.pro_american')}
        rightTitle={t('quiz.result.axes.us_china_relation.pro_chinese')}
        leftImage={FlagOfUSA}
        rightImage={FlagOfPRC}
        leftColor='navy'
        rightColor='red'
        percent={location.state.us_china_relation}
        leaningsTitle={t(`quiz.result.axes.us_china_relation.categories.${getCategory(location.state.us_china_relation)}`)} />
    </Layout>
  )
}

export default Result
