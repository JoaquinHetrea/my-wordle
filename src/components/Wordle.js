import React, { useEffect, useState } from 'react'
import useWordle from '../hooks/useWordle'
import Typography from '@mui/material/Typography'
import Grilla from './Grilla'
import KeyPad from './Keypad'
import Box from '@mui/material/Box'

import Modal from './Modal'

export default function Wordle ({ solution }) {
  const { turn, isCorrect, currentGuess, guesses, usedKeys, handleKeyUp } = useWordle(solution)
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    window.addEventListener('keyup', handleKeyUp)

    if (isCorrect) {
      setTimeout(() => setShowModal(true), 1000)
      window.removeEventListener('keyup', handleKeyUp)
    }

    if (turn >= 6) {
      setTimeout(() => setShowModal(true), 1000)
      window.removeEventListener('keyup', handleKeyUp)
    }

    // Evita que haya muchos event listeners iguales?
    return () => window.removeEventListener('keyup', handleKeyUp)
  }, [handleKeyUp, isCorrect, turn])

  return (
    <Box display='flex' sx={{ justifyContent: 'space-between', flexDirection: 'column', height: '100vh' }}>
      <Box>
        <Typography variant='h2'>Wordle</Typography>
      </Box>
      <Box>
        <Grilla currentGuess={currentGuess} guesses={guesses} turn={turn} />
      </Box>
      <Box bottom={0} sx={{ justifySelf: 'end' }}>
        <KeyPad handleKeyUp={handleKeyUp} usedKeys={usedKeys} />
      </Box>
      <Modal open={showModal} turn={turn} setOpen={setShowModal} isCorrect={isCorrect} solution={solution} />
    </Box>
  )
}
