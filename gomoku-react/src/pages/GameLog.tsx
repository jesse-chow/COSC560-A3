import { useContext } from "react"
import { Navigate, useNavigate, useParams } from "react-router-dom"
import { UserContext } from "../context"
import { useLocalStorage } from "../hooks"
import { Board, Button } from '../components'
import type { GameData } from '../types'

import style from "./GameLog.module.css"

export default function GameLog() {
  const { user } = useContext(UserContext)
  const navigate = useNavigate()
  const { gameId = '' } = useParams()
  const [games] = useLocalStorage<GameData[]>('games', [])
  const game = games.find(
    (g) => new Date(g.date).getTime() === parseInt(gameId)
  )

  if (!user) {
    return <Navigate to='/login' replace />
  }
  
  if (!game)
    return (
      <p className={style.message}>
        Cannot find the game log, please go back to the home page
      </p>
    )

  const { size, moves, result } = game

  return (
    <>
      <p className={style.message}>{result}</p>
      <div className={style.board}>
        <Board size={size} moves={moves} readonly />
      </div>
      <div className={style.button}>
        <Button onClick={() => navigate('/games')}>Back</Button>
      </div>
    </>
  )
}