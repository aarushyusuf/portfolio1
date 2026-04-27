"use client";

import { useState } from "react";
import { siteData } from "../data";
import FadeUp from "./FadeUp";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
      if (res.ok) { setStatus("success"); setForm({ name: "", email: "", message: "" }); }
      else setStatus("error");
    } catch { setStatus("error"); }
  };

  const inputStyle: React.CSSProperties = {
    width: "100%", padding: "14px 0", background: "transparent",
    border: "none", borderBottom: "1px solid #1a1d27",
    color: "#EEEEEE", fontSize: 15, outline: "none", transition: "border-color 0.2s",
  };

  return (
    <section id="contact" style={{ background: "#13151c", padding: "7rem 0", borderTop: "1px solid #1a1d27" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 1.5rem" }}>
        <FadeUp>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6rem" }} className="contact-grid">
            <div>
              <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.25em", textTransform: "uppercase", color: "#7B61FF", marginBottom: 12 }}>Contact</p>
              <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: "#EEEEEE", letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: 24 }}>
                Let&apos;s talk
              </h2>
              <p style={{ fontSize: 15, color: "#EEEEEE", lineHeight: 1.8, marginBottom: "3rem", maxWidth: 380 }}>
                Open to summer placements and engineering internships — <span style={{ color: "#D4AF37", opacity: 1 }}>aerospace, automotive, or systems engineering.</span>
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
                {[
                  { href: siteData.social.linkedin, label: "LinkedIn", sub: "linkedin.com/in/aarush-yusuf", color: "#7B61FF" },
                  { href: siteData.social.github, label: "GitHub", sub: "github.com/aarushyusuf", color: "#D4AF37" },
                ].map(({ href, label, sub, color }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                    style={{ textDecoration: "none", display: "flex", flexDirection: "column", gap: 2, padding: "20px 0", borderBottom: "1px solid #1a1d27" }}
                    onMouseEnter={e => ((e.currentTarget as HTMLElement).querySelector("span")!.style.color = color)}
                    onMouseLeave={e => ((e.currentTarget as HTMLElement).querySelector("span")!.style.color = "#EEEEEE")}
                  >
                    <span style={{ fontSize: 15, fontWeight: 600, color: "#EEEEEE", transition: "color 0.2s" }}>{label}</span>
                    <span style={{ fontSize: 13, color: "#EEEEEE" }}>{sub}</span>
                  </a>
                ))}
              </div>
            </div>

            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 8, paddingTop: 56 }}>
              {[
                { label: "Name", type: "text", key: "name" as const, placeholder: "Your name" },
                { label: "Email", type: "email", key: "email" as const, placeholder: "your@email.com" },
              ].map(({ label, type, key, placeholder }) => (
                <div key={key} style={{ marginBottom: 16 }}>
                  <label style={{ display: "block", fontSize: 11, fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "#7B61FF", marginBottom: 4 }}>{label}</label>
                  <input type={type} required value={form[key]} onChange={e => setForm({ ...form, [key]: e.target.value })} style={inputStyle} placeholder={placeholder}
                    onFocus={e => (e.currentTarget.style.borderBottomColor = "#7B61FF")}
                    onBlur={e => (e.currentTarget.style.borderBottomColor = "#1a1d27")} />
                </div>
              ))}
              <div style={{ marginBottom: 32 }}>
                <label style={{ display: "block", fontSize: 11, fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "#7B61FF", marginBottom: 4 }}>Message</label>
                <textarea required rows={4} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} style={{ ...inputStyle, resize: "none" }} placeholder="What's on your mind?"
                  onFocus={e => (e.currentTarget.style.borderBottomColor = "#7B61FF")}
                  onBlur={e => (e.currentTarget.style.borderBottomColor = "#1a1d27")} />
              </div>
              <button type="submit" disabled={status === "loading"}
                style={{ alignSelf: "flex-start", padding: "13px 32px", fontSize: 13, fontWeight: 600, borderRadius: 8, background: "#7B61FF", color: "#fff", border: "none", cursor: "pointer", transition: "background 0.2s", opacity: status === "loading" ? 0.6 : 1 }}
                onMouseEnter={e => (e.currentTarget.style.background = "#6348f5")}
                onMouseLeave={e => (e.currentTarget.style.background = "#7B61FF")}
              >
                {status === "loading" ? "Sending..." : "Send Message"}
              </button>
              {status === "success" && <p style={{ fontSize: 13, color: "#D4AF37", marginTop: 12 }}>Sent! I&apos;ll get back to you soon.</p>}
              {status === "error" && <p style={{ fontSize: 13, color: "#ff6b6b", marginTop: 12 }}>Something went wrong. Try again.</p>}
            </form>
          </div>
        </FadeUp>
      </div>
      <style>{`@media (max-width: 768px) { .contact-grid { grid-template-columns: 1fr !important; gap: 3rem !important; } }`}</style>
    </section>
  );
}
