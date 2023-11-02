'use client'

import { LinkProps, Link as MuiLink } from '@mui/material'
import NextLink from 'next/link'
import { usePathname } from 'next/navigation'

export default function NavLink({ href, children, ...linkProps }: LinkProps) {
  const pathname = usePathname()
  const active = pathname === href

  return (
    <MuiLink
      {...linkProps}
      component={NextLink}
      href={href as string}
      variant='h6'
      sx={theme => {
        const secondaryColor = theme.palette.secondary.main
        return {
          textDecoration: active ? 'underline' : 'none',
          position: 'relative',
          backgroundImage: `linear-gradient(to right, ${secondaryColor}, ${secondaryColor} 50%, ${
            theme.palette.mode === 'light'
              ? theme.palette.common.black
              : theme.palette.common.white
          } 50% )`,
          backgroundSize: '200% 100%',
          backgroundPosition: '-100%',
          ' -webkit-background-clip': 'text',
          ' -webkit-text-fill-color': 'transparent',
          transition: 'all 0.3s ease-in-out',
          '&:hover': { backgroundPosition: 0 },
          [theme.breakpoints.up('lg')]: {
            '&::before': {
              display: 'block',
              position: 'absolute',
              height: 3,
              content: '""',
              left: 0,
              bottom: 0,
              background: secondaryColor,
              width: 0,
              transition: 'width 0.3s ease-in-out',
            },
            '&:hover::before': { width: '100%' },
          },
        }
      }}
    >
      {children}
    </MuiLink>
  )
}
