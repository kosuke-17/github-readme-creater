import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'

import Divider from '@/components/parts/Divider'

// TODO:レスポンシブ対応する
const SkillIconsPreview = () => {
  return (
    <Box sx={{ width: '40%' }}>
      <Typography variant='h4'>プレビュー</Typography>
      <Paper
        elevation={2}
        sx={{
          backgroundColor: 'secondary.dark',
          py: 4,
          px: 8,
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Box>
          {/* react-markdownに対応する */}
          <Typography variant='h5' sx={{ color: 'common.white' }}>
            Skills
          </Typography>

          <Divider />

          <Typography variant='body2' sx={{ color: 'common.white' }}>
            Subtitles
          </Typography>

          <Box sx={{ mt: 1 }}>
            {/* TODO: next/imageに置き換え */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt='my skills'
              src='https://skillicons.dev/icons?theme=light&perline=8&i=ts,js,html,css,nodejs,react,nextjs,nestjs,redux,prisma,aws,materialui,jest,git,github,figma,vscode'
            />
          </Box>
        </Box>
      </Paper>
    </Box>
  )
}

export default SkillIconsPreview
