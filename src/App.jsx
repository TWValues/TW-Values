import React from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Main from './modules/main/Main'
import Welcome from './pages/Welcome'
import Quiz from './pages/Quiz'
import Result from './pages/Result'
import { ConfigProvider, theme } from 'antd'
import { useThemeStore } from './store/store'
import { getThemeId } from './themes/theme'

function App() {
  const themeId = useThemeStore((state) => state.theme.id)
  return (
    <ConfigProvider theme={{ algorithm: themeId == getThemeId().light ? theme.defaultAlgorithm : theme.darkAlgorithm }}>
      <HashRouter>
        <Routes>
          <Route path='/' element={<Main />}>
            <Route path='/' element={<Welcome />} />
            <Route path='/quiz' element={<Quiz />} />
            <Route path='/result' element={<Result />} />
          </Route>
        </Routes>
      </HashRouter>
    </ConfigProvider>
  )
}

export default App
