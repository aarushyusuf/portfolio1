"use client";

import { siteData } from "../data";

export default function Hero() {
  return (
    <section style={{ background: "#0D0F14", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ maxWidth: 800, width: "100%", margin: "0 auto", padding: "6rem 1.5rem" }}>

        {/* Card */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>

          {/* Photo */}
          <div style={{ width: 180, height: 180, borderRadius: "50%", overflow: "hidden", marginBottom: 36, border: "2px solid #7B61FF" }}>
            <img src="/Profile.jpg.jpeg" alt="Aarush Yusuf" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }} />
          </div>

          {/* Name */}
          <h1 style={{ fontSize: "clamp(3rem, 8vw, 7rem)", fontWeight: 700, color: "#EEEEEE", letterSpacing: "-0.04em", lineHeight: 1, marginBottom: 24, whiteSpace: "nowrap" }}>
            Aarush Yusuf
          </h1>

          {/* Tagline */}
          <p style={{ fontSize: 18, color: "#EEEEEE", lineHeight: 1.7, maxWidth: 560, marginBottom: 36 }}>
            Building rockets, race cars, and software —{" "}
            <span style={{ color: "#D4AF37" }}>first-year Aerospace Engineering</span>{" "}
            student at the University of Sheffield.
          </p>

          {/* Buttons */}
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center", marginBottom: 32 }}>
            <button
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              style={{ padding: "15px 36px", fontSize: 15, fontWeight: 600, borderRadius: 8, background: "#7B61FF", color: "#fff", border: "none", cursor: "pointer", transition: "background 0.2s" }}
              onMouseEnter={e => (e.currentTarget.style.background = "#6348f5")}
              onMouseLeave={e => (e.currentTarget.style.background = "#7B61FF")}
            >
              View Projects
            </button>
            <a
              href={siteData.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              style={{ padding: "15px 36px", fontSize: 15, fontWeight: 500, borderRadius: 8, border: "1px solid #1a1d27", color: "#EEEEEE", textDecoration: "none", transition: "border-color 0.2s, color 0.2s" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "#7B61FF"; (e.currentTarget as HTMLElement).style.color = "#7B61FF"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "#1a1d27"; (e.currentTarget as HTMLElement).style.color = "#EEEEEE"; }}
            >
              LinkedIn ↗
            </a>
          </div>

          {/* Divider */}
          <div style={{ width: "100%", height: 1, background: "#1a1d27", marginBottom: 28 }} />

          {/* Currently row */}
          <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: 12, textAlign: "left" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontSize: 13, fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "#7B61FF" }}>Currently</span>
              <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 14, color: "#EEEEEE" }}>
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#D4AF37", display: "inline-block", animation: "pulse 2s infinite" }} />
                Open to placements
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 15, color: "#EEEEEE" }}>
                <span>Aerospace Engineering Student</span>
                <a href="https://www.sheffield.ac.uk" target="_blank" rel="noopener noreferrer" style={{ color: "#D4AF37", textDecoration: "none" }}>UoS ↗</a>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 15, color: "#EEEEEE" }}>
                <span>Powertrain Engineer</span>
                <a href="https://sheffieldecomotorsport.com/" target="_blank" rel="noopener noreferrer" style={{ color: "#D4AF37", textDecoration: "none" }}>SEM ↗</a>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div style={{ width: "100%", height: 1, background: "#1a1d27", margin: "20px 0" }} />

          {/* Focus tags */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, justifyContent: "center" }}>
            {[
              { label: "Aerospace", color: "#7B61FF" },
              { label: "Rocketry", color: "#D4AF37" },
              { label: "Motorsport", color: "#7B61FF" },
              { label: "Web Dev", color: "#D4AF37" },
              { label: "Avionics", color: "#7B61FF" },
            ].map(({ label, color }) => (
              <span key={label} style={{ fontSize: 14, padding: "8px 18px", borderRadius: 999, border: `1px solid ${color}40`, color, background: `${color}10` }}>
                {label}
              </span>
            ))}
          </div>

        </div>
      </div>

      <style>{`
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }
      `}</style>
    </section>
  );
}
