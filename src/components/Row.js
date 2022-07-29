import { Grid } from '@mui/material'
import Item from './Item'

export default function Row ({ guess, currentGuess }) {
  if (currentGuess) {
    const currentGuessArray = [...currentGuess]
    const empty = 6 - currentGuessArray.length
    return (
      <>
        {currentGuessArray.map((guess, index) => (
          <Grid item xs={2} key={index}><Item variant='outlined' square elevation={0}>{guess}</Item></Grid>
        ))}

        {empty > 0 && Array(empty).fill().map((_, index) => (
          <Grid item xs={2} key={index}><Item variant='outlined' square elevation={0} /></Grid>
        ))}
      </>
    )
  } else if (guess) {
    return (
      <>
        {guess.map((value, index) => (
          <Grid item xs={2} key={index}>
            <Item variant='outlined' square elevation={0} color={value.color} an>{value.key}</Item>
          </Grid>
        ))}
      </>
    )
  } else {
    return (
      <>
        <Grid item xs={2}><Item variant='outlined' square elevation={0} /></Grid>
        <Grid item xs={2}><Item variant='outlined' square elevation={0} /></Grid>
        <Grid item xs={2}><Item variant='outlined' square elevation={0} /></Grid>
        <Grid item xs={2}><Item variant='outlined' square elevation={0} /></Grid>
        <Grid item xs={2}><Item variant='outlined' square elevation={0} /></Grid>
        <Grid item xs={2}><Item variant='outlined' square elevation={0} /></Grid>
      </>
    )
  }
}
