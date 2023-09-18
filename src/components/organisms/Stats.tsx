import { Typography } from '@mui/material'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import { styled } from '@mui/material/styles'
import TextField from '@mui/material/TextField'
import { useState } from 'react'

const Stats = () => {
  const [userName, setUserName] = useState<string>()

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', m: 1 }}>
      <Paper elevation={3} sx={{ width: '90%', height: '266px', px: 2, py: 3 }}>
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

          {userName && (
            <Box sx={{ minWidth: '60%' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`https://github-readme-stats.vercel.app/api/top-langs?username=${userName}&show_icons=true&locale=en&layout=compact`}
                height='150px'
                alt={userName}
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`https://github-readme-stats.vercel.app/api?username=${userName}&show_icons=true&locale=en`}
                height='150px'
                alt={userName}
              />
            </Box>
          )}
        </Stack>
      </Paper>
    </Box>
  )
}

export default Stats

const StatsLayout = styled(Stack)(() => ({
  display: 'flex',
  justifyContent: 'center',
}))
