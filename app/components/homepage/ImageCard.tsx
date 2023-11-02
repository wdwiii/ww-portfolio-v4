import { Card } from '@mui/material'
import Image from 'next/image'

const ImageCard = ({ src }: { src: string }) => {
  return (
    <Card
      sx={{
        height: { xs: 400, sm: 500 },
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
        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
      />
    </Card>
  )
}

export default ImageCard
