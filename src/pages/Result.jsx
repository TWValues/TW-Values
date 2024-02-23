import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Card, Typography, Button, Flex, Switch, Input, message } from 'antd'
import { useTranslation } from 'react-i18next'
import MatchCard from '../components/MatchCard'
import ValueMatchCard from '../components/ValueMatchCard'
import { useBreakpoint, getContentMaxWidth } from '../utils/useBreakpoint'
import { getIdeologyTags } from '../data/ideology_tag'
import { getIdeologyMatchScores, getPoliticalPartyMatchScores } from '../utils/match'
import { getValueConstant } from '../utils/getValueConstant'
import { API_VERSION_KEY, API_VERSION_VALUE } from '../utils/apiVersion'
import * as stylex from '@stylexjs/stylex'

const { Title } = Typography
const { Search } = Input

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

const Result = () => {
  // eslint-disable-next-line no-unused-vars
  const [searchParams, setSearchParams] = useSearchParams()
  const { t } = useTranslation()
  const screens = useBreakpoint()
  const [messageApi, contextHolder] = message.useMessage()
  const [expandTags, setExpandTags] = useState(false, [])

  const isApiVersionOK = searchParams.get(API_VERSION_KEY) == API_VERSION_VALUE

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
      align='center'
      style={{
        width: '100%',
        backgroundColor: 'white',
        border: 'black solid 4px',
        borderRadius: '20px',
      }}
    >
      <Title
        level={4}
        style={{
          margin: '40px',
          color: 'red',
        }}
      >
        {t(`quiz.result.api_error.description`)}
      </Title>
      <Button
        href='/'
        style={{
          height: 'auto',
          margin: '40px',
          borderRadius: '20px',
          fontSize: 'large',
          fontWeight: 'bold',
          textAlign: 'center',
        }}
      >
        {t(`quiz.result.api_error.index`)}
      </Button>
    </Flex>
  )

  return (
    <Flex
      vertical={true}
      justify='center'
      align='center'
      gap={20}
      style={{
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        border: 'crimson solid 4px',
        borderRadius: '20px',
        ...getContentMaxWidth(),
        width: '100%',
        margin: '20px',
        padding: '5px',
      }}
    >
      {!isApiVersionOK ? (
        <ApiErrorPage />
      ) : (
        <>
          <MatchCard
            title={t('quiz.result.ideologies.name')}
            data={getIdeologyMatchScores(weights)}
            nameTemplate='quiz.result.ideologies.data.{{id}}.name'
            linkTemplate='quiz.result.ideologies.data.{{id}}.link'
            fontSizeScale={1.2}
            borderColor='dodgerblue'
            cardBodyPadding={getCardBodyPadding()}
          />
          <MatchCard
            title={t('quiz.result.political_parties.name')}
            data={getPoliticalPartyMatchScores(weights)}
            nameTemplate='quiz.result.political_parties.data.{{id}}.name'
            linkTemplate='quiz.result.political_parties.data.{{id}}.link'
            fontSizeScale={1.0}
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
              },
              body: {
                padding: getCardBodyPadding(),
              },
            }}
            style={{
              width: '100%',
              backgroundColor: 'white',
              border: 'magenta solid 4px',
              borderRadius: '20px',
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
                      color: matchedTags.has(value.id) ? 'black' : 'gray',
                    }}
                  >
                    {description}
                  </span>
                </Flex>
              )
            })}
          </Card>
          <ValueMatchCard
            title={t('quiz.result.axes.economic.title')}
            leftTitle={t('quiz.result.axes.economic.equality.name')}
            rightTitle={t('quiz.result.axes.economic.efficiency.name')}
            leftImage={getValueConstant().equality.image}
            rightImage={getValueConstant().efficiency.image}
            leftColor={getValueConstant().equality.color}
            rightColor={getValueConstant().efficiency.color}
            percent={weights.economic}
            descriptionTitle={t(`quiz.result.axes.economic.categories.${getCategory(weights.economic)}`)}
          />
          <ValueMatchCard
            title={t('quiz.result.axes.diplomatic.title')}
            leftTitle={t('quiz.result.axes.diplomatic.globe.name')}
            rightTitle={t('quiz.result.axes.diplomatic.nation.name')}
            leftImage={getValueConstant().globe.image}
            rightImage={getValueConstant().nation.image}
            leftColor={getValueConstant().globe.color}
            rightColor={getValueConstant().nation.color}
            percent={weights.diplomatic}
            descriptionTitle={t(`quiz.result.axes.diplomatic.categories.${getCategory(weights.diplomatic)}`)}
          />
          <ValueMatchCard
            title={t('quiz.result.axes.civil.title')}
            leftTitle={t('quiz.result.axes.civil.liberty.name')}
            rightTitle={t('quiz.result.axes.civil.authority.name')}
            leftImage={getValueConstant().liberty.image}
            rightImage={getValueConstant().authority.image}
            leftColor={getValueConstant().liberty.color}
            rightColor={getValueConstant().authority.color}
            percent={weights.civil}
            descriptionTitle={t(`quiz.result.axes.civil.categories.${getCategory(weights.civil)}`)}
          />
          <ValueMatchCard
            title={t('quiz.result.axes.environmental.title')}
            leftTitle={t('quiz.result.axes.environmental.ecology.name')}
            rightTitle={t('quiz.result.axes.environmental.production.name')}
            leftImage={getValueConstant().ecology.image}
            rightImage={getValueConstant().production.image}
            leftColor={getValueConstant().ecology.color}
            rightColor={getValueConstant().production.color}
            percent={weights.environmental}
            descriptionTitle={t(`quiz.result.axes.environmental.categories.${getCategory(weights.environmental)}`)}
          />
          <ValueMatchCard
            title={t('quiz.result.axes.societal.title')}
            leftTitle={t('quiz.result.axes.societal.progress.name')}
            rightTitle={t('quiz.result.axes.societal.tradition.name')}
            leftImage={getValueConstant().progress.image}
            rightImage={getValueConstant().tradition.image}
            leftColor={getValueConstant().progress.color}
            rightColor={getValueConstant().tradition.color}
            percent={weights.societal}
            descriptionTitle={t(`quiz.result.axes.societal.categories.${getCategory(weights.societal)}`)}
          />
          <ValueMatchCard
            title={t('quiz.result.axes.sovereignty.title')}
            leftTitle={t('quiz.result.axes.sovereignty.independence.name')}
            rightTitle={t('quiz.result.axes.sovereignty.unification.name')}
            leftImage={getValueConstant().independence.image}
            rightImage={getValueConstant().unification.image}
            leftColor={getValueConstant().independence.color}
            rightColor={getValueConstant().unification.color}
            percent={weights.sovereignty}
            descriptionTitle={t(`quiz.result.axes.sovereignty.categories.${getCategory(weights.sovereignty)}`)}
          />
          <ValueMatchCard
            title={t('quiz.result.axes.us_vs_china.title')}
            leftTitle={t('quiz.result.axes.us_vs_china.pro_american.name')}
            rightTitle={t('quiz.result.axes.us_vs_china.pro_chinese.name')}
            leftImage={getValueConstant().pro_american.image}
            rightImage={getValueConstant().pro_chinese.image}
            leftColor={getValueConstant().pro_american.color}
            rightColor={getValueConstant().pro_chinese.color}
            percent={weights.us_vs_china}
            descriptionTitle={t(`quiz.result.axes.us_vs_china.categories.${getCategory(weights.us_vs_china)}`)}
          />
          <Flex
            vertical={true}
            justify='center'
            align='center'
            gap={10}
            style={{
              width: '100%',
              padding: getCardBodyPadding(),
              backgroundColor: 'white',
              border: 'black solid 4px',
              borderRadius: '20px',
            }}
          >
            <span style={{ fontSize: screens.md ? 'medium' : 'small', margin: '10px 20px' }}>
              {t('quiz.result.share.description')}
            </span>
            {contextHolder}
            <Search
              value={window.location.href}
              enterButton={t('quiz.result.share.copy')}
              readOnly={true}
              onSearch={() => {
                navigator.clipboard.writeText(window.location.href)
                messageApi.open({ type: 'success', content: t('quiz.result.share.copied') })
              }}
            />
          </Flex>
        </>
      )}
    </Flex>
  )
}

export default Result
