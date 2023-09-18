import { Typography } from '@mui/material'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import { useState } from 'react'

import StatsPreview from '@/components/organisms/Stats/StatsPreview'

const Stats = () => {
  const [userName, setUserName] = useState<string>()

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', m: 1 }}>
      <Paper elevation={3} sx={{ width: '90%', minHeight: '266px', p: 2 }}>
        <Typography variant='h4'>📈 Status</Typography>
        <Stack direction='row' sx={{ mt: 2 }}>
          <Box sx={{ minWidth: '20%' }}>
            <TextField
              label='Github User Name'
              variant='outlined'
              InputLabelProps={{
                shrink: true,
              }}
              onChange={(e) => setUserName(e.target.value)}
              value={userName}
            />
          </Box>

          <StatsPreview userName={userName} />
        </Stack>
      </Paper>
    </Box>
  )
}

export default Stats
