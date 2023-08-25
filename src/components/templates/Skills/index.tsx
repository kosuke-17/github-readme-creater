import Stack from '@mui/material/Stack'
import { styled } from '@mui/material/styles'

import SkillIconsPreview from '@/components/organisms/Skills/SkillIconsPreview'
import SkillIconsSelect from '@/components/organisms/Skills/SkillIconsSelect'

const Skills = () => {
  return (
    <SkillsLayout direction='row'>
      <SkillIconsSelect />

      <SkillIconsPreview />
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
