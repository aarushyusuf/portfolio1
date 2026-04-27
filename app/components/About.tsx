import { siteData } from "../data";
import FadeUp from "./FadeUp";

export default function About() {
  return (
    <section id="about" style={{ background: "#13151c", borderTop: "1px solid #1a1d27" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>

        <FadeUp>
          <div style={{ padding: "6rem 1.5rem", borderBottom: "1px solid #1a1d27" }}>
            <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "#7B61FF", marginBottom: 32 }}>About</p>
            <h2 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1.2, maxWidth: 900 }}>
              <span style={{ color: "#EEEEEE" }}>Building isn&apos;t just about engineering. </span>
              <span style={{ color: "#EEEEEE" }}>It&apos;s about curiosity, problem-solving, and pushing boundaries — whether that&apos;s a rocket, a race car, or a web app.</span>
            </h2>
          </div>
        </FadeUp>

        <FadeUp delay={100}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", padding: "4rem 1.5rem" }} className="about-grid">
            <div style={{ paddingRight: "3rem", borderRight: "1px solid #1a1d27" }}>
              {siteData.about.split("\n\n").map((para, i) => (
                <p key={i} style={{ fontSize: 15, color: "#EEEEEE", lineHeight: 1.85, marginBottom: "1.25rem" }}>{para.trim()}</p>
              ))}
              <div style={{ marginTop: "2.5rem" }}>
                {[
                  { label: "University", value: "University of Sheffield" },
                  { label: "Degree", value: "Aerospace Engineering (BEng)" },
                  { label: "Year", value: "First Year · 2024–2025" },
                  { label: "Location", value: "Sheffield, UK" },
                ].map(({ label, value }) => (
                  <div key={label} style={{ display: "flex", gap: 16, fontSize: 14, padding: "14px 0", borderBottom: "1px solid #1a1d27" }}>
                    <span style={{ color: "#D4AF37", minWidth: 90, flexShrink: 0 }}>{label}</span>
                    <span style={{ color: "#EEEEEE", }}>{value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ paddingLeft: "3rem" }}>
              <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "#7B61FF", marginBottom: 20 }}>Skills & Tools</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: "3rem" }}>
                {siteData.skills.map((skill) => (
                  <span key={skill} style={{ padding: "8px 18px", fontSize: 13, borderRadius: 999, border: "1px solid #1a1d27", color: "#EEEEEE" }}>{skill}</span>
                ))}
              </div>

              <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "#7B61FF", marginBottom: 16 }}>A-Levels</p>
              {[
                { subject: "Mathematics", grade: "A*" },
                { subject: "Physics", grade: "A*" },
                { subject: "Chemistry", grade: "A" },
              ].map(({ subject, grade }) => (
                <div key={subject} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "14px 0", borderBottom: "1px solid #1a1d27" }}>
                  <span style={{ fontSize: 14, color: "#EEEEEE" }}>{subject}</span>
                  <span style={{ fontSize: 14, fontWeight: 700, color: "#D4AF37" }}>{grade}</span>
                </div>
              ))}
            </div>
          </div>
        </FadeUp>
      </div>

      <style>{`@media (max-width: 768px) { .about-grid { grid-template-columns: 1fr !important; } .about-grid > div:first-child { padding-right: 0 !important; border-right: none !important; border-bottom: 1px solid #1a1d27; padding-bottom: 2rem; } .about-grid > div:last-child { padding-left: 0 !important; padding-top: 2rem; } }`}</style>
    </section>
  );
}
