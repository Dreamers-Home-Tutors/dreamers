import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

const siteUrl = 'https://dreamers-lake.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: 'Dreamers Home Tutors | Trusted Home & Online Tutors in Pakistan',
    template: '%s | Dreamers Home Tutors',
  },

  description:
    'Find trusted home and online tutors across Pakistan for school, college, university, and professional subjects. Connect with experienced tutors through Dreamers Home Tutors.',

  applicationName: 'Dreamers Home Tutors',

  keywords: [
    'home tutors in Pakistan',
    'home tuition Pakistan',
    'online tutors Pakistan',
    'private tutors Pakistan',
    'home tutor Lahore',
    'home tutor Islamabad',
    'home tutor Karachi',
    'online tuition Pakistan',
    'Dreamers Home Tutors',
  ],

  authors: [
    {
      name: 'Dreamers Home Tutors',
    },
  ],

  creator: 'Dreamers Home Tutors',
  publisher: 'Dreamers Home Tutors',

  alternates: {
    canonical: '/',
  },

  openGraph: {
    type: 'website',
    locale: 'en_PK',
    url: siteUrl,
    siteName: 'Dreamers Home Tutors',
    title: 'Dreamers Home Tutors | Trusted Tutors in Pakistan',
    description:
      'Find trusted home and online tutors across Pakistan for school, college, university, and professional subjects.',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Dreamers Home Tutors | Trusted Tutors in Pakistan',
    description:
      'Find trusted home and online tutors across Pakistan.',
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },

  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#1E3A8A',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
  }
