import type { Metadata } from "next";
import { Anybody, Lato } from "next/font/google";
import "./globals.css";

const anybody = Anybody({
  variable: "--font-anybody",
  subsets: ["latin"],
});

const linksans = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ['100','300','400','700','900'],
});

export const metadata: Metadata = {
  title: "Rugged Gentleman",
  description: "Rugged Gentleman",
  icons: {
    icon: "/favicon.ico",
}
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${anybody.variable} ${linksans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
