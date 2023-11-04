'use client'
import { ContainerProps, Container as MuiContainer } from '@mui/material'

export default function Container({ children, sx, ...props }: ContainerProps) {
  return (
    <MuiContainer
      {...props}
      maxWidth='lg'
      sx={
        sx
          ? sx
          : theme => ({ backgroundColor: theme.palette.background.default })
      }
    >
      {children}
    </MuiContainer>
  )
}
