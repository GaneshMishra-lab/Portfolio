import type { Metadata } from "next";
import { Geist_Mono, Libre_Franklin, Playfair_Display } from "next/font/google";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const libreFranklin = Libre_Franklin({
  variable: "--font-libre-franklin",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ganesh Mishra | Forest Systems Portfolio",
  description:
    "Developer portfolio of Ganesh Mishra: systems thinking, product engineering, and research growth through an old-growth forest visual narrative.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfairDisplay.variable} ${libreFranklin.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="relative min-h-full font-sans text-moonlit selection:bg-forest-glow/30 selection:text-moonlit">
        <div aria-hidden className="pointer-events-none fixed inset-0 -z-20 bg-[url('/forest.jpg')] bg-cover bg-center bg-no-repeat" />
        <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 bg-gradient-to-b from-[#041e16]/80 via-[#06281e]/72 to-[#03140f]/88" />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
