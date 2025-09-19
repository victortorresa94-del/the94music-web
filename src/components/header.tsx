'use client';
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 z-50 w-full transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur' : 'bg-transparent'} `}>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3" aria-label="Inicio 94 Music">
          <img src="/logo94.png" alt="94 Music" className="h-8 w-auto" />
          <span className="tracking-widest text-xl text-white">THE 94 MUSIC</span>
        </Link>

        {/* Menú */}
        <nav className="flex items-center gap-6 text-sm font-normal text-white" aria-label="Principal">
          <Link href="/novedades" className="hover:opacity-80">Novedades</Link>
          <Link href="/artistas" className="hover:opacity-80">Artistas</Link>
          <Link href="/servicios" className="hover:opacity-80">Servicios</Link>
          <Link href="/eventos" className="hover:opacity-80">Eventos</Link>
          <Link
            href="/briefing"
            className="rounded-full border border-white px-4 py-2 text-white transition hover:bg-white hover:text-black"
          >
            Contacto
          </Link>
        </nav>
      </div>
    </header>
  );
}
