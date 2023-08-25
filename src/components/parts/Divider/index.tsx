import { Divider as MuiDivider } from '@mui/material'
import { styled } from '@mui/material/styles'

const Divider = () => {
  return <StyledMuiDivider />
}

export default Divider

const StyledMuiDivider = styled(MuiDivider)(({ theme }) => {
  return {
    borderColor: theme.palette.secondary.light,
    marginBottom: theme.spacing(2),
  }
})
