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
    title: "Design Engineer —",
    titleEm: "AVROS Rocketry",
    short: "AVROS Rocketry",
    meta: "Jul 2026 – Present",
    org: "AVROS Rocketry · Design Engineer",
    role: "Design Engineer",
    period: "Jul 2026 – Present",
    location: "United Kingdom",
    summary:
      "Designing a safety-critical piston for the propellant pressurisation system of a reusable liquid rocket engine, including O-ring gland sizing to withstand 500–800 psi.",
    tags: ["Onshape", "Liquid Propulsion", "O-Ring Design", "Hand Calculation", "Design Verification"],
    emoji: "🛰",
    bg: "#E6DFD2",
    highlights: [
      { value: "500–800", label: "psi design range" },
      { value: "IPA / N₂O", label: "separated propellants" },
      { value: "Safety", label: "critical component" },
    ],
    story: [
      "I design the piston that physically separates IPA and N₂O inside the propellant tank assembly of a reusable liquid rocket engine. It is a safety-critical part: if the seal between the two propellants fails, they meet somewhere they are never meant to meet.",
      "The design starts as hand calculation and progresses into parametric CAD in Onshape, so the geometry stays driven by the numbers rather than by what happens to look right on screen.",
      "The seal work is the core of it. I develop the O-ring groove sizing — squeeze factor, stretch, and volumetric gland fill — to hold across a 500–800 psi range. Getting gland fill right matters because an over-filled groove has nowhere to displace to under pressure, and an under-squeezed one leaks.",
      "I document the sizing process through structured calculation records, so each dimension can be traced back to the assumption that produced it. That makes the design verifiable by someone else and reusable on the next iteration instead of being re-derived from scratch.",
    ],
  },
  {
    slug: "tno",
    kind: "project",
    title: "Project Lead —",
    titleEm: "UKSEDS NRC / The Named One",
    short: "The Named One",
    meta: "Sep 2025 – Present",
    org: "UKSEDS National Rocketry Championship · Sheffield",
    role: "Project Lead",
    period: "Sep 2025 – Present",
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
      "I founded and led TNO (The Named One) through the complete UKSEDS National Rocketry Championship lifecycle — PDR, CDR, Manufacturing Report, and Flight Readiness Review — to a live launch that reached 1,700 ft apogee with real-time telemetry streaming from onboard sensors to a ground station.",
      "Leading ten people taught me something I did not expect to be the hard part. Full-team meetings were quietly failing: subteams sat through an hour of discussion that was 80% irrelevant to them and left no better aligned. I restructured it — took structures leadership myself, delegated avionics leadership to my vice-lead, and instituted weekly cross-team syncs instead. Alignment problems are usually structural, not effort problems.",
      "On the engineering side I modelled the full airframe in Fusion 360 and verified every OpenRocket simulation before submission. When the avionics came in under the 300 g mass I had designed around, that was not a free win — the stability margin depended on that mass being where I assumed it was. I added ballast to the nosecone to restore the centre-of-gravity position the structural design was built on.",
      "The most valuable work came after the flight. I authored a post-flight failure analysis from the recovered telemetry and identified a nosecone ejection velocity of 12.4 m/s — comfortably beyond what the friction-fit retention could hold — and recommended a shear-pin redesign. The same analysis surfaced recovery mass distribution issues and PCB tolerancing gaps against the body tube.",
      "Flying it was the goal. Understanding precisely why it came apart the way it did is the part that makes the next one better.",
    ],
  },
  {
    slug: "sem",
    kind: "project",
    title: "Aerodynamics & Mechanical Design —",
    titleEm: "Sheffield EcoMotorsport",
    short: "Sheffield EcoMotorsport",
    meta: "Oct 2025 – Present",
    org: "Sheffield EcoMotorsport · iLumen European Solar Challenge",
    role: "Aerodynamics & Mechanical Design Engineer (prev. Powertrain Engineer)",
    period: "Oct 2025 – Present",
    location: "Sheffield, UK",
    summary:
      "Two roles across a solar race team: carbon fibre bodywork and SEM04 design work, following six iterations of battery casing design validated by FEA under a 20 g load case.",
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
      "I have held two roles on Sheffield EcoMotorsport as the team builds toward the iLumen European Solar Challenge.",
      "Since July 2026 I have been an Aerodynamics & Mechanical Design Engineer, manufacturing carbon fibre bodywork for SEM03 and contributing to early design work on SEM04 for the iLumen 2028 competition.",
      "Before that, as Powertrain Engineer, I iterated the battery casing design across six versions in Fusion 360 — moving through L-bracket and fibreglass construction approaches — to carry a 7.5 kg pack. Each version went through Fusion static FEA against a 20 g load requirement, which is what validated the final 300 × 280 × 3 mm mild steel plate supported on six 12 mm-diameter rods.",
      "Six iterations sounds like indecision until you have watched a design fail the load case for a different reason each time. Each version fixed a real problem the previous one exposed.",
      "I positioned and integrated the HV and VESC busbars within a seven-person powertrain sub-team, 3D printed the busbar casings, and contributed to the battery ventilation system design. I machined the VESC heat sink using CNC milling and a pillar drill.",
      "I also coordinated sub-system fit-up between the auxiliary battery, main battery and VESC units, and managed procurement of the mount plates — the unglamorous integration work that decides whether parts designed separately actually assemble.",
    ],
  },
  {
    slug: "fixed-wing",
    kind: "project",
    title: "Fixed-Wing Test Aircraft —",
    titleEm: "Independent Project",
    short: "Fixed-Wing Aircraft",
    meta: "Jul 2026",
    org: "Independent Project",
    role: "Designer & Builder",
    period: "July 2026",
    location: "Sheffield, UK",
    summary:
      "Scratch-built a 600 mm fixed-wing RC aircraft and diagnosed a repeated in-flight structural failure to an aft CG at 60% MAC, correcting to 22% and achieving three consecutive controlled takeoffs.",
    tags: ["Aircraft Design", "Flight Testing", "CG / MAC Analysis", "Datasheet Analysis", "Failure Analysis"],
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
      "/fixed-wing-2.jpeg",
      "/fixed-wing-3.jpeg",
    ],
    imagePositions: ["center", "center 55%", "center", "center 50%", "center 45%"],
    highlights: [
      { value: "600 mm", label: "wingspan" },
      { value: "60% → 22%", label: "MAC corrected" },
      { value: "3", label: "consecutive takeoffs" },
      { value: "3", label: "iterative test cycles" },
    ],
    story: [
      "I designed and scratch-built a 600 mm wingspan fixed-wing RC aircraft from component level. The motor/ESC/battery combination came out of datasheet analysis rather than guesswork — the selected setup draws 20.53 A, which sits at 68% of the battery's 30 A continuous ceiling, leaving real headroom instead of running the pack at its limit.",
      "The first motor burned out. The cause was a prop-size mismatch: I was running a drone motor outside its thermal envelope, because a fixed-wing operating range asks for sustained load in a way a quadcopter's duty cycle never does. Diagnosed it, corrected the pairing.",
      "Then it kept breaking in flight, repeatedly, in the same way. I worked through three iterative test cycles to find out why. Frame-by-frame flight video analysis put the centre of gravity at roughly 60% MAC against a 25–33% safe range — badly aft, which makes the aircraft violently pitch-unstable. I corrected it to 22% MAC.",
      "That was not the whole story. To find out whether the hand-launch technique was also contributing, I cross-referenced against a same-day ground-roll takeoff on the identical airframe that succeeded. Same aircraft, same conditions, different launch method, different outcome — which isolated hand-launch as an independent failure variable rather than a symptom of the CG problem.",
      "I reached three consecutive controlled takeoffs (V1 complete) after redesigning the launch technique to counter a landing-gear geometry fault. Failure recurrence analysis identified polyfoam as the limiting structural material at the load joint, which is driving a PETG and carbon-rod structural revision for V2.",
    ],
  },
  {
    slug: "afiyah",
    kind: "project",
    title: "Project Lead —",
    titleEm: "Afiyah Prosthetics",
    short: "Afiyah Prosthetics",
    meta: "Jun 2026",
    org: "Haqqathon 2026 · Imperial College London",
    role: "Project Lead",
    period: "June 2026",
    location: "Imperial College London",
    summary:
      "Led a 4-person team to prototype a myoelectric below-elbow prosthetic arm at £72 per unit — 95% cheaper than commercial alternatives — in a 24-hour hackathon.",
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
      "At Haqqathon 2026 at Imperial College London I led a four-person multidisciplinary team to design and prototype a myoelectric below-elbow prosthetic arm, targeting amputees in conflict-affected and low-income communities.",
      "The whole project was organised around one constraint: unit cost. We reached £72 per unit — around 95% cheaper than commercial alternatives. That number is the point of the project, not a footnote to it, because a prosthetic that the intended user cannot buy has not solved anything.",
      "I designed the full hand assembly in Fusion 360: a modular five-finger mechanism in ABS with a parametric fit to stump geometry, and bolt-level replaceability throughout. That last decision matters more than it sounds — when a single finger fails on a conventional unit, the user replaces the whole arm. Here they replace the finger.",
      "I integrated the electronics stack into a sub-£42 budget: EMG-based muscle sensing, haptic feedback, servo actuation with 5 kg lift capacity, Arduino Nano control, and a rechargeable 2000 mAh LiPo charged over USB-C.",
      "We pitched to a judging panel at the end of the 24 hours and reached near-finalist stage. The feedback centred on scaling logistics and print-time transparency — fair criticism, and the honest gap between a working prototype and something that can actually be distributed at volume.",
    ],
  },
  {
    slug: "hypstuma",
    kind: "work",
    title: "Drone Engineer Trainee —",
    titleEm: "HYPSTUMA",
    short: "HYPSTUMA",
    meta: "Aug 2025",
    org: "HYPSTUMA · Drone Engineer Trainee",
    role: "Drone Engineer Trainee",
    period: "August 2025",
    location: "United Kingdom",
    summary:
      "Diagnosed a complete electrical failure on a 450 mm quadcopter to reverse polarity through three sequential elimination checks, identifying burnt MOSFETs from absent reverse current protection.",
    tags: ["Fault Finding", "Multimeter", "MOSFETs", "Electronics", "Root Cause Analysis"],
    emoji: "🔌",
    bg: "#E0DCD2",
    highlights: [
      { value: "450 mm", label: "quadcopter frame" },
      { value: "3", label: "sequential elimination checks" },
      { value: "Root cause", label: "reverse polarity" },
    ],
    story: [
      "A 450 mm quadcopter came in completely electrically dead. The interesting part of a fault like that is not the fix — it is not jumping to a conclusion before the evidence supports one.",
      "I worked through three sequential checks, each one eliminating a layer: the battery via multimeter, the PCB via USB-C, and then MOSFET continuity. That last check found burnt MOSFETs, and the root cause behind them was reverse polarity on a board with no reverse current protection designed in.",
      "So the real failure was not the MOSFETs. It was a design that allowed a reversible connection to destroy the board — the components that burnt were doing exactly what unprotected components do.",
      "I combined structured fault elimination with expert consultation rather than guessing at replacements, which is what kept the diagnosis pointed at the cause instead of the symptom.",
    ],
  },
  {
    slug: "sarsan",
    kind: "work",
    title: "Aircraft Maintenance Trainee —",
    titleEm: "Sarsan Aviation Academy",
    short: "Sarsan Aviation",
    meta: "Jul 2024",
    org: "Sarsan Aviation Academy · Dubai, UAE",
    role: "Aircraft Maintenance Trainee",
    period: "July 2024",
    location: "Dubai, UAE",
    summary:
      "Hands-on disassembly and reassembly of APU, turbofan, hydraulic, fuel and landing gear systems on decommissioned aircraft, progressing to leading a 5-student team.",
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
      "A month of hands-on aircraft maintenance at Sarsan Aviation Academy in Dubai — the kind of exposure most engineering students do not get until years into a career.",
      "I disassembled and reassembled an APU, a Soloviev D-30 turbofan, 737 and Piper landing gear, disc brakes, hydraulic tanks, fuel tanks, and a piston engine on decommissioned airframes. Taking a turbofan apart and putting it back together changes how you read a cutaway diagram permanently.",
      "I progressed to leading a five-student team during the placement, working within a regulated environment where the safety and quality standards are not negotiable and the paperwork is part of the job rather than an afterthought.",
      "On structures I performed wing-panel riveting to repair damaged sections and carried out crack detection using Dye Penetrant Inspection — a method that finds what a visual inspection cannot.",
      "I also studied the avionics side: autopilot, MCDU/FMC, transponders, altimeters, VHF/HF radios, GPS, weather radar, and safety systems including the black box, ELT, TCAS, and emergency squawk codes.",
    ],
  },
  {
    slug: "anvils",
    kind: "project",
    title: "ANVILS —",
    titleEm: "UWB Bus Network",
    short: "ANVILS",
    meta: "Jan 2026",
    org: "Global Engineering Challenge · University of Sheffield",
    role: "Team Member (6-person team)",
    period: "January 2026",
    location: "Sheffield, UK",
    summary:
      "A UWB mesh network for Sheffield's bus system accurate to 17 cm — 17.5× better than current systems — modelled across 54 receiver nodes with a 2.3-year payback period.",
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
      "For the Global Engineering Challenge, our six-person team designed ANVILS — Accurate Networked Vehicle Information Live Service — a UWB mesh network for real-time bus tracking across Sheffield's public transport network.",
      "The system reaches 17 cm positional accuracy, roughly 17.5× better than what current tracking systems achieve. I modelled TDoA and Time of Arrival positioning across 54 receiver nodes along the 120 bus route.",
      "The engineering only matters if the economics work, so I also ran the cost-benefit analysis: £670,000 implementation cost against a 2.3-year payback period, with 10 kWh/day energy consumption across 18 buses, targeting a 9.2% to 25% modal shift over five years.",
      "When we presented to the panel I identified a post-hoc cost estimation error in our own financial model. Not a comfortable thing to raise about your own team's work in front of judges, but a cost model that is quietly wrong is worse than one that is openly corrected.",
    ],
  },
  {
    slug: "pcb-formula-student",
    kind: "project",
    title: "PCB Design —",
    titleEm: "Formula Student Brief",
    short: "PCB Design",
    meta: "Aug 2026",
    org: "Formula Student electrical recruitment brief · Independent",
    role: "Independent Project",
    period: "August 2026",
    location: "Sheffield, UK",
    summary:
      "Completed a Formula Student electrical recruitment brief in KiCad: a 3-stage analog signal-conditioning PCB, manually routed, passing ERC and DRC with no functional errors.",
    tags: ["KiCad", "PCB Design", "Analog Circuits", "ERC / DRC"],
    emoji: "🔧",
    bg: "#DCDED4",
    highlights: [
      { value: "3-stage", label: "signal chain" },
      { value: "100%", label: "manually routed" },
      { value: "0", label: "ERC / DRC errors" },
    ],
    story: [
      "I independently completed a Formula Student electrical recruitment brief in KiCad, laying out a PCB for a three-stage analog signal-conditioning circuit: amplifier, band-pass filter, and comparator.",
      "I routed every trace manually rather than leaning on the autorouter. On an analog signal chain that is the right call — trace length and return path placement affect the signal in ways an autorouter optimising purely for connection does not account for.",
      "The board passed both ERC and DRC checks with no functional errors.",
    ],
  },
  {
    slug: "reaction-timer",
    kind: "project",
    title: "Arduino Reaction Timer —",
    titleEm: "Independent Project",
    short: "Reaction Timer",
    meta: "Aug 2025",
    org: "Independent Project",
    role: "Solo build",
    period: "August 2025",
    location: "Sheffield, UK",
    summary:
      "A solo embedded C++ reaction-time system on 6 LEDs and 2 buttons, validated at 200–400 ms, where the key fix was eliminating CPU hammering that was destroying timing accuracy.",
    tags: ["C++", "Embedded", "Arduino", "Circuit Simulation"],
    emoji: "🎯",
    bg: "#DEDAD0",
    highlights: [
      { value: "200–400 ms", label: "measured range" },
      { value: "6 / 2", label: "LEDs / buttons" },
      { value: "2 days", label: "iteration time" },
    ],
    story: [
      "I developed and programmed a solo embedded C++ reaction-time system using six LEDs and two buttons, iterating the code over two days.",
      "The problem that actually mattered was CPU hammering. A busy-wait loop polling as fast as it can looks like it should give the most precise timing and does the opposite — it starves everything else and the measurements drift. Identifying that as the source of the timing inaccuracy was the real work; the fix followed easily once the cause was clear.",
      "I validated the finished system against measured reaction times of 200–400 ms, which is the correct human range and confirmed the timing was sound.",
      "I simulated the circuit logic before building the hardware, which caught wiring errors while they were still free to fix.",
    ],
  },
  {
    slug: "emirates",
    kind: "project",
    title: "Drone & Rocketry Competitions —",
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
      "I competed in two engineering competitions at Emirates Aviation University in Dubai.",
      "In the team drone-building challenge I programmed the drone using a gyroscope and BetaFlight, tuning the flight stability. The team placed 1st.",
      "In the water rocket challenge I was responsible for balancing the rocket's centre of mass against its centre of pressure to keep the flight stable — the same stability-margin principle I would later apply properly on TNO. The team placed 4th.",
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
