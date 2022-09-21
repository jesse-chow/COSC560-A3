import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { UserContext } from "../context"
import { Button } from '../components'
import { AVAILABLE_GAME_SIZES } from '../constants'

import style from './Home.module.css'

export default function Home() {

  const { user } = useContext(UserContext)
  const navigate = useNavigate()
  const [size, setSize] = useState(10)

  const handleButton = () => {
    if (!user) {
      navigate('/login')
    }
    
    return (
      navigate(`game?size=${size}`)
    )
  }

  return (
    <>
      <div className={style.container}>
        <label className={style.label}> Choose a Board size:
          <select
            className={style.select}
            value={size.toString()}
            onChange={(event) => setSize(parseInt(event.target.value))}
          >
            {AVAILABLE_GAME_SIZES.map((value) => (
              <option key={`size-${value}`} value={value.toString()}>
                {value}
              </option>
            ))}
          </select>
        </label>
        <Button type="button" onClick={handleButton}>
          Start Game
        </Button>
      </div>
    </>
  )
}