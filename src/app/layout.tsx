import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";

import "./globals.css";
import { SessionProvider } from "next-auth/react";

export const metadata: Metadata = {
  title: "Twitly | AI powered Twitter reply bot",
  description:
    "AI powered Twitter reply bot for removing the hassle of writing reply to tweets.",
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
