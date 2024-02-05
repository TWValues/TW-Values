import React from 'react'
import { Flex, Card, Button } from 'antd'
import { useMemo, useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate, createSearchParams } from 'react-router-dom'
import shuffle from '../utils/shuffle'
import useBreakpoint from '../utils/useBreakpoint'
import { getQuestions } from '../data/question'
import { getMatchedIdeologyTags } from '../data/ideology_tag'
import MULTIPLIER from '../utils/multiplier'
import { API_VERSION_KEY, API_VERSION_VALUE } from '../utils/apiVersion'
import { getValueScores } from '../utils/match'

const Quiz = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const screens = useBreakpoint()

  const getCardStyles = () =>
    ({
      sm: { width: '100%' },
      md: { width: '100%' },
      lg: { width: '90%' },
      xl: { width: '80%' },
      xxl: { width: '80%' },
    })[screens.size]

  const getButtonLayoutStyles = () =>
    ({
      sm: { width: '90%' },
      md: { width: '60%' },
      lg: { width: '40%' },
      xl: { width: '30%' },
      xxl: { width: '30%' },
    })[screens.size]

  const getButtonStyles = () => ({
    height: '36px',
    margin: '8px',
    fontSize: 'large',
    borderRadius: '18px',
  })

  const questions = useMemo(() => {
    return shuffle(getQuestions())
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
          [API_VERSION_KEY]: API_VERSION_VALUE,
          ...getValueScores(questions, choices),
          tags: getMatchedIdeologyTags(choices).join(','),
        }).toString(),
      })
    }
  }, [currentSelectedQuestionIndex])

  return (
    <Flex
      vertical={true}
      justify='center'
      align='center'
      style={{
        backgroundColor: 'transparent',
        width: '100%',
      }}
    >
      {currentSelectedQuestionIndex < questions.length && (
        <>
          <Card
            title={t(`quiz.question_n_of_all`, {
              index: currentSelectedQuestionIndex + 1,
              all: questions.length,
            })}
            headStyle={{
              fontSize: 'xx-large',
            }}
            bodyStyle={{
              fontSize: 'x-large',
              whiteSpace: 'pre-line',
            }}
            style={{
              minHeight: '220px',
              margin: '20px',
              backgroundColor: 'gainsboro',
              ...getCardStyles(),
            }}
          >
            {t(`quiz.questions.${questions[currentSelectedQuestionIndex].id}.description`)}
          </Card>
          <Flex
            vertical={true}
            justify='center'
            align='center'
            style={{
              backgroundColor: 'gainsboro',
              padding: '12px 24px',
              borderRadius: '20px',
              ...getButtonLayoutStyles(),
            }}
          >
            <Button
              style={{
                width: '100%',
                backgroundColor: '#004000',
                border: '0',
                color: 'white',
                ...getButtonStyles(),
              }}
              onClick={() => {
                setChoice(MULTIPLIER.ca)
                moveToNextQuestion()
              }}
            >
              {t('quiz.answers.completely_agree')}
            </Button>
            <Button
              style={{
                width: '85%',
                backgroundColor: 'green',
                border: '0',
                color: 'white',
                ...getButtonStyles(),
              }}
              onClick={() => {
                setChoice(MULTIPLIER.a)
                moveToNextQuestion()
              }}
            >
              {t('quiz.answers.agree')}
            </Button>
            <Button
              style={{
                width: '70%',
                backgroundColor: 'limegreen',
                border: '0',
                color: 'white',
                ...getButtonStyles(),
              }}
              onClick={() => {
                setChoice(MULTIPLIER.sa)
                moveToNextQuestion()
              }}
            >
              {t('quiz.answers.slightly_agree')}
            </Button>
            <Button
              style={{
                width: '55%',
                backgroundColor: 'gray',
                border: '0',
                color: 'white',
                ...getButtonStyles(),
              }}
              onClick={() => {
                setChoice(MULTIPLIER.n)
                moveToNextQuestion()
              }}
            >
              {t('quiz.answers.neutral')}
            </Button>
            <Button
              style={{
                width: '70%',
                backgroundColor: 'crimson',
                border: '0',
                color: 'white',
                ...getButtonStyles(),
              }}
              onClick={() => {
                setChoice(MULTIPLIER.sd)
                moveToNextQuestion()
              }}
            >
              {t('quiz.answers.slightly_disagree')}
            </Button>
            <Button
              style={{
                width: '85%',
                backgroundColor: 'red',
                border: '0',
                color: 'white',
                ...getButtonStyles(),
              }}
              onClick={() => {
                setChoice(MULTIPLIER.d)
                moveToNextQuestion()
              }}
            >
              {t('quiz.answers.disagree')}
            </Button>
            <Button
              style={{
                width: '100%',
                backgroundColor: 'darkred',
                border: '0',
                color: 'white',
                ...getButtonStyles(),
              }}
              onClick={() => {
                setChoice(MULTIPLIER.cd)
                moveToNextQuestion()
              }}
            >
              {t('quiz.answers.completely_disagree')}
            </Button>
            <Button
              style={{
                width: '55%',
                backgroundColor: 'transparent',
                borderColor: 'gray',
                color: 'gray',
                ...getButtonStyles(),
              }}
              onClick={() => {
                moveToPrevQuestion()
              }}
              disabled={currentSelectedQuestionIndex === 0}
            >
              {t('quiz.answers.back')}
            </Button>
          </Flex>
        </>
      )}
    </Flex>
  )
}

export default Quiz
