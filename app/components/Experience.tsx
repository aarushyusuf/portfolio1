"use client";

import { useState } from "react";
import Link from "next/link";
import TiltImage from "./TiltImage";
import { work } from "../data/work";

export default function Experience() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section id="experience">
      <div className="section-eyebrow reveal">Experience</div>
      <div className="reveal">
        {work.map((e, i) => {
          const num = String(i + 1).padStart(2, "0");
          const open = openIndex === i;

          return (
            <div key={e.slug} className={`acc-item${open ? " open" : ""}`}>
              <button
                className="acc-trigger"
                onClick={() => toggle(i)}
                aria-expanded={open}
                aria-controls={`acc-body-${e.slug}`}
              >
                <div className="acc-left">
                  <span className="acc-num">{num}</span>
                  <span className="acc-title">
                    {e.title} <em>{e.titleEm}</em>
                  </span>
                </div>
                <span className="acc-meta">{e.meta}</span>
                <span className="acc-icon">+</span>
              </button>

              <div className="acc-body" id={`acc-body-${e.slug}`}>
                <div className="acc-body-inner">
                  <div className="acc-content">
                    <div>
                      <div className="acc-org">{e.org}</div>
                      <div className="acc-tags">
                        {e.tags.map((t) => (
                          <span key={t} className="ctag">
                            {t}
                          </span>
                        ))}
                      </div>
                      {e.images && e.images.length > 0 ? (
                        <TiltImage
                          images={e.images}
                          alt={`${e.title} ${e.titleEm}`}
                          objectPositions={e.imagePositions}
                          active={open}
                        />
                      ) : (
                        <div className="acc-img" style={{ background: e.bg }}>
                          <span style={{ fontSize: "3rem" }}>{e.emoji}</span>
                        </div>
                      )}
                    </div>

                    <div className="acc-story">
                      {/* The accordion shows the opening of the story; the full
                          write-up lives on the case study page. */}
                      {e.story.slice(0, 3).map((para, j) => (
                        <p key={j}>{para}</p>
                      ))}

                      <div className="acc-actions">
                        <Link href={`/projects/${e.slug}`} className="acc-link">
                          Read the full case study &rarr;
                        </Link>
                        {e.link && (
                          <a
                            href={e.link.href}
                            className="acc-link"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {e.link.label}
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="reveal" style={{ marginTop: "2.5rem" }}>
        <Link href="/projects" className="btn-ghost">
          Browse all work &rarr;
        </Link>
      </div>
    </section>
  );
}
