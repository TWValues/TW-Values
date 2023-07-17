
import { Layout, Typography } from 'antd'

const { Header, Content, Footer } = Layout
const { Title } = Typography

const Main = () => {
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Header style=
                {{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '20px 20% 40px 20%',
                }}>
                <Title level={1}>
                    TW VALUES
                </Title>
            </Header>
            <Content style=
                {{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '10px 20% 10px 20%',
                    color: 'black',
                    backgroundColor: 'white',
                }}>
                Content
            </Content>
            <Footer style=
                {{
                    padding: '0 20% 0 20%',
                    textAlign: 'right',
                }}>
                <Title level={4}>Copyright (c) 2023 TW VALUES</Title>
            </Footer >
        </Layout >
    )
}

export default Main
