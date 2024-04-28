import type { Metadata } from "next";
import { Montserrat as Font } from "next/font/google";
import "./globals.css";

const font = Font({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Taskina Test",
  description: "This a test for Taskina PTY LD",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
