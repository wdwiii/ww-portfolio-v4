import { GitHub, Headphones, Instagram, LinkedIn } from '@mui/icons-material'
import { IconButton, Stack, Typography } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2/Grid2'
import Container from '../../components/ui/Container'
import Section from '../../components/ui/Section'

export default function Hero() {
  return (
    <Section>
      <Container>
        <Grid container sx={{ pt: 18, pb: 10 }}>
          <Grid lg={8}>
            <Typography variant='h1'>Coding, Basketball, and Music</Typography>{' '}
            <Typography variant='h6' component='p' gutterBottom>
              Greetings! I&apos;m [Your Name], a passionate software developer
              on a perpetual quest to unravel the intricate dance between lines
              of code and the symphony they create. With a blend of creativity
              and logical thinking, I find joy in transforming complex problems
              into elegant, efficient solutions
            </Typography>
            <Stack direction='row' spacing={2}>
              <IconButton size='large' color='secondary'>
                <GitHub fontSize='large' />
              </IconButton>
              <IconButton size='large' color='secondary'>
                <LinkedIn fontSize='large' />
              </IconButton>
              <IconButton size='large' color='secondary'>
                <Instagram fontSize='large' />
              </IconButton>
              <IconButton size='large' color='secondary'>
                <Headphones fontSize='large' />
              </IconButton>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Section>
  )
}
