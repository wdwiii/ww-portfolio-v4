import { DesignServicesOutlined } from '@mui/icons-material'
import { Button, Card, CardContent, Stack, Typography } from '@mui/material'
import ProjectListItem from './ProjectListItem'

const RecentProjects = () => (
  <Card>
    <CardContent>
      <Stack height='100%' spacing={3} alignItems='center'>
        <Stack
          direction='row'
          spacing={1}
          alignItems='center'
          alignSelf='flex-start'
        >
          <DesignServicesOutlined sx={{ fontSize: 28 }} />
          <Typography variant='h5' component='h2'>
            Recent Projects
          </Typography>
        </Stack>
        <ProjectListItem />
        <ProjectListItem />
        <ProjectListItem />
        <Button color='secondary' variant='outlined' sx={{ ml: 'auto' }}>
          View Project Archive
        </Button>
      </Stack>
    </CardContent>
  </Card>
)

export default RecentProjects
