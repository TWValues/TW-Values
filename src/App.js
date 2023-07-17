
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ConfigProvider, theme } from 'antd';
import Main from './pages/Main';

const { darkAlgorithm } = theme

function App() {
  return (
    <ConfigProvider theme={{ algorithm: darkAlgorithm }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </ConfigProvider>
  )
}

export default App;
