'use client'
import { Box, BoxProps } from '@mui/material'
import Navigation from './Navigation'
import MobileNavigation from './MobileNavigation'

export default function NavBar(props: BoxProps) {
  return (
    <Box {...props} width='100%' maxWidth={1700}>
      <Navigation />
      <MobileNavigation />
    </Box>
  )
}
