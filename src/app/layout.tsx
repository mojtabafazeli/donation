import './globals.css';
import React from 'react';
import { Inter } from 'next/font/google';
import { AppProvider } from './RealmApp';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'دیار',
  description: 'صفحه اصلی',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='fa' dir='rtl'>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className={inter.className}>
        {/* @ts-ignore */}
        <AppProvider appId={process.env.NEXT_PUBLIC_MONGO_APP_ID}>
          {children}
        </AppProvider>
      </body>
    </html>
  );
}
