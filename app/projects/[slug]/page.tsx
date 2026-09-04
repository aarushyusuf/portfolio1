import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import RevealObserver from "../../components/RevealObserver";
import TiltImage from "../../components/TiltImage";
import { getAdjacent, getWorkItem, KIND_LABELS, work } from "../../data/work";
import { SITE_URL } from "../../data/profile";

// Every case study is prerendered at build time — these URLs go on a CV,
// so they must resolve instantly and identically for every visitor.
export function generateStaticParams() {
  return work.map((item) => ({ slug: item.slug }));
}

// A slug that isn't in the data is a 404, not a rendered empty page.
export const dynamicParams = false;

// `params` is a Promise in this version of Next and must be awaited.
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = getWorkItem(slug);
  if (!item) return {};

  const title = `${item.short}, ${item.role} | Aarush Yusuf`;
  const url = `${SITE_URL}/projects/${item.slug}`;

  return {
    title,
    description: item.summary,
    alternates: { canonical: url },
    openGraph: {
      title,
      description: item.summary,
      url,
      siteName: "Aarush Yusuf",
      images: [{ url: `${SITE_URL}/og-image.png`, width: 1425, height: 755 }],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: item.summary,
      images: [`${SITE_URL}/og-image.png`],
    },
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = getWorkItem(slug);
  if (!item) notFound();

  const { prev, next } = getAdjacent(item.slug);

  return (
    <>
      <RevealObserver />
      <Navbar />

      <article className="case">
        <Link href="/projects" className="case-back">
          &larr; All work
        </Link>

        <header className="case-head reveal">
          <div className="section-eyebrow" style={{ marginBottom: "1.25rem" }}>
            {KIND_LABELS[item.kind]} &middot; {item.period}
          </div>
          <h1 className="case-title">
            {item.title} <em>{item.titleEm}</em>
          </h1>
          <p className="case-summary">{item.summary}</p>
        </header>

        <div className="case-body">
          <div className="case-media reveal">
            {item.images && item.images.length > 0 ? (
              <TiltImage
                images={item.images}
                objectPositions={item.imagePositions}
                alt={`${item.title} ${item.titleEm}`}
              />
            ) : (
              <div className="acc-img" style={{ background: item.bg, borderRadius: 12 }}>
                <span style={{ fontSize: "3rem" }}>{item.emoji}</span>
              </div>
            )}

            <div className="case-tags">
              {item.tags.map((t) => (
                <span key={t} className="ctag">
                  {t}
                </span>
              ))}
            </div>

            {item.link && (
              <a
                href={item.link.href}
                className="acc-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.link.label}
              </a>
            )}
          </div>

          <div className="case-story reveal">
            {item.story.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>

        <nav className="case-nav" aria-label="Other work">
          {prev && (
            <Link href={`/projects/${prev.slug}`} className="case-nav-link">
              <span className="case-nav-dir">&larr; Previous</span>
              <span className="case-nav-name">{prev.short}</span>
            </Link>
          )}
          {next && (
            <Link
              href={`/projects/${next.slug}`}
              className="case-nav-link case-nav-next"
            >
              <span className="case-nav-dir">Next &rarr;</span>
              <span className="case-nav-name">{next.short}</span>
            </Link>
          )}
        </nav>
      </article>

      <Footer />
    </>
  );
}
