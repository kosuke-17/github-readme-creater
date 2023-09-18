'use client'

import Box from '@mui/material/Box'

import Header from '@/components/organisms/Header'
import Stats from '@/components/organisms/Stats'
import Divider from '@/components/parts/Divider'
import Skills from '@/components/templates/Skills'

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
