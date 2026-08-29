"use client";

import { useRef, useState, useEffect, useCallback } from "react";

// Length of the crossfade. Must match the CSS `transition: opacity 0.4s`
// on the <img>/<video> below, or slides swap mid-fade.
const FADE_MS = 400;

// How long manual control holds before the carousel starts advancing on
// its own again, measured from the last click.
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
  const allImages = images ?? (src ? [src] : []);
  const [index, setIndex] = useState(0);
  const [fading, setFading] = useState(false);

  // Set while the viewer is driving with the arrows. Suspends the autoplay
  // interval rather than killing it — see the resume timer.
  const [paused, setPaused] = useState(false);
  const fadeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const resumeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const count = allImages.length;

  // One code path for both autoplay and the arrows, so a manual step gets
  // the same crossfade as an automatic one. Clicking repeatedly restarts
  // the fade instead of stacking overlapping ones.
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

  // A click hands control to the viewer. Each further click pushes the
  // resume deadline back, so autoplay only returns once they have stopped.
  const step = useCallback(
    (delta: number) => {
      setPaused(true);
      go(delta);
      if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
      resumeTimerRef.current = setTimeout(() => setPaused(false), RESUME_MS);
    },
    [go],
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

  useEffect(
    () => () => {
      if (fadeTimerRef.current) clearTimeout(fadeTimerRef.current);
      if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    },
    [],
  );

  if (allImages.length === 0) return null;

  const arrowStyle: React.CSSProperties = {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    width: 34,
    height: 34,
    display: "grid",
    placeItems: "center",
    border: "none",
    borderRadius: "50%",
    background: "rgba(0,0,0,0.34)",
    color: "#fff",
    cursor: "pointer",
    padding: 0,
    opacity: 0.75,
    transition: "opacity 0.2s ease, background 0.2s ease",
    backdropFilter: "blur(4px)",
  };

  const hoverOn = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.opacity = "1";
    e.currentTarget.style.background = "rgba(0,0,0,0.55)";
  };
  const hoverOff = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.opacity = "0.75";
    e.currentTarget.style.background = "rgba(0,0,0,0.34)";
  };

  return (
    <div style={{ width: "100%" }}>
      <div
        style={{
          width: "100%",
          aspectRatio: "4/3",
          borderRadius,
          overflow: "hidden",
          position: "relative",
          boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
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
        {allImages.length > 1 && (
          <>
            <button
              type="button"
              aria-label="Previous image"
              onClick={() => step(-1)}
              onMouseEnter={hoverOn}
              onMouseLeave={hoverOff}
              style={{ ...arrowStyle, left: 10 }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <button
              type="button"
              aria-label="Next image"
              onClick={() => step(1)}
              onMouseEnter={hoverOn}
              onMouseLeave={hoverOff}
              style={{ ...arrowStyle, right: 10 }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
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
          </>
        )}
      </div>
    </div>
  );
}
