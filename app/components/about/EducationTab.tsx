import { Typography } from '@mui/material'
import { Miniver } from 'next/font/google'

const miniver = Miniver({
  weight: '400',
  subsets: ['latin'],
})

const EducationTab = () => {
  return (
    <>
      <Typography variant='body1'>THIS IS THE EDUCATION TAB</Typography>
    </>
  )
}

export default EducationTab
