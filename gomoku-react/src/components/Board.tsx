import { useState, useEffect } from 'react'
import Stone from './Stone'

import style from './Board.module.css'
import type { Position } from '../types'
import { getStoneStatusAndMoveOrder } from '../utils'

type BoardProps = {
  size: number
  moves: Position[]
  updateGameStatus?: (moves: Position) => void
  readonly?: boolean
}

export default function Board({
  size,
  moves,
  updateGameStatus,
  readonly = false,
}: BoardProps) {
  const [currentMove, setCurrentMove] = useState<Position>()

  useEffect(() => {
    if (!updateGameStatus || !currentMove || moves.includes(currentMove)) return
    updateGameStatus(currentMove)
    setCurrentMove(undefined)
  }, [currentMove, moves, updateGameStatus])

  return (
    <div className={style.board}>
      {Array.from({ length: size }).map((_, row) => (
        <div
          key={`row-${row}`}
          className={style.row}
          style={{ gridTemplateColumns: `repeat(${size}, 3.5rem)` }}
        >
          {Array.from({ length: size }).map((_, column) => (
            <Stone
              key={`stone-${row * size + column}`}
              row={row}
              column={column}
              {...getStoneStatusAndMoveOrder([row, column], moves)}
              onClick={setCurrentMove}
              readonly={readonly}
            />
          ))}
        </div>
      ))}
    </div>
  )
}
