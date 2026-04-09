"use client";

import { useState } from "react";
import TiltImage from "./TiltImage";

const experiences = [
  {
    num: "01",
    title: <>Powertrain Engineer &mdash; <em>Sheffield Eco Motorsport</em></>,
    meta: "Oct 2025 – Present",
    org: "Sheffield Eco Motorsport · Sheffield · On-site · Full-time",
    tags: ["FEA", "Fusion 360", "CNC", "Thermal", "Procurement"],
    emoji: "⚡",
    images: ["/SEM-new1.png", "/SEM-new2.png", "/SEM-new3.jpg"],
    imagePositions: ["center", "center", "center 40%"],
    bg: "#EDE0D0",
    story: [
      "Designed and iterated the battery mount across 6 design cycles in Fusion 360, applying FEA at each stage to evaluate structural performance under representative load cases and drive decisions on safety and manufacturability.",
      "Machined the VESC heat sink using CNC milling and pillar drill; performed drilling and mechanical fitting operations to ensure proper thermal contact and integration within the powertrain assembly.",
      "Supported sub-system integration for the powertrain, coordinating fit-up between the auxiliary battery, main battery, and VESC units; ordered hardware and managed procurement of battery mount plates.",
      "Represented SEM at Open Day, delivering live marketing and engaging prospective members on powertrain work.",
    ],
  },
  {
    num: "02",
    title: <>Project Lead &mdash; <em>UKSEDS NRC / The Named One</em></>,
    meta: "Sep 2025 – Present",
    org: "UKSEDS NRC · Sheffield · On-site · Full-time",
    tags: ["OpenRocket", "Fusion 360", "Avionics", "Leadership"],
    emoji: "🚀",
    images: ["/NRC1.png", "/NRC2.png", "/NRC3.jpg"],
    bg: "#F0E8D8",
    story: [
      "Led TNO (The Named One), a multidisciplinary student rocketry team under UKSEDS NRC; managed a full project lifecycle from concept through PDR, coordinating sub-teams across structures, avionics, and recovery.",
      "Owned all structural design end-to-end: iterated rocket geometry in OpenRocket and Fusion 360, optimising off-rod velocity and stability margin; redesigned nosecone shoulder geometry to integrate a custom avionics bay.",
      "Designed the avionics bay from scratch; selected and integrated BMP388 barometric altimeter and IMU; delegated avionics tasks to co-lead and took sole ownership of structures.",
      "Drove fundraising strategy and outreach independently; raised £180+ through targeted marketing campaigns and donor communications.",
      "Authored and maintained team documentation including NRC ruleset summaries, financial reports, manufacturing plans; approved all OpenRocket designs before submission.",
    ],
  },
  {
    num: "03",
    title: <>ANVILS &mdash; <em>UWB Bus Tracker</em></>,
    meta: "Jan 2026",
    org: "Global Engineering Challenge · University of Sheffield · Jan 2026",
    tags: ["MATLAB", "UWB", "Systems Engineering", "Hardware", "Project Management"],
    emoji: "📡",
    image: "/anvils-animation.mp4",
    bg: "#E0D4C0",
    story: [
      "For the Global Engineering Challenge, our team designed ANVILS (Accurate Networked Vehicle Information Live Service) — a UWB-based real-time bus tracking system for Sheffield's public transport network.",
      "Designed a 0.16m-accurate UWB data logger using Time of Arrival and TDoA positioning principles; built a MATLAB mesh network simulation modelling UWB nodes integrated into static infrastructure (traffic lights, bus stops).",
      "Calculated duty cycles and daily energy consumption for the full transportation system; conducted cost-benefit analysis and estimated passenger volumes on Sheffield routes 120 and 7290.",
      "Presented findings to a panel — identifying a post-hoc cost estimation error in the team's financial model.",
    ],
  },
  {
    num: "04",
    title: <>Digital Education Officer &mdash; <em>USIC</em></>,
    meta: "Feb 2026 – Present",
    org: "University of Sheffield Islamic Circle · Sheffield · Full-time",
    tags: ["Content Creation", "Social Media", "Event Management", "Teamwork"],
    emoji: "🌙",
    image: "/USIC1.jpeg",
    bg: "#EDE8F5",
    story: [
      "Created and published digital education content on Islamic themes for USIC's social media channels, including an Instagram carousel series on the Names of Allah.",
      "Supported the organisation and hosting of 4 Ramadan iftars, each serving approximately 200 attendees.",
      "Assisted in coordinating weekly Jummah prayer on campus.",
    ],
  },
  {
    num: "05",
    title: <>Aircraft Maintenance Intern &mdash; <em>Sarsan Aviation</em></>,
    meta: "Jul 2024",
    org: "Sarsan Aviation · Dubai, UAE · On-site · Internship",
    tags: ["MRO", "Turbofan", "Avionics", "DPI", "PCB Soldering"],
    emoji: "✈️",
    images: ["/sarsan-4.jpeg", "/sarsan-2.jpeg", "/sarsan-3.jpeg", "/sarsan-1.jpeg"],
    imagePositions: ["center 0%", "center", "center", "center 35%"],
    bg: "#EAD8C8",
    story: [
      "Led a team of interns in live aircraft maintenance activities within a regulated aviation environment, adhering to strict safety and quality standards.",
      "Assisted with structural inspections and repairs including wing-panel riveting and Dye Penetrant Inspection (DPI).",
      "Gained exposure to aircraft systems including engines, landing gear, hydraulics, fuel systems, and avionics.",
    ],
  },
  {
    num: "06",
    title: <>Engineering Competitions (Drone &amp; Rocketry) &mdash; <em>Emirates</em></>,
    meta: "Jul 2024",
    org: "Emirates Aviation University · Dubai, UAE · On-site",
    tags: ["Drone Build", "Rocketry", "BetaFlight", "Gyroscope", "Teamwork"],
    emoji: "🛩️",
    images: ["/emirates-1.jpeg", "/emirates-2.jpeg", "/emirates-drone.mp4"],
    imagePositions: ["center 80%", "center", "center"],
    bg: "#E0D4C0",
    story: [
      "Competed in a team drone-building challenge — programmed the drone using a gyroscope and BetaFlight software, tuning flight stability; the team placed 1st.",
      "Competed in a water rocket challenge, responsible for balancing the rocket's centre of mass and centre of pressure to ensure stable flight; the team placed 4th.",
    ],
  },
  {
    num: "07",
    title: <><em>SalahSync</em> &mdash; Prayer Timetable Aggregator</>,
    meta: "2025 – Present",
    org: "Independent · salahsync.uk · 2025 – Present",
    tags: ["Next.js", "Vercel", "Cloudflare", "iCal", "Web Scraping"],
    image: "/salahsync-preview.png",
    bg: "#E8D8C4",
    link: { href: "https://salahsync.uk", label: "Visit salahsync.uk →" },
    story: [
      "Built entirely from scratch with no prior web development experience. SalahSync is a live mosque prayer timetable aggregator that lets Muslims across the UK sync their local mosque's prayer times directly to Google Calendar, Apple Calendar, or Outlook — with one click.",
      "Covers 8 mosques across UK cities. Built the scraping pipeline, iCal feed generation, Cloudflare setup, and full frontend on Next.js deployed to Vercel.",
      "Started as a personal problem — I wanted my mosque's prayer times in my calendar — and became something people actually use.",
    ],
  },
];

export default function Experience() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section id="experience">
      <div className="section-eyebrow reveal">Experience</div>
      <div className="reveal">
        {experiences.map((e, i) => (
          <div key={e.num} className={`acc-item${openIndex === i ? " open" : ""}`}>
            <button className="acc-trigger" onClick={() => toggle(i)}>
              <div className="acc-left">
                <span className="acc-num">{e.num}</span>
                <span className="acc-title">{e.title}</span>
              </div>
              <span className="acc-meta">{e.meta}</span>
              <span className="acc-icon">+</span>
            </button>
            <div className="acc-body">
              <div className="acc-body-inner">
                <div className="acc-content">
                  <div>
                    <div className="acc-org">{e.org}</div>
                    <div className="acc-tags">
                      {e.tags.map((t) => (
                        <span key={t} className="ctag">{t}</span>
                      ))}
                    </div>
                    {("image" in e && e.image) || ("images" in e && e.images) ? (
                      <TiltImage
                        src={"image" in e ? e.image as string : undefined}
                        images={"images" in e ? e.images as string[] : undefined}
                        alt={e.org}
                        objectPosition={"imagePosition" in e ? e.imagePosition as string : "center"}
                        objectPositions={"imagePositions" in e ? e.imagePositions as string[] : undefined}
                        active={openIndex === i}
                      />
                    ) : (
                      <div className="acc-img" style={{ background: e.bg }}>
                        <span style={{ fontSize: "3rem" }}>{e.emoji}</span>
                      </div>
                    )}
                  </div>
                  <div className="acc-story">
                    {e.story.map((para, j) => (
                      <p key={j}>{para}</p>
                    ))}
                    {"link" in e && e.link && (
                      <a href={(e.link as {href:string;label:string}).href} className="acc-link" target="_blank" rel="noopener noreferrer" style={{ marginTop: "1.25rem" }}>
                        {(e.link as {href:string;label:string}).label}
                      </a>
                    )}
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
