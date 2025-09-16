// src/app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "94 Music — Hub musical (contenido + artistas + eventos)",
  description: "Novedades 94, entrevistas 5×5, playlists y booking sin fricciones.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable}`}>
      <body className="body-font antialiased">
        <header className="sticky top-0 z-50 border-b border-black/10 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
          <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4">
            <Link href="/" className="flex items-center gap-3" aria-label="Inicio 94 Music">
              <img src="/logo94.png" alt="94 Music" className="h-8 w-auto" />
              <span className="font-bold text-xl text-black">94 Music</span>
            </Link>

            <nav className="flex gap-6 text-sm font-medium text-gray-800" aria-label="Principal">
              <Link href="/novedades" className="hover:opacity-80">Novedades</Link>
              <Link href="/artistas" className="hover:opacity-80">Artistas</Link>
              <Link href="/servicios" className="hover:opacity-80">Servicios</Link>
              <Link href="/eventos" className="hover:opacity-80">Eventos</Link>
              <Link
                href="/briefing"
                className="rounded-full bg-green-700 px-4 py-2 text-white transition hover:bg-green-800"
              >
                Pide propuesta
              </Link>
            </nav>
          </div>
        </header>

        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}
