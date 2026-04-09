import ProfilePhoto from "./ProfilePhoto";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-text">

        {/* Photo */}
        <ProfilePhoto />

        <h1 className="hero-name reveal d1" style={{ marginBottom: "0.75rem" }}>
          Aarush <em>Yusuf.</em>
        </h1>
        <p className="hero-tagline reveal d2" style={{ marginBottom: "1.5rem" }}>
          Building rockets, race cars, and software &mdash; first-year Aerospace Engineering student at the University of Sheffield.
        </p>
        <div className="hero-ctas reveal d3" style={{ justifyContent: "center" }}>
          <a href="#experience" className="btn-primary">See the work</a>
          <a href="#contact" className="btn-ghost">Get in touch &rarr;</a>
        </div>

        {/* Divider */}
        <div style={{ width: "100%", height: 1, background: "var(--border)", margin: "2rem 0 1.25rem" }} />

        {/* Currently */}
        <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: 8, textAlign: "left" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)" }}>Currently</span>
            <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 14, color: "var(--dark)" }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--gold)", display: "inline-block", animation: "pulse 2s infinite" }} />
              Open to placements
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: 15, color: "var(--dark)" }}>
              <span>Aerospace Engineering Student</span>
              <a href="https://www.sheffield.ac.uk" target="_blank" rel="noopener noreferrer" style={{ color: "var(--gold)", textDecoration: "none" }}>University of Sheffield ↗</a>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: 15, color: "var(--dark)" }}>
              <span>Powertrain Engineer</span>
              <a href="https://sheffieldecomotorsport.com/" target="_blank" rel="noopener noreferrer" style={{ color: "var(--gold)", textDecoration: "none" }}>Sheffield EcoMotorsport ↗</a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{ width: "100%", height: 1, background: "var(--border)", margin: "1rem 0" }} />

        {/* Focus tags */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, justifyContent: "center" }}>
          {[
            { label: "Aerospace", color: "var(--gold)" },
            { label: "Rocketry", color: "var(--gold)" },
            { label: "Motorsport", color: "var(--gold)" },
            { label: "Web Dev", color: "var(--gold)" },
            { label: "Avionics", color: "var(--gold)" },
          ].map(({ label, color }) => (
            <span key={label} style={{ fontSize: 14, padding: "6px 16px", borderRadius: 999, border: `1px solid ${color}60`, color, background: `${color}10` }}>
              {label}
            </span>
          ))}
        </div>

      </div>

      {/* Scroll indicator */}
      <div style={{ marginTop: "2rem", display: "flex", flexDirection: "column", alignItems: "center", gap: 6, opacity: 0.45 }}>
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
