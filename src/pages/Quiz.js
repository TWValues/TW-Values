import { Layout, Card, Button } from "antd"
import { useState } from "react"

const Quiz = () => {

  const [questionIdx, setQuestionIdx] = useState(0)

  const questions = [
    {
      id: 1,
      question: 'The freer the markets, the freer the people.',
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
        title={`Question ${questionIdx + 1} of ${questions.length}`}
        headStyle={{
          fontSize: 'xx-large',
        }}
        style={{
          width: '100%',
          fontSize: 'x-large',
          margin: '20px',
        }}>
        {questions[questionIdx].question}
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
        Strongly Agree
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
        Agree
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
        Neutral
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
        Disagree
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
        Strongly Disagree
      </Button>
      <Button style={{
        backgroundColor: 'transparent',
        borderColor: 'gray',
        color: 'gray',
        width: '20%',
        margin: '5px',
      }}>
        Back
      </Button>
    </Layout >
  )
}

export default Quiz
