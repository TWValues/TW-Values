import { Layout, Card, Button, Grid } from 'antd'
import { useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate, createSearchParams } from 'react-router-dom'
import shuffle from '../../utils/shuffle'
import getScreenSize from '../../utils/getScreenSize'
import QUESTIONS from '../../data/questions'

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
  const [choices, setChoices] = useState(new Array(questions.length).fill(0.0))

  const setChoice = (multiplier) => {
    const newChoices = choices.map((value, index) => {
      if (index === currentSelectedQuestionIndex) {
        return multiplier
      }
      return value
    })
    setChoices(newChoices)
  }

  const moveToPrevQuestion = () => {
    setCurrentSelectedQuestionIndex(currentSelectedQuestionIndex - 1)
  }

  const moveToNextQuestion = () => {
    if (currentSelectedQuestionIndex + 1 === questions.length) {

      const calculateScores = () => {
        const getScore = (array) => {
          const getScoreWithMultiplier = (array) => {
            return array.reduce((accu, value, index) => accu + value * choices[index])
          }
          const getAbsMaxScore = (array) => {
            return array.reduce((accu, value) => accu + Math.abs(value))
          }
          const getPercentage = (bias, total) => 100 * (bias + total) / (2 * total)

          const score = getScoreWithMultiplier(array)
          const maxScore = getAbsMaxScore(array)
          return Math.round(getPercentage(score, maxScore))
        }

        const getTags = (array) => {
          return array.reduce((accu, value, index) => {

            const filter = (obj, predicate) =>
              Object.keys(obj)
                .filter(key => predicate(obj[key]))
                .reduce((accu, key) => {
                  accu[key] = obj[key]
                  return accu
                }, {})

            if (choices[index] > 0.0) {
              return { ...accu, ...filter(value || {}, value => value > 0.0) }
            }

            if (choices[index] < 0.0) {
              return { ...accu, ...filter(value || {}, value => value < 0.0) }
            }

            return accu
          })
        }

        return {
          economic: getScore(questions.map((value) => value.effect.economic || 0.0)),
          environmental: getScore(questions.map((value) => value.effect.environmental || 0.0)),
          civil: getScore(questions.map((value) => value.effect.civil || 0.0)),
          societal: getScore(questions.map((value) => value.effect.societal || 0.0)),
          diplomatic: getScore(questions.map((value) => value.effect.diplomatic || 0.0)),
          sovereignty: getScore(questions.map((value) => value.effect.sovereignty || 0.0)),
          us_china_relation: getScore(questions.map((value) => value.effect.us_china_relation || 0.0)),
          tags: Object.keys(getTags(questions.map((value) => value.effect.tags))).join(',')
        }
      }

      navigate({
        pathname: '/result',
        search: createSearchParams({
          ...calculateScores()
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
        setChoice(1.0)
        moveToNextQuestion()
      }}>
        {t('quiz.answers.strongly_agree')}
      </Button>
      <Button style={{
        backgroundColor: 'limegreen',
        borderColor: 'limegreen',
        color: 'white',
        ...getButtonStyles(),
        margin: '5px',
      }} onClick={() => {
        setChoice(0.5)
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
        setChoice(0.0)
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
        setChoice(-0.5)
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
        setChoice(-1.0)
        moveToNextQuestion()
      }}>
        {t('quiz.answers.strongly_disagree')}
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
