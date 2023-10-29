import React from 'react'
import { Container, Box, Divider, Stack, Typography, Link } from '@mui/material'
import NextLink from 'next/link'
const Footer = () => {
  return (
    <Box sx={{ background: 'white' }}>
      <Divider />
      <Container maxWidth='xl'>
        <Stack
          direction='row'
          justifyContent='space-between'
          sx={{ pt: 3, pb: 2 }}
        >
          <Stack direction='row' alignItems='center' spacing={3}>
            <Link component={NextLink} href='/about'>
              About
            </Link>
            <Link component={NextLink} href='/projects'>
              Projects
            </Link>
            <Link component={NextLink} href='/contact'>
              Contact
            </Link>
          </Stack>
          <Typography>
            Powered by Next.js / Developed by Willie Whitfield 2023
          </Typography>
        </Stack>
      </Container>
    </Box>
  )
}

export default Footer
