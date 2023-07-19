import { useLocation } from 'react-router-dom'
import { Layout } from 'antd'
import { useTranslation } from 'react-i18next'
import ValuesCard from '../../components/ValuesCard'

const Result = () => {

  const location = useLocation()

  // eslint-disable-next-line no-unused-vars
  const [t, i18n] = useTranslation()

  return (
    <Layout style={{
      backgroundColor: 'transparent',
      display: 'flex',
      alignItems: 'center',
    }}>
      <ValuesCard
        title={t('quiz.result.econamic')}
        leftTitle={t('quiz.result.equality')}
        rightTitle={t('quiz.result.market')}
        leftColor='crimson'
        rightColor='lawngreen'
        percent={location.state.econamic} />
      <ValuesCard
        title={t('quiz.result.diplomatic')}
        leftTitle={t('quiz.result.nation')}
        rightTitle={t('quiz.result.globe')}
        leftColor='orange'
        rightColor='dodgerblue'
        percent={location.state.diplomatic} />
      <ValuesCard
        title={t('quiz.result.civil')}
        leftTitle={t('quiz.result.liberty')}
        rightTitle={t('quiz.result.authority')}
        leftColor='turquoise'
        rightColor='red'
        percent={location.state.civil} />
      <ValuesCard
        title={t('quiz.result.societal')}
        leftTitle={t('quiz.result.progress')}
        rightTitle={t('quiz.result.tradition')}
        leftColor='magenta'
        rightColor='brown'
        percent={location.state.societal} />
      <ValuesCard
        title={t('quiz.result.sovereignty')}
        leftTitle={t('quiz.result.independence')}
        rightTitle={t('quiz.result.unification')}
        leftColor='green'
        rightColor='red'
        percent={location.state.sovereignty} />
      <ValuesCard
        title={t('quiz.result.us_china_relation')}
        leftTitle={t('quiz.result.pro_us')}
        rightTitle={t('quiz.result.pro_china')}
        leftColor='navy'
        rightColor='red'
        percent={location.state.us_china_relation} />
    </Layout>
  )
}

export default Result
