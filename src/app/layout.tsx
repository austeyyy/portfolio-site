import type { Metadata } from "next";
import { Inter, Calistoga } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";
import SmoothScrolling from "@/components/LenisProvider";
import Header from "@/components/Header";

//Fonts
const inter = Inter({ subsets: ["latin"], variable: "--font-sans" }); //sans font
const calistoga = Calistoga({
  //serif font
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Austen Young",
  description: "Portfolio Site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={twMerge(
          inter.variable,
          calistoga.variable,
          "bg-white text-green-900 antialiased font-sans"
        )}
      >
        <main>
          <SmoothScrolling>{children}</SmoothScrolling>
        </main>
      </body>
    </html>
  );
}
