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

const miniver = Miniver({
  weight: '400',
  subsets: ['latin'],
})

const page = () => {
  return (
    <Container>
      <PaddedGridContainer spacing={2}>
        <Grid md={6}>
          <Stack spacing={3}>
            <Typography variant='h3'>
              Hey there! I'm Willie Whitfield, a frontend software developer
            </Typography>
            <AboutTabs />
            <Typography variant='body1'>
              I'm on a mission to turn lines of code into remarkable digital
              experiences. With a knack for problem-solving and a love for
              elegant solutions, I thrive in the ever-evolving world of
              technology.
            </Typography>
            <Typography variant='body1'>
              My journey in the realm of coding began [X] years ago, and since
              then, I've been on a relentless pursuit of mastering the art and
              science of software development. From crafting clean and efficient
              code to diving into the intricacies of algorithms, I find joy in
              the details that make software truly exceptional.
            </Typography>
            <Typography variant='body1'>
              I specialize in [Your Tech Stack], but my hunger for learning
              extends far beyond. Whether it's tackling complex challenges or
              embracing new technologies, I see each project as an opportunity
              to push boundaries and create something extraordinary.
            </Typography>
            <Typography variant='body1'>
              Collaboration is at the core of my approach. I believe that the
              best solutions emerge when diverse minds come together, and I'm
              always eager to be part of a team that values innovation,
              creativity, and a good dose of humor.
            </Typography>
            <Typography variant='body1'>
              When I'm not immersed in code, you'll likely find me exploring the
              latest tech trends, experimenting with side projects, or enjoying
              a cup of coffee while pondering the next big idea.
            </Typography>
            <Typography variant='body1'>
              Let's build something incredible together!
            </Typography>
            <Typography
              align='center'
              component='span'
              fontFamily={miniver.style.fontFamily}
              fontSize={72}
            >
              Willie
            </Typography>
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

export default page
