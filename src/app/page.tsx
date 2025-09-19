"use client";
import React, { useState, useMemo } from "react";

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

/* ==================== SECTIONS ==================== */
function NovedadesMusicales() {
  const NOTICIAS = [
    {
      title: "Estopa pondrá la música del Piromusical de La Mercè 2025",
      desc: "Cierre de fiesta mayor el 28 de septiembre",
      href: "https://www.timeout.es/barcelona/es/noticias/estopa-protagonista-del-piromusical-de-la-merce-2025-090425",
      image: "/news/estopa.jpg",
      fuente: "TimeOut",
      fecha: "9 sept 2025",
    },
    {
      title: "Belén Aguilera prepara nuevo álbum",
      desc: "Todo sobre su evolución pop",
      href: "https://www.mondosonoro.com/artistas-musica/belen-aguilera/",
      image: "/news/belen.jpg",
      fuente: "MondoSonoro",
      fecha: "16 sept 2025",
    },
    {
      title: "Pignoise avanza su nuevo single 'Celos'",
      desc: "Vuelven al sonido más guitarrero",
      href: "https://los40.com/2025/09/16/pignoise-sacara-su-lado-guitarrero-en-celos-su-proxima-cancion/",
      image: "/news/pignoise.avif",
      fuente: "LOS40",
      fecha: "16 sept 2025",
    },
    {
      title: "Aitana, dardito a Miguel Bernardeau en su nuevo tema",
      desc: "Confirma que la canción va dedicada a su ex",
      href: "https://www.hola.com/actualidad/20250602835506/aitana-lo-confirma-su-nueva-cancion-esta-dedicada-a-su-ex-miguel-bernardeau/",
      image: "/news/aitana.jpg",
      fuente: "¡HOLA!",
      fecha: "2 jun 2025",
    },
    {
      title: "Rosalía, en el centro de una nueva polémica",
      desc: "El País SModa analiza el caso Adrover",
      href: "https://elpais.com/smoda/moda/2025-07-29/sed-mediatica-o-activismo-politico-lo-que-encierra-la-polemica-de-miguel-adrover-con-rosalia.html",
      image: "/news/rosalia.avif",
      fuente: "El País SModa",
      fecha: "29 jul 2025",
    },
  ];

  return (
    <section className="border-y border-black/5 bg-[#fffaf3] py-10">
      <div className="mx-auto mb-4 flex max-w-6xl items-end justify-between px-4">
        <h2 className="text-2xl font-semibold">Novedades musicales</h2>
        <a className="text-sm underline decoration-black/30 hover:decoration-black" href="/novedades">
          Ver todas →
        </a>
      </div>

      <div className="mx-auto flex max-w-6xl gap-3 overflow-x-auto px-4 pb-2 pt-1 snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {NOTICIAS.map((n) => (
          <a
            key={n.title}
            href={n.href}
            target="_blank"
            rel="noopener noreferrer"
            className="snap-start shrink-0 basis-[82%] sm:basis-[46%] lg:basis-[31%] rounded-2xl bg-white ring-1 ring-black/5 hover:ring-black/10 transition overflow-hidden"
          >
            <div className="relative h-40 w-full">
              <img
                src={n.image}
                alt={n.title}
                className="h-full w-full object-cover"
                loading="lazy"
              />
              <span className="absolute top-2 left-2 rounded-full bg-white/90 px-2 py-0.5 text-xs text-black/70 ring-1 ring-black/10">
                {n.fuente}
              </span>
            </div>
            <div className="p-4">
              <h3 className="text-base font-semibold">{n.title}</h3>
              <p className="mt-1 text-sm text-black/60">{n.desc}</p>
              <p className="mt-2 text-xs text-black/40">{n.fecha}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}


/* ==================== PAGE ==================== */

export default function Home() {
  return (
    <main className="bg-white text-black">
      <Hero />
      <Pillars />
      <Statement />
      <CaseStudyHighlight />
      <ArtistsRail />
      <Playlists />
      <NovedadesMusicales />
      <JoinAsArtistCTA />
      <OpportunitiesPreview />
      <SoundPickerQuiz />
      <CoverageMap />
      <FindArtistCTA />
      <ArtistServicesShowcase />
    </main>
  );
}

/* ... el resto de Hero, Pillars, ArtistsRail, Playlists, Statement se queda igual ... */

/* ==================== SECTIONS ==================== */

function Hero() {
  return (
    <section className="relative h-[100vh] w-full overflow-hidden">
      {/* Video de fondo */}
      <video
        autoPlay
        muted
        loop
        playsInline
        poster="/images/hero-poster.jpg"        /* opcional: frame estático */
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/videos/hero.mp4?v=20250918a" type="video/mp4" />
        {/* fallback breve */}
        Tu navegador no soporta video en HTML5.
      </video>

      {/* Overlay para legibilidad */}
      <div className="absolute inset-0 bg-black/75" />

      {/* Contenido */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-white">
        <h1 className="text-4xl sm:text-6xl font-bold tracking-wide">Music Everywhere.</h1>
        <p className="mt-4 text-lg sm:text-xl">Comunidad de artistas y proyectos musicales</p>

        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <a
            href="/briefing"
            className="px-6 py-3 rounded-full bg-white text-black font-semibold transition hover:bg-white/90"
          >
            Crea tu Live Music
          </a>
          <a
            href="/artistas"
            className="px-6 py-3 rounded-full border border-white/80 text-white font-semibold transition hover:bg-white/10"
          >
            Ver artistas
          </a>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-sm text-white/90">
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

function News() {
  return (
    <section className="bg-[#fffaf3] py-14 border-y border-black/5">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-6 flex items-end justify-between">
          <h2 className="text-2xl font-semibold">Novedades musicales</h2>
          <a className="text-sm underline decoration-black/30 hover:decoration-black" href="/novedades">
            Ver todas →
          </a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {NovedadesMusicales.map((n) => (
            <a key={n.title} href={n.href} target="_blank" rel="noopener noreferrer" className="group">
              <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-gray-100">
                <img
                  src={n.image}
                  alt={n.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.05]"
                  loading="lazy"
                />
              </div>
              <h3 className="mt-3 text-lg font-semibold group-hover:underline">{n.title}</h3>
            </a>
          ))}
        </div>
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

function CaseStudyHighlight() {
  return (
    <section className="relative isolate overflow-hidden bg-white text-black py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          {/* Texto */}
          <div>
            <p className="mb-3 text-xs font-medium uppercase tracking-wide text-neutral-500">
              Caso de éxito
            </p>
            <h2 className="text-3xl font-bold sm:text-4xl">
              Así transformamos la boda de Pili &amp; Javi en una película
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-neutral-700">
              Desde el primer acorde hasta el último brindis: banda en vivo,
              sonido profesional, DJ set y ambientación. Creamos momentos que no
              se olvidan, pensados al detalle para que la música sea la
              protagonista.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/casos-de-exito/pili-y-javi"
                className="inline-flex items-center justify-center rounded-md bg-black px-5 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800"
              >
                Ver caso completo →
              </a>
              <a
                href="/contacto"
                className="inline-flex items-center justify-center rounded-md border border-black/10 px-5 py-3 text-sm font-semibold text-black transition hover:bg-black/5"
              >
                Quiero algo así
              </a>
            </div>
          </div>

          {/* Imagen */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg ring-1 ring-black/10">
            <img
              src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1600&auto=format&fit=crop"
              alt="Montaje musical en boda — 94 Music"
              className="h-full w-full object-cover object-center"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}


function JoinAsArtistCTA() {
  return (
    <section className="relative isolate overflow-hidden bg-white text-black">
      {/* Imagen de fondo */}
      <div className="absolute inset-0 -z-10">
        <img
          src="https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=1600&auto=format&fit=crop"
          alt="Músico ensayando en estudio"
          className="h-full w-full object-cover object-center"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/40 mix-blend-multiply" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-28 relative">
        <div className="max-w-2xl">
          <p className="mb-3 text-xs font-medium uppercase tracking-wide text-white/70">
            ¿Eres artista?
          </p>
          <h2 className="text-3xl font-bold sm:text-4xl text-white">
            Súmate a 94 Music
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-white/90">
            Si tienes un proyecto con alma y un directo potente, queremos
            escucharte. Te ayudamos a tocar más, sonar mejor y crecer con
            estrategia: booking, producción y visibilidad digital.
          </p>

          <ul className="mt-6 flex flex-wrap gap-2 text-sm text-white/90">
            <li className="rounded-md bg-white/10 px-3 py-1.5 ring-1 ring-white/20">
              🎤 Booking real
            </li>
            <li className="rounded-md bg-white/10 px-3 py-1.5 ring-1 ring-white/20">
              🔊 Producción & sonido
            </li>
            <li className="rounded-md bg-white/10 px-3 py-1.5 ring-1 ring-white/20">
              🎬 Contenido para RRSS
            </li>
            <li className="rounded-md bg-white/10 px-3 py-1.5 ring-1 ring-white/20">
              🌐 Webs & automatización
            </li>
          </ul>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="/artistas/aplica"
              className="inline-flex items-center justify-center rounded-md bg-white px-5 py-3 text-sm font-semibold text-neutral-900 transition hover:bg-white/90"
            >
              Aplica ahora →
            </a>
            <a
              href="/artistas"
              className="inline-flex items-center justify-center rounded-md border border-white/30 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Ver requisitos
            </a>
          </div>

          <p className="mt-4 text-xs text-white/70">
            Respuesta en 24–48h. Cupos limitados por mes.
          </p>
        </div>
      </div>
    </section>
  );
}


const TABS = ["Todos", "Bolos", "Colaboraciones", "Técnicos", "Audiovisual"];

const JOBS = [
  {
    id: "girona-duo-boda-0510",
    title: "Dúo acústico para boda",
    city: "Girona",
    dateLabel: "05 Oct",
    type: "Bolos",
    budget: "600–900€",
    tags: ["2×45’", "Rumba/Pop", "Equipo básico"],
    link: "/oportunidades/girona-duo-boda-0510",
    closes: "30 Sep",
  },
  {
    id: "bcn-dj-tardeo-1210",
    title: "DJ tardeo (set 3h)",
    city: "Barcelona",
    dateLabel: "12 Oct",
    type: "Bolos",
    budget: "300–500€",
    tags: ["Funk/Latin", "Controladora propia"],
    link: "/oportunidades/bcn-dj-tardeo-1210",
    closes: "02 Oct",
  },
  {
    id: "vlc-percusionista-2209",
    title: "Percusionista para evento corporativo",
    city: "Valencia",
    dateLabel: "22 Sep",
    type: "Técnicos",
    budget: "200–300€",
    tags: ["Cajón/Congas", "In-ears"],
    link: "/oportunidades/vlc-percusionista-2209",
    closes: "19 Sep",
  },
  {
    id: "madrid-colab-vocal-1010",
    title: "Colab vocal para single (feat.)",
    city: "Madrid",
    dateLabel: "10 Oct",
    type: "Colaboraciones",
    budget: "A negociar",
    tags: ["Urbano/Pop", "Estudio incluido"],
    link: "/oportunidades/madrid-colab-vocal-1010",
    closes: "28 Sep",
  },
  {
    id: "bcn-filmmaker-rrss-2709",
    title: "Filmmaker para reels (evento)",
    city: "Barcelona",
    dateLabel: "27 Sep",
    type: "Audiovisual",
    budget: "250–400€",
    tags: ["Reels/Vertical", "Entrega 48h"],
    link: "/oportunidades/bcn-filmmaker-rrss-2709",
    closes: "23 Sep",
  },
  {
    id: "tarragona-banda-2510",
    title: "Banda completa fiesta mayor",
    city: "Tarragona",
    dateLabel: "25 Oct",
    type: "Bolos",
    budget: "1.200–1.800€",
    tags: ["90–120’", "Backline propio"],
    link: "/oportunidades/tarragona-banda-2510",
    closes: "05 Oct",
  },
];


function OpportunitiesPreview() {
  const jobs = [
    {
      id: "girona-duo-boda-0510",
      title: "Dúo acústico para boda",
      city: "Girona",
      date: "05 Oct",
      budget: "600–900€",
      tags: ["2×45’", "Rumba/Pop"],
      link: "/oportunidades/girona-duo-boda-0510",
    },
    {
      id: "bcn-dj-tardeo-1210",
      title: "DJ tardeo (set 3h)",
      city: "Barcelona",
      date: "12 Oct",
      budget: "300–500€",
      tags: ["Funk/Latin", "Controladora propia"],
      link: "/oportunidades/bcn-dj-tardeo-1210",
    },
    {
      id: "vlc-percusionista-2209",
      title: "Percusionista evento corporativo",
      city: "Valencia",
      date: "22 Sep",
      budget: "200–300€",
      tags: ["Cajón/Congas", "In-ears"],
      link: "/oportunidades/vlc-percusionista-2209",
    },
  ];

  return (
    <section className="relative isolate overflow-hidden bg-white text-black py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <header className="max-w-3xl">
          <p className="mb-2 text-xs font-medium uppercase tracking-wide text-neutral-500">
            94 Connect
          </p>
          <h2 className="text-3xl font-bold sm:text-4xl">
            Ofertas de trabajo para músicos
          </h2>
          <p className="mt-3 text-neutral-600">
            Selección de oportunidades activas en nuestra red. Consulta más en la sección completa.
          </p>
        </header>

        {/* Grid de tarjetas */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {jobs.map((job) => (
            <a
              key={job.id}
              href={job.link}
              className="group rounded-2xl bg-white p-6 shadow-md ring-1 ring-black/10 transition hover:shadow-lg"
            >
              <h3 className="text-lg font-semibold leading-snug group-hover:underline">
                {job.title}
              </h3>
              <div className="mt-2 flex items-center gap-4 text-sm text-neutral-600">
                <span>📍 {job.city}</span>
                <span>📅 {job.date}</span>
                <span>💶 {job.budget}</span>
              </div>
              <ul className="mt-4 flex flex-wrap gap-2 text-xs text-neutral-700">
                {job.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-md bg-neutral-100 px-2.5 py-1 ring-1 ring-black/5"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
              <div className="mt-5 text-sm font-semibold text-black">
                Ver detalles →
              </div>
            </a>
          ))}
        </div>

        {/* CTA inferior */}
        <div className="mt-10 flex items-center justify-center">
          <a
            href="/oportunidades"
            className="inline-flex h-11 items-center justify-center rounded-md bg-black px-6 text-sm font-semibold text-white transition hover:bg-neutral-800"
          >
            Ver todas las ofertas →
          </a>
        </div>
      </div>
    </section>
  );
}


function iconFor(type) {
  switch (type) {
    case "Bolos":
      return "🎤";
    case "Técnicos":
      return "🛠️";
    case "Audiovisual":
      return "🎬";
    case "Colaboraciones":
      return "🤝";
    default:
      return "🎵";
  }
}

const EVENT_TYPES = [
  { id: "boda", label: "Boda" },
  { id: "corporate", label: "Evento corporativo" },
  { id: "restaurante", label: "Restaurante/Hotel" },
  { id: "fiesta", label: "Fiesta mayor / Pueblo" },
];

const MOODS = [
  { id: "fiesta", label: "Fiestón / Rumba" },
  { id: "elegante", label: "Elegante / Chill" },
  { id: "acustico", label: "Acústico / Íntimo" },
  { id: "urbano", label: "Urbano / Latin" },
];

const SIZES = [
  { id: "intimo", label: "Hasta 80 personas" },
  { id: "medio", label: "100–300 personas" },
  { id: "grande", label: "300–1000" },
];

const BUDGETS = [
  { id: "low", label: "Ajustado" },
  { id: "mid", label: "Medio" },
  { id: "high", label: "Alto" },
];

function SoundPickerQuiz() {
  const [answers, setAnswers] = useState({
    eventType: "",
    mood: "",
    size: "",
    budget: "",
  });
  const [showResult, setShowResult] = useState(false);

  const canSubmit =
    answers.eventType && answers.mood && answers.size && answers.budget;

  const rec = useMemo(() => getRecommendation(answers), [answers]);

  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-b from-pink-50 via-white to-cyan-50 text-black py-20 sm:py-24">
      <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-pink-300/20 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-cyan-300/20 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <header className="max-w-3xl text-center mx-auto">
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.16em] text-pink-600">
            Configurador
          </p>
          <h2 className="text-4xl font-bold sm:text-5xl bg-gradient-to-r from-pink-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
            Crea tu Live Music
          </h2>
          <p className="mt-4 text-lg text-neutral-700">
            Diseña tu experiencia musical en segundos: dinos el estilo, el mood y
            el presupuesto, y te damos una propuesta lista para sonar.
          </p>
        </header>

        {/* Quiz */}
        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7 space-y-8">
            <Fieldset
              legend="Tipo de evento"
              name="eventType"
              options={[
                { id: "boda", label: "💍 Boda" },
                { id: "corporate", label: "🏢 Corporativo" },
                { id: "restaurante", label: "🍴 Restaurante/Hotel" },
                { id: "fiesta", label: "🎉 Fiesta mayor" },
              ]}
              value={answers.eventType}
              onChange={(v) => setAnswers((s) => ({ ...s, eventType: v }))}
              color="from-pink-500 to-pink-600"
            />
            <Fieldset
              legend="Ambiente que buscas"
              name="mood"
              options={[
                { id: "fiesta", label: "🔥 Fiestón" },
                { id: "elegante", label: "✨ Elegante" },
                { id: "acustico", label: "🎶 Acústico" },
                { id: "urbano", label: "🌆 Urbano" },
              ]}
              value={answers.mood}
              onChange={(v) => setAnswers((s) => ({ ...s, mood: v }))}
              color="from-purple-500 to-purple-600"
            />
            <Fieldset
              legend="Tamaño del evento"
              name="size"
              options={[
                { id: "intimo", label: "👥 Hasta 80" },
                { id: "medio", label: "👥 100–300" },
                { id: "grande", label: "👥 300–1000" },
              ]}
              value={answers.size}
              onChange={(v) => setAnswers((s) => ({ ...s, size: v }))}
              color="from-cyan-500 to-cyan-600"
            />
            <Fieldset
              legend="Presupuesto"
              name="budget"
              options={[
                { id: "low", label: "💶 Ajustado" },
                { id: "mid", label: "💶 Medio" },
                { id: "high", label: "💶 Alto" },
              ]}
              value={answers.budget}
              onChange={(v) => setAnswers((s) => ({ ...s, budget: v }))}
              color="from-emerald-500 to-emerald-600"
            />

            {/* Botón principal */}
            <div className="flex flex-wrap gap-4">
              <button
                disabled={!canSubmit}
                onClick={() => setShowResult(true)}
                className={[
                  "inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-semibold text-white transition",
                  canSubmit
                    ? "bg-gradient-to-r from-pink-600 via-purple-600 to-cyan-600 hover:opacity-90 shadow-lg"
                    : "bg-neutral-300 text-neutral-500 cursor-not-allowed",
                ].join(" ")}
              >
                🎵 Ver mi propuesta →
              </button>
              <a
                href="/contacto"
                className="inline-flex items-center justify-center rounded-md border border-neutral-300 px-6 py-3 text-sm font-semibold text-neutral-800 transition hover:bg-neutral-100"
              >
                Hablar con un experto
              </a>
            </div>
          </div>

          {/* Resultado */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-white shadow-lg ring-1 ring-black/10 overflow-hidden">
              {showResult ? (
                <ResultCard rec={rec} />
              ) : (
                <PlaceholderCard />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Subcomponentes ---------- */

function Fieldset({ legend, name, options, value, onChange, color }) {
  return (
    <fieldset>
      <legend className="mb-3 text-sm font-semibold uppercase tracking-wide text-neutral-700">
        {legend}
      </legend>
      <div className="flex flex-wrap gap-2">
        {options.map((opt) => {
          const active = value === opt.id;
          return (
            <button
              type="button"
              key={opt.id}
              onClick={() => onChange(opt.id)}
              className={[
                "rounded-full px-4 py-2 text-sm font-medium transition shadow-sm",
                active
                  ? `bg-gradient-to-r ${color} text-white`
                  : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200",
              ].join(" ")}
            >
              {opt.label}
            </button>
          );
        })}
      </div>
    </fieldset>
  );
}

function PlaceholderCard() {
  return (
    <div className="flex h-full flex-col items-center justify-center p-8 text-center text-neutral-600">
      <div className="text-5xl">🎛️</div>
      <h4 className="mt-4 text-lg font-semibold">Tu propuesta aparecerá aquí</h4>
      <p className="mt-2 text-sm">
        Elige tipo de evento, mood, tamaño y presupuesto.
      </p>
    </div>
  );
}

function ResultCard({ rec }) {
  return (
    <div>
      <div className="relative aspect-[16/9] w-full overflow-hidden">
        <img
          src={rec.image}
          alt={rec.title}
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <div className="absolute bottom-3 left-3 text-sm font-medium text-white bg-black/50 px-2 py-1 rounded">
          {rec.priceHint}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold">{rec.title}</h3>
        <p className="mt-2 text-sm text-neutral-700">{rec.description}</p>
        <ul className="mt-4 flex flex-wrap gap-2 text-xs text-neutral-700">
          {rec.tags.map((t) => (
            <li
              key={t}
              className="rounded-md bg-neutral-100 px-2.5 py-1 ring-1 ring-black/5"
            >
              {t}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/* ---------- Recomendación simple (ejemplo) ---------- */
function getRecommendation({ eventType, mood, size, budget }) {
  if (!eventType || !mood || !size || !budget) {
    return {
      title: "Dúo acústico (recomendación base)",
      description:
        "Formato versátil que funciona en la mayoría de contextos. Si nos das más info, lo afinamos al 100%.",
      tags: ["Versátil", "Compacto", "2×45’"],
      image:
        "https://images.unsplash.com/photo-1483412033650-1015ddeb83d1?q=80&w=1600&auto=format&fit=crop",
      priceHint: "desde 600–1.200€",
    };
  }
  return {
    title: "Banda completa con DJ closing",
    description:
      "Show potente (90–120’) con repertorio popular y cierre con DJ. Perfecto para bodas o fiestas grandes.",
    tags: ["Banda 4–6", "DJ Closing", "Sonido & Técnico"],
    image:
      "https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=1600&auto=format&fit=crop",
    priceHint: "desde 1.800–3.500€",
  };
}


/**
 * Mapa de cobertura / visión global
 * - Imagen de stock ya incluida (Unsplash)
 * - Pins con pulse animado (Tailwind)
 * - Mobile: oculta mapa y muestra lista
 * Ajusta números, ciudades y enlaces cuando quieras.
 */

function CoverageMap() {
  const stats = [
    { label: "Ciudades", value: 12, color: "text-pink-600" },
    { label: "Países", value: 3, color: "text-purple-600" },
    { label: "Eventos", value: 40, color: "text-cyan-600", suffix: "+" },
  ];

  return (
    <section className="relative isolate overflow-hidden bg-white text-black py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <header className="max-w-3xl text-center mx-auto">
          <p className="mb-2 text-xs font-medium uppercase tracking-wide text-neutral-500">
            Cobertura
          </p>
          <h2 className="text-4xl font-bold sm:text-5xl">
            De Barcelona al mundo
          </h2>
          <p className="mt-3 text-lg text-neutral-600">
            Hemos llevado nuestra música a diferentes rincones. Y esto es solo
            el comienzo.
          </p>
        </header>

        {/* Stats con animación */}
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3 text-center">
          {stats.map((s) => (
            <AnimatedStat
              key={s.label}
              value={s.value}
              label={s.label}
              color={s.color}
              suffix={s.suffix}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 flex items-center justify-center">
          <a
            href="/donde-hemos-tocado"
            className="inline-flex h-12 items-center justify-center rounded-md bg-gradient-to-r from-pink-600 via-purple-600 to-cyan-600 px-8 text-sm font-semibold text-white shadow-md transition hover:opacity-90"
          >
            Ver todos los destinos →
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------- Subcomponentes ---------- */

function AnimatedStat({ value, label, color, suffix }) {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    let start = 0;
    const end = value;
    const duration = 1200; // ms
    const step = Math.ceil(end / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [value]);

  return (
    <div>
      <div
        className={`text-5xl sm:text-6xl font-extrabold tracking-tight ${color}`}
      >
        {count}
        {suffix || ""}
      </div>
      <div className="mt-2 text-sm font-medium text-neutral-600">{label}</div>
    </div>
  );
}


/**
 * Pin con animación "ping" y etiqueta.
 * Usa porcentajes para posicionar sobre el mapa.
 * top/left deben ser strings con "%"
 */
function Pin({ top = "50%", left = "50%", label = "Ubicación" }) {
  return (
    <div
      className="group absolute"
      style={{ top, left, transform: "translate(-50%, -50%)" }}
      aria-label={label}
    >
      <span className="absolute -left-1.5 -top-1.5 inline-flex h-3 w-3">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/50 opacity-75"></span>
        <span className="relative inline-flex h-3 w-3 rounded-full bg-white"></span>
      </span>
      <div className="translate-y-4 whitespace-nowrap rounded-md bg-black/70 px-2 py-1 text-xs font-medium text-white/95 ring-1 ring-white/15 opacity-0 transition group-hover:translate-y-2 group-hover:opacity-100">
        {label}
      </div>
    </div>
  );
}


function FindArtistCTA() {
  const [open, setOpen] = useState(null);

  const steps = [
    {
      id: 1,
      title: "Cuéntanos lo esencial",
      desc: "Fecha, ciudad, tipo de evento, estilo y presupuesto aproximado.",
    },
    {
      id: 2,
      title: "Buscamos por ti",
      desc: "Encontramos al artista que encaje con lo que necesitas, ya sea de nuestro roster o de fuera.",
    },
    {
      id: 3,
      title: "Recibes tu propuesta",
      desc: "Te presentamos opciones claras con vídeos y precios para que decidas rápido y sin líos.",
    },
  ];

  return (
    <section className="relative isolate overflow-hidden bg-white text-black py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          {/* Texto principal */}
          <div>
            <p className="mb-2 text-xs font-medium uppercase tracking-wide text-neutral-500">
              Matching a medida
            </p>
            <h2 className="text-3xl font-bold sm:text-4xl">
              Encuentra a tu artista perfecto en 3 pasos
            </h2>
            <p className="mt-4 text-neutral-600">
              No es solo un catálogo. Nos cuentas lo que buscas y nosotros nos
              encargamos de proponerte al artista ideal para tu evento.
            </p>

            {/* CTA */}
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/encuentra-tu-artista"
                className="inline-flex items-center justify-center rounded-md bg-black px-5 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800"
              >
                Empezar ahora →
              </a>
              <a
                href="/como-funciona"
                className="inline-flex items-center justify-center rounded-md border border-black/10 px-5 py-3 text-sm font-semibold text-black transition hover:bg-neutral-100"
              >
                Ver cómo funciona
              </a>
            </div>
          </div>

          {/* Pasos verticales en acordeón */}
          <div className="space-y-4">
            {steps.map((s) => (
              <div
                key={s.id}
                className="rounded-xl border border-black/10 bg-neutral-50 transition hover:bg-neutral-100"
              >
                <button
                  className="flex w-full items-center justify-between px-5 py-4 text-left"
                  onClick={() => setOpen(open === s.id ? null : s.id)}
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-white text-sm font-bold">
                      {s.id}
                    </span>
                    <span className="font-medium">{s.title}</span>
                  </div>
                  <span className="ml-2 text-xl text-neutral-500">
                    {open === s.id ? "–" : "+"}
                  </span>
                </button>
                {open === s.id && (
                  <div className="px-14 pb-4 text-sm text-neutral-600">
                    {s.desc}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


/**
 * Servicios para artistas — Showcase
 * - Fondo con mesh + glass cards con hover
 * - Showreel horizontal (scroll-snap) con imágenes 16:9
 * - 4 servicios clave con entregables y CTA
 * - Sin dependencias externas (solo Tailwind)
 */
function ArtistServicesShowcase() {
  const services = [
    {
      id: "branding",
      title: "Branding & Imagen",
      desc: "Creamos una identidad sólida: logo, presskit, portadas y coherencia visual en todos los canales.",
      deliverables: ["Logo", "EPK", "Plantillas RRSS", "Portadas"],
      eta: "10–15 días",
      from: "desde 450€",
      href: "/servicios/branding-artistico",
      icon: "🎨",
    },
    {
      id: "web-automation",
      title: "Web & Automatización",
      desc: "Landing pro, agenda online y sistemas automáticos que responden a tus fans y promotores en segundos.",
      deliverables: ["Presskit online", "Agenda", "Embudo leads", "Autorespuestas IA"],
      eta: "7–14 días",
      from: "desde 590€",
      href: "/servicios/web-automatizacion",
      icon: "⚙️",
    },
    {
      id: "growth-ads",
      title: "Growth & Ads",
      desc: "Campañas digitales para llenar fechas: segmentación precisa, contenidos que convierten y analítica clara.",
      deliverables: ["Campañas Meta/YouTube", "Plan de contenidos", "Tracking", "Reporte mensual"],
      eta: "30 días (ciclo)",
      from: "desde 350€/mes",
      href: "/servicios/growth-ads",
      icon: "📈",
    },
    {
      id: "live-prod",
      title: "Producción Musical & Directo",
      desc: "Ensayos dirigidos, riders, técnicos de PA/monitores y show listo para escenario sin sorpresas.",
      deliverables: ["Arreglo & dirección", "Rider & stage plot", "Ensayos guiados", "Técnico en vivo"],
      eta: "Según proyecto",
      from: "presupuesto",
      href: "/servicios/produccion-en-vivo",
      icon: "🔊",
    },
  ];

  return (
    <section className="relative isolate overflow-hidden bg-white text-black py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <header className="max-w-3xl">
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.16em] text-neutral-500">
            Para artistas
          </p>
          <h2 className="text-4xl font-bold sm:text-5xl uppercase">94 MANAGEMENT</h2>
          <p className="mt-4 text-neutral-600">
            Estrategia, diseño y producción. Te ayudamos a crecer como proyecto musical con visión global y foco en el directo.
          </p>
        </header>

        {/* Grid de servicios */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {services.map((s) => (
            <a
              key={s.id}
              href={s.href}
              className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-md ring-1 ring-black/10 transition hover:shadow-lg"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">{s.icon}</span>
                <h3 className="text-xl font-semibold">{s.title}</h3>
              </div>

              <p className="mt-3 text-sm text-neutral-700">{s.desc}</p>

              {/* Entregables */}
              <ul className="mt-4 flex flex-wrap gap-2 text-xs text-neutral-700">
                {s.deliverables.map((d) => (
                  <li
                    key={d}
                    className="rounded-md bg-neutral-100 px-2.5 py-1 ring-1 ring-black/5"
                  >
                    {d}
                  </li>
                ))}
              </ul>

              {/* Meta */}
              <div className="mt-5 flex items-center justify-between text-sm">
                <div className="flex items-center gap-3 text-neutral-600">
                  <span className="rounded-md bg-neutral-100 px-2 py-1 ring-1 ring-black/5">
                    ⏱ {s.eta}
                  </span>
                  <span className="rounded-md bg-neutral-100 px-2 py-1 ring-1 ring-black/5">
                    💶 {s.from}
                  </span>
                </div>
                <span className="font-semibold text-neutral-900 group-hover:underline">
                  Ver detalle →
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* CTA inferior */}
        <div className="mt-12 flex flex-col gap-3 rounded-xl bg-neutral-50 p-6 ring-1 ring-black/5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-neutral-700">
            ¿Quieres una revisión gratuita de tu proyecto? Te damos quick-wins y un plan claro.
          </p>
          <div className="flex gap-3">
            <a
              href="/auditoria-artistica"
              className="inline-flex h-10 items-center justify-center rounded-md bg-black px-4 text-sm font-semibold text-white transition hover:bg-neutral-800"
            >
              Pedir auditoría →
            </a>
            <a
              href="/casos-de-exito"
              className="inline-flex h-10 items-center justify-center rounded-md border border-black/10 px-4 text-sm font-semibold text-black transition hover:bg-neutral-100"
            >
              Ver casos
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

