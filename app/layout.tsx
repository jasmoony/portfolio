import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Webdev by Jasmine",
  description: "Webdev by Jasmine",
  icons: {
    icon: [
      { url: "/cloud.png", sizes: "32x32", type: "image/png" },
      { url: "/cloud.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/cloud.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en">
        <body className={`${inter.className} bg-mypink-200`}>{children}</body>
      </html>
    </>
  );
}
