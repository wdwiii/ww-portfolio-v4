'use client'
import { Typography } from '@mui/material'
import { Miniver } from 'next/font/google'

const miniver = Miniver({
  weight: '400',
  subsets: ['latin'],
})

const BioTab = () => {
  return (
    <>
      <Typography variant='body1'>
        I'm on a mission to turn lines of code into remarkable digital
        experiences. With a knack for problem-solving and a love for elegant
        solutions, I thrive in the ever-evolving world of technology.
      </Typography>
      <Typography variant='body1'>
        My journey in the realm of coding began [X] years ago, and since then,
        I've been on a relentless pursuit of mastering the art and science of
        software development. From crafting clean and efficient code to diving
        into the intricacies of algorithms, I find joy in the details that make
        software truly exceptional.
      </Typography>
      <Typography variant='body1'>
        I specialize in [Your Tech Stack], but my hunger for learning extends
        far beyond. Whether it's tackling complex challenges or embracing new
        technologies, I see each project as an opportunity to push boundaries
        and create something extraordinary.
      </Typography>
      <Typography variant='body1'>
        Collaboration is at the core of my approach. I believe that the best
        solutions emerge when diverse minds come together, and I'm always eager
        to be part of a team that values innovation, creativity, and a good dose
        of humor.
      </Typography>
      <Typography variant='body1'>
        When I'm not immersed in code, you'll likely find me exploring the
        latest tech trends, experimenting with side projects, or enjoying a cup
        of coffee while pondering the next big idea.
      </Typography>
      <Typography variant='body1'>
        Let's build something incredible together!
      </Typography>
      <Typography
        align='center'
        component='span'
        fontFamily={miniver.style.fontFamily}
        fontSize={72}
      >
        Willie
      </Typography>
    </>
  )
}

export default BioTab
