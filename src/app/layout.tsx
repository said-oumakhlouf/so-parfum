import "./globals.css";
import { Navbar } from "@/components/ui/navbar";
import { Inter } from "next/font/google";
import { CartProvider } from "@/context/CartContext"; // Import du provider de panier
import ClientLayout from "@/components/providers/client-layout"; // 👈

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sélya",
  description: "Parfums de caractère, créés pour vous.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <Navbar />
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
