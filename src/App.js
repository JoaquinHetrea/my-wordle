import { useEffect, useState } from 'react'
import Wordle from './components/Wordle'
import data from './data/db'
import Box from '@mui/material/Box'

function App () {
  const [solution, setSolution] = useState(null)

  useEffect(() => {
    console.log(data)
    const randomSolution = data[Math.floor(Math.random() * data.length)]
    setSolution(randomSolution.word)
  }, [setSolution])

  return (
    <Box sx={{ height: '100vh' }}>
      {solution && <Wordle solution={solution} />}
    </Box>
  )
}

export default App
