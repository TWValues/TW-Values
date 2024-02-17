import React from 'react'
import { Flex, Typography } from 'antd'
import { useBreakpoint } from '../utils/useBreakpoint'

const { Text } = Typography

const ValueIntro = ({ title, leftTitle, rightTitle, leftColor, rightColor, leftDescription, rightDescription }) => {
  const screens = useBreakpoint()

  const getTitleStyles = () => {
    return {
      sm: { fontSize: 'large' },
      md: { fontSize: 'large' },
      lg: { fontSize: 'x-large' },
      xl: { fontSize: 'x-large' },
      xxl: { fontSize: 'x-large' },
    }[screens.size]
  }

  const getValueTitleStyles = () => {
    return {
      sm: { fontSize: 'large' },
      md: { fontSize: 'large' },
      lg: { fontSize: 'x-large' },
      xl: { fontSize: 'x-large' },
      xxl: { fontSize: 'x-large' },
    }[screens.size]
  }

  const getValueDescriptionStyles = () => {
    return {
      sm: { fontSize: 'medium' },
      md: { fontSize: 'medium' },
      lg: { fontSize: 'large' },
      xl: { fontSize: 'large' },
      xxl: { fontSize: 'large' },
    }[screens.size]
  }

  const SmallCard = ({ title, description, color }) => (
    <Flex
      vertical={true}
      justify='start'
      align='center'
      gap={10}
      style={{
        margin: '5px',
      }}
    >
      <Text
        style={{
          ...getValueTitleStyles(),
          fontWeight: 'bold',
          textTransform: 'uppercase',
          color: color,
        }}
      >
        {title}
      </Text>
      <Text style={{ ...getValueDescriptionStyles() }}>{description}</Text>
    </Flex>
  )

  const TitleText = () => (
    <Text
      style={{
        ...getTitleStyles(),
        margin: '10px',
        textTransform: 'uppercase',
        textAlign: 'center',
        whiteSpace: 'nowrap',
      }}
    >
      {title}
    </Text>
  )
  const LeftSmallCard = () => <SmallCard title={leftTitle} description={leftDescription} color={leftColor} />
  const RightSmallCard = () => <SmallCard title={rightTitle} description={rightDescription} color={rightColor} />

  return screens.lg ? (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '320px auto 320px',
        width: '100%',
      }}
    >
      <LeftSmallCard />
      <TitleText />
      <RightSmallCard />
    </div>
  ) : (
    <Flex vertical={true} justify='center' align='center'>
      <TitleText />
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: screens.md ? '45% 10% 45%' : '48% 4% 48%',
          alignItems: 'start',
          width: '100%',
        }}
      >
        <LeftSmallCard />
        <div></div>
        <RightSmallCard />
      </div>
    </Flex>
  )
}

export default ValueIntro
