import { styled } from '@mui/material/styles'
import Paper from '@mui/material/Paper'

const Item = styled(Paper)(({ color, theme }) => ({
  backgroundColor: color,
  ...theme.typography.body2,
  margin: 0,
  padding: theme.spacing(1),
  textAlign: 'center',
  fontSize: 25,
  color: theme.palette.text.secondary,
  height: 32,
  width: 32,
  textTransform: 'uppercase',
  fontWeight: 'bold',
  lineHeight: '32px'
}))

export default Item
