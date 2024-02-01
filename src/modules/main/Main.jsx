import React from 'react'
import { Layout, Grid } from 'antd'
import { Outlet } from 'react-router-dom'
import Header from './header/Header'
import Footer from './footer/Footer'
import getScreenSize from '../../utils/getScreenSize'

const { Content } = Layout

const Main = () => {
  const screens = Grid.useBreakpoint()

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

  return (
    <Layout
      style={{
        minHeight: '100vh',
        minWidth: '460px',
        overflow: 'auto',
      }}
    >
      <Header />
      <Content
        style={{
          display: 'flex',
          alignItems: 'center',
          ...getContentStyles(),
          backgroundColor: '#202020',
        }}
      >
        <Outlet />
      </Content>
      <Footer />
    </Layout>
  )
}

export default Main
