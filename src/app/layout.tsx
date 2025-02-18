import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";

import "./globals.css";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Marco Predari CV",
  description: "Resume builted with NextJS and love",
};

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <script type="text/javascript" async src="//cdn.credly.com/assets/utilities/embed.js"></script>
      <body>{children}</body>
      <Analytics />
    </html>
  );
}
