import { useLocation } from 'react-router-dom'
import { Layout } from 'antd'
import { useTranslation } from 'react-i18next'
import ValuesCard from '../../components/ValuesCard'

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
      <ValuesCard
        title={t('quiz.result.axes.economic.title')}
        leftTitle={t('quiz.result.axes.economic.equality')}
        rightTitle={t('quiz.result.axes.economic.market')}
        leftColor='crimson'
        rightColor='lawngreen'
        percent={location.state.economic}
        leaningsTitle={t(`quiz.result.axes.economic.categories.${getCategory(location.state.economic)}`)} />
      <ValuesCard
        title={t('quiz.result.axes.environmental.title')}
        leftTitle={t('quiz.result.axes.environmental.ecology')}
        rightTitle={t('quiz.result.axes.environmental.production')}
        leftColor='orange'
        rightColor='dodgerblue'
        percent={location.state.environmental}
        leaningsTitle={t(`quiz.result.axes.environmental.categories.${getCategory(location.state.environmental)}`)} />
      <ValuesCard
        title={t('quiz.result.axes.civil.title')}
        leftTitle={t('quiz.result.axes.civil.liberty')}
        rightTitle={t('quiz.result.axes.civil.authority')}
        leftColor='turquoise'
        rightColor='red'
        percent={location.state.civil}
        leaningsTitle={t(`quiz.result.axes.civil.categories.${getCategory(location.state.civil)}`)} />
      <ValuesCard
        title={t('quiz.result.axes.societal.title')}
        leftTitle={t('quiz.result.axes.societal.progress')}
        rightTitle={t('quiz.result.axes.societal.tradition')}
        leftColor='magenta'
        rightColor='brown'
        percent={location.state.societal}
        leaningsTitle={t(`quiz.result.axes.societal.categories.${getCategory(location.state.societal)}`)} />
      <ValuesCard
        title={t('quiz.result.axes.sovereignty.title')}
        leftTitle={t('quiz.result.axes.sovereignty.independence')}
        rightTitle={t('quiz.result.axes.sovereignty.unification')}
        leftColor='green'
        rightColor='red'
        percent={location.state.sovereignty}
        leaningsTitle={t(`quiz.result.axes.sovereignty.categories.${getCategory(location.state.sovereignty)}`)} />
      <ValuesCard
        title={t('quiz.result.axes.us_china_relation.title')}
        leftTitle={t('quiz.result.axes.us_china_relation.pro_american')}
        rightTitle={t('quiz.result.axes.us_china_relation.pro_chinese')}
        leftColor='navy'
        rightColor='red'
        percent={location.state.us_china_relation}
        leaningsTitle={t(`quiz.result.axes.us_china_relation.categories.${getCategory(location.state.us_china_relation)}`)} />
    </Layout>
  )
}

export default Result
