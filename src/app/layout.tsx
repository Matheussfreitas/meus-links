import type { Metadata } from "next";
import "./globals.css";
import { Righteous } from "next/font/google"

const righteous = Righteous({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Links - MatheusDev",
  description: "Links para redes sociais e projetos do MatheusDev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={righteous.className}>
        {children}
      </body>
    </html>
  );
}
