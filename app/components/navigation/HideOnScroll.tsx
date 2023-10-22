'use client'
import { Slide, useScrollTrigger } from '@mui/material'

import React from 'react'

export default function HideOnScroll({
  children,
}: {
  children: React.ReactElement
}) {
  const trigger = useScrollTrigger({ threshold: 0 })

  return (
    <Slide appear={false} direction='down' in={!trigger}>
      {children}
    </Slide>
  )
}
