
import { Layout, Typography, Grid, Button, Space } from 'antd'
import { GithubOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import getScreenSize from '../../../utils/getScreenSize'
import packageInfo from '../../../../package.json'
import { useTranslation } from 'react-i18next'

const { Title } = Typography

const Header = () => {

  const navigate = useNavigate()
  const [, i18n] = useTranslation()
  const screens = Grid.useBreakpoint()

  const languages = [
    {
      key: 'zh-TW',
      text: '繁',
    },
    {
      key: 'zh-CN',
      text: '简',
    },
    {
      key: 'en',
      text: 'EN',
    }
  ]

  const setLanguage = (language) => {
    localStorage.setItem('ui.language', language)
    i18n.changeLanguage(language)
  }

  const getHeaderStyles = () => {
    const styles = {
      sm: { padding: '0 10px 0 10px' },
      md: { padding: '0 20px 0 20px' },
      lg: { padding: '0 10% 0 10%' },
      xl: { padding: '0 15% 0 15%' },
      xxl: { padding: '0 20% 0 20%' },
    }

    return styles[getScreenSize(screens)]
  }

  return (
    <Layout.Header style=
      {{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        ...getHeaderStyles(),
        height: '60px',
        backgroundColor: 'crimson',
      }}>
      <Title
        level={1}
        style={{
          cursor: 'pointer',
          color: 'white',
          margin: 'auto 0 auto 0',
        }}
        onClick={() => { navigate('/') }}>
        TW Values
      </Title>
      <Space size={8}>
        {languages.map((value, index) =>
          <Button
            key={index}
            onClick={() => { setLanguage(value.key) }}
            style={{
              backgroundColor: 'transparent',
              borderColor: (i18n.language === value.key ? 'transparent' : 'white'),
              color: 'white',
              fontSize: 'medium',
              padding: '0 5px',
            }}>
            {value.text}
          </Button>
        )}
        <Button
          type='link'
          href={`https://github.com/TWValues/TW-Values/tree/v${packageInfo.version}`}
          target='_blank'
          style={{
            backgroundColor: 'transparent',
            borderColor: 'transparent',
            color: 'white',
            fontSize: 'medium',
          }}>
          {`v${packageInfo.version}`}
        </Button>
        <Button
          type='link'
          href='https://github.com/TWValues/TW-Values'
          target='_blank'
          icon={<GithubOutlined style={{ color: 'white', fontSize: 'x-large' }} />}
        />
      </Space>
    </Layout.Header>)
}

export default Header
