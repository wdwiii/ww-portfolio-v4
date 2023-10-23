import React from 'react'
import { Card } from '@mui/material'
import Image from 'next/image'

const ImageCard = ({ src }: { src: string }) => {
  return (
    <Card
      sx={{
        height: { xs: 250, sm: 330 },
        flexShrink: 0,
        flexGrow: 1,
        background: 'hsl(30, 100%, 85%)',
        position: 'relative',
      }}
    >
      <Image
        src={src}
        alt='baby photo'
        fill
        objectFit='cover'
        objectPosition='center'
      />
    </Card>
  )
}

export default ImageCard
