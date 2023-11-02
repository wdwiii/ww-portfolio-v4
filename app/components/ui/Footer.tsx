import {
  Container,
  Divider,
  Link,
  Paper,
  Stack,
  Typography,
} from '@mui/material'
import NextLink from 'next/link'
const Footer = () => {
  return (
    <Container maxWidth='lg' component={Paper}>
      <Divider />

      <Stack
        direction='row'
        justifyContent='space-between'
        sx={{ pt: 3, pb: 2 }}
      >
        <Stack direction='row' alignItems='center' spacing={3}>
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
        </Stack>
        <Typography>
          Powered by Next.js / Developed by Willie Whitfield 2023
        </Typography>
      </Stack>
    </Container>
  )
}

export default Footer
