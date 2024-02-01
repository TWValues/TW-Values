import React from 'react'
import { Card, Typography, Progress, Image, Grid, Flex } from 'antd'
import getScreenSize from '../utils/getScreenSize'
import { useTranslation } from 'react-i18next'

const { Text } = Typography

const ValueCard = (
  { title,
    leftTitle,
    rightTitle,
    leftImage,
    rightImage,
    leftColor,
    rightColor,
    percent,
    descriptionTitle,
  }) => {

  const { i18n } = useTranslation()
  const screens = Grid.useBreakpoint()

  const getValueTextStyles = () => {
    if (i18n.language == 'en') {
      return {
        sm: { fontSize: 'x-small', minWidth: '80px', margin: '2px 2px' },
        md: { fontSize: 'small', minWidth: '100px', margin: '5px 5px' },
        lg: { fontSize: 'small', minWidth: '100px', margin: '5px 5px' },
        xl: { fontSize: 'medium', minWidth: '120px', margin: '8px 8px' },
        xxl: { fontSize: 'medium', minWidth: '120px', margin: '8px 8px' },
      }[getScreenSize(screens)]
    }

    return {
      sm: { fontSize: 'x-small', minWidth: '80px', margin: '2px 2px' },
      md: { fontSize: 'small', minWidth: '100px', margin: '5px 5px' },
      lg: { fontSize: 'medium', minWidth: '100px', margin: '5px 5px' },
      xl: { fontSize: 'large', minWidth: '120px', margin: '8px 8px' },
      xxl: { fontSize: 'large', minWidth: '120px', margin: '8px 8px' },
    }[getScreenSize(screens)]
  }

  const getdescriptionTitleStyles = () => {
    if (i18n.language == 'en') {
      return {
        sm: { fontSize: 'x-small' },
        md: { fontSize: 'small' },
        lg: { fontSize: 'small' },
        xl: { fontSize: 'medium' },
        xxl: { fontSize: 'medium' },
      }[getScreenSize(screens)]
    }

    return {
      sm: { fontSize: 'medium' },
      md: { fontSize: 'medium' },
      lg: { fontSize: 'medium' },
      xl: { fontSize: 'large' },
      xxl: { fontSize: 'large' },
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
        backgroundColor: 'gainsboro',
      }}>
      <Flex
        vertical={false}
        justify='center'
        align='center'
        style={{
          width: '100%',
          maxWidth: '720px',
          margin: 'auto',
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
            color: leftColor,
            textAlign: 'center',
            ...getValueTextStyles()
          }}>
            {leftTitle}
          </Text>
        </Flex>
        {screens.md ?
          <Flex
            vertical={true}
            justify='center'
            align='center'
            style={{
              width: '100%',
              margin: '0px 20px',
            }}
          >
            <Flex
              vertical={false}
              justify='space-between'
              align='center'
              style={{
                width: '100%',
              }}
            >
              <Text style={{
                margin: '5px'
              }}>
                {`${percent} %`}
              </Text>
              <Text style={{
                ...getdescriptionTitleStyles(),
                color: percent >= 60 ? leftColor : percent <= 40 ? rightColor : 'black',
                textAlign: 'center',
              }}>
                {descriptionTitle}
              </Text>
              <Text style={{
                margin: '5px'
              }}>
                {`${100 - percent} %`}
              </Text>
            </Flex>
            <Progress
              type='line'
              percent={percent}
              showInfo={false}
              strokeLinecap='square'
              strokeColor={leftColor}
              trailColor={rightColor}
              style={{
                paddingBottom: '20px',
              }}
            />
          </Flex>
          :
          <Flex
            vertical={false}
            justify='space-between'
            align='center'
            style={{
              width: '100%',
            }}
          >
            <Progress
              type='dashboard'
              percent={percent}
              showInfo={true}
              status='active'
              strokeColor={leftColor}
              trailColor='gray'
              size={50}
              style={{ margin: '5px' }}
            />
            <Text style={{
              ...getdescriptionTitleStyles(),
              color: percent >= 60 ? leftColor : percent <= 40 ? rightColor : 'black',
              textAlign: 'center',
            }}>
              {descriptionTitle}
            </Text>
            <Progress
              type='dashboard'
              percent={100 - percent}
              showInfo={true}
              status='active'
              strokeColor={rightColor}
              trailColor='gray'
              size={50}
              style={{ margin: '5px' }}
            />
          </Flex>
        }
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
            color: rightColor,
            textAlign: 'center',
            ...getValueTextStyles()
          }}>
            {rightTitle}
          </Text>
        </Flex>
      </Flex>
    </Card>
  )
}

export default ValueCard
