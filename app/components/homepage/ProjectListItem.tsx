'use client'

import { Chip, ListItemButton, Stack, Typography } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2/Grid2'
import Image from 'next/image'

const ProjectListItem = () => {
  const handleTagClick = () => {
    console.log('Tag button clicked')
  }
  return (
    <ListItemButton>
      <Grid container width={'100%'} spacing={2}>
        <Grid xs={4} position='relative' pt={1}>
          <Image
            src='/assets/thumbnails/wwportfolio.png'
            alt='williewhitfield.com thumbnail'
            fill
            objectFit='contain'
            objectPosition='8px center'
          />
        </Grid>
        <Grid xs={8}>
          <Typography variant='h6' component='h3'>
            WillieWhitfield.com (V4)
          </Typography>
          <Typography variant='body1'>
            Revitalized and elevated user experience by implementing a sleek and
            responsive redesign of a web development portfolio using Next.js,
            showcasing enhanced functionality and modern design principles.
          </Typography>
        </Grid>
        <Grid xs={8} marginLeft='auto'>
          <Stack direction='row' spacing={1}>
            <Chip label='Next.js' onClick={handleTagClick} />
            <Chip label='MUI' onClick={handleTagClick} />
            <Chip label='MongoDB' onClick={handleTagClick} />
          </Stack>
        </Grid>
      </Grid>
    </ListItemButton>
  )
}

export default ProjectListItem
