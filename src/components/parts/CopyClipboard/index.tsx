import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import type { AlertColor, AlertProps } from '@mui/material/Alert'
import MuiAlert from '@mui/material/Alert'
import IconButton from '@mui/material/IconButton'
import Snackbar from '@mui/material/Snackbar'
import Tooltip from '@mui/material/Tooltip'
import type { SyntheticEvent } from 'react'
import { forwardRef, useState } from 'react'

const Alert = forwardRef<HTMLDivElement, AlertProps>(
  function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />
  },
)

const initialSnackbar = { value: false, severity: 'info' } as const

const CopyClipboard = ({ text }: { text: string }) => {
  const [open, setOpen] = useState<{ value: boolean; severity: AlertColor }>(
    initialSnackbar,
  )

  const openSnackBar = ({ severity }: { severity: AlertColor }) => {
    setOpen({ value: true, severity })
  }

  const handleClose = (_: SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return
    }

    setOpen(initialSnackbar)
  }

  const copyCodeToClipboard = async (code: string) => {
    if (!navigator?.clipboard) {
      alert('コピーできませんでした。')
      return
    }

    try {
      await global.navigator.clipboard.writeText(code)
      openSnackBar({ severity: 'info' })
    } catch {
      openSnackBar({ severity: 'error' })
    }
  }

  return (
    <>
      <IconButton>
        <Tooltip title='コードをコピー' placement='top'>
          <ContentCopyIcon onClick={() => copyCodeToClipboard(text)} />
        </Tooltip>
      </IconButton>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={open.value}
        autoHideDuration={2000}
        onClose={handleClose}
      >
        <Alert
          onClose={handleClose}
          severity={open.severity}
          sx={{ width: '100%' }}
        >
          コードをコピーしました！
        </Alert>
      </Snackbar>
    </>
  )
}

export default CopyClipboard
