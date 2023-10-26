import Section from '../../components/ui/Section'
import { Typography, Stack, IconButton } from '@mui/material'
import { Airlines, DirtyLens, Iso, TwoWheeler } from '@mui/icons-material'
import Container from '../../components/ui/Container'
import Grid from '@mui/material/Unstable_Grid2/Grid2'

export default function Hero() {
  return (
    <Section>
      <Container maxWidth='lg'>
        <Grid container sx={{ pt: 18, pb: 10 }}>
          <Grid lg={8}>
            <Typography variant='h1'>Coding, Basketball, and Music</Typography>{' '}
            <Typography variant='body1' gutterBottom>
              Greetings! I&apos;m [Your Name], a passionate software developer
              on a perpetual quest to unravel the intricate dance between lines
              of code and the symphony they create. With a blend of creativity
              and logical thinking, I find joy in transforming complex problems
              into elegant, efficient solutions
            </Typography>
            <Stack direction='row' spacing={2}>
              <IconButton size='large'>
                <Airlines fontSize='large' />
              </IconButton>
              <IconButton size='large'>
                <DirtyLens fontSize='large' />
              </IconButton>
              <IconButton size='large'>
                <Iso fontSize='large' />
              </IconButton>
              <IconButton size='large'>
                <TwoWheeler fontSize='large' />
              </IconButton>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Section>
  )
}
