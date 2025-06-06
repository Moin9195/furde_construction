import Header from "@/components/layout/Header";
import Footer from "../components/layout/Footer";
import { ThemeProvider } from "next-themes";

import "./globals.css";
import HeroSection from "@/components/section/HeroSection";

export const metadata = {
  title: "My App",
  description: "Beautiful and fast app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 font-[family-name:var(--font-geist-sans)]">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="min-h-screen bg-background dark:text-white text-black">
            <Header />

            <main>{children}</main>

            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
