import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "./LanguageContext";

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Home | IRTH",
  description: "IRTH (إرث) is a secure, institutional digital archiving platform built for preserving the knowledge, heritage, corporate archives, and legacy of Saudi Arabian institutions and families.",
  keywords: ["IRTH", "digital archiving", "Saudi heritage", "preservation", "institutional archive", "private archiving", "إرث"],
  openGraph: {
    title: "IRTH | Premium Private Digital Archiving Platform",
    description: "Preserving Saudi Arabia's legacy, knowledge, and heritage with modern, OCI-hosted secure technology.",
    url: "https://irth.sa",
    siteName: "IRTH",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${cormorantGaramond.variable} ${inter.variable} h-full antialiased dark`}
      style={{ colorScheme: "dark" }}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-obsidian text-foreground">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
