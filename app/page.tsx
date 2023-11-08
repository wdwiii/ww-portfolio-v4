import { Headphones } from '@mui/icons-material'
import { Card, CardContent, Stack, Typography } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2/Grid2'
import { Spotify } from 'react-spotify-embed'
import Hero from './components/homepage/Hero'
import ImageGallery from './components/homepage/ImageGallery'
import SubscribeForm from './components/homepage/SubscribeForm'
import WorkExperienceCard from './components/homepage/WorkExperienceCard'
import Container from './components/ui/Container'
import NowListening from './components/homepage/NowListening'
import RecentProjects from './components/homepage/RecentProjects'

export default async function Home() {
  return (
    <>
      <Hero />
      <ImageGallery />
      <Container>
        <Grid container spacing={3}>
          <Grid xs={12} md={6} py={5}>
            <Stack spacing={3}>
              <RecentProjects />
              {/* <SubscribeForm /> */}
            </Stack>
          </Grid>
          <Grid xs={12} md={6} py={5}>
            <Stack spacing={3}>
              <WorkExperienceCard />
              <NowListening />
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}
