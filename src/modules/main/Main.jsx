import React, { useEffect, useState } from 'react'
import { Layout } from 'antd'
import { Outlet } from 'react-router-dom'
import Header from './header/Header'
import Footer from './footer/Footer'
import { reduceWithDelimiter } from '../../utils/range'
import { useThemeStore } from '../../store/store'

import bg1 from '../../assets/background/bg1.svg'
import bg2 from '../../assets/background/bg2.svg'

const { Content } = Layout

const Main = () => {
  const mainStyles = useThemeStore((state) => state.theme.data.main)

  const backgroundImages = [bg1, bg2]
  const [bgPositionY, setBgPositionY] = useState(
    backgroundImages.map(() => 0),
    [],
  )

  useEffect(() => {
    window.addEventListener('scroll', (ev) => {
      const y = ev.target.documentElement.scrollTop
      setBgPositionY(backgroundImages.map((_, index) => `${(2 * index + 1) * y * -0.01}em`))
    })
  })

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
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: mainStyles.backgroundColor,
          backgroundImage: reduceWithDelimiter(backgroundImages, ',', (value) => `url("${value}")`),
          backgroundRepeat: 'repeat',
          backgroundPositionY: reduceWithDelimiter(bgPositionY, ','),
          transition: 'all 0.25s ease-out 0s',
          width: '100%',
          paddingTop: '64px', // for fixed header
        }}
      >
        <Outlet />
      </Content>
      <Footer />
    </Layout>
  )
}

export default Main
