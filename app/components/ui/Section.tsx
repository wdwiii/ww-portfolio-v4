import { ContainerProps, Box, BoxProps } from '@mui/material'

export default function Section({ children, ...props }: BoxProps) {
  return (
    <Box component='section' {...props} bgcolor='transparent'>
      {children}
    </Box>
  )
}
