import { Layout, Card, Button } from 'antd'
import { useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import QUESTIONS from '../../utils/questions'
import IDEOLOGIES from '../../utils/ideologies'

const Quiz = () => {

  // eslint-disable-next-line no-unused-vars
  const [t, i18n] = useTranslation()
  const navigate = useNavigate()

  const questions = useMemo(() => {

    // https://stackoverflow.com/a/2450976
    const shuffle = (array) => {
      let currentIndex = array.length, randomIndex

      // While there remain elements to shuffle.
      while (currentIndex !== 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex--

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
          array[randomIndex], array[currentIndex]]
      }

      return array
    }

    shuffle(QUESTIONS)
    return QUESTIONS
  }, [])

  // eslint-disable-next-line no-unused-vars
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
          return getPercentage(score, maxScore)
        }

        const economic = getScore(questions.map((value) => value.effect.economic || 0.0))
        const environmental = getScore(questions.map((value) => value.effect.environmental || 0.0))
        const civil = getScore(questions.map((value) => value.effect.civil || 0.0))
        const societal = getScore(questions.map((value) => value.effect.societal || 0.0))

        const getIdeology = () => {
          const ideologies = IDEOLOGIES.map((value) => {
            let distance = 0.0
            distance += Math.pow(Math.abs(value.state.economic - economic), 2)
            // distance += Math.pow(Math.abs(value.state.environmental - environmental), 2)
            distance += Math.pow(Math.abs(value.state.civil - civil), 2)
            distance += Math.pow(Math.abs(value.state.societal - societal), 2)
            return {
              id: value.id,
              distance: distance
            }
          }).sort((lhs, rhs) => lhs.distance < rhs.distance ? -1 : lhs.distance > rhs.distance ? 1 : 0)

          console.log(ideologies)

          return {
            name: t(`quiz.result.ideologies.${ideologies[0].id}.name`),
          }
        }

        return {
          ideology: getIdeology(),
          economic,
          environmental,
          civil,
          societal,
          sovereignty: getScore(questions.map((value) => value.effect.sovereignty || 0.0)),
          us_china_relation: getScore(questions.map((value) => value.effect.us_china_relation || 0.0)),
        }
      }

      navigate('/result', {
        state: calculateScores()
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
        width: '60%',
        height: '40px',
        margin: '5px',
        fontSize: 'large',
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
        width: '60%',
        height: '40px',
        margin: '5px',
        fontSize: 'large',
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
        width: '60%',
        height: '40px',
        margin: '5px',
        fontSize: 'large',
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
        width: '60%',
        height: '40px',
        margin: '5px',
        fontSize: 'large',
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
        width: '60%',
        height: '40px',
        margin: '5px',
        fontSize: 'large',
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
        width: '20%',
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
