'use client'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormGroup from '@mui/material/FormGroup'
import Paper from '@mui/material/Paper'
import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import type { SyntheticEvent } from 'react'
import { useState } from 'react'

type Props = {
  title?: string
  onChangeTitle: (value: string | undefined) => void
  subtitle?: string
  onChangeSubtitle: (value: string | undefined) => void
}

const SkillIconsSelect = (props: Props) => {
  const { title, subtitle, onChangeTitle, onChangeSubtitle } = props

  const [value, setValue] = useState(0)

  const handleChange = (_: SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  const tabs = [
    { label: 'プログラミング言語', value: 0 },
    { label: 'フロントエンド', value: 1 },
    { label: 'バックエンド', value: 2 },
    { label: 'DB', value: 3 },
    { label: 'その他', value: 4 },
  ]

  return (
    <Box sx={{ width: '50%', px: 2 }}>
      <Box sx={{ mb: 1 }}>
        <TextField
          label='Skills'
          variant='outlined'
          InputLabelProps={{
            shrink: true,
          }}
          onChange={(e) => onChangeTitle(e.target.value)}
          value={title}
        />
      </Box>
      <Box sx={{ mb: 1 }}>
        <TextField
          multiline
          label='Subtitle'
          InputLabelProps={{
            shrink: true,
          }}
          variant='outlined'
          onChange={(e) => onChangeSubtitle(e.target.value)}
          value={subtitle}
        />
      </Box>

      <Paper sx={{ mb: 1, py: 1 }}>
        <Tabs
          value={value}
          variant='scrollable'
          onChange={handleChange}
          aria-label='basic tabs example'
        >
          {tabs.map((t) => (
            <Tab key={t.label} label={t.label} value={t.value} />
          ))}
        </Tabs>
        <CustomTabPanel value={value} index={0}>
          <CustomFormGroup />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          Next.js,React
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          Ruby onRails,FastApi,Django
        </CustomTabPanel>
        <CustomTabPanel value={value} index={3}>
          MySQL,Postgres,MongoDB
        </CustomTabPanel>
        <CustomTabPanel value={value} index={4}>
          Git,Github
        </CustomTabPanel>
      </Paper>
      <Button variant='contained'>README 作成</Button>
    </Box>
  )
}

export default SkillIconsSelect

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`panel-${index}`}
      aria-labelledby={`panel-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  )
}

const CustomFormGroup = () => {
  const programmingSkills = [
    { label: 'TypeScript', value: 'ts' },
    { label: 'Javascript', value: 'js' },
    { label: 'Python', value: 'py' },
    { label: 'Java', value: 'java' },
  ]
  return (
    <FormGroup>
      {programmingSkills.map((ps) => (
        <FormControlLabel
          control={<Checkbox />}
          key={ps.label}
          label={ps.label}
        />
      ))}
    </FormGroup>
  )
}
