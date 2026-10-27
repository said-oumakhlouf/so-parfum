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
  // Définir NEXT_PUBLIC_SITE_URL en production (ex. https://mon-domaine.fr)
  // pour que les images de partage (Open Graph) aient une adresse complète.
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
  ),
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
        {/* Un seul provider de panier, partagé par la navbar et les pages */}
        <CartProvider>
          <Navbar />
          {children}
          <Toaster />
        </CartProvider>
      </body>
    </html>
  );
}
