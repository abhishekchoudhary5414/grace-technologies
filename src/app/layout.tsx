import type { Metadata } from 'next';
import './globals.css';
import ConditionalShell from '@/components/layout/ConditionalShell/ConditionalShell';

export const metadata: Metadata = {
  metadataBase: new URL('https://gracetechnologies.uk'),
  title: {
    default: 'Grace Technologies | British Corporate Excellence & Intelligent Technology',
    template: '%s | Grace Technologies',
  },
  description:
    'Grace Technologies is a premier UK technology and business services consultancy, partnered strategically with Ank Square Private Limited (India) to engineer scalable websites, intelligent AI automation, merchant account management, and strategic digital marketing.',
  keywords: [
    'Grace Technologies',
    'UK Technology Consultancy',
    'Website Development UK',
    'AI Automation Services',
    'Merchant Account Management',
    'Digital Marketing UK',
    'Ank Square Private Limited',
  ],
  authors: [{ name: 'Grace Technologies' }],
  creator: 'Grace Technologies',
  publisher: 'Grace Technologies',
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://gracetechnologies.uk',
    title: 'Grace Technologies | Technology That Moves Business Forward',
    description:
      'Empowering ambitious businesses with intelligent technology, powerful digital experiences and smarter business solutions.',
    siteName: 'Grace Technologies',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Grace Technologies | Technology That Moves Business Forward',
    description:
      'UK Business Vision. Global Technology Partnership. Intelligent engineering and digital transformation.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Manrope:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ConditionalShell>{children}</ConditionalShell>
      </body>
    </html>
  );
}
