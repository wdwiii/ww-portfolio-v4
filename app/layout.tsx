import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import NavBar from './components/navigation/NavBar'
import ThemeRegistry from './components/theme/ThemeRegistry'

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
        <body
          className={inter.className}
          style={{
            height: '100%',
            backgroundColor: '#1a1f23',
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h20L0 20z' fill='%23273239' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          }}
        >
          <NavBar />
          {children}
        </body>
      </html>
    </ThemeRegistry>
  )
}
