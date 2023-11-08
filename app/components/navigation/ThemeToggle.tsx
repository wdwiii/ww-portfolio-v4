'use client'

import React, { useContext } from 'react'
import { ColorModeContext } from '../theme/ThemeRegistry'
import { Box, IconButton } from '@mui/material'
import { LightMode, DarkModeOutlined } from '@mui/icons-material'
import useThemeLogic from '@/app/hooks/useThemeLogic'

const ThemeToggle = () => {
  const { isLightTheme } = useThemeLogic()
  const { toggleColorMode } = useContext(ColorModeContext)

  return (
    <Box
      display='flex'
      justifyContent='flex-end'
      sx={{ ml: { xs: 0, md: 5 }, flex: { xs: 0, md: 1 } }}
    >
      <IconButton
        size='large'
        onClick={toggleColorMode}
        sx={theme => ({
          color: isLightTheme
            ? theme.palette.grey[800]
            : theme.palette.common.white,
          '&:hover': { color: theme.palette.secondary.main },
        })}
      >
        {isLightTheme ? (
          <DarkModeOutlined fontSize='large' />
        ) : (
          <LightMode fontSize='large' />
        )}
      </IconButton>
    </Box>
  )
}

export default ThemeToggle
