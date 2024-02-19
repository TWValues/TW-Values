import React, { useState } from 'react'
import { Flex, Card, Switch, Row, Col, Typography, Popover } from 'antd'
import { DiffFilled } from '@ant-design/icons'
import { useTranslation } from 'react-i18next'
import * as stylex from '@stylexjs/stylex'

const { Text } = Typography

const linkStyles = stylex.create({
  base: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '4px 16px',
    borderRadius: '28px',
  },
  link: {
    backgroundColor: {
      default: 'transparent',
      ':hover': { '@media (pointer: fine)': 'aqua' },
      ':active': 'aqua',
    },
  },
})

const MatchCard = ({ title, data, nameTemplate, linkTemplate, fontSizeScale, borderColor, getCardBodyPadding }) => {
  const { t, i18n } = useTranslation()
  const [switchOn, setSwitchOn] = useState(false, [])

  const topScoreCount = 3

  const getTopScores = (scores, showAll, count) => {
    return showAll ? scores : scores.slice(0, Math.min(scores.length, count))
  }

  const isLanguage = (lang) => {
    return i18n.language == lang
  }

  const getDiffColor = (diff) => (diff <= 10 ? 'green' : diff <= 20 ? 'orange' : 'red')

  const formatTemplate = (template, args) => {
    let result = ''
    for (const [key, value] of Object.entries(args)) {
      result = template.replace(`{{${key}}}`, value)
    }

    return result
  }

  const getSize = (initial, stepSize, maxSteps, index) => {
    return initial + stepSize * Math.min(Math.max(1, maxSteps) - 1, index)
  }

  return (
    <Card
      title={title}
      styles={{
        header: {
          fontSize: 'x-large',
          textAlign: 'center',
          padding: '0px 0px 0px 80px',
          borderBottom: `${borderColor} solid 4px`,
        },
        body: {
          padding: getCardBodyPadding(),
        },
      }}
      style={{
        width: '100%',
        backgroundColor: 'white',
        border: `${borderColor} solid 4px`,
        borderRadius: '20px',
      }}
      extra={
        <Switch
          unCheckedChildren={`${topScoreCount}`}
          checkedChildren='∞'
          size='small'
          onChange={(checked) => {
            setSwitchOn(checked)
          }}
          style={{
            backgroundColor: switchOn ? 'crimson' : borderColor,
            margin: '5px 20px',
          }}
        />
      }
    >
      <Row>
        {getTopScores(data, switchOn, topScoreCount).map((value, index) => {
          const diff = Math.round(100 * value.diff)
          const name = t(formatTemplate(nameTemplate, { id: value.id }))
          const link = t(formatTemplate(linkTemplate, { id: value.id }))
          const Label = () => (
            <>
              {value.icon && (
                <img
                  width={fontSizeScale * getSize(24, -3, topScoreCount + 1, index)}
                  height='auto'
                  src={value.icon}
                  alt=''
                />
              )}
              <Text
                style={{
                  margin: '3px 8px',
                  fontSize: isLanguage('en')
                    ? `${fontSizeScale * getSize(100, -8, topScoreCount + 1, index)}%`
                    : `${fontSizeScale * getSize(140, -16, topScoreCount + 1, index)}%`,
                  fontWeight: 'bold',
                  color: 'black',
                  textAlign: 'center',
                }}
              >
                {name}
              </Text>
              <Popover
                title={t('quiz.result.diff_card.compare_with', { name: name })}
                content={
                  <div style={{ display: 'grid', gridTemplateColumns: 'auto auto auto auto' }}>
                    <Text></Text>
                    <Text style={{ textAlign: 'right', margin: '4px' }}>{t('quiz.result.diff_card.user')}</Text>
                    <Text style={{ textAlign: 'right', margin: '4px' }}>{t('quiz.result.diff_card.target')}</Text>
                    <Text></Text>
                    {Object.keys(value.weight.target).map((key) => {
                      const user = value.weight.user[key]
                      const target = value.weight.target[key]
                      const diff = user - target
                      return [
                        <Text key={`${key}.title`} style={{ textAlign: 'right', margin: '4px' }}>
                          {t(`quiz.result.axes.${key}.title`)}
                        </Text>,
                        <Text
                          key={`${key}.user`}
                          style={{ textAlign: 'right', margin: '4px', color: getDiffColor(Math.abs(diff)) }}
                        >{`${user}%`}</Text>,
                        <Text key={`${key}.target`} style={{ textAlign: 'right', margin: '4px' }}>{`${target}%`}</Text>,
                        <Text
                          key={`${key}.diff`}
                          style={{ textAlign: 'right', margin: '4px', color: getDiffColor(Math.abs(diff)) }}
                        >
                          {(diff > 0 ? '+' : '') + `${diff}%`}
                        </Text>,
                      ]
                    })}
                  </div>
                }
              >
                <DiffFilled
                  style={{
                    margin: '3px',
                    color: getDiffColor(diff),
                    fontSize: isLanguage('en')
                      ? `${fontSizeScale * getSize(100, -8, topScoreCount + 1, index)}%`
                      : `${fontSizeScale * getSize(120, -10, topScoreCount + 1, index)}%`,
                  }}
                />
                <Text
                  style={{
                    color: getDiffColor(diff),
                    fontSize: isLanguage('en')
                      ? `${fontSizeScale * getSize(100, -8, topScoreCount + 1, index)}%`
                      : `${fontSizeScale * getSize(100, -8, topScoreCount + 1, index)}%`,
                    textAlign: 'center',
                  }}
                >
                  {`${diff}%`}
                </Text>
              </Popover>
            </>
          )

          const addLink = (componet) => {
            return link && link.length > 0 ? (
              <a href={link} target='_blank' rel='noreferrer'>
                <div {...stylex.props(linkStyles.base, linkStyles.link)}>{componet}</div>
              </a>
            ) : (
              <div {...stylex.props(linkStyles.base)}>{componet}</div>
            )
          }

          return (
            <Col
              key={formatTemplate(nameTemplate, { id: value.id })}
              xs={24}
              sm={24}
              md={index < 3 ? 24 : 12}
              lg={index < 3 ? 24 : 12}
              xl={index < 3 ? 24 : 12}
              xxl={index < 3 ? 24 : 12}
            >
              <Flex vertical={false} justify='center' align='center'>
                {addLink(<Label />)}
              </Flex>
            </Col>
          )
        })}
      </Row>
    </Card>
  )
}

export default MatchCard
