'use client';

import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '../components/Navbar';
import { usePathname } from 'next/navigation';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

function LayoutContent({ children }) {
  const pathname = usePathname();

  // Daftar halaman tanpa navbar
  const hideNavbar = ['/login', '/registrasi', '/register', '/forgot-password'].includes(pathname);

  return (
    <>
      {!hideNavbar && <Navbar />}
      <main key={pathname}>{children}</main>
    </>
  );
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <LayoutContent>{children}</LayoutContent>
      </body>
    </html>
  );
}