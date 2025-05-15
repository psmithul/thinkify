import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Thinkify Labs | Ex-Flipkart Engineers Finding Your Next Tech Stars",
  description: "We help startups recruit excellent engineers. Our team of ex-Flipkart engineers screen candidates so you don't have to.",
  keywords: ["tech recruitment", "startup hiring", "engineering talent", "ex-Flipkart", "technical screening", "India"],
  authors: [{ name: "Thinkify Labs" }],
  creator: "Thinkify Labs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
