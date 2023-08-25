'use client'

import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'

import Divider from '@/components/parts/Divider'

type Props = { skillIconsUrl: string; title?: string; subtitle?: string }

// TODO:レスポンシブ対応する
const SkillIconsPreview = ({ skillIconsUrl, title, subtitle }: Props) => {
  return (
    <Box sx={{ maxWidth: '50%', minWidth: '40%' }}>
      <Typography
        variant='h4'
        sx={{ color: 'primary.main', fontWeight: 'bold' }}
      >
        プレビュー
      </Typography>
      <Paper
        elevation={2}
        sx={{
          backgroundColor: 'secondary.dark',
          py: 4,
          px: 8,
          display: 'flex',
          justifyContent: 'start',
        }}
      >
        <Box sx={{ flex: 1 }}>
          {/* react-markdownに対応する */}
          <Typography variant='h5' sx={{ color: 'common.white' }}>
            {title ? title : 'Skills'}
          </Typography>

          <Divider />

          <Typography variant='body2' sx={{ color: 'common.white' }}>
            {subtitle ? subtitle : 'Subtitle'}
          </Typography>

          <Box sx={{ mt: 1 }}>
            {/* TODO: next/imageに置き換え */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img alt='my skills' src={skillIconsUrl} />
          </Box>
        </Box>
      </Paper>
    </Box>
  )
}

export default SkillIconsPreview
