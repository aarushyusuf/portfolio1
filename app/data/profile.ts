// ============================================================
// Everything about you that isn't a project or a role.
// Education, skills, certifications, interests — read by the
// About / Credentials sections and the site metadata.
// ============================================================

export const SITE_URL = "https://aarushyusuf.dev";

export const profile = {
  name: "Aarush Yusuf",
  role: "Aerospace Engineering Student",
  email: "ayusuf1@sheffield.ac.uk",
  phone: "+44 7472 072981",
  linkedin: "https://www.linkedin.com/in/aarush-yusuf/",
  github: "https://github.com/aarushyusuf",

  tagline:
    "Building rockets, race cars, and aircraft — Aerospace Engineering at the University of Sheffield.",

  currently: [
    { label: "Design Engineer", org: "AVROS Rocketry", orgShort: "AVROS", href: "" },
    {
      label: "Aerodynamics & Mechanical Design",
      org: "Sheffield EcoMotorsport",
      orgShort: "SEM",
      href: "https://sheffieldecomotorsport.com/",
    },
  ],
};

export const education = [
  {
    school: "University of Sheffield",
    qualification: "BEng Aerospace Engineering",
    period: "2025 – Present",
    result: "First Class Honours (81%)",
    detail:
      "Aerospace Materials · Design Build and Test · Analysis and Modelling · Electrical Fundamentals · Aerodynamics and Thermodynamics · Statics and Dynamics · Mathematics",
  },
  {
    school: "Al Diyafah High School",
    qualification: "A-Levels — Mathematics, Physics, Chemistry",
    period: "2023 – 2025",
    result: "A* A* A*",
    detail: "Cohort ranking: 4 of 94",
  },
  {
    school: "GEMS Westminster School",
    qualification: "GCSE — Maths, Physics, Chemistry, Computer Science, English",
    period: "2022 – 2023",
    result: "5A*",
    detail: "Cohort ranking: School Topper",
  },
];

export const skills = [
  {
    group: "Design & Simulation",
    items: ["Fusion 360", "Onshape", "ANSYS Workbench", "ANSYS Mechanical", "OpenRocket", "MATLAB"],
  },
  {
    group: "Electronics & Embedded",
    items: ["KiCad", "Fault finding", "Soldering", "C++"],
  },
  {
    group: "Manufacturing",
    items: ["CNC", "Pillar drill", "Riveting", "Waterjet cutting", "Wire locking", "Mechanical assembly"],
  },
];

export const certifications = [
  { name: "CFD: Airflow Around a Spoiler", issuer: "Coursera" },
  { name: "Flight Mechanics", issuer: "ISAE-SUPAERO" },
  { name: "CNC Programming & MasterCAM", issuer: "PSG College of Technology" },
  { name: "Flyer ID & Operator ID", issuer: "UK CAA" },
  { name: "Stress Analysis in Solid Mechanics", issuer: "Ansys" },
  { name: "Getting Started with Ansys Mechanical", issuer: "Ansys" },
];

export const interests = [
  { name: "Flight Simulation", detail: "VATSIM · 200+ hrs on the A320" },
  { name: "Cricket", detail: "National level" },
  { name: "Chess", detail: "University of Sheffield Team A" },
];
