import React from 'react'
import { Layout, Card, Button, Grid } from 'antd'
import { useMemo, useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate, createSearchParams } from 'react-router-dom'
import shuffle from '../../utils/shuffle'
import getScreenSize from '../../utils/getScreenSize'
import QUESTIONS from '../../data/question'

export const calculateScores = (questions, choices) => {
  const getScore = (props) => {
    const getScoreWithMultiplier = (props) => {
      return props.reduce((accu, value) => accu + value.prop * choices[value.id], 0.0)
    }
    const getAbsMaxScore = (props) => {
      return props.reduce((accu, value) => accu + Math.abs(value.prop), 0.0)
    }
    const getPercentage = (bias, total) => 100 * (bias + total) / (2 * total)

    const score = getScoreWithMultiplier(props)
    const maxScore = getAbsMaxScore(props)
    return Math.round(getPercentage(score, maxScore))
  }

  const getTags = (props) => {
    return props.reduce((accu, value) => {
      if (choices[value.id] > 0.0) {
        for (const [k, v] of Object.entries(value.prop || {})) {
          if (v > 0.0) {
            accu.push(k)
          }
        }
      }
      if (choices[value.id] < 0.0) {
        for (const [k, v] of Object.entries(value.prop || {})) {
          if (v < 0.0) {
            accu.push(k)
          }
        }
      }

      return accu
    }, [])
  }

  return {
    economic: getScore(questions.map((value) => ({ id: value.id, prop: value.weight.economic || 0.0 }))),
    environmental: getScore(questions.map((value) => ({ id: value.id, prop: value.weight.environmental || 0.0 }))),
    civil: getScore(questions.map((value) => ({ id: value.id, prop: value.weight.civil || 0.0 }))),
    societal: getScore(questions.map((value) => ({ id: value.id, prop: value.weight.societal || 0.0 }))),
    diplomatic: getScore(questions.map((value) => ({ id: value.id, prop: value.weight.diplomatic || 0.0 }))),
    sovereignty: getScore(questions.map((value) => ({ id: value.id, prop: value.weight.sovereignty || 0.0 }))),
    us_vs_china: getScore(questions.map((value) => ({ id: value.id, prop: value.weight.us_vs_china || 0.0 }))),
    tags: getTags(questions.map((value) => ({ id: value.id, prop: value.tag }))).join(',')
  }
}

export const MULTIPLIER = {
  ca: 1.0,
  a: 0.5,
  sa: 0.25,
  n: 0.0,
  sd: -0.25,
  d: -0.5,
  cd: -1.0,
}

const Quiz = () => {

  const [t] = useTranslation()
  const navigate = useNavigate()
  const screens = Grid.useBreakpoint()

  const getButtonStyles = () => {
    const styles = {
      sm: { width: '80%', height: '40px', margin: '8px', fontSize: 'large' },
      md: { width: '60%', height: '40px', margin: '8px', fontSize: 'large' },
      lg: { width: '40%', height: '40px', margin: '8px', fontSize: 'large' },
      xl: { width: '30%', height: '40px', margin: '8px', fontSize: 'large' },
      xxl: { width: '30%', height: '40px', margin: '8px', fontSize: 'large' },
    }

    return styles[getScreenSize(screens)]
  }

  const questions = useMemo(() => {
    return shuffle(QUESTIONS)
  }, [])

  const [currentSelectedQuestionIndex, setCurrentSelectedQuestionIndex] = useState(0)
  const [choices, setChoices] = useState(questions.reduce((accu, curr) => ({ ...accu, [curr.id]: 0.0 }), {}))

  const setChoice = (multiplier) => {
    setChoices({ ...choices, [questions[currentSelectedQuestionIndex].id]: multiplier })
  }

  const moveToPrevQuestion = () => {
    if (currentSelectedQuestionIndex > 0) {
      setCurrentSelectedQuestionIndex(currentSelectedQuestionIndex - 1)
    }
  }

  const moveToNextQuestion = () => {
    setCurrentSelectedQuestionIndex(currentSelectedQuestionIndex + 1)
  }

  useEffect(() => {
    if (currentSelectedQuestionIndex === questions.length) {
      navigate({
        pathname: '/result',
        search: createSearchParams({
          ...calculateScores(questions, choices)
        }).toString()
      })
    }
  }, [currentSelectedQuestionIndex])

  return (
    <Layout style={{
      backgroundColor: 'transparent',
      border: '0',
      display: 'flex',
      alignItems: 'center',
    }}>
      {currentSelectedQuestionIndex < questions.length &&
        <>
          <Card
            title={t(`quiz.question_n_of_all`, { index: currentSelectedQuestionIndex + 1, all: questions.length })}
            headStyle={{
              fontSize: 'xx-large',
            }}
            bodyStyle={{
              fontSize: 'x-large',
              whiteSpace: 'pre-line',
            }}
            style={{
              width: '100%',
              minHeight: '220px',
              margin: '30px',
            }}>
            {t(`quiz.questions.${questions[currentSelectedQuestionIndex].id}.description`)}
          </Card>
          <Button style={{
            backgroundColor: 'darkgreen',
            border: '0',
            color: 'white',
            ...getButtonStyles(),
          }} onClick={() => {
            setChoice(MULTIPLIER.ca)
            moveToNextQuestion()
          }}>
            {t('quiz.answers.completely_agree')}
          </Button>
          <Button style={{
            backgroundColor: 'limegreen',
            border: '0',
            color: 'white',
            ...getButtonStyles(),
          }} onClick={() => {
            setChoice(MULTIPLIER.a)
            moveToNextQuestion()
          }}>
            {t('quiz.answers.agree')}
          </Button>
          <Button style={{
            backgroundColor: 'chartreuse',
            border: '0',
            color: 'white',
            ...getButtonStyles(),
          }} onClick={() => {
            setChoice(MULTIPLIER.sa)
            moveToNextQuestion()
          }}>
            {t('quiz.answers.slightly_agree')}
          </Button>
          <Button style={{
            backgroundColor: 'gray',
            border: '0',
            color: 'white',
            ...getButtonStyles(),
          }} onClick={() => {
            setChoice(MULTIPLIER.n)
            moveToNextQuestion()
          }}>
            {t('quiz.answers.neutral')}
          </Button>
          <Button style={{
            backgroundColor: 'crimson',
            border: '0',
            color: 'white',
            ...getButtonStyles(),
          }} onClick={() => {
            setChoice(MULTIPLIER.sd)
            moveToNextQuestion()
          }}>
            {t('quiz.answers.slightly_disagree')}
          </Button>
          <Button style={{
            backgroundColor: 'red',
            border: '0',
            color: 'white',
            ...getButtonStyles(),
          }} onClick={() => {
            setChoice(MULTIPLIER.d)
            moveToNextQuestion()
          }}>
            {t('quiz.answers.disagree')}
          </Button>
          <Button style={{
            backgroundColor: 'darkred',
            border: '0',
            color: 'white',
            ...getButtonStyles(),
          }} onClick={() => {
            setChoice(MULTIPLIER.cd)
            moveToNextQuestion()
          }}>
            {t('quiz.answers.completely_disagree')}
          </Button>
          <Button style={{
            backgroundColor: 'transparent',
            borderColor: 'gray',
            color: 'gray',
            ...getButtonStyles(),
          }} onClick={() => {
            moveToPrevQuestion()
          }} disabled={currentSelectedQuestionIndex === 0}>
            {t('quiz.answers.back')}
          </Button>
        </>
      }
    </Layout>
  )
}

export default Quiz
