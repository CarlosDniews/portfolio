import type { Metadata } from 'next';
import { TRPCProvider } from '@/providers/TRPCProvider';
import './globals.css';

export const metadata: Metadata = {
  title: 'Carlos Daniel | Full Stack Developer & Tech Lead',
  description:
    'Portfólio de Carlos Daniel Alves da Rosa — Desenvolvedor Full Stack e Tech Lead com +7 anos de experiência em Next.js, NestJS, Vue.js, Node.js e mais.',
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
      'Portfólio e carta de apresentação de Carlos Daniel Alves da Rosa.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className="antialiased">
        <TRPCProvider>{children}</TRPCProvider>
      </body>
    </html>
  );
}
