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
      backgroundColor: 'transparent',
      display: 'flex',
      alignItems: 'center',
    }}>
      <Title
        level={1}
        style={{ color: 'black' }}>
        {t('quiz.welcome.title')}
      </Title>
      <Text style={{
        color: 'black',
        fontSize: 'x-large',
      }}>
        {t('quiz.welcome.content')}
      </Text>
      <Divider style={{ backgroundColor: 'black' }} />
      <Button style={{
        backgroundColor: '#006060',
        borderColor: '#006060',
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
