import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Premium Web Development Services | Transform Your Vision Into Digital Reality',
  description: 'Expert web development services specializing in custom website design, responsive development, and SEO optimization. Transform your business with modern, high-performance web solutions.',
  keywords: 'web development, custom website design, responsive development, SEO optimization, modern web solutions',
  openGraph: {
    title: 'Premium Web Development Services',
    description: 'Transform your vision into digital reality with our expert web development services',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}