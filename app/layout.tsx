import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Trello",
  description: "Next.js Trello clone app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
