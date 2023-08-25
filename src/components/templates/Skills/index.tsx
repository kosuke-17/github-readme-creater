import Stack from '@mui/material/Stack'
import { styled } from '@mui/material/styles'
import type { ChangeEventHandler } from 'react'
import { useState } from 'react'

import SkillIconsPreview from '@/components/organisms/Skills/SkillIconsPreview'
import SkillIconsSelect from '@/components/organisms/Skills/SkillIconsSelect'

const Skills = () => {
  const [query] = useState({
    theme: 'light',
    perline: 8,
    i: ['ts', 'js', 'html'],
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

  const skillIconsUrl = `https://skillicons.dev/icons?theme=${
    query.theme
  }&perline=${query.perline}&i=${query.i.join(',')}`

  return (
    <SkillsLayout direction='row'>
      <SkillIconsSelect
        title={title}
        subtitle={subtitle}
        onChangeTitle={onChangeTitle}
        onChangeSubtitle={onChangeSubtitle}
      />

      <SkillIconsPreview
        skillIconsUrl={skillIconsUrl}
        title={title}
        subtitle={subtitle}
      />
    </SkillsLayout>
  )
}

export default Skills

const SkillsLayout = styled(Stack)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  paddingLeft: theme.spacing(3),
  paddingRight: theme.spacing(3),
}))
