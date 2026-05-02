import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import SmoothScrolling from "@/components/providers/SmoothScrolling";
import ClickLightning from "@/components/CLickLighting";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "SHAFIUL TUHIN | Web Developer",
  description:
    "Portfolio of Shafiul Tuhin, a passionate web developer specializing in modern web applications, interactive UI, and full-stack development using Next.js, TypeScript, and modern frontend tools.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased selection:bg-primary-container selection:text-on-primary-container`}
      >
        <ClickLightning />
        <SmoothScrolling>{children}</SmoothScrolling>
      </body>
    </html>
  );
}
