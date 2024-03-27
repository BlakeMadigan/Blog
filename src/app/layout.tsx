import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    template: "%s | Blake Madigan",
    default: "Blake Madigan",
  },
  description: "My Personal Website",
  applicationName: "Blake Madigans' Blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50 dark:bg-slate-800 dark:text-white">
        <Providers>
          <Navbar />
          <main className="max-w-4xl m-auto">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
