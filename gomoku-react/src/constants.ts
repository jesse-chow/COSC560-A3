export const AVAILABLE_GAME_SIZES = [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

export enum STONE_STATUS {
  EMPTY,
  BLACK,
  WHITE,
}

export enum GAME_STATUS {
  BLACK_MOVE = 'Current player: Black',
  WHITE_MOVE = 'Current player: White',
  BLACK_WIN = 'Black player wins',
  WHITE_WIN = 'White player wins',
  DRAW = 'The game is a draw',
}
