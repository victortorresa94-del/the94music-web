export default function Home() {
    return (
      <main style={{
        minHeight: "100vh",
        background: "linear-gradient(to bottom right, #000000, #111111)",
        color: "#fff",
        padding: "4rem 2rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "sans-serif",
        textAlign: "center"
      }}>
        <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>
          Bienvenido a <span style={{ color: "#e91e63" }}>94 Music</span> 🎶
        </h1>
        <p style={{ fontSize: "1.25rem", maxWidth: "600px", marginBottom: "2rem" }}>
          Donde nace el directo, se conecta el talento y vibra la escena musical.
        </p>
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <a href="/artistas" style={btnStyle}>🎤 Ver artistas</a>
          <a href="/servicios" style={btnStyle}>🛠️ Ver servicios</a>
          <a href="/novedades" style={btnStyle}>📰 Novedades</a>
        </div>
      </main>
    )
  }
  
  const btnStyle = {
    backgroundColor: "#e91e63",
    color: "#fff",
    padding: "0.75rem 1.5rem",
    borderRadius: "999px",
    textDecoration: "none",
    fontWeight: "bold",
    transition: "0.3s",
    boxShadow: "0 4px 10px rgba(0,0,0,0.3)"
  };
  