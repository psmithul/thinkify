import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Thinkify | Ex-Flipkart Engineers Finding Your Next Tech Stars",
  description: "We help startups recruit excellent engineers. Our team of ex-Flipkart engineers screen candidates so you don't have to.",
  keywords: ["tech recruitment", "startup hiring", "engineering talent", "ex-Flipkart", "technical screening", "India"],
  authors: [{ name: "Thinkify" }],
  creator: "Thinkify",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        {children}
      </body>
    </html>
  );
}
