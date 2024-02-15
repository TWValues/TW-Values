import React from 'react'
import { Button, Divider, Typography, Alert, Flex } from 'antd'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import useBreakpoint from '../utils/useBreakpoint'

const { Title, Text } = Typography

const Welcome = () => {
  const { t } = useTranslation()

  const navigate = useNavigate()
  const screens = useBreakpoint()

  const getLayoutStyles = () =>
    ({
      sm: { padding: '10px' },
      md: { padding: '10px' },
      lg: { padding: '20px' },
      xl: { padding: '30px' },
      xxl: { padding: '40px' },
    })[screens.size]

  const getStartButtonStyles = () =>
    ({
      sm: { width: '100%' },
      md: { width: '60%' },
      lg: { width: '50%' },
      xl: { width: '40%' },
      xxl: { width: '40%' },
    })[screens.size]

  return (
    <Flex
      vertical={true}
      justify='center'
      align='center'
      style={{
        backgroundColor: 'white',
        border: 'crimson solid 4px',
        borderRadius: '20px',
        ...getLayoutStyles(),
      }}
    >
      <Title
        level={1}
        style={{
          color: 'black',
          padding: '10px',
        }}
      >
        {t('quiz.welcome.title')}
      </Title>
      <Text
        style={{
          color: 'black',
          fontSize: 'x-large',
          padding: '10px',
        }}
      >
        {t('quiz.welcome.content')}
      </Text>
      <Divider style={{ backgroundColor: 'crimson' }} />
      <Button
        style={{
          backgroundColor: 'dodgerblue',
          border: '0',
          color: 'white',
          ...getStartButtonStyles(),
          height: '60px',
          margin: '5px',
          fontSize: 'x-large',
        }}
        onClick={() => {
          navigate('/quiz')
        }}
      >
        {t('quiz.welcome.start')}
      </Button>
      <Alert message={t('quiz.welcome.privacy')} type='info' showIcon style={{ margin: '20px' }} />
    </Flex>
  )
}

export default Welcome
