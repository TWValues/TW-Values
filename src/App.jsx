
import { HashRouter, Route, Routes } from 'react-router-dom'
import Main from './modules/main/Main'
import Welcome from './pages/quiz/Welcome'
import Quiz from './pages/quiz/Quiz'
import Result from './pages/quiz/Result'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="/" element={<Welcome />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/result" element={<Result />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}

export default App
