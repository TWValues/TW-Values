import React from 'react'
import { Flex } from 'antd'
import { useBreakpoint } from '../utils/useBreakpoint'
import { useThemeStore } from '../store/store'

const ValueIntroCard = ({ title, leftTitle, rightTitle, leftColor, rightColor, leftDescription, rightDescription }) => {
  const screens = useBreakpoint()
  const welcomeStyles = useThemeStore((state) => state.theme.data.welcome)

  const getTitleStyles = () => {
    return {
      sm: { fontSize: 'x-large' },
      md: { fontSize: 'x-large' },
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
        height: '100%',
        margin: '2px',
        padding: '10px',
        borderColor: color,
        borderStyle: 'solid',
        borderWidth: '2px',
        borderRadius: '20px',
      }}
    >
      <span
        style={{
          ...getValueTitleStyles(),
          fontWeight: 'bold',
          textTransform: 'uppercase',
          color: color,
        }}
      >
        {title}
      </span>
      <span style={{ ...getValueDescriptionStyles(), color: welcomeStyles.content.color }}>{description}</span>
    </Flex>
  )

  const TitleText = () => (
    <span
      style={{
        ...getTitleStyles(),
        margin: '10px',
        textTransform: 'uppercase',
        textAlign: 'center',
        whiteSpace: 'nowrap',
        color: welcomeStyles.content.color,
      }}
    >
      {title}
    </span>
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
          gridTemplateColumns: screens.md ? '45% 10% 45%' : '50% 0% 50%',
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

export default ValueIntroCard
