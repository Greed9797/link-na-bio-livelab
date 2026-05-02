import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  style: "italic",
  weight: "400",
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 10 10'><circle cx='5' cy='5' r='5' fill='%23FE5206'/></svg>",
  },
  title: "LiveLab — Luz, Câmera e Vendas!",
  description: "Estrutura completa de Lives para sua empresa. Seja um franqueado ou apresentador LiveLab.",
  openGraph: {
    title: "LiveLab — Luz, Câmera e Vendas!",
    description: "Estrutura completa de Lives para sua empresa.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${playfair.variable}`}>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
