import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Login from "./landingpage/login/page";
import Register from "./landingpage/register/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EaseMS",
  description: "The management system for organizations",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      {children}
      </body>
    </html>
  );
}
