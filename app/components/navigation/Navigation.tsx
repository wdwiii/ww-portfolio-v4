'use client'

import React from 'react'
import { Stack, Paper } from '@mui/material'
import NavMenu from './NavMenu'
import NavLogo from './NavLogo'
import ThemeToggle from './ThemeToggle'
import useThemeLogic from '@/app/hooks/useThemeLogic'

const Navigation = () => {
  const { isLightTheme, theme } = useThemeLogic()
  return (
    <Stack
      direction='row'
      alignItems={'center'}
      component={Paper}
      sx={{
        background: isLightTheme
          ? theme.palette.common.white
          : theme.palette.grey[800],
        width: '100%',
        maxWidth: 1800,
        px: 10,
        py: 1,
        borderRadius: 50,
        display: { xs: 'none', md: 'flex' },
      }}
    >
      <NavLogo
        height={38}
        src={`/assets/${isLightTheme ? 'logo' : 'logo-alt'}.png`}
      />
      <NavMenu />
      <ThemeToggle />
    </Stack>
  )
}

export default Navigation
