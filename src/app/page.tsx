"use client";

import { useMemo, useState } from "react";

/* ---------------- HELPERS ---------------- */
function getISOWeek(date = new Date()) {
  // Semana ISO aproximada para mostrar en Home
  const tmp = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  const dayNum = tmp.getUTCDay() || 7;
  tmp.setUTCDate(tmp.getUTCDate() + 4 - dayNum);
  const yearStart = new Date(Date.UTC(tmp.getUTCFullYear(),0,1));
  return Math.ceil((((tmp.getTime() - yearStart.getTime()) / 86400000) + 1)/7);
}

type Card = {
  title: string;
  subtitle?: string;
  tags?: string[];
  href?: string;
};

const ARTISTAS: Record<"Bodas"|"Rooftop"|"Corporate", Card[]> = {
  Bodas: [
    { title: "Cataleya", subtitle: "Soul · Pop elegante", tags: ["Ceremonia", "Cóctel"], href: "/artistas/cataleya" },
    { title: "Lady Jarana", subtitle: "Rumba · Pop · Fusión", tags: ["Fiesta"], href: "/artistas/lady-jarana" },
    { title: "Duo Lua", subtitle: "Acústico · Íntimo", tags: ["Ceremonia", "Acústico"], href: "/artistas/duo-lua" },
  ],
  Rooftop: [
    { title: "BEX Band", subtitle: "Indie · Pop", tags: ["Afterwork"], href: "/artistas/bex-band" },
    { title: "Caribe Song", subtitle: "Latino · Tropical", tags: ["Sunset"], href: "/artistas/caribe-song" },
    { title: "Julio Cé", subtitle: "Funk · Groove", tags: ["Vibes"], href: "/artistas/julio-ce" },
  ],
  Corporate: [
    { title: "Rebecca & Lorenzo", subtitle: "Jazz · Classy", tags: ["Gala"], href: "/artistas/rebecca-lorenzo" },
    { title: "La Quinta Voce", subtitle: "Vocal · Show", tags: ["Auditorio"], href: "/artistas/la-quinta-voce" },
    { title: "Ángel González", subtitle: "Guitarra · Flamenco", tags: ["Cocktail"], href: "/artistas/angel-gonzalez" },
  ],
};

const NOVEDADES: Card[] = [
  { title: "Radar 94 — Semana actual", subtitle: "Lanzamientos ES/Latam seleccionados", href: "/novedades" },
  { title: "Entrevista 5×5", subtitle: "5 preguntas, 5 minutos a un artista de la escena", href: "/entrevistas" },
  { title: "Flamenco & Fusión", subtitle: "Micro-piezas para entender la escena hoy", href: "/flamenco" },
];

const EVENTOS: Card[] = [
  { title: "Afterwork — Nascor (Sant Cugat)", subtitle: "Set acústico + DJ • Sonido pro", tags: ["Corporate"], href: "/eventos" },
  { title: "Rooftop — Moxy (Barcelona)", subtitle: "Dúo/Trío • Sunset vibes", tags: ["Hospitality"], href: "/eventos" },
  { title: "Vins & Música — Mollet", subtitle: "Maridaje musical • Aforo medio", tags: ["Locales"], href: "/eventos" },
];

export default function Home() {
  return (
    <main>
      <Nav />

      <Hero />

      <ValueBullets />

      <Novedades />

      <ArtistasPorOcasión />

      <Eventos />

      <Playlists />

      <Newsletter />

      <Footer />
    </main>
  );
}

/* ---------------- NAV ---------------- */
function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-bg/80 backdrop-blur-md">
      <div className="container-94 flex h-14 items-center justify-between">
        <a href="/" className="flex items-center gap-2 font-bold">
          <span className="inline-block h-[18px] w-[18px] rounded-full bg-accent shadow-[0_0_0_3px_rgba(15,81,50,.15)]" />
          <span className="title-font text-lg">94 Music</span>
        </a>
        <nav className="hidden gap-4 md:flex">
          <a className="link-94" href="/novedades">Novedades</a>
          <a className="link-94" href="/artistas">Artistas</a>
          <a className="link-94" href="/servicios">Servicios</a>
          <a className="link-94" href="/eventos">Eventos</a>
          <a className="btn btn-solid" href="#briefing">Pide propuesta</a>
        </nav>
      </div>
    </header>
  );
}

/* ---------------- HERO (doble vía) ---------------- */
function Hero() {
  return (
    <section className="container-94 section-94 grid items-center gap-6 md:grid-cols-[1.1fr_.9fr]">
      {/* Editorial (izquierda) */}
      <div>
        <h1 className="title-font text-4xl sm:text-5xl leading-[1.05] mb-3">
          La música que importa, cada semana.
        </h1>
        <p className="muted text-lg max-w-xl">
          Novedades 94 en 5 minutos, entrevistas 5×5, playlists, y cuando lo necesitas,
          <span className="text-ink"> booking sin marrones</span>.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <a className="btn btn-solid" href="/novedades">📰 Leer la semana</a>
          <a className="btn btn-line" href="/artistas">🎤 Descubrir artistas</a>
          <a className="btn btn-ghost" href="/servicios">🛠️ Servicios</a>
        </div>
        <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-muted">
          <span>Comunidad <b className="text-ink">14k+</b></span>
          <span>Clips/semana <b className="text-ink">4–6</b></span>
          <span>Respuesta <b className="text-ink">&lt;24h</b></span>
        </div>
      </div>

      {/* Briefing 2' (derecha) */}
      <div id="briefing" className="card-94 p-4 md:p-5 bg-white">
        <h3 className="title-font text-2xl mb-2">Pide propuesta en 2 minutos</h3>
        <p className="muted mb-4">Cuéntanos lo básico y te enviamos <b>3 artistas ideales</b> en menos de 24 h.</p>
        <BriefingForm />
        <p className="muted mt-3 text-xs">Al enviar aceptas ser contactad@ para resolver tu solicitud.</p>
      </div>
    </section>
  );
}

/* ---------------- FORM (Briefing) ---------------- */
function BriefingForm() {
  const [date, setDate] = useState("");
  const [city, setCity] = useState("");
  const [att, setAtt] = useState("");
  const [budget, setBudget] = useState("1000-2000");
  const [style, setStyle] = useState("flamenco-fusion");

  const waHref = useMemo(() => {
    const msg = `Hola 94 Music! Quiero una propuesta:
- Fecha: ${date || "por definir"}
- Ciudad: ${city || "por definir"}
- Aforo aprox.: ${att || "por definir"}
- Presupuesto estimado: ${budget}
- Estilo preferente: ${style}
¿Podéis recomendarme 3 artistas ideales?`;
    return `https://wa.me/34600000000?text=${encodeURIComponent(msg)}`;
  }, [date, city, att, budget, style]);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        window.open(waHref, "_blank");
      }}
      className="grid gap-3"
    >
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <input className="h-11 rounded-xl border border-black/10 px-3" type="date" value={date} onChange={e=>setDate(e.target.value)} aria-label="Fecha" />
        <input className="h-11 rounded-xl border border-black/10 px-3" type="text" placeholder="Ciudad" value={city} onChange={e=>setCity(e.target.value)} />
      </div>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <input className="h-11 rounded-xl border border-black/10 px-3" type="number" min={20} placeholder="Aforo aprox." value={att} onChange={e=>setAtt(e.target.value)} />
        <select className="h-11 rounded-xl border border-black/10 px-3" value={budget} onChange={e=>setBudget(e.target.value)}>
          <option value="500-1000">500–1.000€</option>
          <option value="1000-2000">1.000–2.000€</option>
          <option value="2000-4000">2.000–4.000€</option>
          <option value="+4000">+4.000€</option>
        </select>
      </div>
      <select className="h-11 rounded-xl border border-black/10 px-3" value={style} onChange={e=>setStyle(e.target.value)}>
        <option value="flamenco-fusion">Flamenco & Fusión</option>
        <option value="rumba-pop">Rumba / Pop</option>
        <option value="indie-pop">Indie / Pop</option>
        <option value="jazz-elegante">Jazz / Elegante</option>
        <option value="latino-tropical">Latino / Tropical</option>
      </select>
      <button type="submit" className="btn btn-solid h-11">Ver 3 artistas recomendados</button>
      <a className="text-xs text-accent underline" href={waHref} target="_blank">…o abrir WhatsApp con el briefing pre-rellenado</a>
    </form>
  );
}

/* ---------------- VALUE ---------------- */
function ValueBullets() {
  return (
    <section className="container-94 section-94">
      <div className="grid gap-3 md:grid-cols-3">
        <div className="card-94 p-4">
          <h3 className="title-font text-xl">Curaduría real</h3>
          <p className="muted">No catálogo infinito. <b>3 opciones que encajan</b> con tu público y presupuesto.</p>
        </div>
        <div className="card-94 p-4">
          <h3 className="title-font text-xl">Producción sin estrés</h3>
          <p className="muted">Sonido, horarios, pagos, riders. <b>Todo controlado</b> para que solo disfrutes.</p>
        </div>
        <div className="card-94 p-4">
          <h3 className="title-font text-xl">Contenido que mueve</h3>
          <p className="muted">Novedades 94, entrevistas 5×5 y playlists para que <b>vuelvas cada semana</b>.</p>
        </div>
      </div>
    </section>
  );
}

/* ---------------- NOVEDADES ---------------- */
function Novedades() {
  return (
    <section className="section-94 bg-alt border-y border-black/5">
      <div className="container-94">
        <div className="mb-3 flex items-end justify-between">
          <h2 className="title-font text-3xl">Novedades 94 (Semana {getISOWeek()})</h2>
          <a className="link-94" href="/novedades">Ver todo →</a>
        </div>
        <div className="grid gap-3 md:grid-cols-3">
          {NOVEDADES.map(n => (
            <a key={n.title} className="card-94 p-4 bg-[#fffaf3]" href={n.href}>
              <h3 className="text-lg font-semibold">{n.title}</h3>
              {n.subtitle && <p className="muted">{n.subtitle}</p>}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- ARTISTAS (tabs por ocasión) ---------------- */
function ArtistasPorOcasión() {
  const tabs: ("Bodas"|"Rooftop"|"Corporate")[] = ["Bodas","Rooftop","Corporate"];
  const [tab, setTab] = useState<(typeof tabs)[number]>("Bodas");

  return (
    <section className="container-94 section-94">
      <div className="mb-3 flex items-end justify-between">
        <h2 className="title-font text-3xl">Artistas destacados</h2>
        <a className="link-94" href="/artistas">Ver todos →</a>
      </div>

      <div className="mb-4 flex gap-2">
        {tabs.map(t => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`badge ${tab===t ? "border-accent text-accent" : ""}`}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="grid gap-3 md:grid-cols-3">
        {ARTISTAS[tab].map(a => (
          <a key={a.title} className="card-94 overflow-hidden" href={a.href}>
            <div className="h-40 w-full bg-gradient-to-tr from-accent/15 to-accent2/15" />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{a.title}</h3>
              {a.subtitle && <p className="muted">{a.subtitle}</p>}
              <div className="mt-2 flex flex-wrap gap-2">
                {a.tags?.map(t => <span key={t} className="badge">{t}</span>)}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

/* ---------------- EVENTOS ---------------- */
function Eventos() {
  return (
    <section className="section-94 bg-alt border-y border-black/5">
      <div className="container-94">
        <div className="mb-3 flex items-end justify-between">
          <h2 className="title-font text-3xl">Eventos recientes</h2>
          <a className="link-94" href="/eventos">Ver todos →</a>
        </div>
        <div className="grid gap-3 md:grid-cols-3">
          {EVENTOS.map(e => (
            <a key={e.title} className="card-94 overflow-hidden" href={e.href}>
              <div className="h-40 w-full bg-[url('https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1400&auto=format&fit=crop')] bg-cover bg-center" />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{e.title}</h3>
                {e.subtitle && <p className="muted">{e.subtitle}</p>}
                <div className="mt-2 flex flex-wrap gap-2">
                  {e.tags?.map(t => <span key={t} className="badge">{t}</span>)}
                </div>
                <p className="mt-2 text-sm text-muted">Set técnico: PA 2.5kW · 2 monitores · DI x2</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- PLAYLISTS ---------------- */
function Playlists() {
  return (
    <section className="container-94 section-94">
      <div className="mb-3 flex items-end justify-between">
        <h2 className="title-font text-3xl">Playlists 94</h2>
        <a className="link-94" href="/playlists">Ver playlists →</a>
      </div>
      <div className="grid items-center gap-3 md:grid-cols-[1.2fr_.8fr]">
        <iframe
          className="w-full rounded-2xl"
          style={{ borderRadius: 12 }}
          src="https://open.spotify.com/embed/playlist/37i9dQZF1DXcBWIGoYBM5M?utm_source=generator"
          width="100%" height="352" frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        />
        <div>
          <h3 className="text-xl font-semibold">Radar 94</h3>
          <p className="muted">Actualizada semanalmente con lanzamientos ES/Latam y joyitas de la escena.</p>
          <div className="mt-3 flex gap-2">
            <a className="btn btn-solid" href="/playlists">Seguir en Spotify</a>
            <a className="btn btn-ghost" href="/novedades">Ver novedades</a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- NEWSLETTER ---------------- */
function Newsletter() {
  return (
    <section className="section-94 border-y border-black/5 bg-white">
      <div className="container-94 text-center">
        <h2 className="title-font text-3xl">Recibe el resumen semanal</h2>
        <p className="muted">3 lanzamientos, 1 entrevista, 1 insight útil. En <b>5 minutos</b>, cada semana.</p>
        <form
          onSubmit={(e)=>{ e.preventDefault(); alert("¡Gracias! En breve tendrás el resumen ✉️"); }}
          className="mx-auto mt-3 flex max-w-xl flex-col items-center gap-2 sm:flex-row"
        >
          <input className="h-11 w-full rounded-xl border border-black/10 px-3" type="email" placeholder="tu@email"
                 aria-label="Correo electrónico" required />
          <button className="btn btn-solid h-11 w-full sm:w-auto" type="submit">Suscribirme</button>
        </form>
        <p className="muted mt-2 text-xs">RGPD: nos das permiso para enviarte el resumen. Cero spam.</p>
      </div>
    </section>
  );
}

/* ---------------- FOOTER ---------------- */
function Footer() {
  return (
    <footer className="section-94">
      <div className="container-94">
        <div className="mb-2 flex flex-wrap items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 font-bold">
              <span className="inline-block h-[18px] w-[18px] rounded-full bg-accent" />
              <span className="title-font text-lg">94 Music</span>
            </div>
            <p className="muted">Helping crazy people since 1994.</p>
          </div>
          <nav className="grid grid-cols-2 gap-2 text-sm sm:grid-cols-5">
            <a href="/novedades">Novedades</a>
            <a href="/artistas">Artistas</a>
            <a href="/servicios">Servicios</a>
            <a href="/eventos">Eventos</a>
            <a href="/contacto">Contacto</a>
          </nav>
        </div>
        <div className="flex items-center justify-between border-t border-black/10 pt-2 text-xs text-muted">
          <span>© {new Date().getFullYear()} 94 Music</span>
          <a className="link-94" href="/legal">Privacidad</a>
        </div>
      </div>
    </footer>
  );
}
