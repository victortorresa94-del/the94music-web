// src/app/page.tsx
"use client";

/* ==================== DATA ==================== */

const PILLARS = [
  {
    key: "connect",
    title: "94 Connect",
    desc: "Hacemos match entre artistas y marcas/venues con métricas y buen criterio.",
    href: "/connect",
    cover: "/images/pillars/connect.png",
  },
  {
    key: "events",
    title: "94 Events",
    desc: "Del briefing al showtime: booking, técnica y contenido post-evento.",
    href: "/events",
    cover: "/images/pillars/events.png",
  },
  {
    key: "mgmt",
    title: "94 Management",
    desc: "Plan editorial, lanzamientos, PR y crecimiento sostenible.",
    href: "/management",
    cover: "/images/pillars/mgmt.png",
  },
  {
    key: "studio",
    title: "94 Studio",
    desc: "Sesiones en vivo, grabación A/V y piezas sociales que sí convierten.",
    href: "/studio",
    cover: "/images/pillars/studio.png",
  },
];

const ARTISTAS = [
  {
    title: "Lady Jarana",
    sub: "Rumba · Pop · Fusión",
    href: "/artistas/lady-jarana",
    cover: "/artistas/artista-1.JPG",
  },
  {
    title: "Cataleya",
    sub: "Soul · Pop elegante",
    href: "/artistas/cataleya",
    cover: "/artistas/artista-2.jpg",
  },
  {
    title: "La Payara",
    sub: "Electro-cumbia · Ritmos globales",
    href: "/artistas/la-payara",
    cover: "/artistas/la-payara.avif",
  },
  {
    title: "BEX Band",
    sub: "Indie · Pop",
    href: "/artistas/bex-band",
    cover: "/artistas/bex-band.jpg",
  },
  {
    title: "Miris Way",
    sub: "Covers 80s con toque elegante",
    href: "/artistas/miris-way",
    cover: "/artistas/miris-way.jpg",
  },
];

/* ==================== PAGE ==================== */

export default function Home() {
  return (
    <main className="bg-white text-black">
      <Hero />
      <Pillars />
      <ArtistsRail />
      <Playlists />
      <Statement />
    </main>
  );
}

/* ==================== SECTIONS ==================== */

function Hero() {
  return (
    <section
      className="relative h-[100vh] w-full bg-cover bg-center flex items-center justify-center text-center"
      style={{ backgroundImage: "url('/images/hero.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 text-white">
        <h1 className="text-6xl font-bold tracking-wide">MUSIC EVERYWHERE</h1>
        <p className="mt-4 text-lg">Comunidad de artistas y proyectos musicales</p>
        <div className="mt-6 flex justify-center gap-4">
          <a href="/briefing" className="px-6 py-3 rounded-full bg-white text-black">
            Crea tu Live Music
          </a>
          <a href="/artistas" className="px-6 py-3 rounded-full border border-white">
            Ver artistas
          </a>
        </div>
        <div className="mt-6 flex justify-center gap-6 text-sm">
          <span>Comunidad <b>14k+</b></span>
          <span>Artistas <b>25+</b></span>
          <span>Eventos <b>60+</b></span>
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
        <a className="text-sm underline decoration-black/30 hover:decoration-black" href="/servicios">
          Ver todos los servicios →
        </a>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {PILLARS.map((p) => (
          <a
            key={p.key}
            href={p.href}
            className="group relative isolate overflow-hidden rounded-2xl h-48 flex items-end p-4"
            style={{
              backgroundImage: `url('${p.cover}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition" />
            <div className="relative z-10 text-white">
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <p className="text-sm opacity-90">{p.desc}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

function Statement() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-14">
      <p className="text-balance text-center text-2xl font-semibold leading-tight sm:text-3xl">
        “Somos el puente entre <span className="underline decoration-black/20">artistas con algo que decir</span> y{" "}
        <span className="underline decoration-black/20">marcas/eventos con algo que contar</span>. Curamos, producimos y
        convertimos cada show en contenido que vive más allá de la noche.”
      </p>
      <div className="mt-6 flex justify-center">
        <a
          href="/contacto"
          className="inline-flex items-center rounded-2xl border border-black/10 px-5 py-2.5 hover:bg-black/5"
        >
          Hablemos
        </a>
      </div>
    </section>
  );
}

function ArtistsRail() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <div className="mb-4 flex items-end justify-between">
        <h2 className="text-2xl font-semibold">Artistas destacados</h2>
        <a className="text-sm underline decoration-black/30 hover:decoration-black" href="/artistas">
          Ver todos →
        </a>
      </div>

      <div className="flex gap-3 overflow-x-auto pb-2 pt-1 snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {ARTISTAS.map((a) => (
          <a
            key={a.title}
            href={a.href}
            className="group snap-start relative isolate shrink-0 w-[82%] sm:w-[46%] lg:w-[31%] overflow-hidden rounded-2xl"
          >
            <div className="relative h-64 w-full overflow-hidden">
              <img
                src={a.cover}
                alt={a.title}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.05]"
                loading="lazy"
              />
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
          width="100%"
          height="352"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        />
        <div>
          <h3 className="text-xl font-semibold">Radar 94</h3>
          <p className="mt-1 text-black/70">
            Lanzamientos ES/Latam y joyitas de la escena. <span className="font-medium">Actualizada semanalmente.</span>
          </p>
          <div className="mt-3 flex gap-2">
            <a
              className="inline-flex items-center rounded-2xl bg-black px-5 py-2.5 text-white transition hover:opacity-90"
              href="/playlists"
            >
              Seguir en Spotify
            </a>
            <a
              className="inline-flex items-center rounded-2xl border border-black/10 px-5 py-2.5 text-black hover:bg-black/5"
              href="/novedades"
            >
              Ver novedades
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}


