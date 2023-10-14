'use client'

import React from 'react'
import NextLink from 'next/link'
import { Link as MuiLink, LinkProps } from '@mui/material'
import { usePathname } from 'next/navigation'

export default function NavLink({ href, children, ...linkProps }: LinkProps) {
  const pathname = usePathname()
  const active = pathname === href

  return (
    <MuiLink
      {...linkProps}
      component={NextLink}
      href={href as string}
      variant='h5'
      sx={{
        color: 'inherit',
        textDecoration: active ? 'underline' : 'none',
        '&:hover': { color: 'inherit' },
      }}
    >
      {children}
    </MuiLink>
  )
}
