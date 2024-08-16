import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/Components/Nav";
import Footer from "@/Components/Footer";

export const metadata: Metadata = {
  title: "Travel",
  description: "Travel UI/UX App for Camping",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main className="relative overflow-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
