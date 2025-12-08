"use client";

import { ThemeProvider } from "next-themes";
import localFont from "next/font/local";
import "./globals.css";
import { ReactNode } from "react";

const manrope = localFont({
  src: [
    { path: "./font/Manrope-ExtraLight.ttf", weight: "200", style: "normal" },
    { path: "./font/Manrope-Light.ttf", weight: "300", style: "normal" },
    { path: "./font/Manrope-Regular.ttf", weight: "400", style: "normal" },
    { path: "./font/Manrope-Medium.ttf", weight: "500", style: "normal" },
    { path: "./font/Manrope-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "./font/Manrope-Bold.ttf", weight: "700", style: "normal" },
    { path: "./font/Manrope-ExtraBold.ttf", weight: "800", style: "normal" },
  ],
  variable: "--font-manrope",
});

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={manrope.variable} suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="light">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
