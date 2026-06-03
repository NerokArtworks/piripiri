import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Piripiri",
  description: "Pulsa el piripiri. Hace cosas. No preguntes.",
  keywords: ["piripiri", "meme", "soundboard", "click", "fun"],
  themeColor: "#0a0a0a",
  openGraph: {
    title: "Piripiri",
    description: "Pulsa el piripiri. Hace cosas.",
    type: "website",
    images: [
      {
        url: "/piripiri.png",
        width: 512,
        height: 512,
        alt: "Piripiri",
      },
    ],
  },
  icons: {
    icon: "/piripiri.png",
    apple: "/piripiri.png",
  },
  metadataBase: new URL("https://piripiri-mimi.vercel.app"),
  creator: "Piripiri Industries™",
  applicationName: "Piripiri",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
