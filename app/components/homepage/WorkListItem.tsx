'use client'
import React from 'react'
import {
  ListItem as MuiListItem,
  Avatar,
  ListItemAvatar,
  ListItemText,
  Typography,
  Stack,
} from '@mui/material'
import { WorkDetails } from '@/app/interfaces'

const WorkListItem = ({
  details: { src, fallback, company, position, startYear, endYear },
}: {
  details: WorkDetails
}) => {
  return (
    <MuiListItem alignItems='flex-start'>
      <ListItemAvatar>
        <Avatar src={src || ''} sx={{ width: 50, height: 50 }}>
          {fallback}
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        disableTypography
        primary={
          <Typography variant='h6' component='span'>
            {company}
          </Typography>
        }
        secondary={
          <Stack
            direction='row'
            sx={theme => ({ flexDirection: { xs: 'column', sm: 'row' } })}
            justifyContent='space-between'
          >
            <Typography variant='body1' component='span'>
              {position}
            </Typography>
            <Typography variant='body1' component='span'>
              {`${startYear} - ${endYear}`}
            </Typography>
          </Stack>
        }
      />
    </MuiListItem>
  )
}

export default WorkListItem
