import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Card, Typography, Image, Button, Flex, Switch, Row, Col } from 'antd'
import { useTranslation } from 'react-i18next'
import ValueCard from '../components/ValueCard'
import { getIdeologyTags } from '../data/ideology_tag'
import { getIdeologyMatchScores, getPoliticalPartyMatchScores } from '../utils/match'
import { API_VERSION_KEY, API_VERSION_VALUE } from '../utils/apiVersion'

import Balance from '../assets/values/Balance.svg'
import DollarSign from '../assets/values/DollarSign.svg'
import Globe from '../assets/values/Globe.svg'
import Flag from '../assets/values/Flag.svg'
import Liberty from '../assets/values/Liberty.svg'
import Crown from '../assets/values/Crown.svg'
import RecyclingSymbol from '../assets/values/RecyclingSymbol.svg'
import Factory from '../assets/values/Factory.svg'
import RainbowFlag from '../assets/values/RainbowFlag.svg'
import Family from '../assets/values/Family.svg'
import FlagOfTWIndependence from '../assets/values/FlagOfTWIndependence.svg'
import ChinaTerritory from '../assets/values/ChinaTerritory.svg'
import FlagOfUSA from '../assets/values/FlagOfUSA.svg'
import FlagOfPRC from '../assets/values/FlagOfPRC.svg'

const { Text, Title } = Typography

const Result = () => {
  // eslint-disable-next-line no-unused-vars
  const [searchParams, setSearchParams] = useSearchParams()
  const { t, i18n } = useTranslation()
  const [expandIdeology, setExpandIdeology] = useState(false, [])
  const [expandParty, setExpandParty] = useState(false, [])
  const [expandTags, setExpandTags] = useState(false, [])

  const isLanguage = (lang) => {
    return i18n.language == lang
  }

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

  const getTopScores = (scores, all, count) => {
    return all ? scores : scores.slice(0, Math.min(scores.length, count))
  }

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

  const getSizeWithStep = (initial, stepSize, maxSteps, index) => {
    return initial + stepSize * Math.min(Math.max(1, maxSteps) - 1, index)
  }

  if (!isApiVersionOK) {
    return (
      <Flex
        vertical={true}
        align='center'
        style={{
          width: '100%',
          borderRadius: '20px',
          backgroundColor: 'gainsboro',
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
  }

  return (
    <Flex
      vertical={true}
      justify='center'
      align='center'
      gap={20}
      style={{
        width: '100%',
        margin: '10px',
      }}
    >
      <Card
        title={t('quiz.result.ideologies.name')}
        styles={{
          header: {
            fontSize: 'x-large',
            textAlign: 'center',
            padding: '0px 0px 0px 80px',
          },
        }}
        style={{
          width: '100%',
          backgroundColor: 'gainsboro',
        }}
        extra={
          <Switch
            unCheckedChildren='3'
            checkedChildren='∞'
            size='small'
            onChange={(checked) => {
              setExpandIdeology(checked)
            }}
            style={{
              backgroundColor: expandIdeology ? 'crimson' : 'dodgerblue',
              margin: '5px 20px',
            }}
          />
        }
      >
        <Row>
          {getTopScores(getIdeologyMatchScores(weights), expandIdeology, 3).map((value, index) => {
            const linkRC = `quiz.result.ideologies.data.${value.id}.link`
            const link = i18n.exists(linkRC) ? t(linkRC) : null
            const createLabel = () => (
              <Flex justify='center' align='center'>
                <Text
                  style={{
                    margin: '10px',
                    fontSize: isLanguage('en')
                      ? `${getSizeWithStep(100, -8, 4, index)}%`
                      : `${getSizeWithStep(140, -16, 4, index)}%`,
                    fontWeight: 'bold',
                    color: 'black',
                    textAlign: 'center',
                  }}
                >
                  {t(`quiz.result.ideologies.data.${value.id}.name`)}
                </Text>
                <Text
                  style={{
                    color: 'crimson',
                    fontSize: isLanguage('en')
                      ? `${getSizeWithStep(100, -8, 4, index)}%`
                      : `${getSizeWithStep(100, -8, 4, index)}%`,
                    textAlign: 'center',
                  }}
                >
                  {`${Math.round(value.rate * 100)}%`}
                </Text>
              </Flex>
            )
            const addLink = (componet) => {
              return link && link.length > 0 ? (
                <a href={link} target='_blank' rel='noreferrer'>
                  {componet}
                </a>
              ) : (
                componet
              )
            }
            return (
              <Col
                key={`ideology.${value.id}`}
                xs={24}
                sm={24}
                md={index < 3 ? 24 : 12}
                lg={index < 3 ? 24 : 12}
                xl={index < 3 ? 24 : 8}
                xxl={index < 3 ? 24 : 8}
              >
                {addLink(createLabel())}
              </Col>
            )
          })}
        </Row>
      </Card>
      <Card
        title={t('quiz.result.political_parties.name')}
        styles={{
          header: {
            fontSize: 'x-large',
            textAlign: 'center',
            padding: '0px 0px 0px 80px',
          },
        }}
        style={{
          width: '100%',
          backgroundColor: 'gainsboro',
        }}
        extra={
          <Switch
            unCheckedChildren='3'
            checkedChildren='∞'
            size='small'
            onChange={(checked) => {
              setExpandParty(checked)
            }}
            style={{
              backgroundColor: expandParty ? 'crimson' : 'dodgerblue',
              margin: '5px 20px',
            }}
          />
        }
      >
        <Row>
          {getTopScores(getPoliticalPartyMatchScores(weights), expandParty, 3).map((value, index) => {
            const link = t(`quiz.result.political_parties.data.${value.id}.link`)
            const createLabel = () => (
              <Flex justify='center' align='center'>
                <Image width={getSizeWithStep(24, -3, 4, index)} src={value.icon} preview={false} />
                <Text
                  style={{
                    margin: '10px',
                    fontSize: isLanguage('en')
                      ? `${getSizeWithStep(100, -8, 4, index)}%`
                      : `${getSizeWithStep(140, -16, 4, index)}%`,
                    fontWeight: 'bold',
                    color: 'black',
                    textAlign: 'center',
                  }}
                >
                  {t(`quiz.result.political_parties.data.${value.id}.name`)}
                </Text>
                <Text
                  style={{
                    color: 'crimson',
                    fontSize: isLanguage('en')
                      ? `${getSizeWithStep(100, -8, 4, index)}%`
                      : `${getSizeWithStep(100, -8, 4, index)}%`,
                    textAlign: 'center',
                  }}
                >
                  {`${Math.round(value.rate * 100)}%`}
                </Text>
              </Flex>
            )

            const addLink = (componet) => {
              return link && link.length > 0 ? (
                <a href={link} target='_blank' rel='noreferrer'>
                  {componet}
                </a>
              ) : (
                componet
              )
            }

            return (
              <Col
                key={`party.${value.id}`}
                xs={24}
                sm={24}
                md={index < 3 ? 24 : 12}
                lg={index < 3 ? 24 : 12}
                xl={index < 3 ? 24 : 8}
                xxl={index < 3 ? 24 : 8}
              >
                {addLink(createLabel())}
              </Col>
            )
          })}
        </Row>
      </Card>
      <Card
        title={t('quiz.result.tags.name')}
        styles={{
          header: {
            fontSize: 'x-large',
            textAlign: 'center',
            padding: '0px 0px 0px 80px',
          },
        }}
        style={{
          width: '100%',
          backgroundColor: 'gainsboro',
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
              backgroundColor: expandTags ? 'crimson' : 'dodgerblue',
              margin: '5px 20px',
            }}
          />
        }
      >
        {getMatchTags(getIdeologyTags(), expandTags).map((value) => {
          const name = t(`quiz.result.tags.data.${value.id}.name`)
          const description = t(`quiz.result.tags.data.${value.id}.description`)
          const link = t(`quiz.result.tags.data.${value.id}.link`)
          return (
            <Flex
              key={`tags.${value.id}`}
              justify='start'
              align='center'
              style={{ margin: '10px auto 10px auto', maxWidth: '800px' }}
            >
              <Button
                size='small'
                type='default'
                href={link ? link : null}
                target='_blank'
                style={{
                  margin: '4px',
                  color: matchedTags.has(value.id) ? 'white' : 'gray',
                  backgroundColor: matchedTags.has(value.id) ? 'dodgerblue' : 'white',
                  fontWeight: 'bold',
                }}
              >
                {name}
              </Button>
              <Text
                style={{
                  margin: '4px',
                  color: matchedTags.has(value.id) ? 'black' : 'gray',
                }}
              >
                {description}
              </Text>
            </Flex>
          )
        })}
      </Card>
      <ValueCard
        title={t('quiz.result.axes.economic.title')}
        leftTitle={t('quiz.result.axes.economic.equality')}
        rightTitle={t('quiz.result.axes.economic.efficiency')}
        leftImage={Balance}
        rightImage={DollarSign}
        leftColor='crimson'
        rightColor='mediumslateblue'
        percent={weights.economic}
        descriptionTitle={t(`quiz.result.axes.economic.categories.${getCategory(weights.economic)}`)}
      />
      <ValueCard
        title={t('quiz.result.axes.diplomatic.title')}
        leftTitle={t('quiz.result.axes.diplomatic.globe')}
        rightTitle={t('quiz.result.axes.diplomatic.nation')}
        leftImage={Globe}
        rightImage={Flag}
        leftColor='royalblue'
        rightColor='orange'
        percent={weights.diplomatic}
        descriptionTitle={t(`quiz.result.axes.diplomatic.categories.${getCategory(weights.diplomatic)}`)}
      />
      <ValueCard
        title={t('quiz.result.axes.civil.title')}
        leftTitle={t('quiz.result.axes.civil.liberty')}
        rightTitle={t('quiz.result.axes.civil.authority')}
        leftImage={Liberty}
        rightImage={Crown}
        leftColor='yellow'
        rightColor='red'
        percent={weights.civil}
        descriptionTitle={t(`quiz.result.axes.civil.categories.${getCategory(weights.civil)}`)}
      />
      <ValueCard
        title={t('quiz.result.axes.environmental.title')}
        leftTitle={t('quiz.result.axes.environmental.ecology')}
        rightTitle={t('quiz.result.axes.environmental.production')}
        leftImage={RecyclingSymbol}
        rightImage={Factory}
        leftColor='forestgreen'
        rightColor='saddlebrown'
        percent={weights.environmental}
        descriptionTitle={t(`quiz.result.axes.environmental.categories.${getCategory(weights.environmental)}`)}
      />
      <ValueCard
        title={t('quiz.result.axes.societal.title')}
        leftTitle={t('quiz.result.axes.societal.progress')}
        rightTitle={t('quiz.result.axes.societal.tradition')}
        leftImage={RainbowFlag}
        rightImage={Family}
        leftColor='magenta'
        rightColor='brown'
        percent={weights.societal}
        descriptionTitle={t(`quiz.result.axes.societal.categories.${getCategory(weights.societal)}`)}
      />
      <ValueCard
        title={t('quiz.result.axes.sovereignty.title')}
        leftTitle={t('quiz.result.axes.sovereignty.independence')}
        rightTitle={t('quiz.result.axes.sovereignty.unification')}
        leftImage={FlagOfTWIndependence}
        rightImage={ChinaTerritory}
        leftColor='green'
        rightColor='black'
        percent={weights.sovereignty}
        descriptionTitle={t(`quiz.result.axes.sovereignty.categories.${getCategory(weights.sovereignty)}`)}
      />
      <ValueCard
        title={t('quiz.result.axes.us_vs_china.title')}
        leftTitle={t('quiz.result.axes.us_vs_china.pro_american')}
        rightTitle={t('quiz.result.axes.us_vs_china.pro_chinese')}
        leftImage={FlagOfUSA}
        rightImage={FlagOfPRC}
        leftColor='navy'
        rightColor='red'
        percent={weights.us_vs_china}
        descriptionTitle={t(`quiz.result.axes.us_vs_china.categories.${getCategory(weights.us_vs_china)}`)}
      />
    </Flex>
  )
}

export default Result
