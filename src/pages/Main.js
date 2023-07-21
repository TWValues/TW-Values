
import { Layout, Typography, Grid } from 'antd'
import { Outlet, useNavigate } from 'react-router-dom'
import getScreenSize from '../utils/getScreenSize'

const { Header, Content, Footer } = Layout
const { Title } = Typography

const Main = () => {

  const navigate = useNavigate()
  const screens = Grid.useBreakpoint()

  const getHeaderStyles = () => {
    const styles = {
      sm: { padding: '20px 10px 40px 10px' },
      md: { padding: '20px 20px 40px 20px' },
      lg: { padding: '20px 10% 40px 10%' },
      xl: { padding: '20px 15% 40px 15%' },
      xxl: { padding: '20px 20% 40px 20%' },
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
      sm: { padding: '0 10px 0px 10px' },
      md: { padding: '0 20px 0px 20px' },
      lg: { padding: '0 10% 0px 10%' },
      xl: { padding: '0 15% 0px 15%' },
      xxl: { padding: '0 20% 0px 20%' },
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
          justifyContent: 'start',
          ...getHeaderStyles(),
        }}>
        <Title level={1} style={{ cursor: 'pointer', color: 'white' }} onClick={() => { navigate('/') }}>
          TW Values
        </Title>
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
          backgroundColor: 'black',
          ...getFooterStyles(),
        }}>
        <Title level={4} style={{ color: 'white' }}>Copyright (c) 2023 TW Values</Title>
      </Footer >
    </Layout >
  )
}

export default Main
