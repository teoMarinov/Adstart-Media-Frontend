import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const headerHeight = 60;

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin-ext"],
});

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
      <body className={`${dmSans.variable} antialiased font-sans flex flex-col min-h-screen h-full md:h-screen`}>
        <Header />
        <main className={`flex-grow min-h-[calc(100vh-${headerHeight}px)] sm:min-h-[530px]`}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
