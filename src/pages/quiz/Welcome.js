import { Button, Divider, Layout, Typography } from 'antd'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

const { Title, Text } = Typography

const Welcome = () => {

  // eslint-disable-next-line no-unused-vars
  const [t, i18n] = useTranslation()

  const navigate = useNavigate()

  return (
    <Layout style={{
      backgroundColor: 'white',
      display: 'flex',
      alignItems: 'center',
      padding: '20px',
    }}>
      <Title
        level={1}
        style={{
          color: 'black',
          padding: '10px',
        }}>
        {t('quiz.welcome.title')}
      </Title>
      <Text style={{
        color: 'black',
        fontSize: 'x-large',
        padding: '10px',
      }}>
        {t('quiz.welcome.content')}
      </Text>
      <Divider style={{ backgroundColor: 'black' }} />
      <Button style={{
        backgroundColor: 'lightseagreen',
        borderColor: 'lightseagreen',
        color: 'white',
        width: '40%',
        height: '60px',
        margin: '5px',
        fontSize: 'x-large',
      }} onClick={() => {
        navigate('/quiz')
      }}>
        {t('quiz.welcome.start')}
      </Button>
    </Layout>
  )
}

export default Welcome
