import { useSearchParams } from 'react-router-dom'
import { Layout, Card, Typography, Image, Tag } from 'antd'
import { useTranslation } from 'react-i18next'
import ValueCard from '../../components/ValueCard'
import IDEOLOGIES from '../../data/ideologies'
import POLITICAL_PARTIES from '../../data/politicalparties'

import Balance from '../../assets/values/Balance.svg'
import DollarSign from '../../assets/values/DollarSign.svg'
import RecyclingSymbol from '../../assets/values/RecyclingSymbol.svg'
import Factory from '../../assets/values/Factory.svg'
import Liberty from '../../assets/values/Liberty.svg'
import Crown from '../../assets/values/Crown.svg'
import RainbowFlag from '../../assets/values/RainbowFlag.svg'
import Family from '../../assets/values/Family.svg'
import FlagOfTWIndependence from '../../assets/values/FlagOfTWIndependence.svg'
import ChinaTerritory from '../../assets/values/ChinaTerritory.svg'
import FlagOfUSA from '../../assets/values/FlagOfUSA.svg'
import FlagOfPRC from '../../assets/values/FlagOfPRC.svg'

const { Title, Text } = Typography

const Result = () => {

  // eslint-disable-next-line no-unused-vars
  const [searchParams, setSearchParams] = useSearchParams()
  const [t] = useTranslation()

  const economic = searchParams.get('economic')
  const environmental = searchParams.get('environmental')
  const civil = searchParams.get('civil')
  const societal = searchParams.get('societal')
  const diplomatic = searchParams.get('diplomatic')
  const sovereignty = searchParams.get('sovereignty')
  const us_china_relation = searchParams.get('us_china_relation')

  const getIdeologyMatchScores = () => {
    const ideologyScores = IDEOLOGIES.map((value) => {
      let distance = 0.0
      distance += Math.pow(Math.abs(value.state.economic - economic), 2)
      distance += Math.pow(Math.abs(value.state.societal - environmental), 1.5) // Treat environmental as societal
      distance += Math.pow(Math.abs(value.state.civil - civil), 2)
      distance += Math.pow(Math.abs(value.state.societal - societal), 2)
      distance += Math.pow(Math.abs(value.state.diplomatic - diplomatic), 2)
      return {
        id: value.id,
        distance: distance,
      }
    }).sort((lhs, rhs) => lhs.distance < rhs.distance ? -1 : lhs.distance > rhs.distance ? 1 : 0)

    return ideologyScores
  }

  const getBestMatchIdeologies = (ideologyScores) => {
    const top3 = ideologyScores
      .filter((value) => value.distance <= 20 * 20 * 4.5)
      .slice(0, 3)

    return top3.length > 0 ? top3 : ideologyScores.slice(0, 1)
  }

  const getPoliticalPartyMatchScores = () => {
    const politicalScores = POLITICAL_PARTIES.map((value) => {
      let distance = 0.0
      distance += Math.pow(Math.abs(value.state.economic - economic), 2)
      distance += Math.pow(Math.abs(value.state.environmental - environmental), 2)
      distance += Math.pow(Math.abs(value.state.civil - civil), 2)
      distance += Math.pow(Math.abs(value.state.societal - societal), 2)
      distance += Math.pow(Math.abs(value.state.sovereignty - sovereignty), 2)
      distance += Math.pow(Math.abs(value.state.us_china_relation - us_china_relation), 2)
      const threshold = 6 * 50 * 50;
      let rate = Math.pow(Math.max(0, threshold - distance) / threshold, 2)
      return {
        ...value,
        distance: distance,
        rate: rate,
      }
    }).sort((lhs, rhs) => lhs.distance < rhs.distance ? -1 : lhs.distance > rhs.distance ? 1 : 0)

    return politicalScores
  }

  const getBestMatchPoliticalParties = (partyScores) => {
    return partyScores.slice(0, 3)
  }

  const getCategory = (percent) => {
    if (percent <= 10) {
      return 6
    }
    if (percent <= 25) {
      return 5
    }
    if (percent <= 40) {
      return 4
    }
    if (percent >= 90) {
      return 0
    }
    if (percent >= 75) {
      return 1
    }
    if (percent >= 60) {
      return 2
    }

    return 3
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
        }}
        hoverable={true}>
        {getBestMatchIdeologies(getIdeologyMatchScores()).map((value, index) =>
          <Layout
            key={index}
            style={{
              backgroundColor: 'transparent',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
            <Text
              key={index}
              style={{
                margin: '10px',
                fontSize: `${Math.max(120, 180 - index * 30)}%`,
                fontWeight: 'bold',
                color: 'black',
                textAlign: 'center',
              }}>
              {t(`quiz.result.ideologies.${value.id}.name`)}
            </Text>
          </Layout>
        )}
      </Card>
      <Card
        title={t('quiz.result.political_parties.match')}
        headStyle={{
          backgroundColor: 'white',
          color: 'black',
          fontSize: 'x-large',
          textAlign: 'center',
        }}
        style={{
          backgroundColor: 'white',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
          fontSize: 'large',
          margin: '5px 10px 5px 10px',
        }}
        hoverable={true}>
        {getBestMatchPoliticalParties(getPoliticalPartyMatchScores())
          .map((value, index) =>
          (<Layout
            key={index}
            style={{
              backgroundColor: 'transparent',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
            <Image
              width={Math.max(16, 24 - 4 * index)}
              src={value.icon}
              preview={false}
            />
            <Text
              key={index}
              style={{
                margin: '10px',
                fontSize: `${Math.max(100, 140 - index * 20)}%`,
                fontWeight: 'bold',
                color: 'black',
                textAlign: 'center',
              }}>
              {t(`quiz.result.political_parties.${value.id}.name`)}
            </Text>
            <Text
              key={index}
              style={{
                color: 'crimson',
                fontSize: `${Math.max(60, 100 - index * 20)}%`,
                textAlign: 'center',
              }}>{`${(value.rate * 100).toFixed(1)}%`}</Text>
          </Layout>))
        }
      </Card>
      <Card
        title={t('quiz.result.tags.match')}
        headStyle={{
          backgroundColor: 'white',
          color: 'black',
          fontSize: 'x-large',
          textAlign: 'center',
        }}
        style={{
          backgroundColor: 'white',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
          margin: '5px 10px 5px 10px',
        }}
        hoverable={true}>{searchParams.get('tags').split(',').map((value) => (
          <Tag style={{ padding: '5px', fontSize: 'large' }}>
            {t(`quiz.result.tags.${value}`)}
          </Tag>)
        )}
      </Card>
      <ValueCard
        title={t('quiz.result.axes.economic.title')}
        leftTitle={t('quiz.result.axes.economic.equality')}
        rightTitle={t('quiz.result.axes.economic.market')}
        leftImage={Balance}
        rightImage={DollarSign}
        leftColor='crimson'
        rightColor='turquoise'
        percent={economic}
        leaningsTitle={t(`quiz.result.axes.economic.categories.${getCategory(economic)}`)}
      />
      <ValueCard
        title={t('quiz.result.axes.environmental.title')}
        leftTitle={t('quiz.result.axes.environmental.ecology')}
        rightTitle={t('quiz.result.axes.environmental.production')}
        leftImage={RecyclingSymbol}
        rightImage={Factory}
        leftColor='forestgreen'
        rightColor='dodgerblue'
        percent={environmental}
        leaningsTitle={t(`quiz.result.axes.environmental.categories.${getCategory(environmental)}`)}
      />
      <ValueCard
        title={t('quiz.result.axes.civil.title')}
        leftTitle={t('quiz.result.axes.civil.liberty')}
        rightTitle={t('quiz.result.axes.civil.authority')}
        leftImage={Liberty}
        rightImage={Crown}
        leftColor='gold'
        rightColor='red'
        percent={civil}
        leaningsTitle={t(`quiz.result.axes.civil.categories.${getCategory(civil)}`)}
      />
      <ValueCard
        title={t('quiz.result.axes.societal.title')}
        leftTitle={t('quiz.result.axes.societal.progress')}
        rightTitle={t('quiz.result.axes.societal.tradition')}
        leftImage={RainbowFlag}
        rightImage={Family}
        leftColor='magenta'
        rightColor='brown'
        percent={societal}
        leaningsTitle={t(`quiz.result.axes.societal.categories.${getCategory(societal)}`)}
      />
      <ValueCard
        title={t('quiz.result.axes.sovereignty.title')}
        leftTitle={t('quiz.result.axes.sovereignty.independence')}
        rightTitle={t('quiz.result.axes.sovereignty.unification')}
        leftImage={FlagOfTWIndependence}
        rightImage={ChinaTerritory}
        leftColor='green'
        rightColor='black'
        percent={sovereignty}
        leaningsTitle={t(`quiz.result.axes.sovereignty.categories.${getCategory(sovereignty)}`)}
      />
      <ValueCard
        title={t('quiz.result.axes.us_china_relation.title')}
        leftTitle={t('quiz.result.axes.us_china_relation.pro_american')}
        rightTitle={t('quiz.result.axes.us_china_relation.pro_chinese')}
        leftImage={FlagOfUSA}
        rightImage={FlagOfPRC}
        leftColor='navy'
        rightColor='red'
        percent={us_china_relation}
        leaningsTitle={t(`quiz.result.axes.us_china_relation.categories.${getCategory(us_china_relation)}`)}
      />
    </Layout>
  )
}

export default Result
