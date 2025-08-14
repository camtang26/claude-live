import type { Metadata } from "next";
import { Poiret_One, Playfair_Display } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import LoadingScreen from "@/components/LoadingScreen";
import CustomCursor from "@/components/CustomCursor";

const poiret = Poiret_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-poiret",
});

const playfair = Playfair_Display({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Art Deco Cinema",
  description: "A cinematic Art Deco-inspired luxury brand experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poiret.variable} ${playfair.variable}`}>
      <body className="antialiased bg-cream text-foreground deco-grain deco-vignette">
        <LoadingScreen />
        <CustomCursor />
        <NavBar />
        {children}
      </body>
    </html>
  );
}
