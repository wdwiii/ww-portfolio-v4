import { Stack, Card, CardContent } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2/Grid2'
import Hero from './components/homepage/Hero'
import ImageGallery from './components/homepage/ImageGallery'
import SubscribeForm from './components/homepage/SubscribeForm'
import WorkExperienceCard from './components/homepage/WorkExperienceCard'
import Container from './components/ui/Container'
import { Spotify } from 'react-spotify-embed'
import { Typography } from '@mui/material'
import { Headphones } from '@mui/icons-material'

export default async function Home() {
  return (
    <>
      <Hero />
      <ImageGallery />
      <Container>
        <Grid container spacing={3}>
          <Grid xs={12} md={6} py={5}>
            <Card sx={{ height: '100%' }}>
              <CardContent sx={{ height: '100%' }}>
                <Stack height='100%' spacing={1}>
                  <Stack direction='row' spacing={1} alignItems='center'>
                    <Headphones />
                    <Typography variant='h6' component='h2' color='initial'>
                      What I&apos;m Listening To
                    </Typography>
                  </Stack>
                  <Spotify
                    style={{ flexGrow: 1 }}
                    width='100%'
                    link='https://open.spotify.com/album/79ONNoS4M9tfIA1mYLBYVX'
                  />
                </Stack>
              </CardContent>
            </Card>
          </Grid>
          <Grid xs={12} md={6} py={5}>
            <Stack spacing={3}>
              <SubscribeForm />
              <WorkExperienceCard />
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}
