import Stack from '@mui/material/Stack'
import { styled } from '@mui/material/styles'
import { Fragment, useState } from 'react'

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
    <Fragment>
      <SkillsLayout direction='row'>
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
      </SkillsLayout>
      {/* TODO */}
      {/* <Button variant='contained'>README 作成</Button> */}
    </Fragment>
  )
}

export default Skills

const SkillsLayout = styled(Stack)(() => ({
  display: 'flex',
  justifyContent: 'center',
}))
