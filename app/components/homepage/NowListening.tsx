import { Headphones } from '@mui/icons-material'
import { Card, CardContent, Stack, Typography } from '@mui/material'
import { Spotify } from 'react-spotify-embed'

const NowListening = () => {
  return (
    <Card>
      <CardContent sx={{ height: '100%' }}>
        <Stack height='100%' spacing={1}>
          <Stack direction='row' spacing={1} alignItems='center'>
            <Headphones sx={{ fontSize: 28 }} />
            <Typography variant='h5' component='h2'>
              What I&apos;m Listening To
            </Typography>
          </Stack>
          <Spotify
            // style={{ flexGrow: 1 }}
            width='100%'
            link='https://open.spotify.com/episode/6P3b05XBXhYRwpEisNc1JL?si=415df89501a040dc'
          />
        </Stack>
      </CardContent>
    </Card>
  )
}

export default NowListening
