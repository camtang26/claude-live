import type { Metadata } from "next";
import { Poiret_One, Josefin_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const decoDisplay = Poiret_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
});
const decoAlt = Josefin_Sans({
  weight: ["300", "400", "600"],
  subsets: ["latin"],
  variable: "--font-alt",
});
const classicSerif = Playfair_Display({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: "Deco Cinema — Luxury Art Deco Experience",
  description: "A cinematic Art Deco luxury brand experience blending 1920s glamour with modern web craft.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${decoDisplay.variable} ${decoAlt.variable} ${classicSerif.variable} font-serif antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
