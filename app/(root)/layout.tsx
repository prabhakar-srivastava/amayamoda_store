import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import 'swiper/css';
import 'swiper/css/navigation';

// import './styles.css';
import "../globals.css";
import Navbar from "@/components/Navbar";
import ToasterProvider from "@/lib/providers/ToasterProvider";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Amayamoda Store",
  description: "Amayamoda Ecommerce Store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClerkProvider>
          <ToasterProvider />
          <Navbar />
          <div className="lg:max-w-[1280px] m-auto ">
           {children}

          </div>
          <Footer /> 
        </ClerkProvider>
      </body>
    </html>
  );
}
