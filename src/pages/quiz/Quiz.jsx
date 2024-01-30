import React from 'react'
import { Layout, Card, Button, Grid } from 'antd'
import { useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate, createSearchParams } from 'react-router-dom'
import shuffle from '../../utils/shuffle'
import getScreenSize from '../../utils/getScreenSize'
import QUESTIONS from '../../data/question'

export const calculateScores = (questions, choices) => {
  const getScore = (weights) => {
    const getScoreWithMultiplier = (weights) => {
      return weights.reduce((accu, value) => accu + value.weight * choices[value.id], 0.0)
    }
    const getAbsMaxScore = (weights) => {
      return weights.reduce((accu, value) => accu + Math.abs(value.weight), 0.0)
    }
    const getPercentage = (bias, total) => 100 * (bias + total) / (2 * total)

    const score = getScoreWithMultiplier(weights)
    const maxScore = getAbsMaxScore(weights)
    return Math.round(getPercentage(score, maxScore))
  }

  const getTags = (weights) => {
    return weights.reduce((accu, value) => {
      if (choices[value.id] > 0.0) {
        for (const [k, v] of Object.entries(value.tags || {})) {
          if (v > 0.0) {
            accu.push(k)
          }
        }
      }
      if (choices[value.id] < 0.0) {
        for (const [k, v] of Object.entries(value.tags || {})) {
          if (v < 0.0) {
            accu.push(k)
          }
        }
      }

      return accu
    }, [])
  }

  return {
    economic: getScore(questions.map((value) => ({ id: value.id, weight: value.weight.economic || 0.0 }))),
    environmental: getScore(questions.map((value) => ({ id: value.id, weight: value.weight.environmental || 0.0 }))),
    civil: getScore(questions.map((value) => ({ id: value.id, weight: value.weight.civil || 0.0 }))),
    societal: getScore(questions.map((value) => ({ id: value.id, weight: value.weight.societal || 0.0 }))),
    diplomatic: getScore(questions.map((value) => ({ id: value.id, weight: value.weight.diplomatic || 0.0 }))),
    sovereignty: getScore(questions.map((value) => ({ id: value.id, weight: value.weight.sovereignty || 0.0 }))),
    us_vs_china: getScore(questions.map((value) => ({ id: value.id, weight: value.weight.us_vs_china || 0.0 }))),
    tags: getTags(questions.map((value) => ({ id: value.id, tags: value.weight.tags }))).join(',')
  }
}

export const MULTIPLIER = {
  ca: 1.0,
  a: 0.5,
  n: 0.0,
  d: -0.5,
  cd: -1.0,
}

const Quiz = () => {

  const [t] = useTranslation()
  const navigate = useNavigate()
  const screens = Grid.useBreakpoint()

  const getButtonStyles = () => {
    const styles = {
      sm: { width: '100%', height: '50px', fontSize: 'x-large' },
      md: { width: '60%', height: '50px', fontSize: 'x-large' },
      lg: { width: '50%', height: '40px', fontSize: 'large' },
      xl: { width: '40%', height: '40px', fontSize: 'large' },
      xxl: { width: '40%', height: '40px', fontSize: 'large' },
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
    if (currentSelectedQuestionIndex + 1 === questions.length) {
      navigate({
        pathname: '/result',
        search: createSearchParams({
          ...calculateScores(questions, choices)
        }).toString()
      })
    } else {
      setCurrentSelectedQuestionIndex(currentSelectedQuestionIndex + 1)
    }
  }

  return (
    <Layout style={{
      backgroundColor: 'transparent',
      display: 'flex',
      alignItems: 'center',
    }}>
      <Card
        title={t(`quiz.question_n_of_all`, { index: currentSelectedQuestionIndex + 1, all: questions.length })}
        headStyle={{
          fontSize: 'xx-large',
        }}
        style={{
          width: '100%',
          minHeight: '220px',
          fontSize: 'x-large',
          margin: '20px',
          whiteSpace: 'pre-line',
        }}>
        {t(`quiz.questions.${questions[currentSelectedQuestionIndex].id}.description`)}
      </Card>
      <Button style={{
        backgroundColor: 'darkgreen',
        borderColor: 'darkgreen',
        color: 'white',
        ...getButtonStyles(),
        margin: '5px',
      }} onClick={() => {
        setChoice(MULTIPLIER.ca)
        moveToNextQuestion()
      }}>
        {t('quiz.answers.completely_agree')}
      </Button>
      <Button style={{
        backgroundColor: 'limegreen',
        borderColor: 'limegreen',
        color: 'white',
        ...getButtonStyles(),
        margin: '5px',
      }} onClick={() => {
        setChoice(MULTIPLIER.a)
        moveToNextQuestion()
      }}>
        {t('quiz.answers.agree')}
      </Button>
      <Button style={{
        backgroundColor: 'gray',
        borderColor: 'gray',
        color: 'white',
        ...getButtonStyles(),
        margin: '5px',
      }} onClick={() => {
        setChoice(MULTIPLIER.n)
        moveToNextQuestion()
      }}>
        {t('quiz.answers.neutral')}
      </Button>
      <Button style={{
        backgroundColor: 'red',
        borderColor: 'red',
        color: 'white',
        ...getButtonStyles(),
        margin: '5px',
      }} onClick={() => {
        setChoice(MULTIPLIER.d)
        moveToNextQuestion()
      }}>
        {t('quiz.answers.disagree')}
      </Button>
      <Button style={{
        backgroundColor: 'darkred',
        borderColor: 'darkred',
        color: 'white',
        ...getButtonStyles(),
        margin: '5px',
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
        margin: '5px',
      }} onClick={() => {
        moveToPrevQuestion()
      }} disabled={currentSelectedQuestionIndex === 0}>
        {t('quiz.answers.back')}
      </Button>
    </Layout >
  )
}

export default Quiz
