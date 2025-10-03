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
  title: "Musas del Bosque - Menú",
  description:
    "Entre flores, café y aromas encuentra la conexión contigo con la tierra y la magia de lo cotidiano. Café artesanal con elixires botánicos únicos.",
  keywords:
    "café, elixires botánicos, frappés, té, horchata, matcha, chai, café artesanal",
  authors: [{ name: "Musas del Bosque" }],
  creator: "Musas del Bosque",
  publisher: "Musas del Bosque",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://musasdelbosque.com",
    siteName: "Musas del Bosque",
    title: "Musas del Bosque - Menú",
    description:
      "Entre flores, café y aromas encuentra la conexión contigo con la tierra y la magia de lo cotidiano.",
    images: [
      {
        url: "https://musasdelbosque.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Musas del Bosque - Menú de Café Botánico",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@MUSAS.DEL.BOSQUE",
    creator: "@MUSAS.DEL.BOSQUE",
    title: "Musas del Bosque - Menú",
    description:
      "Entre flores, café y aromas encuentra la conexión contigo con la tierra y la magia de lo cotidiano.",
    images: ["https://musasdelbosque.com/twitter-image.jpg"],
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#065f46",
  alternates: {
    canonical: "https://musasdelbosque.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
