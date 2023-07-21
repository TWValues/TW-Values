import { Card, Typography, Progress, Layout, Image } from 'antd'
import { useTranslation } from 'react-i18next'

const { Title, Text } = Typography

const ValueCard = ({ title, leftTitle, rightTitle, leftImage, rightImage, leftColor, rightColor, percent, leaningsTitle }) => {

  // eslint-disable-next-line no-unused-vars
  const [t, i18n] = useTranslation()

  percent = Math.round(percent)

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
      }}
      hoverable={true}>
      <Layout style={{
        backgroundColor: 'transparent',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
      }}>
        <Layout style={{
          backgroundColor: 'transparent',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <Image width={60} src={leftImage || ""} />
          <Title level={3} style={{ margin: '10px', color: leftColor, textAlign: 'center' }}>{leftTitle}</Title>
        </Layout>
        <Progress
          type='circle'
          percent={percent}
          showInfo={true}
          status='active'
          strokeColor={leftColor}
          trailColor='gray'
          size='small'
          style={{ margin: '5px' }}
        />
        <Layout style={{
          backgroundColor: 'transparent',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '40%',
          margin: '10px',
          paddingBottom: '20px',
        }}>
          <Text style={{
            fontSize: 'large',
            color: percent >= 60 ? leftColor : percent <= 40 ? rightColor : 'black',
            textAlign: 'center',
            height: '20px',
          }}>
            {leaningsTitle}
          </Text>
          <Progress
            type='line'
            percent={percent}
            showInfo={false}
            strokeLinecap='square'
            strokeColor={leftColor}
            trailColor={rightColor}
            style={{ margin: '10px' }}
          />
        </Layout>
        <Progress
          type='circle'
          percent={100 - percent}
          showInfo={true}
          status='active'
          strokeColor={rightColor}
          trailColor='gray'
          size='small'
          style={{ margin: '5px' }}
        />
        <Layout style={{
          backgroundColor: 'transparent',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <Image width={60} src={rightImage || ""} />
          <Title level={3} style={{ margin: '10px', color: rightColor, textAlign: 'center' }}>{rightTitle}</Title>
        </Layout>
      </Layout>
    </Card >
  )
}

export default ValueCard
