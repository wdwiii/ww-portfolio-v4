'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function MobileNavLogo({
  height,
  src,
}: {
  height: number
  src: string
}) {
  return (
    <Link href='/' style={{ height }}>
      <Image src={src} alt='logo' width={height * 0.94} height={height} />
    </Link>
  )
}
