
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ConfigProvider, theme } from 'antd';
import Main from './pages/Main';
import Welcome from './pages/quiz/Welcome';
import Quiz from './pages/quiz/Quiz';
import Result from './pages/quiz/Result';

const { darkAlgorithm } = theme

function App() {
  return (
    <ConfigProvider theme={{ algorithm: darkAlgorithm }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}>
            <Route path="/" element={<Welcome />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/result" element={<Result />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ConfigProvider>
  )
}

export default App;
