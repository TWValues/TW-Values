
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ConfigProvider, theme } from 'antd';
import Main from './pages/Main';
import Quiz from './pages/Quiz';

const { darkAlgorithm } = theme

function App() {
  return (
    <ConfigProvider theme={{ algorithm: darkAlgorithm }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}>
            <Route path="/" element={<Quiz />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ConfigProvider>
  )
}

export default App;
