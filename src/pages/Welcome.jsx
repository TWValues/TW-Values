import React from 'react'
import { Divider, Alert, Flex } from 'antd'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { useThemeStore } from '../store/store'
import { getContentMaxWidth } from '../utils/useBreakpoint'
import ValueIntroCard from '../components/ValueIntroCard'
import { getValueConstant } from '../utils/getValueConstant'
import { getQuestions } from '../data/question'
import * as stylex from '@stylexjs/stylex'

const buttonStyles = stylex.create({
  base: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 'x-large',
    margin: '5px',
    height: '60px',
    borderStyle: 'solid',
    borderWidth: '3px',
    borderRadius: '30px',
    color: {
      default: 'white',
      ':hover': { '@media (pointer: fine)': 'dodgerblue' },
      ':active': 'dodgerblue',
    },
    backgroundColor: {
      default: 'dodgerblue',
      ':hover': { '@media (pointer: fine)': 'white' },
      ':active': 'white',
    },
    borderColor: {
      default: 'dodgerblue',
      ':hover': { '@media (pointer: fine)': 'dodgerblue' },
      ':active': 'dodgerblue',
    },
  },
})

const Welcome = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const welcomeStyles = useThemeStore((state) => state.theme.data.welcome)

  return (
    <Flex
      vertical={true}
      justify='center'
      align='center'
      gap={20}
      style={{
        backgroundColor: welcomeStyles.backgroundColor,
        border: 'crimson solid 4px',
        borderRadius: '20px',
        ...getContentMaxWidth(),
        width: '100%',
        margin: '20px auto',
        padding: '5px',
      }}
    >
      <Flex
        vertical={true}
        justify='center'
        align='center'
        style={{
          width: '100%',
          backgroundColor: welcomeStyles.content.backgroundColor,
          border: 'dodgerblue solid 4px',
          borderRadius: '20px',
          padding: '16px',
        }}
      >
        <h1
          style={{
            fontSize: 'xx-large',
            color: welcomeStyles.content.color,
            padding: '10px',
          }}
        >
          {t('quiz.welcome.title')}
        </h1>
        <span
          style={{
            color: welcomeStyles.content.color,
            fontSize: 'large',
            padding: '10px',
          }}
        >
          {t('quiz.welcome.content')}
        </span>
        <Divider style={{ backgroundColor: 'crimson' }} />
        <span
          {...stylex.props(buttonStyles.base)}
          style={{
            width: '100%',
            maxWidth: '480px',
          }}
          onClick={() => {
            navigate('/quiz')
          }}
        >
          {t('quiz.welcome.start')}
        </span>
        <Alert message={t('quiz.welcome.privacy')} type='info' showIcon style={{ margin: '20px' }} />
      </Flex>
      <Flex
        vertical={true}
        justify='center'
        align='center'
        gap={10}
        style={{
          width: '100%',
          backgroundColor: welcomeStyles.content.backgroundColor,
          border: 'orange solid 4px',
          borderRadius: '20px',
          padding: '16px',
        }}
      >
        <h2
          style={{
            fontSize: 'x-large',
            color: welcomeStyles.content.color,
            padding: '10px',
          }}
        >
          {t('quiz.introduction.title')}
        </h2>
        <span style={{ fontSize: 'large', color: welcomeStyles.content.color }}>
          {t('quiz.introduction.description', { count: getQuestions().length })}
        </span>
        <Divider style={{ backgroundColor: welcomeStyles.content.color }} />
        <ValueIntroCard
          title={t('quiz.result.topics.economic.title')}
          leftTitle={t('quiz.result.values.equality.name')}
          rightTitle={t('quiz.result.values.efficiency.name')}
          leftColor={getValueConstant().equality.color}
          rightColor={getValueConstant().efficiency.color}
          leftDescription={t('quiz.result.values.equality.description')}
          rightDescription={t('quiz.result.values.efficiency.description')}
        />
        <Divider style={{ backgroundColor: welcomeStyles.content.color }} />
        <ValueIntroCard
          title={t('quiz.result.topics.diplomatic.title')}
          leftTitle={t('quiz.result.values.globe.name')}
          rightTitle={t('quiz.result.values.nation.name')}
          leftColor={getValueConstant().globe.color}
          rightColor={getValueConstant().nation.color}
          leftDescription={t('quiz.result.values.globe.description')}
          rightDescription={t('quiz.result.values.nation.description')}
        />
        <Divider style={{ backgroundColor: welcomeStyles.content.color }} />
        <ValueIntroCard
          title={t('quiz.result.topics.civil.title')}
          leftTitle={t('quiz.result.values.liberty.name')}
          rightTitle={t('quiz.result.values.authority.name')}
          leftColor={getValueConstant().liberty.color}
          rightColor={getValueConstant().authority.color}
          leftDescription={t('quiz.result.values.liberty.description')}
          rightDescription={t('quiz.result.values.authority.description')}
        />
        <Divider style={{ backgroundColor: welcomeStyles.content.color }} />
        <ValueIntroCard
          title={t('quiz.result.topics.environmental.title')}
          leftTitle={t('quiz.result.values.ecology.name')}
          rightTitle={t('quiz.result.values.production.name')}
          leftColor={getValueConstant().ecology.color}
          rightColor={getValueConstant().production.color}
          leftDescription={t('quiz.result.values.ecology.description')}
          rightDescription={t('quiz.result.values.production.description')}
        />
        <Divider style={{ backgroundColor: welcomeStyles.content.color }} />
        <ValueIntroCard
          title={t('quiz.result.topics.societal.title')}
          leftTitle={t('quiz.result.values.progress.name')}
          rightTitle={t('quiz.result.values.tradition.name')}
          leftColor={getValueConstant().progress.color}
          rightColor={getValueConstant().tradition.color}
          leftDescription={t('quiz.result.values.progress.description')}
          rightDescription={t('quiz.result.values.tradition.description')}
        />
        <Divider style={{ backgroundColor: welcomeStyles.content.color }} />
        <ValueIntroCard
          title={t('quiz.result.topics.sovereignty.title')}
          leftTitle={t('quiz.result.values.independence.name')}
          rightTitle={t('quiz.result.values.unification.name')}
          leftColor={getValueConstant().independence.color}
          rightColor={getValueConstant().unification.color}
          leftDescription={t('quiz.result.values.independence.description')}
          rightDescription={t('quiz.result.values.unification.description')}
        />
        <Divider style={{ backgroundColor: welcomeStyles.content.color }} />
        <ValueIntroCard
          title={t('quiz.result.topics.us_vs_china.title')}
          leftTitle={t('quiz.result.values.pro_american.name')}
          rightTitle={t('quiz.result.values.pro_chinese.name')}
          leftColor={getValueConstant().pro_american.color}
          rightColor={getValueConstant().pro_chinese.color}
          leftDescription={t('quiz.result.values.pro_american.description')}
          rightDescription={t('quiz.result.values.pro_chinese.description')}
        />
      </Flex>
    </Flex>
  )
}

export default Welcome
