"use client";

import { useRef } from "react";

export default function ProfilePhoto() {
  const containerRef = useRef<HTMLDivElement>(null);
  const glareRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = containerRef.current;
    const glare = glareRef.current;
    if (!el || !glare) return;

    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;

    const dx = (e.clientX - cx) / (rect.width / 2);   // -1 to 1
    const dy = (e.clientY - cy) / (rect.height / 2);  // -1 to 1

    const rotateX = -dy * 20;
    const rotateY = dx * 20;

    el.style.transform = `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.06)`;

    // Move glare highlight to where the cursor is
    const glareX = (dx + 1) / 2 * 100;
    const glareY = (dy + 1) / 2 * 100;
    glare.style.background = `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.28) 0%, transparent 65%)`;
    glare.style.opacity = "1";
  };

  const handleMouseLeave = () => {
    const el = containerRef.current;
    const glare = glareRef.current;
    if (!el || !glare) return;
    el.style.transform = "perspective(600px) rotateX(0deg) rotateY(0deg) scale(1)";
    glare.style.opacity = "0";
  };

  return (
    <div
      style={{
        width: 185,
        height: 185,
        borderRadius: "50%",
        margin: "0 auto 1.25rem",
        cursor: "pointer",
        transformStyle: "preserve-3d",
        transition: "transform 0.15s ease, box-shadow 0.15s ease",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Outer ring */}
      <div
        ref={containerRef}
        style={{
          width: "100%",
          height: "100%",
          borderRadius: "50%",
          border: "2px solid var(--gold)",
          overflow: "hidden",
          position: "relative",
          transformStyle: "preserve-3d",
          transition: "transform 0.15s ease",
          boxShadow: "0 8px 32px rgba(0,0,0,0.15)",
        }}
      >
        <img
          src="/Profile.jpg.jpeg"
          alt="Aarush Yusuf"
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", display: "block" }}
        />
        {/* Glare overlay */}
        <div
          ref={glareRef}
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "50%",
            opacity: 0,
            pointerEvents: "none",
            transition: "opacity 0.2s ease",
          }}
        />
      </div>
    </div>
  );
}
