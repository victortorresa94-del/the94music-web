// src/app/page.tsx
"use client";

import { useMemo } from "react";

const PILLARS = [
  { key: "connect", title: "94 Connect", desc: "Conecta artistas con marcas, venues y oportunidades reales.", href: "/connect" },
  { key: "events", title: "94 Events", desc: "Diseño y producción de shows. Del briefing al showtime.", href: "/events" },
  { key: "mgmt", title: "94 Management", desc: "Estrategia, catálogo, prensa y crecimiento artístico.", href: "/management" },
  { key: "studio", title: "94 Studio", desc: "Audio & visual. Grabación, sesiones en vivo y contenido.", href: "/studio" },
];

const NOVEDADES = [
  { title: "Radar 94 · Semana", tag: "Lanzamientos", href: "/novedades" },
  { title: "Entrevista 5×5", tag: "Formato corto", href: "/entrevistas" },
  { title: "Flamenco & Fusión", tag: "Deep dive", href: "/flamenco" },
  { title: "Rumbo a Festivales", tag: "Guía", href: "/guia-festivales" },
  { title: "Tips de Booking", tag: "Pro", href: "/tips-booking" },
];

const ARTISTAS = [
  { title: "Lady Jarana", sub: "Rumba · Pop · Fusión", href: "/artistas/lady-jarana", cover: "/artistas/lady-jarana.jpg" },
  { title: "Cataleya", sub: "Soul · Pop elegante", href: "/artistas/cataleya", cover: "/artistas/cataleya.jpg" },
  { title: "BEX Band", sub: "Indie · Pop", href: "/artistas/bex-band", cover: "/artistas/bex.jpg" },
  { title: "Caribe Song", sub: "Latino · Tropical", href: "/artistas/caribe-song", cover: "/artistas/caribe.jpg" },
  { title: "Julio Cé", sub: "Funk · Groove", href: "/artistas/julio-ce", cover: "/artistas/julio.jpg" },
];

const YT_VIDEO_ID = "dQw4w9WgXcQ"; // Video de música más confiable para testing

export default function Home() {
  return (
    <main className="bg-white text-black">
      <Hero />
      <Pillars />
      <NovedadesHoriz />
      <ArtistsRail />
      <Playlists />
      <Statement />
    </main>
  );
}

function Hero() {
  const ytSrc = useMemo(() => {
    const base = `https://www.youtube.com/embed/${YT_VIDEO_ID}`;
    const params = new URLSearchParams({
      autoplay: "1",
      mute: "1",
      controls: "0",
      loop: "1",
      playlist: YT_VIDEO_ID,
      modestbranding: "1",
      playsinline: "1",
      rel: "0",
      start: "0",
    });
    return `${base}?${params.toString()}`;
  }, []);

  return (
    <section className="relative h-[100svh] w-full overflow-hidden">
      <div className="absolute inset-0 -z-10">
        {/* Fallback background image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=2070&auto=format&fit=crop')"
          }}
        />
        {/* Video overlay */}
        <iframe
          className="absolute inset-0 h-full w-full scale-125"
          src={ytSrc}
          title="94 Music — background"
          allow="autoplay; fullscreen; encrypted-media"
          allowFullScreen
          style={{ pointerEvents: "none", border: "0" }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/60 to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-black to-transparent" />
      </div>

      <div className="relative mx-auto flex h-full max-w-6xl flex-col justify-end gap-6 px-4 pb-14 sm:pb-16">
        <div className="max-w-3xl">
          <h1 className="font-semibold tracking-tight text-white text-5xl leading-[1.05] sm:text-6xl">
            Música en vivo que <span className="underline decoration-white/60 underline-offset-4">mueve personas</span> y marca diferencia.
          </h1>
          <p className="mt-3 text-white/85 text-lg">
            Curaduría real, producción sin estrés y contenido que trasciende el evento. <span className="font-medium">Helping crazy people since 1994.</span>
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <a href="/briefing" className="inline-flex items-center rounded-2xl bg-white px-5 py-2.5 text-black transition hover:opacity-90">
            Pide propuesta
          </a>
          <a href="/artistas" className="inline-flex items-center rounded-2xl border border-white/30 bg-white/10 px-5 py-2.5 text-white backdrop-blur transition hover:bg-white/20">
            Ver artistas
          </a>
        </div>

        <div className="mt-1 flex flex-wrap gap-4 text-sm text-white/80">
          <span>Comunidad <b className="text-white">14k+</b></span>
          <span>Clips/semana <b className="text-white">4–6</b></span>
          <span>Respuesta <b className="text-white">&lt;24h</b></span>
        </div>
      </div>
    </section>
  );
}

function Pillars() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <div className="mb-6 flex items-end justify-between">
        <h2 className="text-2xl font-semibold">Qué hacemos</h2>
        <a className="text-sm underline decoration-black/30 hover:decoration-black" href="/servicios">Ver todos los servicios →</a>
      </div>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {PILLARS.map(p => (
          <a key={p.key} href={p.href} className="group rounded-2xl border border-black/10 p-5 transition hover:border-black/20 hover:shadow-[0_8px_30px_rgb(0,0,0,0.07)]">
            <div className="mb-2 flex items-center justify-between">
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-black/10 transition group-hover:translate-x-0.5">→</span>
            </div>
            <p className="text-sm text-black/70">{p.desc}</p>
          </a>
        ))}
      </div>
    </section>
  );
}

function NovedadesHoriz() {
  return (
    <section className="border-y border-black/5 bg-[#fffaf3] py-10">
      <div className="mx-auto mb-4 flex max-w-6xl items-end justify-between px-4">
        <h2 className="text-2xl font-semibold">Novedades 94</h2>
        <a className="text-sm underline decoration-black/30 hover:decoration-black" href="/novedades">Ver todo →</a>
      </div>

      <div className="mx-auto flex max-w-6xl gap-3 overflow-x-auto px-4 pb-2 pt-1 snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {NOVEDADES.map((n) => (
          <a key={n.title} href={n.href} className="snap-start shrink-0 basis-[82%] sm:basis-[46%] lg:basis-[31%] rounded-2xl bg-white p-5 ring-1 ring-black/5 transition hover:ring-black/10">
            <span className="mb-2 inline-flex items-center rounded-full border border-black/10 px-2 py-0.5 text-xs text-black/70">{n.tag}</span>
            <h3 className="text-lg font-semibold">{n.title}</h3>
            <p className="mt-1 text-sm text-black/60">Actualizado cada semana con lo que de verdad importa.</p>
          </a>
        ))}
      </div>
    </section>
  );
}

function ArtistsRail() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <div className="mb-4 flex items-end justify-between">
        <h2 className="text-2xl font-semibold">Artistas destacados</h2>
        <a className="text-sm underline decoration-black/30 hover:decoration-black" href="/artistas">Ver todos →</a>
      </div>

      <div className="flex gap-3 overflow-x-auto pb-2 pt-1 snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {ARTISTAS.map((a) => (
          <a key={a.title} href={a.href} className="group snap-start relative isolate shrink-0 w-[82%] sm:w-[46%] lg:w-[31%] overflow-hidden rounded-2xl">
            <div className="relative h-64 w-full overflow-hidden">
              <img src={a.cover} alt={a.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.05]" loading="lazy" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent opacity-90" />
            </div>
            <div className="absolute inset-x-0 bottom-0 z-10 p-4 text-white">
              <h3 className="text-lg font-semibold">{a.title}</h3>
              <p className="text-sm text-white/85">{a.sub}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

function Playlists() {
  return (
    <section className="border-y border-black/5 bg-white py-12">
      <div className="mx-auto grid max-w-6xl items-start gap-6 px-4 md:grid-cols-[1.2fr_.8fr]">
        <iframe
          className="w-full rounded-2xl"
          style={{ borderRadius: 12 }}
          src="https://open.spotify.com/embed/playlist/3gpDn1tippUS291kgXeSeJ?utm_source=generator"
          width="100%" height="352" frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        />
        <div>
          <h3 className="text-xl font-semibold">Radar 94</h3>
          <p className="mt-1 text-black/70">Lanzamientos ES/Latam y joyitas de la escena. <span className="font-medium">Actualizada semanalmente.</span></p>
          <div className="mt-3 flex gap-2">
            <a className="inline-flex items-center rounded-2xl bg-black px-5 py-2.5 text-white transition hover:opacity-90" href="/playlists">Seguir en Spotify</a>
            <a className="inline-flex items-center rounded-2xl border border-black/10 px-5 py-2.5 text-black hover:bg-black/5" href="/novedades">Ver novedades</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Statement() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-14">
      <p className="text-balance text-center text-2xl font-semibold leading-tight sm:text-3xl">
        “Somos el puente entre <span className="underline decoration-black/20">artistas con algo que decir</span> y <span className="underline decoration-black/20">marcas/eventos con algo que contar</span>.
        Curamos, producimos y convertimos cada show en contenido que vive más allá de la noche.”
      </p>
      <div className="mt-6 flex justify-center">
        <a href="/contacto" className="inline-flex items-center rounded-2xl border border-black/10 px-5 py-2.5 hover:bg-black/5">Hablemos</a>
      </div>
    </section>
  );
}
