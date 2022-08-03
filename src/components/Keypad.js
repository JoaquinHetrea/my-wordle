import { Button, Grid, IconButton, ThemeProvider, Box } from '@mui/material'
import { useEffect, useState } from 'react'
import { createTheme } from '@mui/material/styles'
import { grey } from '@mui/material/colors'
import keys from '../data/keys'
import colors from '../data/colors'

import BackspaceOutlinedIcon from '@mui/icons-material/BackspaceOutlined'

const theme = createTheme({
  palette: {
    primary: {
      light: grey[200],
      main: grey[400],
      dark: grey[300],
      contrastText: '#000'
    },
    secondary: {
      main: '#000'
    },
    green: {
      main: colors.green
    },
    yellow: {
      main: colors.yellow
    },
    grey: {
      main: colors.grey
    }
  },
  typography: {
    fontSize: 12,
    fontWeight: 'bold',
    button: {
      color: '#FFF'
    }
  }
})

export default function Keypad ({ handleKeyUp, usedKeys }) {
  const [letters, setLetters] = useState(null)

  useEffect(() => {
    setLetters(keys)
  }, [])
  return (
    <Box display='flex' sx={{ justifyContent: 'center', margin: 5, alignSelf: 'flex-end' }}>
      <Box>
        <ThemeProvider theme={theme}>
          <Grid container columnSpacing={0.5} rowSpacing={0.75} sx={{ maxWidth: 400 }}>
            {letters && letters.map((letter) => {
              if (letter.key === 'Backspace') {
                return (
                  <Grid
                    item
                    xs={1.8}
                    key={letter.key}
                  >
                    <IconButton
                      variant='contained'
                      sx={{
                        height: 48,
                        maxWidth: 48,
                        minWidth: 48,
                        fontWeight: 'bold',
                        boxShadow: 0,
                        borderRadius: 1,
                        backgroundColor: '#bdbdbd'
                      }}
                      onClick={() => { handleKeyUp({ key: letter.key }) }}
                    >
                      <BackspaceOutlinedIcon color='secondary' />
                    </IconButton>
                  </Grid>
                )
              } else {
                return (
                  <Grid
                    item
                    xs={letter.key === 'Enter' ? 1.8 : 1.2}
                    key={letter.key}
                  >
                    <Button
                      variant='contained'
                      color={usedKeys[letter.key] !== undefined ? usedKeys[letter.key] : 'primary'}
                      sx={{
                        height: 48,
                        maxWidth: letter.key === 'Enter' ? 48 : 32,
                        minWidth: letter.key === 'Enter' ? 48 : 32,
                        fontWeight: 'bold',
                        boxShadow: 0,
                        color: usedKeys[letter.key] ? '#FFF' : '#000'
                      }}
                      onClick={() => { handleKeyUp({ key: letter.key }) }}
                    >
                      {letter.key}
                    </Button>
                  </Grid>
                )
              }
            })}
          </Grid>
        </ThemeProvider>
      </Box>
    </Box>
  )
}
