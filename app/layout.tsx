import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import ThemeRegistry from './components/theme/ThemeRegistry'
import { Container } from '@mui/material'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'williewhitfield.com',
  description:
    'Portfolio application developed by Willie Whitfield, powered by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ThemeRegistry>
      <html lang='en' style={{ height: '100%' }}>
        <body className={inter.className} style={{ height: '100%' }}>
          <Container maxWidth='lg'>{children}</Container>
        </body>
      </html>
    </ThemeRegistry>
  )
}
