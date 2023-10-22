'use client'

import { Brightness4Outlined } from '@mui/icons-material'
import {
  Box,
  Container,
  ContainerProps,
  IconButton,
  Stack,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import MobileNavLogo from './MobileNavLogo'
import MobileNavMenu from './MobileNavMenu'
import NavLogo from './NavLogo'
import NavMenu from './NavMenu'

export default function NavBar(props: ContainerProps) {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up('lg'))

  return (
    <Container maxWidth='xl' {...props}>
      <Stack
        direction='row'
        alignItems={'center'}
        sx={{
          background: '#fff',
          boxShadow: '5px 5px 10px hsla(0, 0%, 0%, 0.25)',
          width: '100%',
          maxWidth: 1800,
          px: 10,
          py: 1,
          borderRadius: 50,
        }}
      >
        {matches ? (
          <>
            <NavLogo height={30} src='/assets/color-logo.png' />
            <NavMenu />
          </>
        ) : (
          <>
            <MobileNavLogo height={30} src='/assets/secondary-logo-color.png' />
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
            sx={theme => ({
              color: 'hsla(0, 0%, 0%, 0.54)',
              '&:hover': { color: theme.palette.secondary.main },
            })}
          >
            <Brightness4Outlined />
          </IconButton>
        </Box>
      </Stack>
    </Container>
  )
}
