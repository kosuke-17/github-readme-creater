'use client'

import Box from '@mui/material/Box'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormGroup from '@mui/material/FormGroup'
import Paper from '@mui/material/Paper'
import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'
import TextField from '@mui/material/TextField'
import type { Dispatch, SetStateAction, SyntheticEvent } from 'react'
import { useEffect, useState } from 'react'

import type { SkillQuery } from '@/components/templates/Skills'

type Props = {
  title?: string
  onChangeTitle: (value: string | undefined) => void
  subtitle?: string
  onChangeSubtitle: (value: string | undefined) => void
  setQuery: Dispatch<SetStateAction<SkillQuery>>
}

type Skill = { label: string; value: string }
type SelectSkill = { skill: Skill; checked: boolean }

const tabs = [
  { label: 'プログラミング言語', value: 0 },
  { label: 'フロントエンド', value: 1 },
  { label: 'バックエンド', value: 2 },
  { label: 'DB', value: 3 },
  { label: 'その他', value: 4 },
]

const programmingSkills = [
  { label: 'TypeScript', value: 'ts' },
  { label: 'Javascript', value: 'js' },
  { label: 'Python', value: 'py' },
  { label: 'Java', value: 'java' },
  { label: 'PHP', value: 'php' },
]

const SkillIconsSelect = (props: Props) => {
  const { title, subtitle, onChangeTitle, onChangeSubtitle, setQuery } = props

  const [value, setValue] = useState(0)

  const [selectedSkills, setSelectedSkills] = useState<Skill[]>([])

  const selectProgramngSkills = (skill: Skill) => {
    setSelectedSkills((prev) => [...prev, skill])
  }
  const unselectProgramingSkill = (skill: Skill) => {
    setSelectedSkills((prev) => prev.filter((p) => p.label !== skill.label))
  }

  useEffect(() => {
    const selectedSkillValues = selectedSkills.map((s) => s.value)
    setQuery((prev) => ({ ...prev, icons: selectedSkillValues }))
  }, [selectedSkills, setQuery])

  const onOchangeProgrammingSkills = (props: SelectSkill) => {
    const { skill, checked } = props
    if (checked) {
      selectProgramngSkills(skill)
    } else {
      unselectProgramingSkill(skill)
    }
  }

  const handleChange = (_: SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <Box sx={{ width: '40%', px: 2 }}>
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
          <CustomFormGroup
            skills={programmingSkills}
            onChange={onOchangeProgrammingSkills}
          />
        </CustomTabPanel>
        {/* TODO */}
        {/* <CustomTabPanel value={value} index={1}>
          <CustomFormGroup
            skills={frontendSkills}
            onChange={onSelectFrontendSkills}
          />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <CustomFormGroup
            skills={backendSkills}
            onChange={onSelectBackendSkills}
          />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={3}>
          <CustomFormGroup skills={DBSkills} onChange={onSelectDBSkills} />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={4}>
          <CustomFormGroup
            skills={otherSkills}
            onChange={onSelectOtherSkills}
          />
        </CustomTabPanel> */}
      </Paper>
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

const CustomFormGroup = (props: {
  skills: Skill[]
  onChange: (props: SelectSkill) => void
}) => {
  const { skills, onChange } = props
  return (
    <FormGroup>
      {skills.map((skill) => (
        <FormControlLabel
          control={<Checkbox />}
          key={skill.label}
          label={skill.label}
          value={skill.value}
          onChange={(_, checked) => onChange({ skill, checked })}
        />
      ))}
    </FormGroup>
  )
}
