'use client'
import React from 'react'
import {
  ThemeProvider,
  ThemeOptions,
  createTheme,
  CssBaseline,
  Theme,
  responsiveFontSizes,
} from '@mui/material'
import { blueGrey } from '@mui/material/colors'
import { Roboto, Allura, Expletus_Sans, Hind } from 'next/font/google'

import { NextAppDirEmotionCacheProvider } from './EmotionCache'

const roboto = Roboto({
  weight: ['300', '400', '700'],
  style: ['italic', 'normal'],
  subsets: ['latin'],
})

const expletusSans = Expletus_Sans({ weight: '400', subsets: ['latin'] })

const hind = Hind({ weight: '400', subsets: ['latin'] })

let theme: Theme = createTheme()

const themeOptions: ThemeOptions = {
  typography: {
    fontFamily: [hind.style.fontFamily].join(', '),
    display1: {
      fontFamily: expletusSans.style.fontFamily,
      fontSize: theme.typography.h2.fontSize,
      [theme.breakpoints.down('sm')]: {
        fontSize: theme.typography.h3.fontSize,
        lineHeight: '3.5rem',
      },
    },
    display2: {
      fontFamily: expletusSans.style.fontFamily,
      fontSize: theme.typography.h4.fontSize,
      [theme.breakpoints.down('sm')]: {
        fontSize: theme.typography.h5.fontSize,
        lineHeight: '3.5rem',
      },
    },
    h2: { fontWeight: 100 },
  },
  palette: {
    primary: { main: '#0E343E' },
    secondary: { main: '#F9BE4A' },
    background: { default: 'f7f7f7' },

    // text: { primary: blueGrey[50] },
  },
}

theme = createTheme(themeOptions)

theme = responsiveFontSizes(theme)

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

declare module '@mui/material/styles' {
  interface TypographyVariants {
    display1: React.CSSProperties
    display2: React.CSSProperties
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    display1?: React.CSSProperties
    display2?: React.CSSProperties
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    display1: true
    display2: true
  }
}
