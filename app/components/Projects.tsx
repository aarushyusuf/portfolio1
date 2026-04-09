"use client";

import { useState } from "react";

const projects = [
  {
    num: "01",
    title: <>NRC Rocketry &mdash; <em>The Named One</em></>,
    meta: "UKSEDS · 2025–Present",
    org: "UKSEDS NRC · Sheffield · Sep 2025 – Present",
    tags: ["Structures", "Avionics", "OpenRocket", "Fusion 360", "KiCAD"],
    emoji: "🚀",
    bg: "#F0E8D8",
    story: [
      "I founded and led Team TNO (The Named One) for the UKSEDS National Rocketry Championships — managing a full project lifecycle from concept through PDR, coordinating sub-teams across structures, avionics, and recovery.",
      "I owned all structural design end-to-end: iterated rocket geometry in OpenRocket to optimise off-rod velocity and stability margin, redesigned the nosecone shoulder to integrate a custom avionics bay, and selected and integrated a BMP388 barometric altimeter and IMU from scratch.",
      "Independently drove fundraising strategy and raised £180+ through targeted outreach and donor communications.",
    ],
  },
  {
    num: "02",
    title: <>Sheffield Eco Motorsport &mdash; <em>Battery Mount</em></>,
    meta: "SEM Powertrain · 2025–Present",
    org: "SEM Powertrain · Sheffield · Oct 2025 – Present",
    tags: ["FEA", "CNC", "Waterjet", "Fusion 360", "Thermal"],
    emoji: "⚡",
    bg: "#EDE0D0",
    story: [
      "As Powertrain Engineer on Sheffield Eco Motorsport, I designed the battery mounting system across 6 full design cycles in Fusion 360 — applying FEA at each stage to evaluate structural performance under representative load cases and drive decisions on safety and manufacturability.",
      "I CNC-milled the VESC heat sink, performed mechanical fitting to ensure thermal contact within the assembly, and supported sub-system integration between the auxiliary battery, main battery, and VESC units.",
      "Also managed hardware procurement and represented SEM at Open Day.",
    ],
  },
  {
    num: "03",
    title: <><em>SalahSync</em></>,
    meta: "Independent · 2025–Present",
    org: "Independent · salahsync.uk · 2025–Present",
    tags: ["Next.js", "Vercel", "Cloudflare", "iCal"],
    emoji: "🕰",
    bg: "#E8D8C4",
    link: { href: "https://salahsync.uk", label: "Visit salahsync.uk →" },
    story: [
      "Built entirely from scratch with no prior web development experience. SalahSync is a live mosque prayer timetable aggregator that lets Muslims across the UK sync their local mosque's prayer times directly to Google Calendar, Apple Calendar, or Outlook — with one click.",
      "It now covers 8 mosques across UK cities. I built the scraping pipeline, iCal feed generation, Cloudflare setup, and full frontend on Next.js deployed to Vercel. ISOC outreach ongoing for further onboarding.",
      "Started as a personal problem — I wanted my mosque's prayer times in my calendar — and became something people actually use.",
    ],
  },
  {
    num: "04",
    title: <>Aircraft Maintenance &mdash; <em>Sarsan Aviation</em></>,
    meta: "Dubai · Jul 2024",
    org: "Sarsan Aviation Academy · Dubai · Jul 2024",
    tags: ["MRO", "Turbofan", "Avionics", "DPI"],
    emoji: "✈",
    bg: "#EAD8C8",
    story: [
      "A month of hands-on aircraft maintenance at Sarsan Aviation Academy in Dubai — the kind of exposure most engineering students don't get until years into their career.",
      "I disassembled and reassembled an APU, Soloviev D-30 turbofan engine, 737 and Piper landing gears, disc brakes, hydraulic tanks, fuel tanks, and a piston engine. Performed structural wing repairs by riveting new metal sheets, crack detection via Dye Penetrant Inspection, and PCB soldering on avionics boards.",
      "Also studied autopilot, MCDU/FMC, transponder, altimeter, VHF/HF radios, GPS, weather radar, and safety systems including black box, ELT, TCAS, and emergency squawk codes.",
    ],
  },
  {
    num: "05",
    title: <>ANVILS &mdash; <em>UWB Bus Tracker</em></>,
    meta: "GEC · Jan 2026",
    org: "Global Engineering Challenge · Sheffield · Jan 2026",
    tags: ["MATLAB", "UWB", "Systems", "Hardware"],
    emoji: "📡",
    bg: "#E0D4C0",
    story: [
      "For the Global Engineering Challenge, our team designed ANVILS (Accurate Networked Vehicle Information Live Service) — a UWB-based real-time bus tracking system for Sheffield's public transport network.",
      "I designed a 0.16m-accurate UWB data logger using Time of Arrival and TDoA positioning, built a MATLAB mesh network simulation modelling UWB nodes integrated into static infrastructure, and calculated duty cycles and daily energy consumption for the full system.",
      "Conducted cost-benefit analysis for Sheffield routes 120 and 7290, and presented findings to a panel — identifying a post-hoc cost estimation error in the team's financial model.",
    ],
  },
];

export default function Projects() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section id="projects">
      <div className="section-eyebrow reveal">Projects</div>
      <div className="reveal">
        {projects.map((p, i) => (
          <div key={p.num} className={`acc-item${openIndex === i ? " open" : ""}`}>
            <button className="acc-trigger" onClick={() => toggle(i)}>
              <div className="acc-left">
                <span className="acc-num">{p.num}</span>
                <span className="acc-title">{p.title}</span>
              </div>
              <span className="acc-meta">{p.meta}</span>
              <span className="acc-icon">+</span>
            </button>
            <div className="acc-body">
              <div className="acc-body-inner">
                <div className="acc-content">
                  <div>
                    <div className="acc-org">{p.org}</div>
                    <div className="acc-tags">
                      {p.tags.map((t) => (
                        <span key={t} className="ctag">{t}</span>
                      ))}
                    </div>
                    <div className="acc-img" style={{ background: p.bg }}>
                      <span>{p.emoji}</span>
                      <div className="acc-img-label">Add your photo or render here</div>
                    </div>
                    {p.link && (
                      <a href={p.link.href} className="acc-link" target="_blank" rel="noopener noreferrer">
                        {p.link.label}
                      </a>
                    )}
                  </div>
                  <div className="acc-story">
                    {p.story.map((para, j) => (
                      <p key={j}>{para}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
