import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter as FontSans } from 'next/font/google';
import { cn } from '@/lib/utils'; 
import "./globals.css";
import { ThemeProvider } from "./_components/theme-provider";

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans'
})

const fontHeading = localFont({
  src: '../assets/fonts/CalSans-SemiBold.woff2',
  variable: '--font-heading',
})

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Desenvolvedor - Jorge Wendell",
  description: "Portifolio do desenvolvedor Jorge Wendell",
  keywords: ['desenvolvedor front-end', 'portifolio', 'desenvolvimento de sites'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={cn('min-h-screen bg-background font-sans antialiased', 
          fontSans.variable, fontHeading.variable)}
      >
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          {children}
        </ThemeProvider>
        
      </body>
    </html>
  );
}
