import { Typography } from '@mui/material'
import { Miniver } from 'next/font/google'

const miniver = Miniver({
  weight: '400',
  subsets: ['latin'],
})

const ToolkitTab = () => {
  return (
    <>
      <Typography variant='body1'>THIS IS THE TOOLKIT TAB</Typography>
    </>
  )
}

export default ToolkitTab
