import ClientLayout from "@/components/providers/client-layout";
import { Navbar } from "@/components/ui/navbar";
import { CartProvider } from "@/context/CartContext"; // Import du provider de panier
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sélya Parfum",
  description: "Découvrez des parfums d'exception",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <CartProvider>
          <Navbar />
          {/* Le provider de panier englobe les enfants pour fournir le contexte */}
          <ClientLayout>{children}</ClientLayout>
          <Toaster />
        </CartProvider>
      </body>
    </html>
  );
}
