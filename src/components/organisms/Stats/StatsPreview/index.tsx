import Box from '@mui/material/Box'
import FormControlLabel from '@mui/material/FormControlLabel'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import Switch from '@mui/material/Switch'
import { useState } from 'react'

import CopyClipboard from '@/components/parts/CopyClipboard'

type Props = { userName?: string }

const StatsPreview = ({ userName }: Props) => {
  const [showCode, setShowCode] = useState(false)

  const onShowCode = () => {
    setShowCode((prev) => !prev)
  }
  return (
    <Box sx={{ minWidth: '60%' }}>
      <Stack direction='row' spacing={1}>
        <FormControlLabel
          control={<Switch onChange={onShowCode} />}
          label='コードを見る'
        />

        <CopyClipboard
          text={`<img src="https://github-readme-stats.vercel.app/api/top-langs?username=${userName}&show_icons=true&locale=en&layout=compact" height='150px' />\n\n<img src="https://github-readme-stats.vercel.app/api?username=${userName}&show_icons=true&locale=en" height='150px' />`}
        />
      </Stack>
      <Paper
        elevation={2}
        sx={{
          backgroundColor: 'secondary.dark',
          height: '200px',
          px: 2,
          py: 3,
        }}
      >
        {userName && (
          <>
            {showCode ? (
              <Box sx={{ flex: 1 }}>
                <StatsCodePreview userName={userName} />
              </Box>
            ) : (
              <Box>
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
          </>
        )}
      </Paper>
    </Box>
  )
}

export default StatsPreview

const StatsCodePreview = ({ userName }: { userName: string }) => {
  return (
    <code style={{ color: 'white', wordBreak: 'break-all' }}>
      以下をコピペしてください
      <br />
      ---------------------------
      <br />
      &lt;img src=&#39;
      {`https://github-readme-stats.vercel.app/api/top-langs?username=${userName}&show_icons=true&locale=en&layout=compact`}
      &#39; height=&#39;150px&#39; /&gt;
      <br />
      &lt;img src=&#39;
      {`https://github-readme-stats.vercel.app/api?username=${userName}&show_icons=true&locale=en`}
      &#39; height=&#39;150px&#39; /&gt;
      <br />
      ---------------------------
    </code>
  )
}
