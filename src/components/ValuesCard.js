import { Card, Typography, Progress, Layout } from 'antd'

const { Title } = Typography

const ValuesCard = ({ title, leftTitle, rightTitle, leftColor, rightColor, percent }) => {
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

export default ValuesCard
