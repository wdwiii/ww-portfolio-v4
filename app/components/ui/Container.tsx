'use client'
import React from 'react'
import { Container as MuiContainer, ContainerProps } from '@mui/material'

export default function Container({ children, sx, ...props }: ContainerProps) {
  return (
    <MuiContainer
      {...props}
      sx={sx ? sx : theme => ({ backgroundColor: theme.palette.common.white })}
    >
      {children}
    </MuiContainer>
  )
}
