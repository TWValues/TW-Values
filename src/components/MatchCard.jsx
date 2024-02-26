import React, { useState } from 'react'
import { Flex, Card, Switch, Row, Col, Popover } from 'antd'
import { DiffFilled } from '@ant-design/icons'
import { useTranslation } from 'react-i18next'
import { toStringWithSign } from '../utils/toStringWithSign'
import * as stylex from '@stylexjs/stylex'
import { useThemeStore } from '../store/store'

const linkStyles = stylex.create({
  base: {
    margin: '2px 4px',
    padding: '2px',
    borderStyle: 'solid',
    borderWidth: '1px',
    borderRadius: '4px',
  },
  link: {
    backgroundColor: {
      default: 'aqua',
      ':hover': { '@media (pointer: fine)': 'white' },
      ':active': 'white',
    },
    borderColor: {
      default: 'black',
    },
  },
})

const diffTextStyles = stylex.create({
  base: {
    textAlign: 'right',
    margin: '4px',
  },
  withColor: (color) => ({
    color,
  }),
})

const scaleUpStyles = stylex.create({
  base: {
    margin: '5px',
    transition: 'transform 0.2s',
    transform: {
      default: 'scale(1.0)',
      ':hover': 'scale(1.2)',
    },
  },
})

const MatchCard = ({ title, data, nameTemplate, linkTemplate, fontSizeScale, borderColor, cardBodyPadding }) => {
  const { t } = useTranslation()
  const resultStyles = useThemeStore((state) => state.theme.data.result)
  const [switchOn, setSwitchOn] = useState(false, [])

  const topScoreCount = 3

  const getTopScores = (scores, showAll, count) => {
    return showAll ? scores : scores.slice(0, Math.min(scores.length, count))
  }

  const getDiffColor = (diff) => (diff <= 10 ? 'green' : diff <= 20 ? 'orange' : 'red')

  const formatTemplate = (template, args) => {
    Object.entries(args).forEach(([key, value]) => {
      template = template.replace(`{{${key}}}`, value)
    })

    return template
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
          color: resultStyles.content.color,
          backgroundColor: resultStyles.content.backgroundColor,
        },
        body: {
          padding: cardBodyPadding,
        },
      }}
      style={{
        width: '100%',
        padding: '5px',
        border: `${borderColor} solid 4px`,
        borderRadius: '20px',
        color: resultStyles.content.color,
        backgroundColor: resultStyles.content.backgroundColor,
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
            backgroundColor: borderColor,
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

          const PopoverTitle = () => (
            <Flex vertical={false} justify='center' align='center'>
              {value.icon && <img width={24} height='auto' src={value.icon} alt='' />}
              <span
                style={{
                  margin: '3px 6px',
                  fontSize: 'large',
                  fontWeight: 'bold',
                  color: resultStyles.content.color,
                  textAlign: 'center',
                }}
              >
                {name}
              </span>
              {link && link.length > 0 && (
                <a href={link} target='_blank' rel='noreferrer'>
                  <img
                    {...stylex.props(linkStyles.base, linkStyles.link)}
                    width={16}
                    height='auto'
                    src='https://upload.wikimedia.org/wikipedia/commons/5/5a/Wikipedia%27s_W.svg'
                    alt=''
                  />
                </a>
              )}
            </Flex>
          )
          const PopoverContent = () => {
            return (
              <Flex vertical={true} justify='center' align='center'>
                <span style={{ textAlign: 'center', fontWeight: 'bold' }}>
                  {t('quiz.result.diff_card.compare_with', { name: name })}
                </span>
                <div style={{ display: 'grid', gridTemplateColumns: 'auto auto auto auto' }}>
                  <span {...stylex.props(diffTextStyles.base)}></span>
                  <span {...stylex.props(diffTextStyles.base)}>{t('quiz.result.diff_card.user')}</span>
                  <span {...stylex.props(diffTextStyles.base)}>{t('quiz.result.diff_card.target')}</span>
                  <span {...stylex.props(diffTextStyles.base)}></span>
                  {Object.keys(value.weight.target).map((key) => {
                    const user = value.weight.user[key]
                    const target = value.weight.target[key]
                    const diff = user - target
                    return [
                      <span key={`${key}.title`} {...stylex.props(diffTextStyles.base)}>
                        {t(`quiz.result.topics.${key}.title`)}
                      </span>,
                      <span
                        key={`${key}.user`}
                        {...stylex.props(diffTextStyles.base, diffTextStyles.withColor(getDiffColor(Math.abs(diff))))}
                      >{`${user}%`}</span>,
                      <span key={`${key}.target`} {...stylex.props(diffTextStyles.base)}>{`${target}%`}</span>,
                      <span
                        key={`${key}.diff`}
                        {...stylex.props(diffTextStyles.base, diffTextStyles.withColor(getDiffColor(Math.abs(diff))))}
                      >
                        {`${toStringWithSign(diff)}%`}
                      </span>,
                    ]
                  })}
                </div>
              </Flex>
            )
          }

          return (
            <Col
              key={name}
              xs={24}
              sm={24}
              md={index < 3 ? 24 : 12}
              lg={index < 3 ? 24 : 12}
              xl={index < 3 ? 24 : 12}
              xxl={index < 3 ? 24 : 12}
            >
              <Flex vertical={false} justify='center' align='center'>
                <Popover title={<PopoverTitle />} content={<PopoverContent />}>
                  <Flex vertical={false} justify='center' align='center' {...stylex.props(scaleUpStyles.base)}>
                    {value.icon && (
                      <img
                        width={fontSizeScale * getSize(24, -3, topScoreCount, index)}
                        height='auto'
                        src={value.icon}
                        alt=''
                      />
                    )}
                    <span
                      style={{
                        margin: '3px 6px',
                        fontSize: `${fontSizeScale * getSize(160, -24, topScoreCount, index)}%`,
                        fontWeight: 'bold',
                        color: resultStyles.content.color,
                        textAlign: 'center',
                      }}
                    >
                      {name}
                    </span>
                    <DiffFilled
                      style={{
                        margin: '3px 2px',
                        color: getDiffColor(diff),
                        fontSize: `${0.8 * fontSizeScale * getSize(160, -24, topScoreCount, index)}%`,
                      }}
                    />
                    <span
                      style={{
                        margin: '3px 2px',
                        color: getDiffColor(diff),
                        fontSize: `${0.8 * fontSizeScale * getSize(160, -24, topScoreCount, index)}%`,
                        textAlign: 'center',
                      }}
                    >
                      {`${diff}%`}
                    </span>
                  </Flex>
                </Popover>
              </Flex>
            </Col>
          )
        })}
      </Row>
    </Card>
  )
}

export default MatchCard
