import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "./Provider";
import Navbar from "@/app/components/Navbar";
import StickyNavbar from "@/app/components/StickyNavbar";
import Footer from "@/app/components/Footer";
import ClientLayout from "./ClientLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Testo Burger",
  description: "Taste the flavor revolution – delicious burgers delivered fresh and fast with Testo Burger.",
  icons: {
    icon: "/logo.png", // Make sure this file exists in /public directory
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          {/* Global Components */}
          <Navbar />
          <StickyNavbar />
          
          {/* Page Content */}
          <ClientLayout>
            <main>{children}</main>
          </ClientLayout>

          <Footer />
        </Providers>
      </body>
    </html>
  );
}
