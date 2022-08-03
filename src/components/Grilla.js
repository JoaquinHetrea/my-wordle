import { Grid } from '@mui/material'
import Box from '@mui/material/Box'
import Row from './Row'

export default function Grilla ({ currentGuess, guesses, turn }) {
  console.log('guesses', guesses)

  return (
    <Box display='flex' sx={{ justifyContent: 'center' }}>
      <Box sx={{ maxWidth: 325 }}>
        <Grid sx={{ justifyContent: 'center' }} container rowSpacing={0.5} columnSpacing={0}>
          {guesses.map((guess, index) => {
            if (index === turn) {
              return (
                <Row key={index} currentGuess={currentGuess} />
              )
            } else {
              return (
                <Row key={index} guess={guess} />
              )
            }
          })}
        </Grid>
      </Box>
    </Box>

  )
}
