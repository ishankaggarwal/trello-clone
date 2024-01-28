import type { Metadata } from "next";
import "./globals.css";
import Modal from "@/components/Modal";

export const metadata: Metadata = {
  title: "Trello",
  description: "Next.js Trello clone app",
  icons: {
    shortcut: "/trello.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#F5F6F8]">
        <Modal />
        {children}
      </body>
    </html>
  );
}
