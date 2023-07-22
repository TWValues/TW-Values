
import { Layout, Typography, Grid, Button, Space } from 'antd'
import { GithubOutlined } from '@ant-design/icons';
import { Outlet, useNavigate } from 'react-router-dom'
import getScreenSize from '../utils/getScreenSize'
import packageInfo from '../../package.json'

const { Header, Content, Footer } = Layout
const { Title } = Typography

const Main = () => {

  const navigate = useNavigate()
  const screens = Grid.useBreakpoint()

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

  const getContentStyles = () => {
    const styles = {
      sm: { padding: '10px 10px 10px 10px' },
      md: { padding: '10px 20px 10px 20px' },
      lg: { padding: '10px 10% 10px 10%' },
      xl: { padding: '10px 15% 10px 15%' },
      xxl: { padding: '10px 20% 10px 20%' },
    }

    return styles[getScreenSize(screens)]
  }

  const getFooterStyles = () => {
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
    <Layout style={{
      minHeight: '100vh',
      minWidth: '360px',
      overflow: 'auto',
    }}>
      <Header style=
        {{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          ...getHeaderStyles(),
          height: '60px',
          backgroundColor: 'crimson',
        }}>
        <Title level={1} style={{ cursor: 'pointer', color: 'white', margin: 'auto 0 auto 0' }} onClick={() => { navigate('/') }}>
          TW Values
        </Title>
        <Space size={1}>
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
      </Header>
      <Content style=
        {{
          display: 'flex',
          alignItems: 'center',
          ...getContentStyles(),
          backgroundColor: 'ghostwhite',
        }}>
        <Outlet />
      </Content>
      <Footer style=
        {{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'end',
          ...getFooterStyles(),
          height: '40px',
          backgroundColor: 'crimson',
        }}>
        <Title level={4} style={{ color: 'white', margin: 'auto 0 auto 0' }}>Copyright (c) 2023 TW Values</Title>
      </Footer >
    </Layout >
  )
}

export default Main
