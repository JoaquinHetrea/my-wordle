import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { useEffect, useState } from 'react'
import Wordle from './components/Wordle'
import data from './data/db'

function App () {
  const [solution, setSolution] = useState(null)

  useEffect(() => {
    console.log(data)
    const randomSolution = data[Math.floor(Math.random() * data.length)]
    setSolution(randomSolution.word)
  }, [setSolution])

  return (
    <div className='App'>
      <Typography variant='h1'>Wordle</Typography>
      <Container maxWidth='xs' sx={{ alignContent: 'center' }}>
        {solution && <Wordle solution={solution} />}
      </Container>
    </div>
  )
}

export default App
