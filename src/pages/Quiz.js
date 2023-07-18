import { Layout, Card, Button } from "antd"
import { useState } from "react"
import { useTranslation } from "react-i18next"

const Quiz = () => {

  // eslint-disable-next-line no-unused-vars
  const [t, i18n] = useTranslation()

  // eslint-disable-next-line no-unused-vars
  const [questionIdx, setQuestionIdx] = useState(0)

  const questions = [
    {
      id: "q1",
      effect: {
        econamic: -10,
        deplomatic: 0,
        civil: 0,
        societal: 0,
      }
    },
  ]

  return (
    <Layout style={{
      backgroundColor: 'transparent',
      display: 'flex',
      alignItems: 'center',
    }}>
      <Card
        title={t(`quiz.question_n_of_all`, { index: questionIdx + 1, all: questions.length })}
        headStyle={{
          fontSize: 'xx-large',
        }}
        style={{
          width: '100%',
          fontSize: 'x-large',
          margin: '20px',
        }}>
        {t(`quiz.questions.q${questionIdx + 1}.description`)}
      </Card>
      <Button style={{
        backgroundColor: '#006000',
        borderColor: '#006000',
        color: 'white',
        width: '60%',
        height: '40px',
        margin: '5px',
        fontSize: 'large',
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
      }}>
        {t('quiz.answers.strongly_disagree')}
      </Button>
      <Button style={{
        backgroundColor: 'transparent',
        borderColor: 'gray',
        color: 'gray',
        width: '20%',
        margin: '5px',
      }}>
        {t('quiz.answers.back')}
      </Button>
    </Layout >
  )
}

export default Quiz
