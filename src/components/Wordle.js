import React, { useEffect } from 'react'
import useWordle from '../hooks/useWordle'
import Typography from '@mui/material/Typography'

import Grilla from './Grilla'

export default function Wordle ({ solution }) {
  const { turn, history, currentGuess, guesses, handleKeyUp } = useWordle(solution)

  useEffect(() => {
    window.addEventListener('keyup', handleKeyUp)

    // Evita que haya muchos event listeners iguales?
    return () => window.removeEventListener('keyup', handleKeyUp)
  }, [handleKeyUp])

  return (
    <>
      <Typography><b>Solution:</b> {solution}</Typography>
      <Typography><b>Current Guess:</b> {currentGuess}</Typography>
      <Grilla currentGuess={currentGuess} guesses={guesses} turn={turn} />
    </>
  )
}
