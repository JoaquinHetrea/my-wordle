import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import DialogTitle from '@mui/material/DialogTitle'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'

export default function Modal ({ open, turn, setOpen, isCorrect, solution }) {
  return (
    <Dialog
      open={open}
      onClose={() => setOpen(false)}
      PaperProps={{ sx: { width: '70%', height: '20%' } }}
    >
      <Box>
        {isCorrect && (
          <>
            <DialogTitle sx={{ color: 'green' }}>¡Ganaste!</DialogTitle>
            <Divider />
            <DialogContent>
              <DialogContentText><b>Solución: </b>{solution}</DialogContentText>
              <DialogContentText>Encontrar la solución te llevó {turn} turno/s</DialogContentText>
            </DialogContent>
          </>
        )}
        {!isCorrect && (
          <>
            <DialogTitle sx={{ color: 'red' }}>Perdiste</DialogTitle>
            <Divider />
            <DialogContent>
              <DialogContentText><b>Solución: </b>{solution}</DialogContentText>
              <DialogContentText>Suerte para la próxima</DialogContentText>
            </DialogContent>
          </>
        )}
      </Box>
    </Dialog>
  )
}
