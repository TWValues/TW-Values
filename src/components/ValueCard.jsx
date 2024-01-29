import React from 'react'
import { Card, Typography, Progress, Layout, Image, Grid, Flex } from 'antd'
import getScreenSize from '../utils/getScreenSize'
import { useTranslation } from 'react-i18next'

const { Text } = Typography

const ValueCard = ({ title, leftTitle, rightTitle, leftImage, rightImage, leftColor, rightColor, percent, leaningsTitle }) => {

  const { i18n } = useTranslation()
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
    if (i18n.language == 'en') {
      return {
        sm: { fontSize: 'x-small', margin: '5px 2px' },
        md: { fontSize: 'small', margin: '8px 5px' },
        lg: { fontSize: 'small', margin: '8px 5px' },
        xl: { fontSize: 'medium', margin: '8px 5px' },
        xxl: { fontSize: 'large', margin: '15px 10px' },
      }[getScreenSize(screens)]
    }

    return {
      sm: { fontSize: 'medium', margin: '5px 2px' },
      md: { fontSize: 'medium', margin: '8px 5px' },
      lg: { fontSize: 'medium', margin: '8px 5px' },
      xl: { fontSize: 'medium', margin: '8px 5px' },
      xxl: { fontSize: 'large', margin: '15px 10px' },
    }[getScreenSize(screens)]
  }

  return (
    <Card
      title={title}
      headStyle={{
        fontSize: 'x-large',
        textAlign: 'center',
      }}
      style={{
        width: '100%',
      }}>
      <Layout style={{
        backgroundColor: 'transparent',
        display: 'grid',
        gridTemplateColumns: getGridTemplateColumnsStyle(),
        alignItems: 'center',
        justifyItems: 'center',
        width: '100%',
      }}>
        <Flex
          vertical={true}
          justify='center'
          align='center'
        >
          <Image
            width={60}
            src={leftImage || ""}
            preview={false}
            style={{
              padding: '5px'
            }}
          />
          <Text style={{
            minWidth: '80px',
            color: leftColor,
            textAlign: 'center',
            ...getValueTextStyles()
          }}>
            {leftTitle}
          </Text>
        </Flex>
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
        <Flex
          vertical={true}
          justify='center'
          align='center'
          style={{
            width: '100%',
            marginBottom: showColorBar ? '10px' : '0px',
          }}
        >
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
        </Flex>
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
        <Flex
          vertical={true}
          justify='center'
          align='center'
        >
          <Image
            width={60}
            src={rightImage || ""}
            preview={false}
            style={{
              padding: '5px'
            }}
          />
          <Text style={{
            minWidth: '80px',
            color: rightColor,
            textAlign: 'center',
            ...getValueTextStyles()
          }}>
            {rightTitle}
          </Text>
        </Flex>
      </Layout>
    </Card>
  )
}

export default ValueCard
