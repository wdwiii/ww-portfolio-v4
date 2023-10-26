import React from 'react'
import Section from '../ui/Section'
import ImageCard from './ImageCard'
import { Stack, Container } from '@mui/material'

const ImageGallery = () => {
  return (
    <Section
      display='flex'
      alignItems='center'
      overflow='hidden'
      position='relative'
      flexDirection='column'
    >
      <Container
        maxWidth='lg'
        sx={{ bgcolor: 'white', height: { xs: 400, sm: 500 } }}
      />
      <Stack
        direction='row'
        spacing={3}
        justifyContent='center'
        flexShrink={0}
        position='absolute'
        sx={{ width: { xs: 1000, sm: 1700 } }}
      >
        <ImageCard src='/assets/baby.jpg' />
        <ImageCard src='/assets/basketball.png' />
        <ImageCard src='/assets/fishing.jpeg' />
        <ImageCard src='/assets/luna.jpg' />
        <ImageCard src='/assets/teacher.jpg' />
      </Stack>
      {/* </Container> */}
    </Section>
  )
}

export default ImageGallery
