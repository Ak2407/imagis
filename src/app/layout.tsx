import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";

import "./globals.css";
import { SessionProvider } from "next-auth/react";

export const metadata: Metadata = {
  title: "This is the starter Template",
  description: "Developed by Akshit Gupta at https://www.akshit.app/",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${GeistSans.className}`}>
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  );
}
