'use client'
import React from 'react'
import { Button as MuiButton, ButtonProps, useTheme } from '@mui/material'

const Button = ({ children, ...props }: Omit<ButtonProps, 'color'>) => {
  const theme = useTheme()
  return (
    <MuiButton
      color={theme.palette.mode === 'light' ? 'primary' : 'secondary'}
      {...props}
    >
      {children}
    </MuiButton>
  )
}

export default Button
