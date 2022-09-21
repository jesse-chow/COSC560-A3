import { STONE_STATUS } from './constants'
import type { Position } from './types'

function isCurrentPlayerStone(
  size: number,
  position: Position,
  moves: Position[]
) {
  const [x, y] = position
  if (x < 0 || x >= size || y < 0 || y >= size) return false
  const moveIndex = moves.findIndex(
    (move) => move[0] === position[0] && move[1] === position[1]
  )
  if (moveIndex === -1) return false
  return (moves.length - 1) % 2 === moveIndex % 2
}

function getNumberInARowHorizontally(size: number, moves: Position[]) {
  const [x, y] = moves[moves.length - 1]
  let numberInARow = 1
  let left = y
  // check left direction
  while (numberInARow < 5 && isCurrentPlayerStone(size, [x, --left], moves)) {
    numberInARow++
  }
  if (numberInARow === 5) return numberInARow
  let right = y
  // check right direction
  while (numberInARow < 5 && isCurrentPlayerStone(size, [x, ++right], moves)) {
    numberInARow++
  }
  return numberInARow
}

function getNumberInARowVertically(size: number, moves: Position[]) {
  const [x, y] = moves[moves.length - 1]
  let numberInARow = 1
  let top = x
  // check top direction
  while (numberInARow < 5 && isCurrentPlayerStone(size, [--top, y], moves)) {
    numberInARow++
  }
  if (numberInARow === 5) return numberInARow
  let bottom = x
  // check bottom direction
  while (numberInARow < 5 && isCurrentPlayerStone(size, [++bottom, y], moves)) {
    numberInARow++
  }
  return numberInARow
}

function getNumberInARowTopLeftDiagonally(size: number, moves: Position[]) {
  const [x, y] = moves[moves.length - 1]
  let numberInARow = 1
  let [top, left] = [x, y]
  // check top left direction
  while (
    numberInARow < 5 &&
    isCurrentPlayerStone(size, [--top, --left], moves)
  ) {
    numberInARow++
  }
  if (numberInARow === 5) return numberInARow
  let [bottom, right] = [x, y]
  // check bottom right direction
  while (
    numberInARow < 5 &&
    isCurrentPlayerStone(size, [++bottom, ++right], moves)
  ) {
    numberInARow++
  }
  return numberInARow
}

function getNumberInARowTopRightDiagonally(size: number, moves: Position[]) {
  const [x, y] = moves[moves.length - 1]
  let numberInARow = 1
  let [top, right] = [x, y]
  // check top right direction
  while (
    numberInARow < 5 &&
    isCurrentPlayerStone(size, [--top, ++right], moves)
  ) {
    numberInARow++
  }
  if (numberInARow === 5) return numberInARow
  let [bottom, left] = [x, y]
  // check bottom left direction
  while (
    numberInARow < 5 &&
    isCurrentPlayerStone(size, [++bottom, --left], moves)
  ) {
    numberInARow++
  }
  return numberInARow
}

export function isGameEnded(size: number, moves: Position[]) {
  if (moves.length < 5) return false
  if (
    getNumberInARowHorizontally(size, moves) === 5 ||
    getNumberInARowVertically(size, moves) === 5 ||
    getNumberInARowTopLeftDiagonally(size, moves) === 5 ||
    getNumberInARowTopRightDiagonally(size, moves) === 5
  )
    return true // there is a winner
  if (moves.length === size * size) return true // it's a draw
}

export function getStoneStatusAndMoveOrder(
  position: Position,
  moves: Position[]
) {
  const order =
    moves.findIndex(
      (move) => move[0] === position[0] && move[1] === position[1]
    ) + 1
  const status =
    order === 0
      ? STONE_STATUS.EMPTY
      : order % 2
      ? STONE_STATUS.BLACK
      : STONE_STATUS.WHITE
  return { order, status }
}
