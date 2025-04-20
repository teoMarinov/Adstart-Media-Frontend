import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ['latin-ext']
})

export const metadata: Metadata = {
  title: "AdStart Media Task",
  description: "AdStart Media Task Frontend.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
