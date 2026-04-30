import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Arulvelu Gunasekaran | Automation & AI Engineer",
  description: "Portfolio of Arulvelu Gunasekaran — Automation & AI Engineer with 10+ years building scalable, event-driven automation systems. Specialized in LLMs, RPA, and cloud technologies.",
};

import { Navbar } from "@/components/ui/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-slate-900 text-slate-50 selection:bg-blue-500 selection:text-white overflow-x-hidden">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
      </body>
    </html>
  );
}
