"use client";

import { useState } from "react";
import { siteData } from "../data";
import FadeUp from "./FadeUp";

const gradients = [
  "linear-gradient(135deg, #1a1040 0%, #2d1f6e 100%)",
  "linear-gradient(135deg, #1a1400 0%, #3d3000 100%)",
  "linear-gradient(135deg, #0f0a2a 0%, #1e1050 100%)",
  "linear-gradient(135deg, #1a1400 0%, #3d3000 100%)",
  "linear-gradient(135deg, #1a1040 0%, #2d1f6e 100%)",
];

const accentColors = ["#7B61FF", "#D4AF37", "#7B61FF", "#D4AF37", "#7B61FF"];

export default function Projects() {
  return (
    <section id="projects" style={{ background: "#0D0F14", paddingBottom: "7rem", borderTop: "1px solid #1a1d27" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 1.5rem" }}>

        <FadeUp>
          <div style={{ padding: "4rem 0 3rem", borderBottom: "1px solid #1a1d27", marginBottom: "3rem", display: "flex", alignItems: "flex-end", justifyContent: "space-between" }}>
            <h2 style={{ fontSize: "clamp(4rem, 12vw, 9rem)", fontWeight: 700, color: "#EEEEEE", letterSpacing: "-0.04em", lineHeight: 0.9 }}>
              Projects<span style={{ color: "#7B61FF" }}>.</span>
            </h2>
            <a href={siteData.social.github} target="_blank" rel="noopener noreferrer" style={{ fontSize: 13, color: "#D4AF37", textDecoration: "none", marginBottom: 8, flexShrink: 0 }}>
              All on GitHub ↗
            </a>
          </div>
        </FadeUp>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }} className="projects-grid">
          {siteData.projects.map((project, i) => (
            <FadeUp key={project.title} delay={i * 80}>
              <ProjectCard project={project} index={i} accent={accentColors[i]} gradient={gradients[i]} />
            </FadeUp>
          ))}
        </div>
      </div>

      <style>{`@media (max-width: 768px) { .projects-grid { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  );
}

function ProjectCard({ project, index, accent, gradient }: { project: typeof siteData.projects[0]; index: number; accent: string; gradient: string }) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      style={{ textDecoration: "none", display: "block", borderRadius: 16, overflow: "hidden", position: "relative", aspectRatio: "4/3", background: gradient, border: `1px solid ${accent}20`, transition: "border-color 0.3s, transform 0.3s", transform: hovered ? "translateY(-4px)" : "none" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.1) 60%)", opacity: hovered ? 1 : 0.75, transition: "opacity 0.3s" }} />

      <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", opacity: hovered ? 0 : 0.06, transition: "opacity 0.3s" }}>
        <span style={{ fontSize: "8rem", fontWeight: 700, color: accent, letterSpacing: "-0.05em" }}>
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "1.5rem" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <div>
            <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: accent, marginBottom: 6 }}>
              {project.tags[0]}
            </p>
            <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#EEEEEE", letterSpacing: "-0.02em", lineHeight: 1.3 }}>
              {project.title}
            </h3>
          </div>
          <div style={{ width: 36, height: 36, borderRadius: "50%", border: `1px solid ${accent}50`, display: "flex", alignItems: "center", justifyContent: "center", transform: hovered ? "translate(3px,-3px)" : "none", transition: "transform 0.2s", flexShrink: 0 }}>
            <svg width="14" height="14" fill="none" stroke={accent} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              <path d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </div>
        </div>
        <p style={{ fontSize: 13, color: "#EEEEEE", opacity: hovered ? 0.65 : 0, lineHeight: 1.6, marginTop: 8, maxHeight: hovered ? 80 : 0, overflow: "hidden", transition: "opacity 0.3s, max-height 0.3s" }}>
          {project.description}
        </p>
      </div>
    </a>
  );
}
