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
    meta: "Jul 2026 – Present",
    org: "AVROS Rocketry · Design Engineer",
    role: "Design Engineer",
    period: "Jul 2026 – Present",
    location: "United Kingdom",
    summary:
      "Designing a safety-critical piston for the propellant pressurisation system of a reusable liquid rocket engine, including the O-ring gland sizing that has to hold at 500–800 psi.",
    tags: ["Onshape", "Liquid Propulsion", "O-Ring Design", "Hand Calculation", "Design Verification"],
    emoji: "🛰",
    bg: "#E6DFD2",
    // AVROS has no site of its own, so this points at the company page.
    link: { href: "https://www.linkedin.com/company/avros-rocketry", label: "AVROS Rocketry on LinkedIn →" },
    highlights: [
      { value: "500–800", label: "psi design range" },
      { value: "IPA / N₂O", label: "separated propellants" },
      { value: "Safety", label: "critical component" },
    ],
    story: [
      "I design the piston that keeps IPA and N₂O apart inside the propellant tank assembly of a reusable liquid rocket engine. It is a safety-critical part. If the seal between the two propellants fails, they meet somewhere they were never meant to meet.",
      "Everything starts on paper as hand calculation before it becomes parametric CAD in Onshape. I work that way so the geometry stays driven by the numbers, not by whatever happens to look right on screen.",
      "The seal work is the core of it. I size the O-ring groove across squeeze factor, stretch and volumetric gland fill so it holds anywhere in a 500–800 psi range. Gland fill is the unforgiving one. An over-filled groove has nowhere to displace to under pressure, and an under-squeezed one just leaks.",
      "I keep structured calculation records for all of it, so every dimension traces back to the assumption that produced it. It means someone else can check my work, and the next iteration starts from what I did rather than from scratch.",
    ],
  },
  {
    slug: "tno",
    kind: "project",
    title: "Project Lead,",
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
      "I founded TNO (The Named One) and led it through every stage of the UKSEDS National Rocketry Championship: PDR, CDR, Manufacturing Report and Flight Readiness Review. It ended in a live launch that reached 1,700 ft apogee, with telemetry streaming from the onboard sensors down to our ground station in real time.",
      "Leading ten people turned out to be harder than the engineering, and not for the reason I expected. Our full-team meetings were quietly failing. Subteams sat through an hour of discussion that was 80% irrelevant to them and left no better aligned than when they arrived. So I restructured it. I took structures leadership myself, handed avionics to my vice-lead, and swapped the big meeting for weekly cross-team syncs. I have come to think most alignment problems are structural rather than a lack of effort.",
      "On the engineering side I modelled the full airframe in Fusion 360 and checked every OpenRocket simulation before it went in. When the avionics came in under the 300 g I had designed around, it was tempting to treat that as a free win. It was not. The stability margin depended on that mass sitting where I had assumed it would, so I added ballast to the nosecone to put the centre of gravity back where the structural design needed it.",
      "The most valuable work came after the flight. I wrote the post-flight failure analysis from the recovered telemetry and found a nosecone ejection velocity of 12.4 m/s, comfortably beyond anything the friction-fit retention was ever going to hold, and recommended a shear-pin redesign. The same analysis turned up problems with how the recovery mass was distributed, and gaps in the PCB tolerancing against the body tube.",
      "Flying it was the goal. Working out exactly why it came apart is the part that makes the next one better.",
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
      "I have held two roles on Sheffield EcoMotorsport while the team builds toward the iLumen European Solar Challenge.",
      "Since July 2026 I have been an Aerodynamics & Mechanical Design Engineer, making carbon fibre bodywork for SEM03 and working on early design for SEM04, which is our car for iLumen 2028.",
      "Before that I was a Powertrain Engineer, and I took the battery casing through six versions in Fusion 360 to carry a 7.5 kg pack, trying L-bracket and fibreglass construction along the way. Every version went through static FEA against a 20 g load requirement. That is what validated the design we settled on: a 300 × 280 × 3 mm mild steel plate on six 12 mm rods.",
      "Six iterations sounds like indecision until you have watched a design fail the load case for a different reason each time. Every version fixed a real problem the one before it had exposed.",
      "Inside a seven-person powertrain sub-team I positioned and integrated the HV and VESC busbars, 3D printed their casings, and worked on the battery ventilation design. I machined the VESC heat sink myself on a CNC mill and a pillar drill.",
      "I also coordinated fit-up between the auxiliary battery, main battery and VESC units, and handled procurement of the mount plates. It is unglamorous integration work, and it is what decides whether parts designed separately actually go together.",
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
      "/fixed-wing-3.jpeg",
    ],
    imagePositions: ["center", "center 55%", "center", "center 45%"],
    highlights: [
      { value: "600 mm", label: "wingspan" },
      { value: "60% → 22%", label: "MAC corrected" },
      { value: "3", label: "consecutive takeoffs" },
      { value: "3", label: "iterative test cycles" },
    ],
    story: [
      "I designed and scratch-built a 600 mm wingspan fixed-wing RC aircraft from component level up. I picked the motor, ESC and battery off datasheets rather than by guesswork. The setup I landed on draws 20.53 A, which is 68% of the battery's 30 A continuous ceiling, so there is real headroom instead of the pack running at its limit.",
      "The first motor burned out. It was a prop-size mismatch. I was running a drone motor outside its thermal envelope, because fixed-wing flight asks for sustained load in a way a quadcopter's duty cycle never does. I diagnosed it and corrected the pairing.",
      "Then it kept breaking in flight, the same way every time. It took three test cycles to work out why. Going through the flight video frame by frame put the centre of gravity at roughly 60% MAC against a 25–33% safe range. That is badly aft, and it makes the aircraft violently pitch-unstable. I corrected it to 22% MAC.",
      "That was not the whole story. I wanted to know whether my hand-launch technique was contributing too, so I cross-referenced against a ground-roll takeoff on the same airframe the same day, which had worked. Same aircraft, same conditions, different launch method, different outcome. That isolated hand-launch as its own failure variable rather than a symptom of the CG problem.",
      "I got three consecutive controlled takeoffs, which closed out V1, after redesigning the launch technique to work around a landing-gear geometry fault. Looking at where it kept failing pointed at polyfoam as the limiting structural material at the load joint, so V2 moves to PETG and carbon rod.",
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
      "At Haqqathon 2026 at Imperial College London I led a four-person multidisciplinary team building a myoelectric below-elbow prosthetic arm, aimed at amputees in conflict-affected and low-income communities.",
      "We organised the whole project around one constraint: unit cost. We got to £72 per unit, roughly 95% cheaper than commercial alternatives. To me that number is the project rather than a footnote to it, because a prosthetic the person who needs it cannot afford has not solved anything.",
      "I designed the full hand assembly in Fusion 360: a modular five-finger mechanism in ABS, parametrically fitted to stump geometry, with bolt-level replaceability throughout. That last decision matters more than it sounds. When one finger fails on a conventional unit, the user replaces the whole arm. On ours they replace the finger.",
      "I integrated the electronics stack into a sub-£42 budget: EMG-based muscle sensing, haptic feedback, servo actuation with 5 kg lift capacity, Arduino Nano control, and a rechargeable 2000 mAh LiPo charged over USB-C.",
      "We pitched to a judging panel at the end of the 24 hours and reached near-finalist stage. The feedback was about scaling logistics and print-time transparency. It was fair, and it named the real gap between a working prototype and something you can actually distribute at volume.",
    ],
  },
  {
    slug: "hypstuma",
    kind: "work",
    title: "Drone Engineer Trainee at",
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
      "A 450 mm quadcopter came in completely electrically dead. The interesting part of a fault like that is not the fix. It is not jumping to a conclusion before the evidence supports one.",
      "I worked through three sequential checks, each one eliminating a layer: the battery via multimeter, the PCB via USB-C, and then MOSFET continuity. That last check found burnt MOSFETs, and the root cause behind them was reverse polarity on a board with no reverse current protection designed in.",
      "So the real failure was not the MOSFETs. It was a design that let a reversible connection destroy the board. The components that burnt were doing exactly what unprotected components do.",
      "I worked through it methodically and asked people who knew more than me, rather than guessing at replacements. That is what kept the diagnosis pointed at the cause instead of the symptom.",
    ],
  },
  {
    slug: "sarsan",
    kind: "work",
    title: "Aircraft Maintenance Trainee at",
    titleEm: "Sarsan Aviation Academy",
    short: "Sarsan Aviation",
    meta: "Jul 2024",
    org: "Sarsan Aviation Academy · Dubai, UAE",
    role: "Aircraft Maintenance Trainee",
    period: "July 2024",
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
      "A month of hands-on aircraft maintenance at Sarsan Aviation Academy in Dubai. It is the kind of exposure most engineering students do not get until years into a career.",
      "I disassembled and reassembled an APU, a Soloviev D-30 turbofan, 737 and Piper landing gear, disc brakes, hydraulic tanks, fuel tanks, and a piston engine on decommissioned airframes. Taking a turbofan apart and putting it back together changes how you read a cutaway diagram permanently.",
      "By the end of the placement I was leading a five-student team, working in a regulated environment where the safety and quality standards are not negotiable and the paperwork is part of the job rather than an afterthought.",
      "On structures I riveted wing panels to repair damaged sections, and did crack detection with Dye Penetrant Inspection, which finds what a visual inspection cannot.",
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
      "For the Global Engineering Challenge, our six-person team designed ANVILS, short for Accurate Networked Vehicle Information Live Service. It is a UWB mesh network for real-time bus tracking across Sheffield's public transport network.",
      "The system reaches 17 cm positional accuracy, roughly 17.5× better than what current tracking systems achieve. I modelled TDoA and Time of Arrival positioning across 54 receiver nodes along the 120 bus route.",
      "The engineering only matters if the economics work, so I also ran the cost-benefit analysis: £670,000 implementation cost against a 2.3-year payback period, with 10 kWh/day energy consumption across 18 buses, targeting a 9.2% to 25% modal shift over five years.",
      "When we presented to the panel I flagged a cost estimation error in our own financial model. It was not a comfortable thing to raise about your own team's work in front of judges, but a cost model that is quietly wrong is worse than one that is openly corrected.",
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
      "A project I set myself in KiCad: a printed circuit board for a three-stage analog signal-conditioning circuit, made up of an amplifier, a band-pass filter and a comparator. It takes a pulse input and returns a clean square wave.",
      "I routed every trace by hand instead of leaning on the autorouter. On an analog signal chain I think that is the right call, because trace length and return path placement affect the signal in ways an autorouter optimising purely for connection does not account for.",
      "The finished board carries 40 pads, 15 vias and 160 track segments across 13 nets with nothing left unrouted. It passed both ERC and DRC with no functional errors.",
    ],
  },
  {
    slug: "reaction-timer",
    kind: "project",
    title: "Arduino Reaction Timer,",
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
      "I built an embedded C++ reaction-time system on my own using six LEDs and two buttons, iterating the code over two days.",
      "The problem that actually mattered was CPU hammering. A busy-wait loop polling as fast as it can looks like it should give you the most precise timing, and it does the opposite. It starves everything else and the measurements drift. Working out that this was what was ruining the timing was the real job. The fix was easy once I knew the cause.",
      "I checked the finished system against measured reaction times of 200–400 ms. That is the right human range, which told me the timing was sound.",
      "I simulated the circuit logic before building any hardware, which caught wiring errors while they were still free to fix.",
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
      "I competed in two engineering competitions at Emirates Aviation University in Dubai.",
      "In the team drone-building challenge I programmed the drone using a gyroscope and BetaFlight, tuning the flight stability. The team placed 1st.",
      "In the water rocket challenge I balanced the rocket's centre of mass against its centre of pressure to keep the flight stable. It is the same stability-margin principle I would later apply properly on TNO. The team placed 4th.",
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
