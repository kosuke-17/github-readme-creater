import { Button } from '@mui/material'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'

type Props = {
  title?: string
  onChangeTitle: (value: string | undefined) => void
  subtitle?: string
  onChangeSubtitle: (value: string | undefined) => void
}

const SkillIconsSelect = (props: Props) => {
  const { title, subtitle, onChangeTitle, onChangeSubtitle } = props
  return (
    <Box sx={{ width: '50%' }}>
      <Box sx={{ mb: 1 }}>
        <TextField
          label='Skills'
          variant='outlined'
          onChange={(e) => onChangeTitle(e.target.value)}
          value={title}
        />
      </Box>
      <Box sx={{ mb: 1 }}>
        <TextField
          multiline
          label='Subtitle'
          variant='outlined'
          onChange={(e) => onChangeSubtitle(e.target.value)}
          value={subtitle}
        />
      </Box>
      <Button variant='contained'>README 作成</Button>
    </Box>
  )
}

export default SkillIconsSelect
