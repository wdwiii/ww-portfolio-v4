import Grid from '@mui/material/Unstable_Grid2/Grid2'
import { Grid2Props } from '@mui/material'
import React from 'react'

const PaddedGridContainer = ({ children, ...props }: Grid2Props) => {
  return (
    <Grid container {...props} sx={{ pt: 18, pb: 10 }}>
      {children}
    </Grid>
  )
}

export default PaddedGridContainer
