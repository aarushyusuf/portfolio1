"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const LINKS = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // These sections only exist on the homepage. On a case study page the same
  // link has to navigate home instead of silently doing nothing, so only
  // intercept the click when the target is actually on this page.
  const handleSectionClick = (e: React.MouseEvent, id: string) => {
    const target = document.getElementById(id);
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={scrolled ? "scrolled" : ""}>
      <Link href="/" className="nav-logo">
        Aarush Yusuf
      </Link>
      <ul className="nav-links">
        {LINKS.map(({ id, label }) => (
          <li key={id}>
            <a href={`/#${id}`} onClick={(e) => handleSectionClick(e, id)}>
              {label}
            </a>
          </li>
        ))}
        <li>
          <Link href="/projects">Work</Link>
        </li>
      </ul>
    </nav>
  );
}
