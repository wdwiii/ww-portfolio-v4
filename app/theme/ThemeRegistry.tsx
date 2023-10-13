'use client'
import React from 'react'
import {
  ThemeProvider,
  ThemeOptions,
  createTheme,
  CssBaseline,
  Theme,
} from '@mui/material'
import { Roboto } from 'next/font/google'
import { NextAppDirEmotionCacheProvider } from './EmotionCache'

const roboto = Roboto({
  weight: ['300', '400', '700'],
  style: ['italic', 'normal'],
  subsets: ['latin'],
})

const themeOptions: ThemeOptions = {
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
}
const theme: Theme = createTheme(themeOptions)

export default function ThemeRegistry({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <NextAppDirEmotionCacheProvider options={{ key: 'mui' }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </NextAppDirEmotionCacheProvider>
  )
}
