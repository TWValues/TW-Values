import React from 'react'
import { Layout, Space, Flex } from 'antd'
import { MoonOutlined, SunOutlined, GithubOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import { getHeaderFooterMaxWidth } from '../../../utils/useBreakpoint'
import packageInfo from '../../../../package.json'
import { useTranslation } from 'react-i18next'
import { useThemeStore } from '../../../store/store'
import { getThemeId } from '../../../themes/theme'

const Header = () => {
  const navigate = useNavigate()
  const { i18n } = useTranslation()
  const themeId = useThemeStore((state) => state.theme.id)
  const setTheme = useThemeStore((state) => state.setTheme)

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
        position: 'fixed', // for fixed header
        top: '0', // for fixed header
        zIndex: '1', // for fixed header
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
        <h2
          style={{
            fontSize: 'xx-large',
            cursor: 'pointer',
            color: 'white',
            margin: '0px 5px',
          }}
          onClick={() => {
            navigate('/')
          }}
        >
          TW Values
        </h2>
        <Space size={4}>
          {languages.map((value, index) => (
            <span
              key={index}
              onClick={() => {
                setLanguage(value.key)
              }}
              style={{
                borderColor: i18n.language == value.key ? 'transparent' : 'white',
                borderWidth: '1px',
                borderStyle: 'solid',
                borderRadius: '6px',
                cursor: i18n.language == value.key ? 'default' : 'pointer',
                color: 'white',
                padding: '0 4px',
                fontSize: 'medium',
              }}
            >
              {value.text}
            </span>
          ))}
          <span
            onClick={() => {
              setTheme(themeId == getThemeId().light ? getThemeId().dark : getThemeId().light)
            }}
            style={{
              color: 'white',
              padding: '0 4px',
              fontSize: 'medium',
              cursor: 'pointer',
            }}
          >
            {themeId == getThemeId().light ? <SunOutlined /> : <MoonOutlined />}
          </span>
          <a
            href={`https://github.com/TWValues/TW-Values/tree/v${packageInfo.version}`}
            target='_blank'
            rel='noreferrer'
          >
            <span
              style={{
                color: 'white',
                padding: '0 4px',
                fontSize: 'medium',
              }}
            >{`v${packageInfo.version}`}</span>
          </a>
          <a href='https://github.com/TWValues/TW-Values' target='_blank' rel='noreferrer' style={{ padding: '0 2px' }}>
            <GithubOutlined style={{ color: 'white', fontSize: 'x-large' }} />
          </a>
        </Space>
      </Flex>
    </Layout.Header>
  )
}

export default Header
