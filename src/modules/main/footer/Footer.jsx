import React from 'react'
import { Layout, Typography, Grid } from 'antd'
import getScreenSize from '../../../utils/getScreenSize'
import { useNavigate } from 'react-router-dom'

const { Title } = Typography

const Footer = () => {

  const navigate = useNavigate()
  const screens = Grid.useBreakpoint()

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
    <Layout.Footer style=
      {{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        ...getFooterStyles(),
        height: '40px',
        backgroundColor: 'crimson',
      }}>
      <Title
        level={5}
        style={{
          cursor: 'pointer',
          color: 'white',
          margin: 'auto 0 auto 0',
        }}
        onClick={() => { navigate('/') }}>
        TW Values
      </Title>
      <Title level={5} style={{ color: 'white', margin: 'auto 0 auto 0' }}>Copyright (c) 2023-2024 TW Values</Title>
    </Layout.Footer >
  )
}

export default Footer
