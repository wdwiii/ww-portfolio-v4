import { Typography } from '@mui/material'
import { Miniver } from 'next/font/google'

const miniver = Miniver({
  weight: '400',
  subsets: ['latin'],
})

const ExperienceTab = () => {
  return (
    <>
      <Typography variant='body1'>THIS IS THE EXPERIENCE TAB</Typography>
    </>
  )
}

export default ExperienceTab
