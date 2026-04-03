import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
  title: "Germ Eviction | Deep Cleaning & Specialty Resets",
  description:
    "Germ Eviction delivers surgical-level commercial disinfection and deep cleaning in Westminster, CO and the greater Denver area. Restroom resets, commercial kitchen degreasing, gas station sterilization, tile & grout restoration.",
  keywords:
    "commercial cleaning Denver, deep cleaning Westminster CO, commercial disinfection Colorado, restroom reset Denver, kitchen deep clean Denver, gas station cleaning Colorado, tile grout restoration, Germ Eviction",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
