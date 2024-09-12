import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";

import "./globals.css";
import { SessionProvider } from "next-auth/react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
      <body className={GeistSans.className}>
        <SessionProvider>
          <div className="flex flex-col min-h-screen justify-between items-center gap-10 p-6 ">
            <div className="flex flex-col gap-10 justify-center items-center w-full">
              <Navbar />

              <div className="max-w-[1300px] mx-auto">{children}</div>
            </div>
            <Footer />
          </div>
        </SessionProvider>
      </body>
    </html>
  );
}
