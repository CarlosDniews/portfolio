import type { Metadata } from 'next';
import { TRPCProvider } from '@/providers/TRPCProvider';
import { LanguageProvider } from '@/providers/LanguageProvider';
import './globals.css';

export const metadata: Metadata = {
  title: 'Carlos Daniel | Full Stack Developer & Tech Lead',
  description:
    'Portfolio of Carlos Daniel Alves da Rosa — Full Stack Developer and Tech Lead with 7+ years of experience in Next.js, NestJS, Vue.js, Node.js and more.',
  keywords: [
    'Carlos Daniel',
    'Full Stack Developer',
    'Tech Lead',
    'Next.js',
    'NestJS',
    'Vue.js',
    'Portfolio',
  ],
  authors: [{ name: 'Carlos Daniel Alves da Rosa' }],
  openGraph: {
    title: 'Carlos Daniel | Full Stack Developer & Tech Lead',
    description:
      'Portfolio of Carlos Daniel Alves da Rosa — Full Stack Developer & Tech Lead.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        <TRPCProvider>
          <LanguageProvider>{children}</LanguageProvider>
        </TRPCProvider>
      </body>
    </html>
  );
}
