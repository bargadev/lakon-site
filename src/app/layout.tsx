import type { Metadata } from 'next';
import '@/styles/globals.css';

const SITE_URL = 'https://lakon.fun';

const softwareJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'lakon',
  applicationCategory: 'DeveloperApplication',
  operatingSystem: 'macOS, Linux, Windows',
  url: SITE_URL,
  description:
    'Spartan replies for AI agents. Terse model output + filtered CLI output. Cuts LLM tokens on both ends.',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'lakon — Spartan replies for AI agents',
  description:
    'Cuts LLM tokens on both ends. Terse model output + filtered CLI output. One command installs across Claude Code, Codex, Cursor, Windsurf, Cline, and Gemini.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'lakon — Spartan replies for AI agents',
    description:
      'Less words. Win wars. One command installs across every major AI coding agent.',
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: 'lakon',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'lakon',
    description: 'Spartan replies for AI agents.',
  },
  icons: {
    icon: [
      { url: '/logo.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/logo.svg',
    apple: '/logo.svg',
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareJsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
