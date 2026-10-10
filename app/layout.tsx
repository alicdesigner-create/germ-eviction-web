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
  title: "Germ Eviction | One Visit. Germs Evicted.",
  description:
    "Germ Eviction is specialized commercial restroom deep cleaning in Westminster, CO and the greater Denver area. One visit. Germs evicted. For restaurants, gas stations, retail stores, offices, and medical facilities.",
  keywords:
    "commercial restroom cleaning Denver, restroom deep cleaning Westminster CO, commercial restroom disinfection Colorado, restroom reset Denver, tile grout restoration, Germ Eviction",
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
