'use client'

import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'
import TextField from '@mui/material/TextField'
import type { Dispatch, SetStateAction, SyntheticEvent } from 'react'
import { useEffect, useState } from 'react'

import type { Item, SelectItem } from '@/components/parts/CheckBoxes'
import CheckBoxes from '@/components/parts/CheckBoxes'
import type { SkillQuery } from '@/components/templates/Skills'
import {
  backendSkills,
  DBSkills,
  frontendSkills,
  otherSkills,
  programmingSkills,
} from '@/constants/skills'

type Props = {
  title?: string
  onChangeTitle: (value: string | undefined) => void
  subtitle?: string
  onChangeSubtitle: (value: string | undefined) => void
  setQuery: Dispatch<SetStateAction<SkillQuery>>
}

type Skill = Item

const tabs = [
  { label: 'プログラミング言語', value: 0 },
  { label: 'フロントエンド', value: 1 },
  { label: 'バックエンド', value: 2 },
  { label: 'DB', value: 3 },
  { label: 'その他', value: 4 },
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

  const onOchangeMySkills = (props: SelectItem) => {
    const { item, checked } = props
    if (checked) {
      selectProgramngSkills(item)
    } else {
      unselectProgramingSkill(item)
    }
  }

  const handleChange = (_: SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  const panels = [
    { skills: programmingSkills },
    { skills: frontendSkills },
    { skills: backendSkills },
    { skills: DBSkills },
    { skills: otherSkills },
  ]

  return (
    <Box sx={{ width: '50%', pr: 1, mt: 2 }}>
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

        {panels.map(({ skills }, i) => {
          return (
            <CustomTabPanel key={i} value={value} index={i}>
              <CheckBoxes items={skills} onChange={onOchangeMySkills} />
            </CustomTabPanel>
          )
        })}
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
