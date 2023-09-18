'use client'

import Box from '@mui/material/Box'
import FormControlLabel from '@mui/material/FormControlLabel'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import Switch from '@mui/material/Switch'
import Typography from '@mui/material/Typography'
import { useState } from 'react'

import CopyClipboard from '@/components/parts/CopyClipboard'
import Divider from '@/components/parts/Divider'

type Props = { skillIconsUrl: string; title?: string; subtitle?: string }

// TODO:レスポンシブ対応する
const SkillIconsPreview = ({ skillIconsUrl, title, subtitle }: Props) => {
  const [showCode, setShowCode] = useState(false)

  const onShowCode = () => {
    setShowCode((prev) => !prev)
  }

  return (
    <Box sx={{ width: '50%' }}>
      <Stack direction='row' spacing={1}>
        <Typography
          variant='h4'
          sx={{ color: 'primary.main', fontWeight: 'bold' }}
        >
          プレビュー
        </Typography>
        <FormControlLabel
          control={<Switch onChange={onShowCode} />}
          label='コードを見る'
        />

        <CopyClipboard
          text={`# ${title}\n\n### ${subtitle}\n\n<img src="${skillIconsUrl}" />`}
        />
      </Stack>
      <Paper
        elevation={2}
        sx={{
          backgroundColor: 'secondary.dark',
          py: 4,
          px: 4,
          display: 'flex',
          justifyContent: 'start',
          minHeight: '200px',
        }}
      >
        {showCode ? (
          <Box sx={{ flex: 1 }}>
            <SkillCodePreview
              title={title}
              subtitle={subtitle}
              skillIconsUrl={skillIconsUrl}
            />
          </Box>
        ) : (
          <Box sx={{ flex: 1 }}>
            {/* react-markdownに対応 */}
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
              {skillIconsUrl && <img alt='my skills' src={skillIconsUrl} />}
            </Box>
          </Box>
        )}
      </Paper>
      <Box />
    </Box>
  )
}

export default SkillIconsPreview

const SkillCodePreview = ({
  title,
  subtitle,
  skillIconsUrl,
}: {
  title?: string
  subtitle?: string
  skillIconsUrl: string
}) => {
  return (
    <code style={{ color: 'white', wordBreak: 'break-all' }}>
      以下をコピペしてください
      <br />
      ---------------------------
      <br /># {title}
      <br />
      ### {subtitle}
      <br />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      &lt;img src=&#39;{skillIconsUrl}&#39; /&gt;
      <br />
      ---------------------------
    </code>
  )
}
