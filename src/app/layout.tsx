import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Beatriz Sarmento — Web Developer",
  description:
    "Web Developer with 3+ years of experience building responsive, high-performance web applications using React, Next.js, Node.js, and TypeScript. Based in Brasília, Brazil.",
  keywords: ["web developer", "react", "next.js", "typescript", "frontend", "brazil", "beatriz sarmento"],
  authors: [{ name: "Beatriz Sarmento" }],
  openGraph: {
    title: "Beatriz Sarmento — Web Developer",
    description:
      "Building beautiful, user-focused digital experiences. Based in Brasília, Brazil.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <body className="antialiased font-dm">{children}</body>
    </html>
  );
}
