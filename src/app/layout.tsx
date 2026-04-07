import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Georgy's Pizza y Pastas | Rosarito, Baja California",
  description: "Pizza y pasta artesanal en horno de piedra. La tradición italiana con el corazón de Baja California. Rosarito, México.",
  keywords: ["pizza", "pasta", "Rosarito", "Baja California", "restaurante italiano", "horno de piedra"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Dancing+Script:wght@600;700&family=Josefin+Sans:wght@300;400;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
