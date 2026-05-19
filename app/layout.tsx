import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

export const metadata: Metadata = {
  title: "Oscar Encarnación | Frontend Developer",
  description:
    "Portafolio de Oscar Encarnación, desarrollador frontend especializado en Next.js, Angular y experiencias web modernas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${geist.variable} antialiased`}>
      <body className="bg-[#0f172a] text-white font-sans overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}