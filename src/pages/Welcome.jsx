import React from 'react'
import { Divider, Typography, Alert, Flex } from 'antd'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { getContentMaxWidth } from '../utils/useBreakpoint'
import ValueIntro from '../components/ValueIntro'
import { getValueConstant } from '../utils/color'
import { getQuestions } from '../data/question'
import * as stylex from '@stylexjs/stylex'

const { Title, Text } = Typography

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

  return (
    <Flex
      vertical={true}
      justify='center'
      align='center'
      gap={20}
      style={{
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
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
          backgroundColor: 'white',
          border: 'dodgerblue solid 4px',
          borderRadius: '20px',
          padding: '16px',
        }}
      >
        <Title
          level={1}
          style={{
            color: 'black',
            padding: '10px',
          }}
        >
          {t('quiz.welcome.title')}
        </Title>
        <Text
          style={{
            color: 'black',
            fontSize: 'x-large',
            padding: '10px',
          }}
        >
          {t('quiz.welcome.content')}
        </Text>
        <Divider style={{ backgroundColor: 'crimson' }} />
        <div
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
        </div>
        <Alert message={t('quiz.welcome.privacy')} type='info' showIcon style={{ margin: '20px' }} />
      </Flex>
      <Flex
        vertical={true}
        justify='center'
        align='center'
        gap={10}
        style={{
          width: '100%',
          backgroundColor: 'white',
          border: 'orange solid 4px',
          borderRadius: '20px',
          padding: '16px',
        }}
      >
        <Title level={2}>{t('quiz.introduction.title')}</Title>
        <Text style={{ fontSize: 'large' }}>
          {t('quiz.introduction.description', { count: getQuestions().length })}
        </Text>
        <Divider style={{ backgroundColor: 'black' }} />
        <ValueIntro
          title={t('quiz.result.axes.economic.title')}
          leftTitle={t('quiz.result.axes.economic.equality.name')}
          rightTitle={t('quiz.result.axes.economic.efficiency.name')}
          leftColor={getValueConstant().equality.color}
          rightColor={getValueConstant().efficiency.color}
          leftDescription={t('quiz.result.axes.economic.equality.description')}
          rightDescription={t('quiz.result.axes.economic.efficiency.description')}
        />
        <Divider style={{ backgroundColor: 'black' }} />
        <ValueIntro
          title={t('quiz.result.axes.diplomatic.title')}
          leftTitle={t('quiz.result.axes.diplomatic.globe.name')}
          rightTitle={t('quiz.result.axes.diplomatic.nation.name')}
          leftColor={getValueConstant().globe.color}
          rightColor={getValueConstant().nation.color}
          leftDescription={t('quiz.result.axes.diplomatic.globe.description')}
          rightDescription={t('quiz.result.axes.diplomatic.nation.description')}
        />
        <Divider style={{ backgroundColor: 'black' }} />
        <ValueIntro
          title={t('quiz.result.axes.civil.title')}
          leftTitle={t('quiz.result.axes.civil.liberty.name')}
          rightTitle={t('quiz.result.axes.civil.authority.name')}
          leftColor={getValueConstant().liberty.color}
          rightColor={getValueConstant().authority.color}
          leftDescription={t('quiz.result.axes.civil.liberty.description')}
          rightDescription={t('quiz.result.axes.civil.authority.description')}
        />
        <Divider style={{ backgroundColor: 'black' }} />
        <ValueIntro
          title={t('quiz.result.axes.environmental.title')}
          leftTitle={t('quiz.result.axes.environmental.ecology.name')}
          rightTitle={t('quiz.result.axes.environmental.production.name')}
          leftColor={getValueConstant().ecology.color}
          rightColor={getValueConstant().production.color}
          leftDescription={t('quiz.result.axes.environmental.ecology.description')}
          rightDescription={t('quiz.result.axes.environmental.production.description')}
        />
        <Divider style={{ backgroundColor: 'black' }} />
        <ValueIntro
          title={t('quiz.result.axes.societal.title')}
          leftTitle={t('quiz.result.axes.societal.progress.name')}
          rightTitle={t('quiz.result.axes.societal.tradition.name')}
          leftColor={getValueConstant().progress.color}
          rightColor={getValueConstant().tradition.color}
          leftDescription={t('quiz.result.axes.societal.progress.description')}
          rightDescription={t('quiz.result.axes.societal.tradition.description')}
        />
        <Divider style={{ backgroundColor: 'black' }} />
        <ValueIntro
          title={t('quiz.result.axes.sovereignty.title')}
          leftTitle={t('quiz.result.axes.sovereignty.independence.name')}
          rightTitle={t('quiz.result.axes.sovereignty.unification.name')}
          leftColor={getValueConstant().independence.color}
          rightColor={getValueConstant().unification.color}
          leftDescription={t('quiz.result.axes.sovereignty.independence.description')}
          rightDescription={t('quiz.result.axes.sovereignty.unification.description')}
        />
        <Divider style={{ backgroundColor: 'black' }} />
        <ValueIntro
          title={t('quiz.result.axes.us_vs_china.title')}
          leftTitle={t('quiz.result.axes.us_vs_china.pro_american.name')}
          rightTitle={t('quiz.result.axes.us_vs_china.pro_chinese.name')}
          leftColor={getValueConstant().pro_american.color}
          rightColor={getValueConstant().pro_chinese.color}
          leftDescription={t('quiz.result.axes.us_vs_china.pro_american.description')}
          rightDescription={t('quiz.result.axes.us_vs_china.pro_chinese.description')}
        />
      </Flex>
    </Flex>
  )
}

export default Welcome
