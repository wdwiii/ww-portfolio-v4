import { Container, Stack } from '@mui/material'
import NavLink from '../shared/NavLink'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

export default function NavBar() {
  return (
    <Container maxWidth='lg'>
      <Stack direction='row' my={2}>
        <Link href='/' style={{ marginRight: 'auto' }}>
          <Image
            src='/assets/grayscale-logo.png'
            alt='logo'
            width={175}
            height={35}
          />
        </Link>
        <Stack direction='row' spacing={2}>
          <NavLink href='/about'>About</NavLink>
          <NavLink href='/projects'>Projects</NavLink>
          <NavLink href='/contact'>Contact</NavLink>
        </Stack>
      </Stack>
    </Container>
  )
}
