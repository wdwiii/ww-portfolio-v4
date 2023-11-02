'use client'
import { Brightness4Outlined } from '@mui/icons-material'
import {
  Box,
  BoxProps,
  IconButton,
  Paper,
  Stack,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import { useContext } from 'react'
import { ColorModeContext } from '../theme/ThemeRegistry'
import MobileNavLogo from './MobileNavLogo'
import MobileNavMenu from './MobileNavMenu'
import NavLogo from './NavLogo'
import NavMenu from './NavMenu'

export default function NavBar(props: BoxProps) {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up('lg'))
  const isLightTheme = theme.palette.mode === 'light'
  const { toggleColorMode } = useContext(ColorModeContext)

  return (
    <Box {...props} width='100%' maxWidth={1700}>
      <Stack
        direction='row'
        alignItems={'center'}
        component={Paper}
        sx={theme => ({
          background: isLightTheme
            ? theme.palette.common.white
            : theme.palette.grey[800],
          width: '100%',
          maxWidth: 1800,
          px: 10,
          py: 1,
          borderRadius: 50,
        })}
      >
        {matches ? (
          <>
            <NavLogo
              height={30}
              src={`/assets/${isLightTheme ? 'logo' : 'logo-alt'}.png`}
            />
            <NavMenu />
          </>
        ) : (
          <>
            <MobileNavLogo
              height={30}
              src={`/assets/${
                isLightTheme ? 'secondary-logo' : 'secondary-logo-alt'
              }.png`}
            />
            <MobileNavMenu />
          </>
        )}
        <Box
          flex={matches ? 1 : 0}
          display='flex'
          justifyContent='flex-end'
          marginLeft={matches ? 0 : 5}
        >
          <IconButton
            onClick={toggleColorMode}
            sx={theme => ({
              color: isLightTheme
                ? theme.palette.grey[800]
                : theme.palette.common.white,
              '&:hover': { color: theme.palette.secondary.main },
            })}
          >
            <Brightness4Outlined />
          </IconButton>
        </Box>
      </Stack>
    </Box>
  )
}
