import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'

const Header = () => {
  return (
    <HeaderLayout>
      <HeaderTitle>Github README CREATER</HeaderTitle>
    </HeaderLayout>
  )
}

export default Header

const HeaderLayout = styled(Box)(({ theme }) => ({
  height: 80,
  display: 'flex',
  alignItems: 'center',
  paddingLeft: theme.spacing(2),
}))

const HeaderTitle = styled(Box)(({ theme }) => ({
  fontSize: 32,
  fontWeight: 'Bold',
  color: theme.palette.primary.main,
}))
