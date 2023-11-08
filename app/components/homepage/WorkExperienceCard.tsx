import React from 'react'
import {
  Card,
  CardContent,
  Stack,
  List,
  Divider,
  Typography,
} from '@mui/material'
import Button from '../ui/Button'
import WorkOutline from '@mui/icons-material/WorkOutline'
import WorkListItem from './WorkListItem'
import { WorkDetails } from '@/app/interfaces'

export const getWorkExperienceDetails: () => Promise<
  WorkDetails[]
> = async () => {
  return new Promise(resolve => {
    setTimeout(
      () =>
        resolve([
          {
            id: 5,
            src: '/assets/work-flowwest.png',
            fallback: 'FW',
            company: 'FlowWest',
            position: 'Staff Software Engineer',
            startYear: 2023,
            endYear: 'Present',
          },
          {
            id: 4,
            src: '/assets/work-flowwest.png',
            fallback: 'FW',
            company: 'FlowWest',
            position: 'Junior Software Engineer',
            startYear: 2022,
            endYear: 2023,
          },
          {
            id: 3,
            src: '/assets/work-krop.png',
            fallback: 'MK',
            company: 'Dr. Michael M. Krop Senior High School',
            position: 'Special Education Teacher',
            startYear: 2016,
            endYear: 2022,
          },
          {
            id: 2,
            src: 'assets/work-generals.png',
            fallback: 'WG',
            company: 'Washington Generals',
            position: 'Professional Basketball Player',
            startYear: 2013,
            endYear: 2016,
          },
          {
            id: 1,
            src: '/assets/work-mainz.png',
            fallback: 'ASC',
            company: 'ASC Theresianum Mainz (Germany)',
            position: 'Professional Basketball Player',
            startYear: 2011,
            endYear: 2013,
          },
        ]),
      2000
    )
  })
}

const WorkExperienceCard = async () => {
  const workExperienceArray = await getWorkExperienceDetails()

  return (
    <Card>
      <CardContent>
        <Stack direction='row' alignItems='center' spacing={1}>
          <WorkOutline sx={{ fontSize: 28 }} />
          <Typography variant='h5' component='h2'>
            Work
          </Typography>
        </Stack>
        <List>
          {workExperienceArray.map(item => (
            <WorkListItem key={item.id} details={item} />
          ))}
          <Divider variant='inset' component='li' />
        </List>
        <Button size='large' fullWidth variant='outlined'>
          Download Resume
        </Button>
      </CardContent>
    </Card>
  )
}

export default WorkExperienceCard
