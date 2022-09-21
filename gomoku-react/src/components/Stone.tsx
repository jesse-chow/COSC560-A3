import { memo } from 'react'
import { STONE_STATUS } from '../constants'

import style from './Stone.module.css'

const getClassNames = (status: STONE_STATUS) => {
  const className = style.stone
  switch (status) {
    case STONE_STATUS.BLACK:
      return `${className} ${style.black}`
    case STONE_STATUS.WHITE:
      return `${className} ${style.white}`
    default:
      return className
  }
}

type StoneProps = {
  row: number
  column: number
  status: STONE_STATUS
  order: number
  onClick: (position: [number, number]) => void
  readonly: boolean
}

export default memo(function Stone({
  row,
  column,
  status,
  order,
  onClick,
  readonly,
}: StoneProps) {
  const handleClick = () => {
    if (status === STONE_STATUS.EMPTY && !readonly) {
      onClick([row, column])
    }
  }

  return (
    <div className={getClassNames(status)} onClick={handleClick}>
      {order && readonly ? order : undefined}
    </div>
  )
})
