import type { Metadata } from "next";
import { Anybody, Lato, Satisfy } from "next/font/google";
import "./globals.css";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import { CartProvider } from "./context/CartContext";

const anybody = Anybody({
  variable: "--font-anybody",
  subsets: ["latin"],
});

const linksans = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ['100','300','400','700','900'],
});

const satisfy = Satisfy({
  variable: "--font-satisfy",
  subsets: ["latin"],
  weight: "400",
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
        className={`${anybody.variable} ${linksans.variable} ${satisfy.variable} antialiased`}
      >
        <CartProvider>
          <Navbar />
          <main className="pt-20 bg-gray-200">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
