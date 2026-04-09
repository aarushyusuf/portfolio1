"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const isDark = saved === "dark" || (saved === null && prefersDark);
    document.documentElement.classList.toggle("dark", isDark);
    setDark(isDark);
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const toggleDark = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={scrolled ? "scrolled" : ""}>
      <a href="#top" className="nav-logo">Aarush Yusuf</a>
      <ul className="nav-links">
        <li><a href="#about" onClick={e => { e.preventDefault(); scrollTo("about"); }}>About</a></li>
        <li><a href="#experience" onClick={e => { e.preventDefault(); scrollTo("experience"); }}>Experience</a></li>
        <li><a href="#contact" onClick={e => { e.preventDefault(); scrollTo("contact"); }}>Contact</a></li>
        <li>
          <button onClick={toggleDark} className="theme-toggle" aria-label="Toggle dark mode">
            {dark ? "☀" : "☾"}
          </button>
        </li>
      </ul>
    </nav>
  );
}
