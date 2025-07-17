"use client";
import "./globals.css";
import { Navbar } from "@/components/ui/navbar";
import { Inter } from "next/font/google";
import { CartProvider } from "@/context/CartContext"; // Import du provider de panier
import ClientLayout from "@/components/providers/client-layout";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <Navbar />
        <CartProvider>
          {/* Le provider de panier englobe les enfants pour fournir le contexte */}
          <ClientLayout>{children}</ClientLayout>
        </CartProvider>
      </body>
    </html>
  );
}
