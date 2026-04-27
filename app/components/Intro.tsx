"use client";

import { useEffect, useState } from "react";

export default function Intro() {
  const [phase, setPhase] = useState<"enter" | "show" | "exit" | "done">("enter");

  useEffect(() => {
    const t0 = setTimeout(() => setPhase("show"), 100);
    const t1 = setTimeout(() => setPhase("exit"), 2000);
    const t2 = setTimeout(() => setPhase("done"), 2800);
    return () => { clearTimeout(t0); clearTimeout(t1); clearTimeout(t2); };
  }, []);

  if (phase === "done") return null;

  return (
    <>
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 9999,
          background: "#0D0F14",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transform: phase === "exit" ? "translateY(-100%)" : "translateY(0)",
          transition: phase === "exit" ? "transform 0.85s cubic-bezier(0.76, 0, 0.24, 1)" : "none",
          pointerEvents: phase === "exit" ? "none" : "all",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            opacity: phase === "show" ? 1 : 0,
            transition: "opacity 0.9s ease",
            }}
        >
          <span style={{ fontSize: "1.1rem", color: "#EEEEEE", lineHeight: 1 }}>•</span>
          <span style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", fontWeight: 300, color: "#EEEEEE", letterSpacing: "0.01em" }}>
            Welcome
          </span>
        </div>
      </div>
    </>
  );
}
