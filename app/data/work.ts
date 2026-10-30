// ============================================================
// SINGLE SOURCE OF TRUTH FOR ALL WORK ON THE SITE
//
// The homepage accordion, the /projects index, every
// /projects/<slug> case-study page, and the sitemap all read
// from this one array. Add an entry here and it appears in all
// four places automatically.
//
// Everything is plain data (no JSX) on purpose: generateMetadata
// and sitemap.ts run on the server and need serialisable strings,
// so the italic half of a title is stored as `titleEm` and the
// <em> is applied by whichever component renders it.
//
//   slug        the CV link target — aarushyusuf.dev/projects/<slug>.
//               TREAT AS PERMANENT once printed on a CV: changing it
//               breaks every copy of that PDF already sent out.
//   summary     one sentence; used as the meta/OG description and on
//               the index cards, so it must stand alone out of context.
//
// NOT CURRENTLY RENDERED — `highlights` and `location` are kept because
// the numbers are worth having written down, but the stat strip and the
// role/org/period/location list were removed from the case study pages
// for being repetitive. Delete them if they stay unused.
// ============================================================

import { localWork } from "./work.local";

export type Highlight = { value: string; label: string };

export type WorkItem = {
  slug: string;
  kind: "work" | "project" | "extracurricular";
  title: string;
  titleEm: string;
  /** Short label for nav, breadcrumbs and prev/next links. */
  short: string;
  meta: string;
  org: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  tags: string[];
  emoji: string;
  bg: string;
  highlights: Highlight[];
  story: string[];
  images?: string[];
  imagePositions?: string[];
  link?: { href: string; label: string };
};

const published: WorkItem[] = [
  {
    slug: "avros",
    kind: "work",
    title: "Design Engineer at",
    titleEm: "AVROS Rocketry",
    short: "AVROS Rocketry",
    meta: "Jul 2026 – Sep 2026",
    org: "AVROS Rocketry · Design Engineer",
    role: "Design Engineer",
    period: "Jul 2026 – Sep 2026",
    location: "United Kingdom",
    summary:
      "Designed a safety-critical piston for the propellant pressurisation system of a reusable liquid rocket engine, including the O-ring gland sizing that had to hold at 500–800 psi.",
    tags: ["Onshape", "Liquid Propulsion", "O-Ring Design", "Hand Calculation", "Design Verification"],
    emoji: "🛰",
    bg: "#E6DFD2",
    // An AVROS vehicle on the rail. Shot 3:4, so it is fitted whole inside the
    // 4:3 frame with a blurred copy of itself filling the sides; the sky is
    // uniform enough that the join barely reads. Already 4:3, no crop point.
    images: ["/avros-launch.jpg"],
    // AVROS has no site of its own, so this points at the company page.
    link: { href: "https://www.linkedin.com/company/avros-rocketry", label: "AVROS Rocketry on LinkedIn →" },
    highlights: [
      { value: "500–800", label: "psi design range" },
      { value: "IPA / N₂O", label: "separated propellants" },
      { value: "Safety", label: "critical component" },
    ],
    story: [
      "I designed a safety-critical piston for the propellant pressurisation system of a reusable liquid rocket engine. Its job is to keep IPA and N2O physically separated inside the propellant tank assembly. If that separation fails, the two propellants meet somewhere they were never meant to.",
      "The core of the design is the O-rings. I sized them across squeeze factor, stretch and volumetric gland fill so they hold across a 500 to 800 psi range. Gland fill is the part with no room for error: overfill it and the O-ring has nowhere to displace to under pressure, underfill it and it leaks.",
      "Every dimension started as a hand calculation before it became parametric CAD in Onshape. It kept the geometry driven by the numbers. I documented the sizing process through structured calculation records, so every value traces back to the assumption behind it. That's what makes it possible to verify the design and reuse the logic on the next iteration.",
    ],
  },
  {
    slug: "tno",
    kind: "project",
    title: "Project Lead,",
    titleEm: "UKSEDS NRC / The Named One",
    short: "The Named One",
    meta: "Sep 2025 – Aug 2026",
    org: "UKSEDS National Rocketry Championship · Sheffield",
    role: "Project Lead",
    period: "Sep 2025 – Aug 2026",
    location: "Sheffield, UK",
    summary:
      "Led a 10-member rocketry team through the full lifecycle to a live launch reaching 1,700 ft apogee with real-time telemetry, then authored the post-flight failure analysis.",
    tags: ["OpenRocket", "Fusion 360", "Avionics", "Telemetry", "Failure Analysis", "Leadership"],
    emoji: "🚀",
    bg: "#F0E8D8",
    // Opens on the launch, then the airframe that flew, its internals, the
    // data it sent back, the avionics that sent it, the CAD, and the team.
    // Both CAD renders and the rocket photo are the whole airframe stood
    // upright; every file is cut to 4:3, so none needs its own crop point.
    images: [
      "/tno-launch.mp4",
      "/tno-rocket.jpg",
      "/tno-cad-section.png",
      "/tno-telemetry.jpg",
      "/tno-avionics.mp4",
      "/tno-cad-full.png",
      "/tno-team.jpg",
    ],
    highlights: [
      { value: "1,700 ft", label: "apogee reached" },
      { value: "10", label: "team members led" },
      { value: "12.4 m/s", label: "nosecone ejection velocity" },
      { value: "4", label: "design reviews passed" },
    ],
    story: [
      "TNO (The Named One) reached 1,700 ft apogee at the UKSEDS National Rocketry Championship. Telemetry streamed from onboard sensors to our ground station in real time the whole way up. That was the result of a ten-month build. I led a ten-person team through PDR, CDR, Manufacturing Report and Flight Readiness Review to get there.",
      "Leading ten people turned out to be harder than the engineering, and not for the reason I expected. Our full-team meetings were quietly failing. Subteams sat through an hour of discussion that was mostly irrelevant to them, and left no better aligned than when they arrived. We needed a different structure, not more effort in the same one. So I took structures leadership myself, handed avionics to my vice-lead, and swapped the big meeting for weekly cross-team syncs. Alignment improved almost immediately. It's made me start questioning whether most \"communication problems\" I see are actually structural ones in disguise. Still testing that theory as I lead more teams.",
      "On the engineering side, I modelled the full airframe in Fusion 360 and checked every OpenRocket simulation before it went in. When the avionics came in under the 300 g I'd designed around, it was tempting to treat that as a free win. It wasn't. The stability margin depended on that mass sitting where I'd assumed it would. So I added ballast to the nosecone to put the centre of gravity back where the structural design needed it.",
      "The most valuable work came after the flight. I wrote the post-flight failure analysis from the recovered telemetry. It found a nosecone ejection velocity of 12.4 m/s, well beyond anything the friction-fit retention was ever going to hold. I recommended a bolt redesign. The same analysis turned up problems with how the recovery mass was distributed, and gaps in the PCB tolerancing against the body tube.",
    ],
  },
  {
    slug: "sem",
    kind: "project",
    title: "Aerodynamics & Mechanical Design at",
    titleEm: "Sheffield EcoMotorsport",
    short: "Sheffield EcoMotorsport",
    meta: "Oct 2025 – Present",
    org: "Sheffield EcoMotorsport · iLumen European Solar Challenge",
    role: "Aerodynamics & Mechanical Design Engineer (prev. Powertrain Engineer)",
    period: "Oct 2025 – Present",
    location: "Sheffield, UK",
    summary:
      "Two roles across a solar race team: carbon fibre bodywork and SEM03 design work, following six iterations of battery casing design validated by FEA under a 20 g load case.",
    tags: ["Fusion 360", "FEA", "Carbon Fibre", "CNC", "Aerodynamics", "Procurement"],
    emoji: "⚡",
    bg: "#EDE0D0",
    images: ["/SEM-new1.png", "/SEM-new2.png", "/SEM-new3.jpg"],
    imagePositions: ["center", "center", "center 40%"],
    link: { href: "https://sheffieldecomotorsport.com/", label: "Visit Sheffield EcoMotorsport →" },
    highlights: [
      { value: "6", label: "battery casing iterations" },
      { value: "20 g", label: "FEA load requirement" },
      { value: "7.5 kg", label: "pack supported" },
      { value: "2", label: "roles held" },
    ],
    story: [
      "Since July 2026 I've been an Aerodynamics & Mechanical Design Engineer, making carbon fibre bodywork for SEM03, our car for the iLumen Solar European Challenge 2028.",
      "Before that I was a Powertrain Engineer. I took the battery casing through six versions in Fusion 360 to carry a 7.5 kg pack, trying L-bracket and fibreglass construction along the way. Every version went through static FEA against a 20 g load requirement. That's what validated the design we settled on: a 300 × 280 × 3 mm mild steel plate on six 12 mm rods.",
      "Inside a seven-person powertrain sub-team, I positioned and integrated the HV and VESC busbars. I machined the VESC heat sink myself on a CNC mill and a pillar drill.",
      "I also coordinated fit-up between the auxiliary battery, main battery and VESC units, and handled procurement of the mount plates.",
    ],
  },
  {
    slug: "quadcopter",
    kind: "project",
    title: "Project Manager,",
    titleEm: "Quadcopter UAS",
    short: "Quadcopter UAS",
    meta: "Sep 2026 – Present",
    org: "University of Sheffield · Coursework",
    role: "Project Manager",
    period: "Sep 2026 – Present",
    location: "Sheffield, UK",
    summary:
      "Leading a 6-person team to optimise a quadcopter UAS's structure, propulsion and power systems against a customer Statement of Requirement, with motor testing to size the battery and FEA on a 1 m drop case.",
    tags: ["Project Management", "CADMID", "Requirements", "Motor Testing", "FEA", "Gantt Charts", "Risk Register"],
    emoji: "🚁",
    bg: "#E2DED6",
    // Lab shots at the test enclosure. Both were shot 3:4 portrait, so each
    // takes a horizontal 4:3 band: the first on the quad and the rig, the
    // second wider. Already 4:3, so no crop points needed.
    images: ["/quadcopter-1.jpg", "/quadcopter-2.jpg"],
    highlights: [
      { value: "6", label: "person team led" },
      { value: "CADMID", label: "lifecycle followed" },
      { value: "5 Box", label: "status reporting" },
    ],
    story: [
      "I'm leading a six-person team to optimise a quadcopter UAS's structure, propulsion and power systems against a customer Statement of Requirement, following the CADMID lifecycle.",
      "I led the motor tests, running different propeller pitches and 2, 3 and 4-blade props and measuring current draw on each to size the battery.",
      "I'm developing hand calculations and FEA to verify the arm survives a 1 m single-arm drop.",
      "I manage the Statement of Work, Gantt chart, risk register and 5 Box status reporting.",
    ],
  },
  {
    slug: "fixed-wing",
    kind: "project",
    title: "Fixed-Wing Test Aircraft,",
    titleEm: "Independent Project",
    short: "Fixed-Wing Aircraft",
    meta: "Jul 2026",
    org: "Independent Project",
    role: "Designer & Builder",
    period: "July 2026",
    location: "Sheffield, UK",
    summary:
      "Scratch-built a 600 mm fixed-wing RC aircraft and traced a repeated in-flight structural failure to an aft CG at 60% chord, correcting to 22% and achieving three consecutive controlled takeoffs.",
    tags: ["Aircraft Design", "Flight Testing", "CG Analysis", "Datasheet Analysis", "Failure Analysis"],
    emoji: "🛩",
    bg: "#E4DED0",
    // Runs design -> launch -> flight -> build. The CAD render leads because
    // it is already 4:3 and shows the design work; the photos were shot
    // portrait, so each carries its own vertical crop point to keep the
    // aircraft in frame rather than centring on empty sky or grass.
    images: [
      "/fixed-wing-cad.png",
      "/fixed-wing-1.jpeg",
      "/fixed-wing-flight.mp4",
      "/fixed-wing-3.jpeg",
    ],
    imagePositions: ["center", "center 55%", "center", "center 45%"],
    highlights: [
      { value: "600 mm", label: "wingspan" },
      { value: "60% → 22%", label: "chord, CG corrected" },
      { value: "3", label: "consecutive takeoffs" },
      { value: "3", label: "iterative test cycles" },
    ],
    story: [
      "I designed a 600 mm wingspan RC plane in Fusion 360, built it, and flight-tested it. I selected the motor, ESC and battery combination through hand calculations. The setup draws 20.53 A, 68% of the battery's 30 A continuous rating.",
      "The first motor burned out. It was a prop-size mismatch. I was running a drone motor outside its thermal limit, because fixed-wing flight asks for sustained load in a way a quadcopter's duty cycle never does. I diagnosed it and corrected the pairing.",
      "Then it kept breaking in flight, the same way every time. It took three test cycles to work out why. Going through the flight video frame by frame put the centre of gravity at roughly 60% chord, against a safe range of 25 to 33%. That's badly aft, and it makes the aircraft violently pitch-unstable. I corrected it to 22% of the chord from the leading edge of the wing.",
      "Even after that it failed. I checked whether my hand-launch technique was contributing too, so I cross-referenced against a ground-roll takeoff on the same airframe, the same day, which had worked. Same aircraft, same conditions, different launch method, different outcome. That isolated hand-launch as its own failure variable rather than a symptom of the CG problem. The cause was high wing loading: hand-launch wasn't giving it enough speed for flight.",
      "Once I corrected that, I redesigned the launch technique to work around a landing-gear geometry fault, and got three consecutive controlled takeoffs. That closed out V1. Looking at where it kept failing pointed to polyfoam as the limiting structural material at the load joint, so V2 moves to PETG and carbon rod.",
    ],
  },
  {
    slug: "afiyah",
    kind: "project",
    title: "Project Lead,",
    titleEm: "Afiyah Prosthetics",
    short: "Afiyah Prosthetics",
    meta: "Jun 2026",
    org: "Haqqathon 2026 · Imperial College London",
    role: "Project Lead",
    period: "June 2026",
    location: "Imperial College London",
    summary:
      "Led a 4-person team to prototype a myoelectric below-elbow prosthetic arm at £72 per unit, around 95% cheaper than commercial alternatives, in a 24-hour hackathon.",
    tags: ["Fusion 360", "EMG Sensing", "Arduino", "Servo Actuation", "Design for Cost", "Leadership"],
    emoji: "🦾",
    bg: "#E8DCE8",
    // The full 15s Fusion assembly animation. It is 16:9 and the frame is
    // 4:3, so cover crops ~12% off each side; the arm sits centred, so
    // nothing structural is lost.
    images: ["/afiyah-assembly.mp4"],
    // Pushed to the right-hand edge of the source, the furthest left the frame
    // can shift it. See the note above on the 16:9 -> 4:3 overflow.
    imagePositions: ["100% center"],
    highlights: [
      { value: "£72", label: "unit cost" },
      { value: "95%", label: "cheaper than commercial" },
      { value: "5 kg", label: "lift capacity" },
      { value: "24 hr", label: "build window" },
    ],
    story: [
      "At Haqqathon 2026 at Imperial College London, a four-person multidisciplinary team I led built a myoelectric below-elbow prosthetic arm, aimed at amputees in conflict-affected and low-income communities.",
      "We organised the whole project around one constraint: unit cost. We got to £72 per unit, roughly 95% cheaper than commercial alternatives. That number mattered to me, because a prosthetic the person who needs it can't afford hasn't solved anything.",
      "I designed the full hand assembly in Fusion 360: a modular five-finger mechanism in ABS, parametrically fitted to stump geometry, with bolt-level replaceability throughout. When one finger fails, the user can replace just the finger.",
      "We pitched to a judging panel at the end of the 24 hours and reached near-finalist stage. The feedback was about scaling logistics and print-time transparency. It was fair. There is a real gap between a working prototype and something you can distribute at volume.",
    ],
  },
  {
    slug: "hypstuma",
    kind: "work",
    title: "Drone Engineer Trainee at",
    titleEm: "HYPSTUMA",
    short: "HYPSTUMA",
    meta: "Aug 2025 – Sep 2025",
    org: "HYPSTUMA · Drone Engineer Trainee",
    role: "Drone Engineer Trainee",
    period: "Aug 2025 – Sep 2025",
    location: "United Kingdom",
    summary:
      "Burnt out a 450 mm quadcopter I built from a kit by connecting the battery in reverse polarity, then traced it through three elimination checks to burnt MOSFETs on a board with no reverse-current protection.",
    tags: ["Fault Finding", "Multimeter", "MOSFETs", "Electronics", "Root Cause Analysis"],
    emoji: "🔌",
    bg: "#E0DCD2",
    // Bench shots of the HYPSTUMA quadcopter. The branded frame leads because
    // the logo is legible on it; the second has the props and USB-C fitted.
    // Both cut to 4:3, so neither needs a crop point.
    images: ["/hypstuma-1.jpg", "/hypstuma-2.jpg"],
    highlights: [
      { value: "450 mm", label: "quadcopter frame" },
      { value: "3", label: "sequential elimination checks" },
      { value: "Root cause", label: "reverse polarity" },
    ],
    story: [
      "I built a 450mm quadcopter from a kit, and burnt it myself.",
      "Figuring out how I'd done it mattered more than the fix. I worked through three checks in sequence, each one eliminating a layer: the battery via multimeter, the PCB via USB-C, then MOSFET continuity. Some of these I ran myself, others with guidance from programme experts. That last check found burnt MOSFETs.",
      "The real failure was mine: I plugged the battery in with reverse polarity. The board had no reverse-current protection built in, so that mistake was enough to burn the MOSFETs straight away.",
      "Working methodically through each layer is what led me to find the burnt component and the error I made.",
    ],
  },
  {
    slug: "sarsan",
    kind: "work",
    title: "Aircraft Maintenance Trainee at",
    titleEm: "Sarsan Aviation Academy",
    short: "Sarsan Aviation",
    meta: "Jul 2024 – Aug 2024",
    org: "Sarsan Aviation Academy · Dubai, UAE",
    role: "Aircraft Maintenance Trainee",
    period: "Jul 2024 – Aug 2024",
    location: "Dubai, UAE",
    summary:
      "Hands-on disassembly and reassembly of APU, turbofan, hydraulic, fuel and landing gear systems on decommissioned aircraft, going on to lead a 5-student team.",
    tags: ["MRO", "Turbofan", "Landing Gear", "DPI", "Riveting", "Avionics"],
    emoji: "✈️",
    bg: "#EAD8C8",
    images: ["/sarsan-4.jpeg", "/sarsan-2.jpeg", "/sarsan-3.jpeg", "/sarsan-1.jpeg"],
    imagePositions: ["center 0%", "center", "center", "center 35%"],
    highlights: [
      { value: "5", label: "students led" },
      { value: "D-30", label: "turbofan stripped" },
      { value: "737 / Piper", label: "landing gear worked" },
    ],
    story: [
      "A month of hands-on aircraft maintenance at Sarsan Aviation Academy. It was the experience that got me into engineering.",
      "I disassembled and reassembled an APU, a Soloviev D-30 turbofan, 737 and Piper landing gear, disc brakes, hydraulic tanks, fuel tanks, and a piston engine, all on decommissioned airframes. Taking a turbofan apart and putting it back together changed the way I thought about assemblies.",
      "By the end, I was leading a five-student team, working in a regulated environment where the safety and quality standards aren't negotiable.",
      "On structures, I riveted wing panels to repair damaged sections, and did crack detection with dye penetrant inspection.",
      "I also studied the avionics side: autopilot, MCDU/FMC, transponders, altimeters, VHF/HF radios, GPS, weather radar, and safety systems including the black box, ELT, TCAS, and emergency squawk codes.",
    ],
  },
  {
    slug: "anvils",
    kind: "project",
    title: "ANVILS,",
    titleEm: "UWB Bus Network",
    short: "ANVILS",
    meta: "Jan 2026",
    org: "Global Engineering Challenge · University of Sheffield",
    role: "Team Member (6-person team)",
    period: "January 2026",
    location: "Sheffield, UK",
    summary:
      "A UWB mesh network for Sheffield's bus system accurate to 17 cm, around 17.5× better than current systems, modelled across 54 receiver nodes with a 2.3-year payback period.",
    tags: ["MATLAB", "UWB", "TDoA", "Systems Engineering", "Cost-Benefit Analysis"],
    emoji: "📡",
    bg: "#E0D4C0",
    images: ["/anvils-animation.mp4"],
    highlights: [
      { value: "17 cm", label: "positional accuracy" },
      { value: "17.5×", label: "better than current" },
      { value: "54", label: "receiver nodes modelled" },
      { value: "2.3 yr", label: "payback period" },
    ],
    story: [
      "For the Global Engineering Challenge, our six-person team designed ANVILS, short for Accurate Networked Vehicle Information Live Service. It's a UWB mesh network for real-time bus tracking across Sheffield's public transport network.",
      "The system reaches 17 cm positional accuracy, roughly 17.5× better than what current tracking systems achieve. I modelled TDoA positioning across 54 receiver nodes along Sheffield's Route 120 bus corridor.",
    ],
  },
  {
    slug: "pcb-design",
    kind: "project",
    title: "PCB Design,",
    titleEm: "Analog Signal Chain",
    short: "PCB Design",
    meta: "Aug 2026",
    org: "Independent project · Sheffield",
    role: "Independent Project",
    period: "August 2026",
    location: "Sheffield, UK",
    summary:
      "A 3-stage analog signal-conditioning PCB designed in KiCad: amplifier, band-pass filter and comparator. Routed entirely by hand, and it passed ERC and DRC with no functional errors.",
    tags: ["KiCad", "PCB Design", "Analog Circuits", "ERC / DRC"],
    emoji: "🔧",
    bg: "#DCDED4",
    // Schematic -> routed board -> 3D render. All cropped clear of the KiCad
    // chrome; the schematic is 2.4:1 so it is fitted on the canvas colour.
    images: ["/pcb-schematic.png", "/pcb-layout.png", "/pcb-3d.png"],
    highlights: [
      { value: "3-stage", label: "signal chain" },
      { value: "100%", label: "manually routed" },
      { value: "0", label: "ERC / DRC errors" },
    ],
    story: [
      "Laid out a PCB for a 3-stage analog signal-conditioning circuit (amplifier, band-pass filter, comparator).",
      "Manually routed all traces, achieving a clean ERC/DRC pass by resolving one thermal-relief connectivity violation on the ground plane.",
    ],
  },
  {
    slug: "emirates",
    kind: "project",
    title: "Drone & Rocketry Competitions at",
    titleEm: "Emirates Aviation University",
    short: "Emirates Competitions",
    meta: "Jul 2024",
    org: "Emirates Aviation University · Dubai, UAE",
    role: "Team Member",
    period: "July 2024",
    location: "Dubai, UAE",
    summary:
      "Placed 1st in a team drone-building challenge tuning flight stability in BetaFlight, and 4th in a water rocket challenge balancing centre of mass against centre of pressure.",
    tags: ["Drone Build", "BetaFlight", "Gyroscope", "Rocketry", "Teamwork"],
    emoji: "🏆",
    bg: "#E0D4C0",
    images: ["/emirates-1.jpeg", "/emirates-2.jpeg", "/emirates-drone.mp4"],
    imagePositions: ["center 80%", "center", "center"],
    highlights: [
      { value: "1st", label: "drone challenge" },
      { value: "4th", label: "water rocket challenge" },
    ],
    story: [
      "I competed in two engineering competitions at Emirates Aviation University.",
      "In the team drone-building challenge I programmed the drone using a gyroscope and BetaFlight, tuning the flight stability. The team placed 1st.",
      "In the water rocket challenge I balanced the rocket's centre of mass against its centre of pressure to keep the flight stable. The team placed 4th.",
    ],
  },
];

/**
 * What the site actually renders.
 *
 * `localWork` is empty in the version of work.local.ts that GitHub and
 * Vercel hold, so the deployed site shows only the published entries
 * above. On Aarush's own machine that file carries extra entries, which
 * therefore appear on localhost and nowhere else. See work.local.ts.
 */
export const work: WorkItem[] = [...published, ...localWork];

/** Lookup used by the dynamic route and its metadata. */
export function getWorkItem(slug: string): WorkItem | undefined {
  return work.find((w) => w.slug === slug);
}

/** Ordering for prev/next links follows the array, so it matches the homepage. */
export function getAdjacent(slug: string) {
  const i = work.findIndex((w) => w.slug === slug);
  if (i === -1) return { prev: undefined, next: undefined };
  return {
    prev: work[(i - 1 + work.length) % work.length],
    next: work[(i + 1) % work.length],
  };
}

export const KIND_LABELS: Record<WorkItem["kind"], string> = {
  work: "Work Experience",
  project: "Engineering Projects",
  extracurricular: "Extracurricular",
};
