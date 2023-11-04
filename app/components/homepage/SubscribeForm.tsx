import React from 'react'
import {
  Card,
  CardContent,
  Button,
  TextField,
  Typography,
  Box,
  Stack,
} from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2/Grid2'
import MailOutlineIcon from '@mui/icons-material/MailOutline'

export default function SubscribeForm() {
  return (
    <Card>
      <CardContent>
        <Stack spacing={0}>
          <Stack direction='row' alignItems='center' spacing={1}>
            <MailOutlineIcon sx={{ fontSize: 28 }} />
            <Typography variant='h5' component='h2'>
              Stay up to date
            </Typography>
          </Stack>
          <Typography sx={{ pt: 1, mb: 2 }}>
            Get notified when I publish something new and unsubscribe at any
            time
          </Typography>
          <Grid container spacing={1}>
            <Grid xs={12} sm={8}>
              <TextField label='Email Address' fullWidth variant='standard' />
            </Grid>
            <Grid xs={12} sm={4}>
              <Button
                type='submit'
                variant='contained'
                size='large'
                fullWidth
                // sx={{ mt: 3, mb: 2 }}
              >
                Subscribe
              </Button>
            </Grid>
          </Grid>
        </Stack>
      </CardContent>
    </Card>
  )
}
