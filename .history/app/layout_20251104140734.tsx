import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Hugo Becker - Développeur Full Stack",
  description: "Portfolio professionnel de Hugo Becker, développeur full stack spécialisé en .NET, React et solutions cloud",
  keywords: ["développeur", "full stack", ".NET", "React", "Azure", "portfolio"],
  authors: [{ name: "Hugo Becker" }],
  creator: "Hugo Becker",
  openGraph: {
    title: "Hugo Becker - Développeur Full Stack",
    description: "Portfolio professionnel de Hugo Becker, développeur full stack spécialisé en .NET, React et solutions cloud",
    type: "website",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hugo Becker - Développeur Full Stack",
    description: "Portfolio professionnel de Hugo Becker, développeur full stack spécialisé en .NET, React et solutions cloud",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
