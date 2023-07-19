
import { Layout, Typography } from 'antd'
import { Outlet, useNavigate } from 'react-router-dom'

const { Header, Content, Footer } = Layout
const { Title } = Typography

const Main = () => {

  const navigate = useNavigate()

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header style=
        {{
          display: 'flex',
          alignItems: 'center',
          padding: '20px 20% 40px 20%',
        }}>
        <Title level={1} style={{ cursor: 'pointer', color: 'white' }} onClick={() => { navigate('/') }}>
          TW Values
        </Title>
      </Header>
      <Content style=
        {{
          display: 'flex',
          alignItems: 'center',
          padding: '10px 20% 10px 20%',
          backgroundColor: 'ghostwhite',
        }}>
        <Outlet />
      </Content>
      <Footer style=
        {{
          backgroundColor: 'black',
          padding: '0 20% 0 20%',
          textAlign: 'right',
        }}>
        <Title level={4} style={{ color: 'white' }}>Copyright (c) 2023 TW Values</Title>
      </Footer >
    </Layout >
  )
}

export default Main
