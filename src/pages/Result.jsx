import React, { useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { Card, Flex, Switch, message } from 'antd'
import { WarningOutlined } from '@ant-design/icons'
import { useTranslation } from 'react-i18next'
import { useThemeStore } from '../store/store'
import MatchCard from '../components/MatchCard'
import ValueMatchCard from '../components/ValueMatchCard'
import { useBreakpoint, getContentMaxWidth } from '../utils/useBreakpoint'
import { getIdeologyTags } from '../data/ideology_tag'
import { getIdeologyMatchScores, getPoliticalPartyMatchScores } from '../utils/match'
import { getValueConstant } from '../utils/getValueConstant'
import { API_VERSION_KEY, isApiVersionCompatible, isApiVersionEqual } from '../utils/apiVersion'
import * as stylex from '@stylexjs/stylex'

const apiErrorButtonStyles = stylex.create({
  base: {
    height: 'auto',
    margin: '10px',
    padding: '5px 20px',
    borderRadius: '20px',
    borderWidth: '3px',
    borderStyle: 'solid',
    fontSize: 'large',
    fontWeight: 'bold',
    textAlign: 'center',
    color: {
      default: 'white',
      ':hover': { '@media (pointer: fine)': 'crimson' },
      ':active': 'crimson',
    },
    backgroundColor: {
      default: 'crimson',
      ':hover': { '@media (pointer: fine)': 'white' },
      ':active': 'white',
    },
    borderColor: {
      default: 'white',
      ':hover': { '@media (pointer: fine)': 'crimson' },
      ':active': 'crimson',
    },
  },
})

const tagButtonStyles = stylex.create({
  base: {
    display: 'inline-block',
    whiteSpace: 'nowrap',
    borderRadius: '20px',
    borderStyle: 'solid',
    borderWidth: '2px',
    padding: '1px 12px',
    margin: '0px 4px',
  },
  enabled: {
    color: 'white',
    backgroundColor: 'dodgerblue',
    borderColor: 'dodgerblue',
  },
  enabledWithLink: {
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
    borderColor: 'dodgerblue',
  },
  disabled: {
    color: 'white',
    backgroundColor: 'gray',
    borderColor: 'gray',
  },
  disabledWithLink: {
    color: {
      default: 'white',
      ':hover': { '@media (pointer: fine)': 'gray' },
      ':active': 'gray',
    },
    backgroundColor: {
      default: 'gray',
      ':hover': { '@media (pointer: fine)': 'white' },
      ':active': 'white',
    },
    borderColor: 'gray',
  },
})

const linkButtonStyles = stylex.create({
  base: {
    display: 'inline-block',
    whiteSpace: 'nowrap',
    fontSize: 'medium',
    margin: '5px',
    padding: '0px 10px',
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

const Result = () => {
  const [searchParams] = useSearchParams()
  const { t, i18n } = useTranslation()
  const screens = useBreakpoint()
  const navigate = useNavigate()
  const resultStyles = useThemeStore((state) => state.theme.data.result)
  const [messageApi, contextHolder] = message.useMessage()
  const [expandTags, setExpandTags] = useState(false, [])

  const apiVersion = searchParams.get(API_VERSION_KEY) || ''

  const weights = {
    economic: searchParams.get('economic'),
    diplomatic: searchParams.get('diplomatic'),
    civil: searchParams.get('civil'),
    environmental: searchParams.get('environmental'),
    societal: searchParams.get('societal'),
    sovereignty: searchParams.get('sovereignty'),
    us_vs_china: searchParams.get('us_vs_china'),
  }

  const matchedTags = new Set(searchParams.get('tags').split(','))

  const getMatchTags = (tags, all) => {
    if (all) {
      return tags.sort((lhs, rhs) => {
        const l = matchedTags.has(lhs.id)
        const r = matchedTags.has(rhs.id)
        if (l && !r) {
          return -1
        }
        if (!l && r) {
          return 1
        }
        return 0
      })
    }
    return tags.filter((value) => matchedTags.has(value.id))
  }

  const isLanguage = (lang) => {
    return i18n.language == lang
  }

  const getCategory = (percent) => {
    if (percent <= 10) {
      return 6
    }
    if (percent <= 25) {
      return 5
    }
    if (percent <= 40) {
      return 4
    }
    if (percent >= 90) {
      return 0
    }
    if (percent >= 75) {
      return 1
    }
    if (percent >= 60) {
      return 2
    }

    return 3
  }

  const getCardBodyPadding = () =>
    ({
      sm: '10px',
      md: '16px',
      lg: '24px',
      xl: '24px',
      xxl: '24px',
    })[screens.size]

  const ApiErrorPage = () => (
    <Flex
      vertical={true}
      justify='center'
      align='center'
      style={{
        width: '100%',
        backgroundColor: resultStyles.content.backgroundColor,
        borderColor: resultStyles.content.color,
        borderStyle: 'solid',
        borderWidth: '4px',
        borderRadius: '20px',
        padding: '20px',
      }}
    >
      <h2
        style={{
          margin: '5px',
          color: 'red',
        }}
      >
        {t(`quiz.result.api_error.description`)}
      </h2>
      <span
        {...stylex.props(apiErrorButtonStyles.base)}
        onClick={() => {
          navigate('/')
        }}
      >
        {t(`quiz.result.api_error.index`)}
      </span>
    </Flex>
  )

  const ApiWarningPage = () => (
    <Flex
      vertical={false}
      justify='center'
      align='center'
      style={{
        width: '100%',
        backgroundColor: resultStyles.apiWarningPage.backgroundColor,
        borderColor: resultStyles.apiWarningPage.borderColor,
        borderStyle: 'solid',
        borderWidth: '4px',
        borderRadius: '20px',
        padding: '20px',
      }}
    >
      <WarningOutlined style={{ color: resultStyles.apiWarningPage.color, fontSize: 'large' }} />
      <h3
        style={{
          margin: '5px',
          color: resultStyles.apiWarningPage.color,
        }}
      >
        {t(`quiz.result.api_warning.description`)}
      </h3>
    </Flex>
  )

  return (
    <Flex
      vertical={true}
      justify='center'
      align='center'
      gap={20}
      style={{
        backgroundColor: resultStyles.backgroundColor,
        border: 'crimson solid 4px',
        borderRadius: '20px',
        ...getContentMaxWidth(),
        width: '100%',
        margin: '20px',
        padding: '5px',
      }}
    >
      {!isApiVersionCompatible(apiVersion) ? (
        <ApiErrorPage />
      ) : (
        <>
          {!isApiVersionEqual(apiVersion) && <ApiWarningPage />}
          <MatchCard
            title={t('quiz.result.ideologies.name')}
            data={getIdeologyMatchScores(weights)}
            nameTemplate='quiz.result.ideologies.data.{{id}}.name'
            linkTemplate='quiz.result.ideologies.data.{{id}}.link'
            fontSizeScale={isLanguage('en') ? 1.0 : 1.2}
            borderColor='dodgerblue'
            cardBodyPadding={getCardBodyPadding()}
          />
          <MatchCard
            title={t('quiz.result.political_parties.name')}
            data={getPoliticalPartyMatchScores(weights)}
            nameTemplate='quiz.result.political_parties.data.{{id}}.name'
            linkTemplate='quiz.result.political_parties.data.{{id}}.link'
            fontSizeScale={isLanguage('en') ? 0.8 : 1.0}
            borderColor='tomato'
            cardBodyPadding={getCardBodyPadding()}
          />
          <Card
            title={t('quiz.result.tags.name')}
            styles={{
              header: {
                fontSize: 'x-large',
                textAlign: 'center',
                padding: '0px 0px 0px 80px',
                borderBottom: 'magenta solid 4px',
                color: resultStyles.content.color,
                backgroundColor: resultStyles.content.backgroundColor,
              },
              body: {
                padding: getCardBodyPadding(),
              },
            }}
            style={{
              width: '100%',
              padding: '5px',
              border: 'magenta solid 4px',
              borderRadius: '20px',
              color: resultStyles.content.color,
              backgroundColor: resultStyles.content.backgroundColor,
            }}
            extra={
              <Switch
                unCheckedChildren='M'
                checkedChildren='∞'
                size='small'
                onChange={(checked) => {
                  setExpandTags(checked)
                }}
                style={{
                  backgroundColor: 'magenta',
                  margin: '5px 20px',
                }}
              />
            }
          >
            {getMatchTags(getIdeologyTags(), expandTags).map((value) => {
              const name = t(`quiz.result.tags.data.${value.id}.name`)
              const description = t(`quiz.result.tags.data.${value.id}.description`)
              const link = t(`quiz.result.tags.data.${value.id}.link`)
              const hasLink = link && link.length > 0
              const Label = () => (
                <span
                  {...stylex.props(
                    tagButtonStyles.base,
                    matchedTags.has(value.id)
                      ? hasLink
                        ? tagButtonStyles.enabledWithLink
                        : tagButtonStyles.enabled
                      : hasLink
                        ? tagButtonStyles.disabledWithLink
                        : tagButtonStyles.disabled,
                  )}
                >
                  {name}
                </span>
              )
              return (
                <Flex
                  key={`tags.${value.id}`}
                  justify='start'
                  align='center'
                  style={{ margin: '10px auto 10px auto', maxWidth: '800px' }}
                >
                  {hasLink ? (
                    <a href={link} target='_blank' rel='noreferrer'>
                      <Label />
                    </a>
                  ) : (
                    <Label />
                  )}
                  <span
                    style={{
                      margin: '4px',
                      color: matchedTags.has(value.id) ? resultStyles.content.color : 'gray',
                    }}
                  >
                    {description}
                  </span>
                </Flex>
              )
            })}
          </Card>
          <ValueMatchCard
            title={t('quiz.result.topics.economic.title')}
            leftTitle={t('quiz.result.values.equality.name')}
            rightTitle={t('quiz.result.values.efficiency.name')}
            leftImage={getValueConstant().equality.image}
            rightImage={getValueConstant().efficiency.image}
            leftColor={getValueConstant().equality.color}
            rightColor={getValueConstant().efficiency.color}
            percent={weights.economic}
            descriptionTitle={t(`quiz.result.topics.economic.categories.${getCategory(weights.economic)}`)}
          />
          <ValueMatchCard
            title={t('quiz.result.topics.diplomatic.title')}
            leftTitle={t('quiz.result.values.globe.name')}
            rightTitle={t('quiz.result.values.nation.name')}
            leftImage={getValueConstant().globe.image}
            rightImage={getValueConstant().nation.image}
            leftColor={getValueConstant().globe.color}
            rightColor={getValueConstant().nation.color}
            percent={weights.diplomatic}
            descriptionTitle={t(`quiz.result.topics.diplomatic.categories.${getCategory(weights.diplomatic)}`)}
          />
          <ValueMatchCard
            title={t('quiz.result.topics.civil.title')}
            leftTitle={t('quiz.result.values.liberty.name')}
            rightTitle={t('quiz.result.values.authority.name')}
            leftImage={getValueConstant().liberty.image}
            rightImage={getValueConstant().authority.image}
            leftColor={getValueConstant().liberty.color}
            rightColor={getValueConstant().authority.color}
            percent={weights.civil}
            descriptionTitle={t(`quiz.result.topics.civil.categories.${getCategory(weights.civil)}`)}
          />
          <ValueMatchCard
            title={t('quiz.result.topics.environmental.title')}
            leftTitle={t('quiz.result.values.ecology.name')}
            rightTitle={t('quiz.result.values.production.name')}
            leftImage={getValueConstant().ecology.image}
            rightImage={getValueConstant().production.image}
            leftColor={getValueConstant().ecology.color}
            rightColor={getValueConstant().production.color}
            percent={weights.environmental}
            descriptionTitle={t(`quiz.result.topics.environmental.categories.${getCategory(weights.environmental)}`)}
          />
          <ValueMatchCard
            title={t('quiz.result.topics.societal.title')}
            leftTitle={t('quiz.result.values.progress.name')}
            rightTitle={t('quiz.result.values.tradition.name')}
            leftImage={getValueConstant().progress.image}
            rightImage={getValueConstant().tradition.image}
            leftColor={getValueConstant().progress.color}
            rightColor={getValueConstant().tradition.color}
            percent={weights.societal}
            descriptionTitle={t(`quiz.result.topics.societal.categories.${getCategory(weights.societal)}`)}
          />
          <ValueMatchCard
            title={t('quiz.result.topics.sovereignty.title')}
            leftTitle={t('quiz.result.values.independence.name')}
            rightTitle={t('quiz.result.values.unification.name')}
            leftImage={getValueConstant().independence.image}
            rightImage={getValueConstant().unification.image}
            leftColor={getValueConstant().independence.color}
            rightColor={getValueConstant().unification.color}
            percent={weights.sovereignty}
            descriptionTitle={t(`quiz.result.topics.sovereignty.categories.${getCategory(weights.sovereignty)}`)}
          />
          <ValueMatchCard
            title={t('quiz.result.topics.us_vs_china.title')}
            leftTitle={t('quiz.result.values.pro_american.name')}
            rightTitle={t('quiz.result.values.pro_chinese.name')}
            leftImage={getValueConstant().pro_american.image}
            rightImage={getValueConstant().pro_chinese.image}
            leftColor={getValueConstant().pro_american.color}
            rightColor={getValueConstant().pro_chinese.color}
            percent={weights.us_vs_china}
            descriptionTitle={t(`quiz.result.topics.us_vs_china.categories.${getCategory(weights.us_vs_china)}`)}
          />
          <Flex
            vertical={true}
            justify='center'
            align='center'
            gap={10}
            style={{
              width: '100%',
              padding: getCardBodyPadding(),
              backgroundColor: resultStyles.content.backgroundColor,
              borderColor: resultStyles.content.color,
              borderStyle: 'solid',
              borderWidth: '4px',
              borderRadius: '20px',
            }}
          >
            <span
              style={{
                fontSize: screens.md ? 'medium' : 'small',
                margin: '10px 20px',
                color: resultStyles.content.color,
              }}
            >
              {t('quiz.result.share.description')}
            </span>
            <span
              style={{
                display: 'block',
                overflowWrap: 'break-word',
                color: resultStyles.content.color,
                borderColor: resultStyles.content.color,
                borderStyle: 'solid',
                borderWidth: '1px',
                borderRadius: '10px',
                maxWidth: '100%',
                padding: '5px',
              }}
            >
              {window.location.href}
            </span>{' '}
            {contextHolder}
            <span
              {...stylex.props(linkButtonStyles.base)}
              onClick={() => {
                navigator.clipboard.writeText(window.location.href)
                messageApi.open({ type: 'success', content: t('quiz.result.share.copied') })
              }}
            >
              {t('quiz.result.share.copy')}
            </span>
          </Flex>
        </>
      )}
    </Flex>
  )
}

export default Result
