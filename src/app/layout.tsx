'use client'

import { ThemeProvider } from '@emotion/react'
import CssBaseline from '@mui/material/CssBaseline'

import theme from '@/lib/theme'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <body>{children}</body>
      </ThemeProvider>
    </html>
  )
}
