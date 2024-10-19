import type { Metadata } from "next";
import { Gloria_Hallelujah } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { StoryProvider } from "@/context/StoryContext";
import Header from "@/components/header";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const gloria = Gloria_Hallelujah({
  subsets: ['latin'],
  weight: '400', 
});

export const metadata: Metadata = {
  title: "Cloudinary - Halloween Hackathon",
  description: "Application to create a Cloudinary application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${gloria.className}`}>
        <StoryProvider>
          <Header />
          {children}
        </StoryProvider>
      </body>
    </html>
  );
}
