import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({subsets: ['latin']});

export const metadata = {
  title: 'دیار',
  description: 'لیست استان ها'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fa" dir="rtl">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className={inter.className}>
        {children}
        </body>
    </html>
  )
}
