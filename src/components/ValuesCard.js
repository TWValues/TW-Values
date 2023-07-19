import { Card, Typography, Progress, Layout } from 'antd'
import { useTranslation } from 'react-i18next'

const { Title, Text } = Typography

const ValuesCard = ({ title, leftTitle, rightTitle, leftColor, rightColor, percent, leaningsTitle }) => {

  // eslint-disable-next-line no-unused-vars
  const [t, i18n] = useTranslation()

  return (
    <Card
      title={title}
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
      <Layout style={{
        backgroundColor: 'transparent',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
      }}>
        <Title level={3} style={{ width: '20%', margin: '10px', color: leftColor, textAlign: 'center' }}>{leftTitle}</Title>
        <Progress type='circle' percent={percent} showInfo={true} status='active' strokeColor={leftColor} trailColor='gray' size='small' style={{ margin: '5px' }} />
        <Layout style={{
          backgroundColor: 'transparent',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '40%',
          margin: '10px',
          paddingBottom: '10px',
        }}>
          <Text style={{
            fontSize: 'large',
            color: percent >= 60 ? leftColor : percent <= 40 ? rightColor : 'black',
            textAlign: 'center',
            height: '10px',
          }}>
            {leaningsTitle}
          </Text>
          <Progress type='line' percent={percent} showInfo={false} strokeLinecap='square' strokeColor={leftColor} trailColor={rightColor} style={{ margin: '10px' }} />
        </Layout>
        <Progress type='circle' percent={100 - percent} showInfo={true} status='active' strokeColor={rightColor} trailColor='gray' size='small' style={{ margin: '5px' }} />
        <Title level={3} style={{ width: '20%', margin: '10px', color: rightColor, textAlign: 'center' }}>{rightTitle}</Title>
      </Layout>
    </Card >
  )
}

export default ValuesCard
