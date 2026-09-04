import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import RevealObserver from "../components/RevealObserver";
import { KIND_LABELS, work, type WorkItem } from "../data/work";
import { SITE_URL } from "../data/profile";

export const metadata: Metadata = {
  title: "Work | Aarush Yusuf",
  description:
    "Selected engineering work by Aarush Yusuf: liquid rocket propulsion, competition rocketry, solar race car design, aircraft build and test, and prosthetics.",
  alternates: { canonical: `${SITE_URL}/projects` },
  openGraph: {
    title: "Work | Aarush Yusuf",
    description:
      "Selected engineering work by Aarush Yusuf: liquid rocket propulsion, competition rocketry, solar race car design, aircraft build and test, and prosthetics.",
    url: `${SITE_URL}/projects`,
    siteName: "Aarush Yusuf",
    images: [{ url: `${SITE_URL}/og-image.png`, width: 1425, height: 755 }],
    type: "website",
  },
};

// Rendered in CV order: work, then projects, then extracurricular.
const GROUPS: WorkItem["kind"][] = ["work", "project", "extracurricular"];

export default function ProjectsIndexPage() {
  return (
    <>
      <RevealObserver />
      <Navbar />

      <article className="case">
        <Link href="/" className="case-back">
          &larr; Home
        </Link>

        <header className="case-head reveal">
          <div className="section-eyebrow" style={{ marginBottom: "1.25rem" }}>
            Selected work
          </div>
          <h1 className="case-title">
            Everything I&apos;ve <em>built.</em>
          </h1>
          <p className="case-summary">
            Each entry has its own page with the full engineering detail: the
            decisions, the numbers, and what broke along the way.
          </p>
        </header>

        {GROUPS.map((kind) => {
          const items = work.filter((w) => w.kind === kind);
          if (items.length === 0) return null;

          return (
            <section key={kind} className="index-group">
              <div className="section-eyebrow reveal">{KIND_LABELS[kind]}</div>
              <ul className="index-list reveal">
                {items.map((item) => (
                  <li key={item.slug}>
                    <Link href={`/projects/${item.slug}`} className="index-card">
                      <div className="index-card-head">
                        <h2 className="index-card-title">
                          {item.title} <em>{item.titleEm}</em>
                        </h2>
                        <span className="index-card-meta">{item.meta}</span>
                      </div>
                      <p className="index-card-summary">{item.summary}</p>
                      <div className="index-card-foot">
                        <div className="acc-tags" style={{ marginBottom: 0 }}>
                          {item.tags.slice(0, 4).map((t) => (
                            <span key={t} className="ctag">
                              {t}
                            </span>
                          ))}
                        </div>
                        <span className="index-card-cta">Read case study &rarr;</span>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          );
        })}
      </article>

      <Footer />
    </>
  );
}
