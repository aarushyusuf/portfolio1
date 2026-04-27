"use client";

import { useState, useEffect } from "react";
import { siteData } from "../data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = ["About", "Projects", "Contact"];

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav
      className="fixed top-0 w-full z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(13,15,20,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid #1a1d27" : "none",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 1.5rem", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <span
          style={{ fontWeight: 700, color: "#EEEEEE", cursor: "pointer", fontSize: "1.1rem", letterSpacing: "-0.02em" }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          {siteData.name.split(" ")[0]}<span style={{ color: "#7B61FF" }}>.</span>
        </span>

        <ul className="hidden md:flex gap-8">
          {links.map((link) => (
            <li key={link}>
              <button
                onClick={() => scrollTo(link)}
                className="text-sm transition-colors"
                style={{ color: "#EEEEEE" }}
                onMouseEnter={e => { e.currentTarget.style.color = "#7B61FF"; }}
                onMouseLeave={e => { e.currentTarget.style.color = "#EEEEEE"; }}
              >
                {link}
              </button>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden flex flex-col gap-1.5"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-0.5 transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`} style={{ background: "#EEEEEE" }} />
          <span className={`block w-5 h-0.5 transition-all ${menuOpen ? "opacity-0" : ""}`} style={{ background: "#EEEEEE" }} />
          <span className={`block w-5 h-0.5 transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} style={{ background: "#EEEEEE" }} />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden px-6 py-4 flex flex-col gap-4" style={{ background: "#0D0F14", borderTop: "1px solid #1a1d27" }}>
          {links.map((link) => (
            <button key={link} onClick={() => scrollTo(link)} className="text-sm text-left" style={{ color: "#EEEEEE" }}>
              {link}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
