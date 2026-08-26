import type { Metadata } from 'next';
import './globals.css';
import { Geist } from 'next/font/google';
import { cn } from '@/lib/utils';
import Header from '../components/layout/header';
import Footer from '../components/layout/footer';
import ScrollToTop from '../components/scroll-to-top';
import IntroController from '../features/intro/intro-controller';
import { Toaster } from 'sonner';

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: 'Home Page',
  description: 'This is my HomePage',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={cn('font-sans', geist.variable)}>
      <body className="bg-black">
        <Toaster richColors position="top-center" />
        <IntroController />
        <div id="app-content" className="app-hidden flex flex-col min-h-screen">
          <Header />
          <main className="grow">{children}</main>
          <Footer />
          <ScrollToTop />
        </div>
      </body>
    </html>
  );
}
