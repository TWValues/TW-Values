import React from 'react'
import { Flex, Card } from 'antd'
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
import * as stylex from '@stylexjs/stylex'

const buttonStyles = stylex.create({
  base: {
    fontSize: 'large',
    margin: '6px',
    height: '40px',
    borderStyle: 'solid',
    borderWidth: '3px',
    borderRadius: '20px',
  },
  stronglyAgree: {
    width: {
      default: '100%',
    },
    color: {
      default: 'white',
      ':hover': { '@media (hover: hover)': '#004000' },
      ':active': '#004000',
    },
    backgroundColor: {
      default: '#004000',
      ':hover': { '@media (hover: hover)': 'white' },
      ':active': 'white',
    },
    borderColor: {
      default: '#004000',
      ':hover': { '@media (hover: hover)': '#004000' },
      ':active': '#004000',
    },
  },
  agree: {
    width: {
      default: '85%',
    },
    color: {
      default: 'white',
      ':hover': { '@media (hover: hover)': 'green' },
      ':active': 'green',
    },
    backgroundColor: {
      default: 'green',
      ':hover': { '@media (hover: hover)': 'white' },
      ':active': 'white',
    },
    borderColor: {
      default: 'green',
      ':hover': { '@media (hover: hover)': 'green' },
      ':active': 'green',
    },
  },
  slightlyAgree: {
    width: {
      default: '70%',
    },
    color: {
      default: 'white',
      ':hover': { '@media (hover: hover)': 'limegreen' },
      ':active': 'limegreen',
    },
    backgroundColor: {
      default: 'limegreen',
      ':hover': { '@media (hover: hover)': 'white' },
      ':active': 'white',
    },
    borderColor: {
      default: 'limegreen',
      ':hover': { '@media (hover: hover)': 'limegreen' },
      ':active': 'limegreen',
    },
  },
  neutral: {
    width: {
      default: '55%',
    },
    color: {
      default: 'white',
      ':hover': { '@media (hover: hover)': 'gray' },
      ':active': 'gray',
    },
    backgroundColor: {
      default: 'gray',
      ':hover': { '@media (hover: hover)': 'white' },
      ':active': 'white',
    },
    borderColor: {
      default: 'gray',
      ':hover': { '@media (hover: hover)': 'gray' },
      ':active': 'gray',
    },
  },
  slightlyDisagree: {
    width: {
      default: '70%',
    },
    color: {
      default: 'white',
      ':hover': { '@media (hover: hover)': 'crimson' },
      ':active': 'crimson',
    },
    backgroundColor: {
      default: 'crimson',
      ':hover': { '@media (hover: hover)': 'white' },
      ':active': 'white',
    },
    borderColor: {
      default: 'crimson',
      ':hover': { '@media (hover: hover)': 'crimson' },
      ':active': 'crimson',
    },
  },
  disagree: {
    width: {
      default: '85%',
    },
    color: {
      default: 'white',
      ':hover': { '@media (hover: hover)': 'red' },
      ':active': 'red',
    },
    backgroundColor: {
      default: 'red',
      ':hover': { '@media (hover: hover)': 'white' },
      ':active': 'white',
    },
    borderColor: {
      default: 'red',
      ':hover': { '@media (hover: hover)': 'red' },
      ':active': 'red',
    },
  },
  stronglyDisagree: {
    width: {
      default: '100%',
    },
    color: {
      default: 'white',
      ':hover': { '@media (hover: hover)': 'darkred' },
      ':active': 'darkred',
    },
    backgroundColor: {
      default: 'darkred',
      ':hover': { '@media (hover: hover)': 'white' },
      ':active': 'white',
    },
    borderColor: {
      default: 'darkred',
      ':hover': { '@media (hover: hover)': 'darkred' },
      ':active': 'darkred',
    },
  },
  back: {
    width: {
      default: '55%',
    },
    color: {
      default: 'black',
      ':hover': { '@media (hover: hover)': 'white' },
      ':active': 'white',
    },
    backgroundColor: {
      default: 'white',
      ':hover': { '@media (hover: hover)': 'black' },
      ':active': 'black',
    },
    borderColor: {
      default: 'black',
      ':hover': { '@media (hover: hover)': 'black' },
      ':active': 'black',
    },
  },
})

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
        backgroundColor: 'white',
        border: 'crimson solid 4px',
        borderRadius: '20px',
        width: '100%',
        padding: '10px',
      }}
    >
      {currentSelectedQuestionIndex < questions.length && (
        <>
          <Card
            title={t(`quiz.question_n_of_all`, {
              index: currentSelectedQuestionIndex + 1,
              all: questions.length,
            })}
            styles={{
              header: {
                fontSize: 'xx-large',
                borderBottom: 'dodgerblue solid 4px',
              },
              body: {
                fontSize: 'x-large',
                whiteSpace: 'pre-line',
              },
            }}
            style={{
              minHeight: '220px',
              margin: '20px',
              border: 'dodgerblue solid 4px',
              borderRadius: '20px',
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
              backgroundColor: 'white',
              border: 'black solid 4px',
              padding: '12px 24px',
              borderRadius: '20px',
              ...getButtonLayoutStyles(),
            }}
          >
            <button
              {...stylex.props(buttonStyles.base, buttonStyles.stronglyAgree)}
              onClick={() => {
                setChoice(MULTIPLIER.ca)
                moveToNextQuestion()
              }}
            >
              {t('quiz.answers.completely_agree')}
            </button>
            <button
              {...stylex.props(buttonStyles.base, buttonStyles.agree)}
              onClick={() => {
                setChoice(MULTIPLIER.a)
                moveToNextQuestion()
              }}
            >
              {t('quiz.answers.agree')}
            </button>
            <button
              {...stylex.props(buttonStyles.base, buttonStyles.slightlyAgree)}
              onClick={() => {
                setChoice(MULTIPLIER.sa)
                moveToNextQuestion()
              }}
            >
              {t('quiz.answers.slightly_agree')}
            </button>
            <button
              {...stylex.props(buttonStyles.base, buttonStyles.neutral)}
              onClick={() => {
                setChoice(MULTIPLIER.n)
                moveToNextQuestion()
              }}
            >
              {t('quiz.answers.neutral')}
            </button>
            <button
              {...stylex.props(buttonStyles.base, buttonStyles.slightlyDisagree)}
              onClick={() => {
                setChoice(MULTIPLIER.sd)
                moveToNextQuestion()
              }}
            >
              {t('quiz.answers.slightly_disagree')}
            </button>
            <button
              {...stylex.props(buttonStyles.base, buttonStyles.disagree)}
              onClick={() => {
                setChoice(MULTIPLIER.d)
                moveToNextQuestion()
              }}
            >
              {t('quiz.answers.disagree')}
            </button>
            <button
              {...stylex.props(buttonStyles.base, buttonStyles.stronglyDisagree)}
              onClick={() => {
                setChoice(MULTIPLIER.cd)
                moveToNextQuestion()
              }}
            >
              {t('quiz.answers.completely_disagree')}
            </button>
            <button
              {...stylex.props(buttonStyles.base, buttonStyles.back)}
              onClick={() => {
                moveToPrevQuestion()
              }}
              disabled={currentSelectedQuestionIndex === 0}
            >
              {t('quiz.answers.back')}
            </button>
          </Flex>
        </>
      )}
    </Flex>
  )
}

export default Quiz
