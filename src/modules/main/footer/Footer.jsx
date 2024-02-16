import React from 'react'
import { Layout, Typography, Flex } from 'antd'
import { getHeaderFooterMaxWidth } from '../../../utils/useBreakpoint'
import { useNavigate } from 'react-router-dom'

const { Title } = Typography

const Footer = () => {
  const navigate = useNavigate()

  return (
    <Layout.Footer
      style={{
        width: '100%',
        height: 'auto',
        backgroundColor: 'crimson',
        padding: '5px',
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
          level={5}
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
        <Title level={5} style={{ color: 'white', margin: 'auto 0 auto 0' }}>
          Copyright (c) 2023-2024 TW Values
        </Title>
      </Flex>
    </Layout.Footer>
  )
}

export default Footer
