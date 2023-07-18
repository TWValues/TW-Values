import { Layout, Card, Button } from "antd"
import { useMemo, useState } from "react"
import { useTranslation } from "react-i18next"
import QUESTIONS from "../utils/questions"

const Quiz = () => {

  // eslint-disable-next-line no-unused-vars
  const [t, i18n] = useTranslation()

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
    setCurrentSelectedQuestionIndex(currentSelectedQuestionIndex + 1)
  }

  return (
    <Layout style={{
      backgroundColor: 'transparent',
      display: 'flex',
      alignItems: 'center',
    }}> {currentSelectedQuestionIndex < questions.length ?
      <>
        <Card
          title={t(`quiz.question_n_of_all`, { index: currentSelectedQuestionIndex + 1, all: questions.length })}
          headStyle={{
            fontSize: 'xx-large',
          }}
          style={{
            width: '100%',
            fontSize: 'x-large',
            margin: '20px',
          }}>
          {t(`quiz.questions.${questions[currentSelectedQuestionIndex].id}.description`)}
        </Card>
        <Button style={{
          backgroundColor: '#006000',
          borderColor: '#006000',
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
          backgroundColor: '#00D000',
          borderColor: '#00D000',
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
          backgroundColor: '#600000',
          borderColor: '#600000',
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
        {currentSelectedQuestionIndex > 0 &&
          <Button style={{
            backgroundColor: 'transparent',
            borderColor: 'gray',
            color: 'gray',
            width: '20%',
            margin: '5px',
          }} onClick={() => {
            moveToPrevQuestion()
          }}>
            {t('quiz.answers.back')}
          </Button>
        }
      </>
      :
      <p>TODO</p>
      }
    </Layout >
  )
}

export default Quiz
