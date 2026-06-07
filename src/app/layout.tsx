import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zshopiflow - Boutique Digitale à Cotonou, Bénin",
  description:
    "Zshopiflow : votre boutique de produits digitaux au Bénin. Ebooks, formations, templates. Paiement MTN Mobile Money, Moov Money et carte bancaire. Livraison instantanée.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-stone-50 text-slate-900 antialiased">{children}</body>
    </html>
  );
}
