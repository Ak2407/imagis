import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";

import "./globals.css";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "sonner";
import Sidebar from "@/components/Sidebar";
import BottomBar from "@/components/ui/BottomBar";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Imagis | AI Image Generator",
  description:
    "Ai image generator , generate unlimited images for free no catch!!! 😉",
  icons: [
    {
      url: "/icon.png",
      href: "/icon.png",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.className} bg-gray-50`}>
        <SessionProvider>
          <div className="flex px-4 md:pr-10">
            <Toaster />
            <Sidebar />
            <div className="flex flex-col w-full h-full items-center justify-center relative">
              {children}
              <BottomBar />
            </div>
          </div>
        </SessionProvider>
      </body>
    </html>
  );
}
