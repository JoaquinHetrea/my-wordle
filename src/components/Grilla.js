import { Grid } from '@mui/material'
import Box from '@mui/material/Box'
import Row from './Row'

export default function Grilla ({ currentGuess, guesses, turn }) {
  console.log('guesses', guesses)

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid sx={{ justifyContent: 'center' }} container rowSpacing={2} columnSpacing={0}>
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
  )
}
