import { GeistMono } from 'geist/font/mono';
import { Metadata } from 'next';
import "./globals.css";

export const metadata: Metadata = {
  title: "Links - MatheusDev",
  description: "Links para redes sociais e projetos do MatheusDev",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="pt-BR">
      <body className={GeistMono.className}>
        {children}
      </body>
    </html>
  );
}
