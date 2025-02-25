import { Geist, Geist_Mono, Outfit, Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import NavBar from "../components/NavBar";
import React from "react";

const outfit = Outfit({subsets:['latin']})
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={outfit.className}>
          <NavBar/>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}