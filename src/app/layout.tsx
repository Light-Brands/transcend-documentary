import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Transcend Documentary | Bringing the Lost Traveler Back Home',
  description:
    'A cinematic documentary series about human transformation. Following people at moments of inner reckoning—addiction, trauma, despair—and the sacred spaces that help them come home.',
  keywords: [
    'documentary',
    'transformation',
    'healing',
    'mental health',
    'addiction recovery',
    'transcend clinic',
    'psychedelic therapy',
  ],
  authors: [{ name: 'Light Brands Collective' }],
  openGraph: {
    title: 'Transcend Documentary | Bringing the Lost Traveler Back Home',
    description:
      'A cinematic documentary series about human transformation.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Transcend Documentary',
    description: 'Bringing the Lost Traveler Back Home',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Fonts - loaded via link tags for production reliability */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&family=Source+Sans+3:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-void-black text-light antialiased">
        {children}
      </body>
    </html>
  );
}
