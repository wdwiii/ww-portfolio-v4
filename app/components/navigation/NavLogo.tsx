'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function NavLogo({
  height,
  src,
}: {
  height: number
  src: string
}) {
  return (
    <Link href='/' style={{ height, flex: 1 }}>
      <Image
        src={src}
        alt='logo'
        width={height * 5}
        height={height}
        // style={{
        //   filter: `grayscale(${theme.palette.mode === 'dark' ? 0 : 100}%)`,
        // }}
      />
    </Link>
  )
}
