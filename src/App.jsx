import React from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Main from './modules/main/Main'
import Welcome from './pages/Welcome'
import Quiz from './pages/Quiz'
import Result from './pages/Result'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Main />}>
          <Route path='/' element={<Welcome />} />
          <Route path='/quiz' element={<Quiz />} />
          <Route path='/result' element={<Result />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}

export default App
