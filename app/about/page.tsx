// 'use client'
import { Box, Stack, Typography } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2/Grid2'
import { Miniver } from 'next/font/google'
import Image from 'next/image'
import AboutTabs from '../components/about/AboutTabs'
import ImageList from '../components/about/ImageList'
import Container from '../components/ui/Container'
import PaddedGridContainer from '../components/ui/PaddedGridContainer'
import AboutTabPanel from '../components/about/AboutTabPanel'

const miniver = Miniver({
  weight: '400',
  subsets: ['latin'],
})

const AboutPage = async () => {
  return (
    <Container>
      <PaddedGridContainer spacing={2}>
        <Grid md={6}>
          <Stack spacing={3}>
            <Typography variant='h3'>
              Hey there! I'm Willie Whitfield, a frontend software developer
            </Typography>
            <AboutTabs />
            <AboutTabPanel />
          </Stack>
        </Grid>
        <Grid md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Stack spacing={3} alignItems='center'>
            <Box
              position='relative'
              height={425}
              width={425}
              borderRadius={5}
              overflow='hidden'
            >
              <Image
                src='/assets/profile.jpg'
                alt='profile-photo'
                fill
                objectFit='cover'
                objectPosition='top center'
              />
            </Box>
            <ImageList />
          </Stack>
        </Grid>
      </PaddedGridContainer>
    </Container>
  )
}

export default AboutPage
