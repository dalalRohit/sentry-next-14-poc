export const dynamic = "force-dynamic";


import type { Metadata } from "next";
import localFont from "next/font/local";
import Setter from './setter';
import * as Sentry from "@sentry/nextjs";

import "./globals.css";

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
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const userId="1234";
  if(userId){
    Sentry.setUser({id:userId,email:""})
  }

  fetch('https://jsonplaceholder.typicode.com/todos/')
      .then(response =>  {
        if(response.ok) throw new Error("Testing error from fetch.then")
        return response.json()
      })
      .then(json => console.log(json))

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
          {children}
          <Setter />
      </body>
    </html>
  );
}
