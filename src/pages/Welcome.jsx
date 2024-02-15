import React from 'react'
import { Divider, Typography, Alert, Flex } from 'antd'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import useBreakpoint from '../utils/useBreakpoint'
import * as stylex from '@stylexjs/stylex'

const { Title, Text } = Typography

const buttonStyles = stylex.create({
  base: {
    fontSize: 'x-large',
    margin: '5px',
    height: '60px',
    borderStyle: 'solid',
    borderWidth: '3px',
    borderRadius: '30px',
    color: {
      default: 'white',
      ':hover': { '@media (hover: hover)': 'dodgerblue' },
      ':active': 'dodgerblue',
    },
    backgroundColor: {
      default: 'dodgerblue',
      ':hover': { '@media (hover: hover)': 'white' },
      ':active': 'white',
    },
    borderColor: {
      default: 'dodgerblue',
      ':hover': { '@media (hover: hover)': 'dodgerblue' },
      ':active': 'dodgerblue',
    },
  },
})

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
      <button
        {...stylex.props(buttonStyles.base)}
        style={{
          width: {
            sm: '100%',
            md: '60%',
            lg: '50%',
            xl: '40%',
            xxl: '40%',
          }[screens.size],
        }}
        onClick={() => {
          navigate('/quiz')
        }}
      >
        {t('quiz.welcome.start')}
      </button>
      <Alert message={t('quiz.welcome.privacy')} type='info' showIcon style={{ margin: '20px' }} />
    </Flex>
  )
}

export default Welcome
