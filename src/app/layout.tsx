import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Falke-Media | Professionelles iPhone Refurbishing & B2B Remarketing",
  description:
    "Falke-Media - Ihr Partner für professionelle Apple iPhone Aufbereitung, Refurbishing und B2B Handel. Zertifiziert, nachhaltig und zuverlässig.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
