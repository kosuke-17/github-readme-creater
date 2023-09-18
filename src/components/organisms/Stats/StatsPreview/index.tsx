import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'

type Props = { userName?: string }

const StatsPreview = ({ userName }: Props) => {
  return (
    <Paper elevation={2} sx={{ width: '60%', height: '200px', px: 2, py: 3 }}>
      {userName && (
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
    </Paper>
  )
}

export default StatsPreview
