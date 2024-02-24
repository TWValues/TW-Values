import React from 'react'
import { Card, Progress, Image, Flex } from 'antd'
import { useBreakpoint } from '../utils/useBreakpoint'
import { useTranslation } from 'react-i18next'
import { useThemeStore } from '../store/store'

const ValueMatchCard = ({
  title,
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
  const screens = useBreakpoint()
  const resultStyles = useThemeStore((state) => state.theme.data.result)

  const getColor = () => (percent >= 60 ? leftColor : percent <= 40 ? rightColor : resultStyles.content.color)

  const getValueTextStyles = () => {
    if (i18n.language == 'en') {
      return {
        sm: { fontSize: 'x-small', minWidth: '80px', margin: '2px 2px' },
        md: { fontSize: 'small', minWidth: '100px', margin: '5px 5px' },
        lg: { fontSize: 'small', minWidth: '100px', margin: '5px 5px' },
        xl: { fontSize: 'medium', minWidth: '120px', margin: '8px 8px' },
        xxl: { fontSize: 'medium', minWidth: '120px', margin: '8px 8px' },
      }[screens.size]
    }

    return {
      sm: { fontSize: 'medium', minWidth: '80px', margin: '2px 2px' },
      md: { fontSize: 'medium', minWidth: '80px', margin: '5px 5px' },
      lg: { fontSize: 'medium', minWidth: '80px', margin: '5px 5px' },
      xl: { fontSize: 'large', minWidth: '120px', margin: '8px 8px' },
      xxl: { fontSize: 'large', minWidth: '120px', margin: '8px 8px' },
    }[screens.size]
  }

  const getDescriptionTitleStyles = () => {
    if (i18n.language == 'en') {
      return {
        sm: { fontSize: 'x-small' },
        md: { fontSize: 'small' },
        lg: { fontSize: 'small' },
        xl: { fontSize: 'medium' },
        xxl: { fontSize: 'medium' },
      }[screens.size]
    }

    return {
      sm: { fontSize: 'medium' },
      md: { fontSize: 'medium' },
      lg: { fontSize: 'medium' },
      xl: { fontSize: 'large' },
      xxl: { fontSize: 'large' },
    }[screens.size]
  }

  return (
    <Card
      title={title}
      styles={{
        header: {
          fontSize: 'x-large',
          textAlign: 'center',
          borderBottom: `${getColor()} solid 4px`,
          color: resultStyles.content.color,
          backgroundColor: resultStyles.content.backgroundColor,
        },
        body: {
          padding: {
            sm: '10px',
            md: '16px',
            lg: '24px',
            xl: '24px',
            xxl: '24px',
          }[screens.size],
        },
      }}
      style={{
        width: '100%',
        padding: '5px',
        border: `${getColor()} solid 4px`,
        borderRadius: '20px',
        color: resultStyles.content.color,
        backgroundColor: resultStyles.content.backgroundColor,
      }}
    >
      <Flex
        vertical={false}
        justify='center'
        align='center'
        style={{
          width: '100%',
          maxWidth: '720px',
          margin: 'auto',
        }}
      >
        <Flex vertical={true} justify='center' align='center'>
          <Image
            width={60}
            src={leftImage || ''}
            preview={false}
            style={{
              padding: '4px',
            }}
          />
          <span
            style={{
              fontWeight: 'bold',
              color: leftColor,
              textAlign: 'center',
              ...getValueTextStyles(),
            }}
          >
            {leftTitle}
          </span>
        </Flex>
        {screens.md ? (
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
              <span
                style={{
                  margin: '5px',
                }}
              >
                {`${percent} %`}
              </span>
              <span
                style={{
                  ...getDescriptionTitleStyles(),
                  color: getColor(),
                  textAlign: 'center',
                }}
              >
                {descriptionTitle}
              </span>
              <span
                style={{
                  margin: '5px',
                }}
              >
                {`${100 - percent} %`}
              </span>
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
        ) : (
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
            <span
              style={{
                ...getDescriptionTitleStyles(),
                color: getColor(),
                textAlign: 'center',
              }}
            >
              {descriptionTitle}
            </span>
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
        )}
        <Flex vertical={true} justify='center' align='center'>
          <Image
            width={60}
            src={rightImage || ''}
            preview={false}
            style={{
              padding: '5px',
            }}
          />
          <span
            style={{
              fontWeight: 'bold',
              color: rightColor,
              textAlign: 'center',
              ...getValueTextStyles(),
            }}
          >
            {rightTitle}
          </span>
        </Flex>
      </Flex>
    </Card>
  )
}

export default ValueMatchCard
