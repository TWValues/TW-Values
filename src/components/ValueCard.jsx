import { Card, Typography, Progress, Layout, Image, Grid } from 'antd'
import getScreenSize from '../utils/getScreenSize'

const { Text } = Typography

const ValueCard = ({ title, leftTitle, rightTitle, leftImage, rightImage, leftColor, rightColor, percent, leaningsTitle }) => {

  const screens = Grid.useBreakpoint()

  const showColorBar = screens.md

  const getGridTemplateColumnsStyle = () => {
    const styles = {
      sm: '20% 20% auto 20% 20%',
      md: '16% 16% auto 16% 16%',
      lg: '16% 16% auto 16% 16%',
      xl: '16% 16% auto 16% 16%',
      xxl: '14% 14% auto 14% 14%',
    }

    return styles[getScreenSize(screens)]
  }

  const getValueTextStyles = () => {
    const styles = {
      sm: { fontSize: 'x-small', margin: '2px' },
      md: { fontSize: 'small', margin: '5px' },
      lg: { fontSize: 'small', margin: '5px' },
      xl: { fontSize: 'medium', margin: '5px' },
      xxl: { fontSize: 'large', margin: '10px' },
    }

    return styles[getScreenSize(screens)]
  }

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
        margin: '5px 5px 5px 5px',
      }}
      hoverable={true}>
      <Layout style={{
        backgroundColor: 'transparent',
        display: 'grid',
        gridTemplateColumns: getGridTemplateColumnsStyle(),
        alignItems: 'center',
        justifyItems: 'center',
        width: '100%',
      }}>
        <Layout style={{
          backgroundColor: 'transparent',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <Image width={60} src={leftImage || ""} preview={false} />
          <Text style={{
            minWidth: '80px',
            color: leftColor,
            textAlign: 'center',
            ...getValueTextStyles()
          }}>
            {leftTitle}
          </Text>
        </Layout>
        <Progress
          type='circle'
          percent={percent}
          showInfo={true}
          status='active'
          strokeColor={leftColor}
          trailColor='gray'
          size={50}
          style={{ margin: '5px' }}
        />
        <Layout style={{
          backgroundColor: 'transparent',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          width: '100%',
          margin: '5px',
        }}>
          <Text style={{
            ...getValueTextStyles(),
            color: percent >= 60 ? leftColor : percent <= 40 ? rightColor : 'black',
            textAlign: 'center',
            minWidth: '72px',
            height: '20px',
          }}>
            {leaningsTitle}
          </Text>
          {showColorBar && <Progress
            type='line'
            percent={percent}
            showInfo={false}
            strokeLinecap='square'
            strokeColor={leftColor}
            trailColor={rightColor}
            style={{ margin: '5px', paddingBottom: '40px' }}
          />}
        </Layout>
        <Progress
          type='circle'
          percent={100 - percent}
          showInfo={true}
          status='active'
          strokeColor={rightColor}
          trailColor='gray'
          size={50}
          style={{ margin: '5px' }}
        />
        <Layout style={{
          backgroundColor: 'transparent',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <Image width={60} src={rightImage || ""} preview={false} />
          <Text style={{
            minWidth: '80px',
            color: rightColor,
            textAlign: 'center',
            ...getValueTextStyles()
          }}>
            {rightTitle}
          </Text>
        </Layout>
      </Layout>
    </Card >
  )
}

export default ValueCard
