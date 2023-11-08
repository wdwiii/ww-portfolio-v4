'use client'
import React from 'react'
import PaddedGridContainer from '../components/ui/PaddedGridContainer'
import Container from '../components/ui/Container'
import Grid from '@mui/material/Unstable_Grid2/Grid2'
import { Box, Typography, Stack, Tabs, Tab } from '@mui/material'
import AboutTabs from '../components/about/AboutTabs'
import Image from 'next/image'
import { Miniver } from 'next/font/google'
import ImageList from '../components/about/ImageList'
import BioTab from '../components/about/BioTab'
import ExperienceTab from '../components/about/ExperienceTab'
import EducationTab from '../components/about/EducationTab'
import ToolkitTab from '../components/about/ToolkitTab'
import { useSearchParams } from 'next/navigation'
const miniver = Miniver({
  weight: '400',
  subsets: ['latin'],
})

const AboutPage = () => {
  const tabPanelValue = useSearchParams()
  console.log('🚀 ~ AboutPageLayout ~ searchParams:', tabPanelValue.get('tab'))

  const TabPanel = () => {
    switch (tabPanelValue.get('tab')) {
      case 'experience':
        return <ExperienceTab />
      case 'education':
        return <EducationTab />
      case 'toolkit':
        return <ToolkitTab />
      default:
        return <BioTab />
    }
  }

  return (
    <Container>
      <PaddedGridContainer spacing={2}>
        <Grid md={6}>
          <Stack spacing={3}>
            <Typography variant='h3'>
              Hey there! I'm Willie Whitfield, a frontend software developer
            </Typography>
            <AboutTabs />
            <TabPanel />
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
