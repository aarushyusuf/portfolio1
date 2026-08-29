"use client";

import { useRef, useState, useEffect, useCallback } from "react";

// Length of the crossfade. Must match the CSS `transition: opacity 0.4s`
// on the <img>/<video> below, or slides swap mid-fade.
const FADE_MS = 400;

// How long manual control holds before the carousel starts advancing on
// its own again, measured from the last arrow press.
const RESUME_MS = 8000;

interface TiltImageProps {
  src?: string;
  images?: string[];
  alt: string;
  borderRadius?: number | string;
  objectPosition?: string;
  objectPositions?: string[];
  interval?: number;
  active?: boolean;
}

export default function TiltImage({
  src,
  images,
  alt,
  borderRadius = 12,
  objectPosition = "center",
  objectPositions,
  interval = 5000,
  active = true,
}: TiltImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const glareRef = useRef<HTMLDivElement>(null);
  const hoveredRef = useRef(false);

  const allImages = images ?? (src ? [src] : []);
  const [index, setIndex] = useState(0);
  const [fading, setFading] = useState(false);

  // Set while the viewer is driving with the arrow keys. Suspends the
  // autoplay interval rather than killing it — see the resume timer.
  const [paused, setPaused] = useState(false);
  const fadeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const resumeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const count = allImages.length;

  // One code path for both autoplay and the arrow keys, so a manual step
  // gets the same crossfade as an automatic one. Holding an arrow down
  // restarts the fade instead of stacking overlapping ones.
  const go = useCallback(
    (delta: number) => {
      if (count <= 1) return;
      if (fadeTimerRef.current) clearTimeout(fadeTimerRef.current);
      setFading(true);
      fadeTimerRef.current = setTimeout(() => {
        setIndex(i => (i + delta + count) % count);
        setFading(false);
        fadeTimerRef.current = null;
      }, FADE_MS);
    },
    [count],
  );

  // Rewind whenever this gallery is shown or hidden — an accordion panel
  // reopening should start from the first image, not mid-sequence.
  useEffect(() => {
    setIndex(0);
    setFading(false);
    setPaused(false);
    if (fadeTimerRef.current) clearTimeout(fadeTimerRef.current);
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
  }, [active]);

  useEffect(() => {
    if (count <= 1 || !active || paused) return;
    const timer = setInterval(() => go(1), interval);
    return () => clearInterval(timer);
  }, [count, interval, active, paused, go]);

  // Left/right arrows steer the gallery. The listener is on the window so
  // it works without clicking the image first; that is only unambiguous
  // because at most one gallery is ever `active` at a time (the accordion
  // opens a single panel, and a case study page renders one gallery).
  useEffect(() => {
    if (count <= 1 || !active) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
      if (e.metaKey || e.ctrlKey || e.altKey) return;

      // Never steal the arrows from someone typing in the contact form.
      const t = e.target as HTMLElement | null;
      if (t && (t.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName))) return;

      e.preventDefault(); // suppress the browser's horizontal scroll
      setPaused(true);
      go(e.key === "ArrowRight" ? 1 : -1);

      // Each press pushes the resume deadline back, so autoplay only
      // returns once they have actually stopped.
      if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
      resumeTimerRef.current = setTimeout(() => setPaused(false), RESUME_MS);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [count, active, go]);

  useEffect(
    () => () => {
      if (fadeTimerRef.current) clearTimeout(fadeTimerRef.current);
      if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    },
    [],
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = containerRef.current;
    const glare = glareRef.current;
    if (!el || !glare) return;

    const rect = el.getBoundingClientRect();
    const dx = (e.clientX - (rect.left + rect.width / 2)) / (rect.width / 2);
    const dy = (e.clientY - (rect.top + rect.height / 2)) / (rect.height / 2);

    el.style.transform = `perspective(600px) rotateX(${-dy * 15}deg) rotateY(${dx * 15}deg) scale(1.04)`;

    const gx = ((dx + 1) / 2) * 100;
    const gy = ((dy + 1) / 2) * 100;
    glare.style.background = `radial-gradient(circle at ${gx}% ${gy}%, rgba(255,255,255,0.22) 0%, transparent 65%)`;
    glare.style.opacity = "1";
  };

  const handleMouseLeave = () => {
    hoveredRef.current = false;
    const el = containerRef.current;
    const glare = glareRef.current;
    if (!el || !glare) return;
    el.style.transform = "perspective(600px) rotateX(0deg) rotateY(0deg) scale(1)";
    glare.style.opacity = "0";
  };

  const handleMouseEnter = () => {
    hoveredRef.current = true;
  };

  if (allImages.length === 0) return null;

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      style={{ width: "100%", transformStyle: "preserve-3d" }}
    >
      <div
        ref={containerRef}
        style={{
          width: "100%",
          aspectRatio: "4/3",
          borderRadius,
          overflow: "hidden",
          position: "relative",
          transition: "transform 0.15s ease",
          boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
          cursor: "default",
        }}
      >
        {allImages[index].endsWith(".mp4") ? (
          <video
            src={allImages[index]}
            autoPlay
            loop
            muted
            playsInline
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: objectPositions?.[index] ?? objectPosition,
              display: "block",
              opacity: fading ? 0 : 1,
              transition: "opacity 0.4s ease",
            }}
          />
        ) : (
          <img
            src={allImages[index]}
            alt={alt}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: objectPositions?.[index] ?? objectPosition,
              display: "block",
              opacity: fading ? 0 : 1,
              transition: "opacity 0.4s ease",
            }}
          />
        )}
        <div
          ref={glareRef}
          style={{
            position: "absolute",
            inset: 0,
            borderRadius,
            opacity: 0,
            pointerEvents: "none",
            transition: "opacity 0.2s ease",
          }}
        />
        {allImages.length > 1 && (
          <div style={{
            position: "absolute", bottom: 10, left: "50%", transform: "translateX(-50%)",
            display: "flex", gap: 6, pointerEvents: "none",
          }}>
            {allImages.map((_, i) => (
              <div key={i} style={{
                width: 6, height: 6, borderRadius: "50%",
                background: i === index ? "#fff" : "rgba(255,255,255,0.4)",
                transition: "background 0.3s",
              }} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
