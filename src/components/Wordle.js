import React, { useEffect } from 'react'
import useWordle from '../hooks/useWordle'
import Typography from '@mui/material/Typography'

import Grilla from './Grilla'
import KeyPad from './Keypad'
import { Box } from '@mui/material'

export default function Wordle ({ solution }) {
  const { turn, currentGuess, guesses, usedKeys, handleKeyUp } = useWordle(solution)

  useEffect(() => {
    window.addEventListener('keyup', handleKeyUp)

    // Evita que haya muchos event listeners iguales?
    return () => window.removeEventListener('keyup', handleKeyUp)
  }, [handleKeyUp])

  return (
    <Box display='flex' sx={{ justifyContent: 'space-between', flexDirection: 'column', height: '100vh' }}>
      <Box>
        <Typography variant='h2'>Wordle</Typography>
        <Typography><b>Solution:</b> {solution}</Typography>
      </Box>
      <Box>
        <Grilla currentGuess={currentGuess} guesses={guesses} turn={turn} />
      </Box>
      <Box bottom={0} sx={{ justifySelf: 'end' }}>
        <KeyPad handleKeyUp={handleKeyUp} usedKeys={usedKeys} />
      </Box>
    </Box>
  )
}
