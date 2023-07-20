import { useSearchParams } from 'react-router-dom'
import { Layout, Card, Typography } from 'antd'
import { useTranslation } from 'react-i18next'
import ValueCard from '../../components/ValueCard'

import Balance from '../../assets/Balance.svg'
import DollarSign from '../../assets/DollarSign.svg'
import RecyclingSymbol from '../../assets/RecyclingSymbol.svg'
import Factory from '../../assets/Factory.svg'
import Liberty from '../../assets/Liberty.svg'
import Crown from '../../assets/Crown.svg'
import RainbowFlag from '../../assets/RainbowFlag.svg'
import Family from '../../assets/Family.svg'
import FlagOfTWIndependence from '../../assets/FlagOfTWIndependence.svg'
import ChinaTerritory from '../../assets/ChinaTerritory.svg'
import FlagOfUSA from '../../assets/FlagOfUSA.svg'
import FlagOfPRC from '../../assets/FlagOfPRC.svg'

const { Title } = Typography

const Result = () => {

  // eslint-disable-next-line no-unused-vars
  const [searchParams, setSearchParams] = useSearchParams()
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
      <Card
        title={t('quiz.result.ideologies.match')}
        headStyle={{
          backgroundColor: 'white',
          color: 'black',
          fontSize: 'x-large',
          textAlign: 'center',
        }}
        style={{
          backgroundColor: 'white',
          width: '100%',
          fontSize: 'large',
          margin: '5px 10px 5px 10px',
        }}>
        <Title level={1} style={{ margin: '10px', color: 'black', textAlign: 'center' }}>
          {searchParams.get('ideology_name')}
        </Title>
      </Card>
      <ValueCard
        title={t('quiz.result.axes.economic.title')}
        leftTitle={t('quiz.result.axes.economic.equality')}
        rightTitle={t('quiz.result.axes.economic.market')}
        leftImage={Balance}
        rightImage={DollarSign}
        leftColor='crimson'
        rightColor='turquoise'
        percent={searchParams.get('economic')}
        leaningsTitle={t(`quiz.result.axes.economic.categories.${getCategory(searchParams.get('economic'))}`)}
      />
      <ValueCard
        title={t('quiz.result.axes.environmental.title')}
        leftTitle={t('quiz.result.axes.environmental.ecology')}
        rightTitle={t('quiz.result.axes.environmental.production')}
        leftImage={RecyclingSymbol}
        rightImage={Factory}
        leftColor='forestgreen'
        rightColor='dodgerblue'
        percent={searchParams.get('environmental')}
        leaningsTitle={t(`quiz.result.axes.environmental.categories.${getCategory(searchParams.get('environmental'))}`)}
      />
      <ValueCard
        title={t('quiz.result.axes.civil.title')}
        leftTitle={t('quiz.result.axes.civil.liberty')}
        rightTitle={t('quiz.result.axes.civil.authority')}
        leftImage={Liberty}
        rightImage={Crown}
        leftColor='gold'
        rightColor='red'
        percent={searchParams.get('civil')}
        leaningsTitle={t(`quiz.result.axes.civil.categories.${getCategory(searchParams.get('civil'))}`)}
      />
      <ValueCard
        title={t('quiz.result.axes.societal.title')}
        leftTitle={t('quiz.result.axes.societal.progress')}
        rightTitle={t('quiz.result.axes.societal.tradition')}
        leftImage={RainbowFlag}
        rightImage={Family}
        leftColor='magenta'
        rightColor='brown'
        percent={searchParams.get('societal')}
        leaningsTitle={t(`quiz.result.axes.societal.categories.${getCategory(searchParams.get('societal'))}`)}
      />
      <ValueCard
        title={t('quiz.result.axes.sovereignty.title')}
        leftTitle={t('quiz.result.axes.sovereignty.independence')}
        rightTitle={t('quiz.result.axes.sovereignty.unification')}
        leftImage={FlagOfTWIndependence}
        rightImage={ChinaTerritory}
        leftColor='green'
        rightColor='black'
        percent={searchParams.get('sovereignty')}
        leaningsTitle={t(`quiz.result.axes.sovereignty.categories.${getCategory(searchParams.get('sovereignty'))}`)}
      />
      <ValueCard
        title={t('quiz.result.axes.us_china_relation.title')}
        leftTitle={t('quiz.result.axes.us_china_relation.pro_american')}
        rightTitle={t('quiz.result.axes.us_china_relation.pro_chinese')}
        leftImage={FlagOfUSA}
        rightImage={FlagOfPRC}
        leftColor='navy'
        rightColor='red'
        percent={searchParams.get('us_china_relation')}
        leaningsTitle={t(`quiz.result.axes.us_china_relation.categories.${getCategory(searchParams.get('us_china_relation'))}`)}
      />
    </Layout>
  )
}

export default Result
