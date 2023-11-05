'use client'

import { Chip, ListItemButton, Stack, Typography } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2/Grid2'
import Image from 'next/image'

const ProjectListItem = () => {
  const handleTagClick = () => {
    console.log('Tag button clicked')
  }
  return (
    <ListItemButton sx={{ maxWidth: { xs: 350, sm: 565, md: 'none' } }}>
      <Grid container width={'100%'} spacing={2}>
        <Grid
          xs={12}
          sm={6}
          md={12}
          position='relative'
          pt={1}
          sx={{ height: { xs: 200 } }}
        >
          <Image
            src='/assets/thumbnails/wwportfolio.png'
            alt='williewhitfield.com thumbnail'
            fill
            objectFit='contain'
            objectPosition='8px center'
          />
        </Grid>
        <Grid xs={12} sm={6} md={12}>
          <Typography variant='h6' component='h3'>
            WillieWhitfield.com (V4)
          </Typography>
          <Typography variant='body1' sx={{ maxWidth: { md: 450, lg: 450 } }}>
            Revitalized and elevated user experience by implementing a sleek and
            responsive redesign of a web development portfolio using Next.js,
            showcasing enhanced functionality and modern design principles.
          </Typography>
        </Grid>
        <Grid xs={8} sm={6} smOffset={6} mdOffset={0}>
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
