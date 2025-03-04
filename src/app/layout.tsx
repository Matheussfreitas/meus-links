'use client'
import "./globals.css";
import { GeistMono } from 'geist/font/mono';
import { ThemeProviderWrapper } from "./components/theme-context/ThemeContext";


export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="pt-br">
      <ThemeProviderWrapper>
        <body className={GeistMono.className}>
          {children}
        </body>
      </ThemeProviderWrapper>
    </html>
  );
}
