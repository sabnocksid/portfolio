import { ThemeProvider } from "next-themes";
import localFont from "next/font/local";
import "./globals.css";
import { ReactNode } from "react";

const manrope = localFont({
  src: [
    { path: "./font/Manrope-ExtraLight.ttf", weight: "200" },
    { path: "./font/Manrope-Light.ttf", weight: "300" },
    { path: "./font/Manrope-Regular.ttf", weight: "400" },
    { path: "./font/Manrope-Medium.ttf", weight: "500" },
    { path: "./font/Manrope-SemiBold.ttf", weight: "600" },
    { path: "./font/Manrope-Bold.ttf", weight: "700" },
    { path: "./font/Manrope-ExtraBold.ttf", weight: "800" },
  ],
  variable: "--font-manrope",
});

interface RootLayoutProps {
  children: ReactNode;
}

export const metadata = {
  title: "Siddhartha Paudel",
  description:
    "Portfolio of Siddhartha Paudel - Full-Stack Developer and Tech Enthusiast",
  icons: {
    icon: "/sid.svg",
    shortcut: "/sid.svg",
    apple: "/sid.svg",
  },
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={manrope.variable} suppressHydrationWarning>
      <body className="font-manrope bg-white dark:bg-black">
        <ThemeProvider attribute="class" defaultTheme="light">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
