"use client";

import { useRef, useState, useEffect } from "react";

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

  useEffect(() => {
    setIndex(0);
    setFading(false);
  }, [active]);

  useEffect(() => {
    if (allImages.length <= 1 || !active) return;
    const timer = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setIndex(i => (i + 1) % allImages.length);
        setFading(false);
      }, 400);
    }, interval);
    return () => clearInterval(timer);
  }, [allImages.length, interval, active]);

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
