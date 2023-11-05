import React from 'react'
import { Stack, Paper } from '@mui/material'
import MobileNavLogo from './MobileNavLogo'
import MobileNavMenu from './MobileNavMenu'
import useThemeLogic from '@/app/hooks/useThemeLogic'
import ThemeToggle from './ThemeToggle'

const MobileNavigation = () => {
  const { theme, isLightTheme } = useThemeLogic()
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
        display: { md: 'none' },
      }}
    >
      <MobileNavLogo
        height={38}
        src={`/assets/${
          isLightTheme ? 'secondary-logo' : 'secondary-logo-alt'
        }.png`}
      />
      <MobileNavMenu />
      <ThemeToggle />
    </Stack>
  )
}

export default MobileNavigation
