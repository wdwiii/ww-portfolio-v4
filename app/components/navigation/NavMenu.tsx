import React from 'react'
import { Stack } from '@mui/material'
import NavLink from './NavLink'

export default function NavMenu() {
  return (
    <Stack
      direction='row'
      justifyContent='center'
      alignItems='center'
      spacing={5}
      flex={1}
    >
      <NavLink href='/about'>About</NavLink>
      <NavLink href='/projects'>Projects</NavLink>
      <NavLink href='/contact'>Contact</NavLink>
    </Stack>
  )
}
