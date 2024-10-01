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
      <body className={`${dmSans.className} bg-gray-50 px-4 md:pr-10 `}>
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  );
}
