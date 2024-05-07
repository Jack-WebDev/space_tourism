import type { Metadata } from "next";
import {
  Bellefair as FontSans,
  Barlow_Condensed,
  Barlow,
} from "next/font/google";
import "./globals.css";

import { cn } from "@/lib/utils";

const fontSans = FontSans({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-sans",
});

export const barlow_condensed = Barlow_Condensed({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-barlow",
});

export const barlow = Barlow({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-barlow",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
