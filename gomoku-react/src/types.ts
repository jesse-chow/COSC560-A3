import { GAME_STATUS } from './constants'

export type Position = [number, number]

export type GameData = {
  size: number
  moves: Position[]
  date: string
  result: GAME_STATUS
}

export type User = {
  username: string
}