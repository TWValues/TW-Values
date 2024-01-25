import React from 'react'
import { Button, Divider, Layout, Typography, Grid, Alert } from 'antd'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import getScreenSize from '../../utils/getScreenSize'

const { Title, Text } = Typography

const Welcome = () => {

  const [t] = useTranslation()

  const navigate = useNavigate()
  const screens = Grid.useBreakpoint()

  const getLayoutStyles = () => {
    const styles = {
      sm: { padding: '10px' },
      md: { padding: '10px' },
      lg: { padding: '20px' },
      xl: { padding: '30px' },
      xxl: { padding: '40px' },
    }

    return styles[getScreenSize(screens)]
  }

  const getStartButtonStyles = () => {
    const styles = {
      sm: { width: '100%' },
      md: { width: '60%' },
      lg: { width: '50%' },
      xl: { width: '40%' },
      xxl: { width: '40%' },
    }

    return styles[getScreenSize(screens)]
  }

  return (
    <Layout style={{
      backgroundColor: 'white',
      display: 'flex',
      alignItems: 'center',
      ...getLayoutStyles(),
    }}>
      <Layout style={{
        backgroundColor: 'white',
        display: 'flex',
        alignItems: 'center',
      }}>
        <Title
          level={1}
          style={{
            color: 'black',
            padding: '10px',
          }}>
          {t('quiz.welcome.title')}
        </Title>
        <Text style={{
          color: 'black',
          fontSize: 'x-large',
          padding: '10px',
        }}>
          {t('quiz.welcome.content')}
        </Text>
        <Divider style={{ backgroundColor: 'black' }} />
        <Button style={{
          backgroundColor: 'dodgerblue',
          borderColor: 'dodgerblue',
          color: 'white',
          ...getStartButtonStyles(),
          height: '60px',
          margin: '5px',
          fontSize: 'x-large',
        }} onClick={() => {
          navigate('/quiz')
        }}>
          {t('quiz.welcome.start')}
        </Button>
      </Layout>
      <Alert
        message={t('quiz.welcome.privacy')}
        type="info"
        showIcon
        style={{ margin: '20px' }} />
    </Layout>
  )
}

export default Welcome
