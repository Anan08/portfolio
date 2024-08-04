import type { Metadata } from "next";
import { inter } from './ui/fonts';
import './globals.css'
import Header from "./ui/component/Header";
import { Suspense } from "react";


export const metadata: Metadata = {
  title: "Ananda's",
  description: "Portfolio of Ananda",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${(inter.className)} p-5 `}>
      <Header/>
      <Suspense fallback='Loading...'>
        <div>
          {children}
        </div>
      </Suspense>
      </body>
    </html>
  );
}
