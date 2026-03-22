import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Saksham | Cyber Security Portfolio",
  description: "Portfolio of Saksham, a Cybersecurity Analyst and Full Stack Developer specializing in network security, penetration testing, and robust web applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.className} bg-background text-foreground antialiased min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-1 w-full mx-auto">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
