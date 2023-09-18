'use client'

import Box from '@mui/material/Box'

import Header from '@/components/organisms/Header'
import Divider from '@/components/parts/Divider'
import Skills from '@/components/templates/Skills'
import Stats from '@/components/templates/Stats'

export default function Home() {
  return (
    <Box sx={{ width: '100%' }}>
      <Header />
      <Divider />

      <Skills />
      <Stats />
    </Box>
  )
}
