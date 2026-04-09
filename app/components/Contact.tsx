"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

function validate(name: string, email: string, message: string) {
  if (!name.trim()) return "Name is required.";
  if (!email.trim()) return "Email is required.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return "Enter a valid email address.";
  if (!message.trim()) return "Message is required.";
  return null;
}

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [error, setError] = useState<string | null>(null);
  const [status, setStatus] = useState<Status>("idle");

  const set = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [key]: e.target.value });
    if (error) setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationError = validate(form.name, form.email, form.message);
    if (validationError) { setError(validationError); return; }

    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        const data = await res.json();
        setError(data.error ?? "Something went wrong.");
        setStatus("idle");
      }
    } catch {
      setError("Network error. Please try again.");
      setStatus("idle");
    }
  };

  const inputStyle: React.CSSProperties = {
    width: "100%", padding: "14px 0", background: "transparent",
    border: "none", borderBottom: "1px solid var(--border)",
    color: "var(--dark)", fontSize: 15, outline: "none",
    transition: "border-color 0.2s", fontFamily: "var(--sans)",
  };

  const labelStyle: React.CSSProperties = {
    display: "block", fontSize: 11, fontWeight: 600,
    letterSpacing: "0.15em", textTransform: "uppercase",
    color: "var(--gold)", marginBottom: 4,
  };

  return (
    <section id="contact">
      <div className="section-eyebrow reveal">Contact</div>
      <div className="contact-grid">
        <div className="reveal">
          <h2 className="contact-heading">
            Let&apos;s build something <em>real.</em>
          </h2>
          <p className="contact-sub">
            Open to summer placements and engineering internships across the UK. Aerospace,
            automotive, systems &mdash; let&apos;s talk.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="reveal d1" style={{ display: "flex", flexDirection: "column", gap: 8 }} noValidate>
          <div style={{ marginBottom: 16 }}>
            <label style={labelStyle}>Name</label>
            <input
              type="text" value={form.name} onChange={set("name")}
              placeholder="Your name" style={inputStyle}
              onFocus={e => (e.currentTarget.style.borderBottomColor = "var(--gold)")}
              onBlur={e => (e.currentTarget.style.borderBottomColor = "var(--border)")}
            />
          </div>
          <div style={{ marginBottom: 16 }}>
            <label style={labelStyle}>Email</label>
            <input
              type="email" value={form.email} onChange={set("email")}
              placeholder="your@email.com" style={inputStyle}
              onFocus={e => (e.currentTarget.style.borderBottomColor = "var(--gold)")}
              onBlur={e => (e.currentTarget.style.borderBottomColor = "var(--border)")}
            />
          </div>
          <div style={{ marginBottom: 24 }}>
            <label style={labelStyle}>Message</label>
            <textarea
              rows={4} value={form.message} onChange={set("message")}
              placeholder="What's on your mind?" style={{ ...inputStyle, resize: "none" }}
              onFocus={e => (e.currentTarget.style.borderBottomColor = "var(--gold)")}
              onBlur={e => (e.currentTarget.style.borderBottomColor = "var(--border)")}
            />
          </div>

          {error && <p style={{ fontSize: 13, color: "#b94a3a", marginBottom: 8 }}>{error}</p>}

          <button
            type="submit" disabled={status === "loading"}
            style={{
              alignSelf: "flex-start", padding: "13px 32px", fontSize: 12,
              fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase",
              background: "var(--dark)", color: "var(--cream)", border: "none",
              cursor: status === "loading" ? "not-allowed" : "pointer",
              transition: "background 0.25s", opacity: status === "loading" ? 0.6 : 1,
              fontFamily: "var(--sans)",
            }}
            onMouseEnter={e => { if (status !== "loading") e.currentTarget.style.background = "var(--brown)"; }}
            onMouseLeave={e => (e.currentTarget.style.background = "var(--dark)")}
          >
            {status === "loading" ? "Sending..." : "Send Message"}
          </button>

          {status === "success" && (
            <p style={{ fontSize: 13, color: "var(--gold)", marginTop: 12 }}>
              Message sent — I&apos;ll get back to you soon.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
