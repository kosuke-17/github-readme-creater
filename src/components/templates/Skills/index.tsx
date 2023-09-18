import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { useState } from 'react'

import SkillIconsPreview from '@/components/organisms/Skills/SkillIconsPreview'
import SkillIconsSelect from '@/components/organisms/Skills/SkillIconsSelect'

export type SkillQuery = {
  theme: string
  perline: number
  icons: string[]
}

const Skills = () => {
  const [query, setQuery] = useState<SkillQuery>({
    theme: 'light',
    perline: 8,
    icons: [],
  })
  const [title, setTitle] = useState<string | undefined>(undefined)
  const [subtitle, setSubitle] = useState<string | undefined>(undefined)

  const onChangeTitle = (value: string | undefined) => {
    if (!value) return

    setTitle(value)
  }
  const onChangeSubtitle = (value: string | undefined) => {
    if (!value) return

    setSubitle(value)
  }

  const skillIconsUrl = query.icons.length
    ? `https://skillicons.dev/icons?theme=${query.theme}&perline=${
        query.perline
      }&i=${query.icons.join(',')}`
    : ''

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', m: 1 }}>
      <Paper elevation={3} sx={{ width: '90%', p: 2 }}>
        <Typography variant='h4'>🍃 Skills</Typography>
        <Stack direction='row'>
          <SkillIconsSelect
            title={title}
            subtitle={subtitle}
            onChangeTitle={onChangeTitle}
            onChangeSubtitle={onChangeSubtitle}
            setQuery={setQuery}
          />

          <SkillIconsPreview
            skillIconsUrl={skillIconsUrl}
            title={title}
            subtitle={subtitle}
          />
        </Stack>
        {/* TODO */}
        {/* <Button variant='contained'>README 作成</Button> */}
      </Paper>
    </Box>
  )
}

export default Skills
