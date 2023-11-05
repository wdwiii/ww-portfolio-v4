'use client'
import {
  CssBaseline,
  Theme,
  ThemeOptions,
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from '@mui/material'
import { Expletus_Sans, Hind, Roboto } from 'next/font/google'
import React, { createContext, useMemo, useState } from 'react'

import { NextAppDirEmotionCacheProvider } from './EmotionCache'

const roboto = Roboto({
  weight: ['300', '400', '700'],
  style: ['italic', 'normal'],
  subsets: ['latin'],
})

const expletusSans = Expletus_Sans({ weight: '400', subsets: ['latin'] })

const hind = Hind({ weight: '400', subsets: ['latin'] })

export const ColorModeContext = createContext({ toggleColorMode: () => {} })
export default function ThemeRegistry({
  children,
}: {
  children: React.ReactNode
}) {
  const [mode, setMode] = useState<'light' | 'dark'>('dark')
  const colorMode = React.useMemo(
    () => ({
      // The dark mode switch would invoke this method
      toggleColorMode: () => {
        setMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'))
      },
    }),
    []
  )
  let newTheme: Theme = useMemo(() => {
    let theme = createTheme({
      palette: {
        primary: { main: '#0E343E' },
        secondary: { main: '#F9BE4A' },
      },
    })
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
        mode,
        ...(mode === 'light'
          ? {
              primary: { main: '#0E343E' },
              secondary: { main: '#F9BE4A' },
              background: { default: theme.palette.common.white },
            }
          : {
              primary: { main: '#0E343E' },
              secondary: { main: '#F9BE4A' },
              background: { default: theme.palette.grey[900] },
            }),
        text: {
          ...(mode === 'light'
            ? { primary: theme.palette.common.black }
            : { primary: theme.palette.common.white }),
        },
      },
    }
    theme = createTheme(themeOptions)
    theme = responsiveFontSizes(theme)
    return theme
  }, [mode])

  return (
    <NextAppDirEmotionCacheProvider options={{ key: 'mui' }}>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={newTheme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </ColorModeContext.Provider>
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
