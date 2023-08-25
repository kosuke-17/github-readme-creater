import type { Theme } from '@mui/material/styles'
import { createTheme } from '@mui/material/styles'

import { palette } from './palette'

const theme: Theme = createTheme({
  palette,
})

export default theme
