'use client'
import {
  Box,
  Divider,
  Link,
  Paper,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import NextLink from 'next/link'
import MobileNavLogo from '../navigation/MobileNavLogo'
import NavLogo from '../navigation/NavLogo'
import Container from './Container'
const FooterMenuStack = ({
  header,
  children,
}: {
  header: string
  children: React.ReactNode
}) => (
  <Box>
    <Typography sx={{ fontWeight: 600, display: { md: 'none' }, mb: 1 }}>
      {header}
    </Typography>
    <Stack
      sx={{
        flexDirection: { xs: 'column', md: 'row' },
        textAlign: 'center',
        gap: { xs: 1, md: 3 },
      }}
    >
      {children}
    </Stack>
  </Box>
)

const Footer = () => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up('md'))

  const isLightTheme = theme.palette.mode === 'light'
  return (
    <Container component={Paper} sx={{ pb: 2 }}>
      <Divider />
      <Box
        mt={3}
        sx={{ mb: { xs: 3, sm: 2 } }}
        display={'flex'}
        justifyContent={'center'}
      >
        <Typography maxWidth={700} align='center'>
          Design inspired by <b>Tailwind UI</b> and coded in Visual Studio Code
          by myself, <b>Willie Whitfield</b>. Built with <b>Next.js</b> and
          <b>Material UI</b>, database managed by <b>MongoDB</b>, deployed with{' '}
          <b>Vercel</b>.
        </Typography>
      </Box>
      <Stack
        direction='row'
        sx={{ justifyContent: { xs: 'center' }, gap: { xs: 5, md: 0 } }}
        spacing={3}
      >
        <FooterMenuStack header='Navigation'>
          <Link
            component={NextLink}
            href='/about'
            color='inherit'
            underline='hover'
          >
            About
          </Link>
          <Link
            component={NextLink}
            href='/projects'
            color='inherit'
            underline='hover'
          >
            Projects
          </Link>
          <Link
            component={NextLink}
            href='/contact'
            color='inherit'
            underline='hover'
          >
            Contact
          </Link>
        </FooterMenuStack>
        <Stack alignItems='center'>
          {matches ? (
            <NavLogo
              height={38}
              src={`/assets/${isLightTheme ? 'logo' : 'logo-alt'}.png`}
            />
          ) : (
            <MobileNavLogo
              height={38}
              src={`/assets/${
                isLightTheme ? 'secondary-logo' : 'secondary-logo-alt'
              }.png`}
            />
          )}
        </Stack>
        <FooterMenuStack header='Profiles'>
          <Link component={NextLink} href='#' color='inherit' underline='hover'>
            Github
          </Link>
          <Link component={NextLink} href='#' color='inherit' underline='hover'>
            LinkedIn
          </Link>
          <Link component={NextLink} href='#' color='inherit' underline='hover'>
            Spotify
          </Link>
        </FooterMenuStack>
      </Stack>
    </Container>
  )
}

export default Footer
