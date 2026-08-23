import '../globals.css';
import type { Metadata } from 'next';
import { Inter, Noto_Sans_Georgian } from 'next/font/google';
import { cn } from '@/lib/utils';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const georgian = Noto_Sans_Georgian({ subsets: ['georgian'], variable: '--font-georgian' });

export const metadata: Metadata = {
  title: 'AniVerse',
  description: '3D anime streaming platform with Georgian and English content'
};

export default function RootLayout({ children, params }: { children: React.ReactNode; params: { lang: 'ka' | 'en' } }) {
  return (
    <html lang={params.lang} suppressHydrationWarning>
      <body className={cn(inter.variable, georgian.variable, 'bg-[#0a0a0f] text-white antialiased')}>
        {children}
      </body>
    </html>
  );
}
