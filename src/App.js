
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from './pages/Main'
import Welcome from './pages/quiz/Welcome'
import Quiz from './pages/quiz/Quiz'
import Result from './pages/quiz/Result'

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="/" element={<Welcome />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/result" element={<Result />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
