import './globals.css';
export const metadata = {
  title: 'AniVerse',
  description: 'Dark cyberpunk anime streaming platform',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
