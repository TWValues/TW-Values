import { useLocation } from 'react-router-dom'
import { Layout, Progress, Typography, Card } from 'antd'
import { useTranslation } from 'react-i18next'

const { Title } = Typography

const ColorBar = ({ title, leftTitle, rightTitle, leftColor, rightColor, percent }) => {
  return (
    <Card
      title={title}
      headStyle={{
        backgroundColor: 'white',
        color: 'black',
        fontSize: 'xx-large',
        textAlign: 'center',
      }}
      style={{
        backgroundColor: 'white',
        width: '100%',
        fontSize: 'x-large',
        margin: '20px',
      }}>
      <Layout style={{
        backgroundColor: 'transparent',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
      }}>
        <Title level={3} style={{ width: '20%', margin: '20px', color: leftColor, textAlign: 'center' }}>{leftTitle}</Title>
        <Progress type='circle' percent={percent} showInfo={true} strokeColor={leftColor} trailColor='gray' size='small' style={{ margin: '5px' }} />
        <Progress type='line' percent={percent} showInfo={false} strokeLinecap='square' strokeColor={leftColor} trailColor={rightColor} style={{ width: '60%', margin: '5px' }} />
        <Progress type='circle' percent={100 - percent} showInfo={true} strokeColor={rightColor} trailColor='gray' size='small' style={{ margin: '5px' }} />
        <Title level={3} style={{ width: '20%', margin: '20px', color: rightColor, textAlign: 'center' }}>{rightTitle}</Title>
      </Layout>
    </Card>
  )
}

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
      <ColorBar
        title={t('quiz.result.econamic')}
        leftTitle={t('quiz.result.equality')}
        rightTitle={t('quiz.result.market')}
        leftColor='red'
        rightColor='green'
        percent={location.state.econamic} />
      <ColorBar
        title={t('quiz.result.diplomatic')}
        leftTitle={t('quiz.result.nation')}
        rightTitle={t('quiz.result.globe')}
        leftColor='orange'
        rightColor='cyan'
        percent={location.state.diplomatic} />
      <ColorBar
        title={t('quiz.result.civil')}
        leftTitle={t('quiz.result.liberty')}
        rightTitle={t('quiz.result.authority')}
        leftColor='cyan'
        rightColor='red'
        percent={location.state.civil} />
      <ColorBar
        title={t('quiz.result.societal')}
        leftTitle={t('quiz.result.progress')}
        rightTitle={t('quiz.result.tradition')}
        leftColor='magenta'
        rightColor='orange'
        percent={location.state.societal} />
      <ColorBar
        title={t('quiz.result.sovereignty')}
        leftTitle={t('quiz.result.independence')}
        rightTitle={t('quiz.result.unification')}
        leftColor='green'
        rightColor='red'
        percent={location.state.sovereignty} />
      <ColorBar
        title={t('quiz.result.us_china_relation')}
        leftTitle={t('quiz.result.pro_us')}
        rightTitle={t('quiz.result.pro_china')}
        leftColor='blue'
        rightColor='red'
        percent={location.state.us_china_relation} />
    </Layout>
  )
}

export default Result
