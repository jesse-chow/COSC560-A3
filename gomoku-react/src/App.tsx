import { Routes, Route, Navigate } from 'react-router-dom'
import { Header, UserProvider } from './components'
import { Home, Login, GameLog, Games, Game } from './pages'

import style from './App.module.css'

function App() {
  return (
    <UserProvider>
      <Header />
      <main className={style.main}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='login' element={<Login />} />
          <Route path='game' element={<Game />} />
          <Route path='games' element={<Games />} />
          <Route path='game-log/:gameId' element={<GameLog />} />
          <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>
      </main>
    </UserProvider>
  )
}

export default App
