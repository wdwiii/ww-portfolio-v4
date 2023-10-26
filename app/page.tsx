import { Stack } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2/Grid2'
import Hero from './components/homepage/Hero'
import ImageGallery from './components/homepage/ImageGallery'
import SubscribeForm from './components/homepage/SubscribeForm'
import WorkExperienceCard from './components/homepage/WorkExperienceCard'
import Container from './components/ui/Container'

export default async function Home() {
  return (
    <>
      <Hero />
      <ImageGallery />
      <Container>
        <Grid container>
          <Grid xs={12} md={6}></Grid>
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
