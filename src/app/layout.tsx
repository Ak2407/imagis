import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";

import "./globals.css";
import { SessionProvider } from "next-auth/react";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Imagis | AI Image Generator",
  description: "This is a demo of Imagis, an AI image generator.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.className} bg-gray-50 `}>
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  );
}
