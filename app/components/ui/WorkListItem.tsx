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
        <Avatar src={src || ''}>{fallback}</Avatar>
      </ListItemAvatar>
      <ListItemText
        disableTypography
        primary={company}
        secondary={
          <Stack direction='row' justifyContent='space-between'>
            <Typography variant='body2' component='span'>
              {position}
            </Typography>
            {`${startYear} - ${endYear}`}
          </Stack>
        }
      />
    </MuiListItem>
  )
}

export default WorkListItem
