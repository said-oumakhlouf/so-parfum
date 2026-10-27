import ClientLayout from "@/components/providers/client-layout";
import { Navbar } from "@/components/ui/navbar";
import { CartProvider } from "@/context/CartContext"; // Import du provider de panier
import { Cormorant, Montserrat } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const cormorant = Cormorant({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-montserrat",
  display: "swap",
});

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
      <body className={`${cormorant.variable} ${montserrat.variable}`}>
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
