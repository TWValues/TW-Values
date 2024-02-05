import React from 'react'
import { Layout, Typography, Button, Space } from 'antd'
import { GithubOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import useBreakpoint from '../../../utils/useBreakpoint'
import packageInfo from '../../../../package.json'
import { useTranslation } from 'react-i18next'

const { Title } = Typography

const Header = () => {
  const navigate = useNavigate()
  const { i18n } = useTranslation()
  const screens = useBreakpoint()

  const languages = [
    {
      key: 'zhtw',
      text: '繁',
    },
    {
      key: 'zhcn',
      text: '简',
    },
    {
      key: 'en',
      text: 'EN',
    },
  ]

  const setLanguage = (language) => {
    localStorage.setItem('ui.language', language)
    i18n.changeLanguage(language)
  }

  const getHeaderStyles = () =>
    ({
      sm: { padding: '0 10px 0 10px' },
      md: { padding: '0 20px 0 20px' },
      lg: { padding: '0 10% 0 10%' },
      xl: { padding: '0 15% 0 15%' },
      xxl: { padding: '0 20% 0 20%' },
    })[screens.size]

  const getButtonStyles = () =>
    ({
      sm: { fontSize: 'small' },
      md: { fontSize: 'medium' },
      lg: { fontSize: 'medium' },
      xl: { fontSize: 'medium' },
      xxl: { fontSize: 'medium' },
    })[screens.size]

  const getRepoLinkStyles = () =>
    ({
      sm: { fontSize: 'large' },
      md: { fontSize: 'x-large' },
      lg: { fontSize: 'x-large' },
      xl: { fontSize: 'x-large' },
      xxl: { fontSize: 'x-large' },
    })[screens.size]

  return (
    <Layout.Header
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        ...getHeaderStyles(),
        height: '60px',
        backgroundColor: 'crimson',
      }}
    >
      <Title
        level={1}
        style={{
          cursor: 'pointer',
          color: 'white',
          margin: 'auto 0 auto 0',
        }}
        onClick={() => {
          navigate('/')
        }}
      >
        TW Values
      </Title>
      <Space size={8}>
        {languages.map((value, index) => (
          <Button
            key={index}
            onClick={() => {
              setLanguage(value.key)
            }}
            style={{
              backgroundColor: 'transparent',
              borderColor: i18n.language === value.key ? 'transparent' : 'white',
              color: 'white',
              padding: '0 5px',
              ...getButtonStyles(),
            }}
          >
            {value.text}
          </Button>
        ))}
        <Button
          type='link'
          href={`https://github.com/TWValues/TW-Values/tree/v${packageInfo.version}`}
          target='_blank'
          style={{
            backgroundColor: 'transparent',
            borderColor: 'transparent',
            color: 'white',
            padding: '0 5px',
            ...getButtonStyles(),
          }}
        >
          {`v${packageInfo.version}`}
        </Button>
        <Button
          type='link'
          href='https://github.com/TWValues/TW-Values'
          target='_blank'
          icon={<GithubOutlined style={{ color: 'white', ...getRepoLinkStyles() }} />}
        />
      </Space>
    </Layout.Header>
  )
}

export default Header
