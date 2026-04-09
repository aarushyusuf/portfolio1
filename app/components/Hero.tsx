import ProfilePhoto from "./ProfilePhoto";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-text">

        {/* Photo */}
        <div className="reveal">
          <ProfilePhoto />
        </div>

        <h1 className="hero-name reveal d1" style={{ marginBottom: "0.5rem" }}>
          Aarush <em>Yusuf.</em>
        </h1>
        <p className="hero-tagline reveal d2" style={{ marginBottom: "1.25rem" }}>
          Building rockets, race cars, and software &mdash; first-year Aerospace Engineering student at the University of Sheffield.
        </p>
        <div className="hero-ctas reveal d3" style={{ justifyContent: "center" }}>
          <a href="#experience" className="btn-primary">See my work</a>
          <a href="#contact" className="btn-ghost">Get in touch &rarr;</a>
        </div>

        {/* Currently */}
        <div className="reveal d3" style={{ width: "100%", textAlign: "left", marginTop: "1.25rem" }}>
          <div style={{ width: "100%", height: 1, background: "var(--border)" }} />
          <div className="currently-row" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0.75rem 0 0.2rem" }}>
            <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)" }}>Currently</span>
            <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 14, color: "var(--dark)" }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--gold)", display: "inline-block", animation: "pulse 2s infinite" }} />
              Open to placements
            </div>
          </div>
          <div className="currently-row" style={{ display: "flex", justifyContent: "space-between", fontSize: 15, color: "var(--dark)", padding: "0.2rem 0" }}>
            <span>Aerospace Engineering Student</span>
            <a href="https://www.sheffield.ac.uk" target="_blank" rel="noopener noreferrer" style={{ color: "var(--gold)", textDecoration: "none" }}>University of Sheffield ↗</a>
          </div>
          <div className="currently-row" style={{ display: "flex", justifyContent: "space-between", fontSize: 15, color: "var(--dark)", padding: "0.2rem 0 0.75rem" }}>
            <span>Powertrain Engineer</span>
            <a href="https://sheffieldecomotorsport.com/" target="_blank" rel="noopener noreferrer" style={{ color: "var(--gold)", textDecoration: "none" }}>Sheffield EcoMotorsport ↗</a>
          </div>
          <div style={{ width: "100%", height: 1, background: "var(--border)" }} />
        </div>

      </div>

      {/* Scroll indicator */}
      <div className="reveal d3" style={{ marginTop: "1.5rem", display: "flex", flexDirection: "column", alignItems: "center", gap: 6, opacity: 0.45 }}>
        <span style={{ fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--muted)", fontWeight: 500 }}>Scroll</span>
        <div style={{ width: 1, height: 40, background: "var(--gold)", animation: "scrollLine 1.5s ease-in-out infinite" }} />
      </div>

      <style>{`
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }
        @keyframes scrollLine { 0%{transform:scaleY(0);transform-origin:top;opacity:1} 100%{transform:scaleY(1);transform-origin:top;opacity:0} }
      `}</style>
    </section>
  );
}
