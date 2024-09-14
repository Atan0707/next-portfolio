import type { Metadata } from "next";
// import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
import { geistSans, geistMono, fontSunflower, NexaHeavy, NexaLight, Akira, Bebas } from './fonts/fonts';
import Footer from "./components/Footer/Footer";


export const metadata: Metadata = {
  title: "Hariz Hakim",
  description: "Hariz Hakim's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const fontClasses = [
    geistSans.variable,
    geistMono.variable,
    fontSunflower.variable,
    NexaHeavy.variable,
    NexaLight.variable,
    Akira.variable,
    Bebas.variable,
    'antialiased'
  ].join(' ');

  return (
    <html lang="en">
      <body
        className={fontClasses}
      >
        <Navbar />
        <main>{children}</main>
        <div className="id" id="contact"><Footer /></div>
        
      </body>
    </html>
  );
}
