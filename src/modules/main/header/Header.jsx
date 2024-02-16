import React from 'react'
import { Layout, Typography, Button, Space, Flex } from 'antd'
import { GithubOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import { getHeaderFooterMaxWidth } from '../../../utils/useBreakpoint'
import packageInfo from '../../../../package.json'
import { useTranslation } from 'react-i18next'

const { Title } = Typography

const Header = () => {
  const navigate = useNavigate()
  const { i18n } = useTranslation()

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

  return (
    <Layout.Header
      style={{
        width: '100%',
        height: 'auto',
        backgroundColor: 'crimson',
        padding: '0',
      }}
    >
      <Flex
        vertical={false}
        justify='space-between'
        align='center'
        style={{
          ...getHeaderFooterMaxWidth(),
          width: '100%',
          margin: '0 auto',
        }}
      >
        <Title
          level={1}
          style={{
            cursor: 'pointer',
            color: 'white',
            margin: '0 5px',
            padding: '0',
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
                fontSize: 'medium',
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
              fontSize: 'medium',
            }}
          >
            {`v${packageInfo.version}`}
          </Button>
          <Button
            type='link'
            href='https://github.com/TWValues/TW-Values'
            target='_blank'
            icon={<GithubOutlined style={{ color: 'white', fontSize: 'x-large' }} />}
            style={{ margin: '0 5px' }}
          />
        </Space>
      </Flex>
    </Layout.Header>
  )
}

export default Header
