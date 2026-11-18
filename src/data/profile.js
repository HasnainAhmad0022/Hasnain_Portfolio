// Single source of truth for Hasnain Ahmad's professional profile.
// The portfolio website renders from this file AND cv/build-cv.mjs generates
// Hasnain_Ahmad_CV.docx / .pdf from it — edit here and both stay consistent.
//
// Sources: the previous CV (hasnaincv.pdf), git history of the project
// repositories in C:\hasnain, and live checks of every URL (Nov 2026).
// Do not add facts that are not backed by one of those sources.

export const profile = {
  name: "Hasnain Ahmad",
  title: "Full Stack Developer | React.js Developer",
  location: "Riyadh, Saudi Arabia",
  email: "a.hasnain@gstsa1.org",
  phone: "+966 53 923 2459",       // Saudi Arabia (primary)
  phoneAlt: "+92 306 9396743",     // Pakistan
  github: "https://github.com/HasnainAhmad0022",
  githubLabel: "github.com/HasnainAhmad0022",
  linkedin: "https://www.linkedin.com/in/hasnain-ahmad-%F0%9F%87%B5%F0%9F%87%B0-549a15248/",
  linkedinLabel: "Hasnain Ahmad",
  cvFile: "/Hasnain_Ahmad_CV.pdf",

  // Short line for the hero.
  tagline:
    "I build enterprise web platforms for traceability, supply chain and business operations — from responsive React interfaces to the Node.js APIs and deployments behind them.",

  summary:
    "Full Stack Developer with 3+ years of experience building enterprise web applications with React.js, Node.js, Express and Microsoft SQL Server. Currently working on-site in Riyadh at GST-AHQ on GS1 traceability, supply chain and business platforms. Experienced across the full delivery cycle: responsive, multilingual (English/Arabic) interfaces, REST APIs with Prisma, third-party integrations, and CI/CD deployments to Windows Server and IIS.",

  about: [
    "I am a Full Stack Developer with a strong foundation in React.js. Since 2023 I have worked on enterprise platforms for the GS1 standards ecosystem in Saudi Arabia — barcode management, product traceability, supply chain, manufacturing and retail systems used by real businesses in production.",
    "Today I work on-site in Riyadh with GST-AHQ, where I build and maintain full-stack applications end to end: React front ends, Node.js and Express APIs on Microsoft SQL Server, integrations with external systems, and the Jenkins pipelines that ship them to Windows Server and IIS.",
    "Most of my work happens inside multi-developer teams, so I care about readable, reusable components, consistent design systems and code that the next developer can pick up quickly.",
  ],

  highlights: [
    { value: "3+", label: "Years of experience" },
    { value: "13", label: "Live web platforms" },
    { value: "2026", label: "On-site in Riyadh" },
  ],
};

// Skill groups. Only technologies used in the repositories or listed on the previous CV.
export const skills = [
  {
    key: "frontend",
    title: "Frontend Development",
    items: ["React.js", "Next.js", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS", "Material UI", "shadcn/ui", "NextUI / HeroUI", "Framer Motion", "React Native (Expo)"],
  },
  {
    key: "backend",
    title: "Backend Development",
    items: ["Node.js", "Express.js", "Prisma ORM", "Joi validation", "JWT authentication", "Socket.IO", "Multer file uploads", "Nodemailer / Resend"],
  },
  {
    key: "state",
    title: "State Management",
    items: ["Redux Toolkit", "RTK Query", "Context API", "React Query (TanStack)", "Zustand"],
  },
  {
    key: "api",
    title: "API Integration",
    items: ["RESTful APIs", "Axios", "Real-time (Socket.IO)", "Google Maps API", "Foodics POS", "PayPal", "i18next (English/Arabic)"],
  },
  {
    key: "database",
    title: "Database",
    items: ["Microsoft SQL Server", "Prisma schema & migrations"],
  },
  {
    key: "tools",
    title: "Tools & Platforms",
    items: ["Git & GitHub", "Jenkins CI/CD", "PM2", "IIS / Windows Server", "VPS", "Docker", "Vite", "VS Code", "Postman"],
  },
];

// Domain knowledge shown alongside skills.
export const domainExpertise = [
  "GS1 standards (GTIN, GLN, SSCC)",
  "GS1 Digital Link",
  "EPCIS event tracking",
  "Barcode & QR generation and scanning",
  "Supply chain traceability",
];

export const experience = [
  {
    company: "GST-AHQ",
    role: "Full Stack Developer",
    period: "2026 – Present",
    location: "Riyadh, Saudi Arabia",
    onsite: true,
    points: [
      "Develop and maintain full-stack web applications for GS1 traceability, supply chain and business platforms, working on-site with the Riyadh team.",
      "Designed and built the GST Picklers Club platform end to end: member website, admin platform, online store, Android/iOS member app and REST API (React, React Native, Node.js, Express, Prisma, SQL Server).",
      "Contribute to the Balady Traceability platform and the ARCHI retail platform, including Foodics POS integration, GS1 Digital Link and English/Arabic interfaces.",
      "Built React and Node.js interfaces for industrial and warehouse systems: a powder-room SCADA operator station with real-time telemetry, and a warehouse control system (WCS) integration console.",
      "Set up and maintain Jenkins CI/CD pipelines that deploy production applications to Windows Server with IIS and PM2.",
    ],
    tech: ["React.js", "Node.js", "Express.js", "Prisma", "SQL Server", "Tailwind CSS", "Socket.IO", "Jenkins"],
  },
  {
    company: "Nartec Software Solutions",
    role: "Full Stack Developer",
    period: "2023 – 2026",
    location: "UAE-based company",
    onsite: false,
    points: [
      "Developed React.js front ends for GS1 Saudi Arabia enterprise platforms as part of a multi-developer team, covering barcode management, product traceability and supply chain operations.",
      "Core frontend developer on GTrack, working with GTIN, GLN and SSCC identifiers, and built its web POS and GRoute sales and delivery module.",
      "Built frontend features for the SLIC logistics platform and its supplier portal, including GTIN management, serial control and PDF and barcode label generation.",
      "Led frontend development of PrintPack, including GS1 Digital Link pages, product catalogue screens and reusable form components.",
      "Delivered multilingual interfaces with i18next, Google Maps integration and barcode/QR scanning, and contributed MES GTrack dashboards (OEE, operator dashboard, EPCIS logs).",
    ],
    tech: ["React.js", "Material UI", "React Query", "Redux", "Axios", "i18next", "Google Maps API"],
  },
];

// Role wording reflects actual contribution measured from git history:
// "Full Stack Developer" = built front end and back end; "Core/Lead Frontend" = a
// large share of the team's frontend commits; "Contributor" = features within a
// larger team project.
export const projects = [
  {
    name: "GST Saudi Arabia",
    category: "Corporate website & member portal",
    url: "https://gstsa1.org/",
    role: "Developer · Website & member portal",
    description: "The website of GST (Global Standard Technology) for GS1 barcodes, RFID and traceability services across KSA, UAE and Oman.",
    contribution: "Worked on the public website, member portal and admin interfaces, including multi-language support.",
    tech: ["React.js", "NextUI / HeroUI", "Redux Toolkit", "i18next", "Node.js"],
    featured: true,
    wide: true, // double-width lead card on large screens
  },
  {
    name: "GS1 Saudi Arabia",
    category: "Official website",
    url: "https://www.gs1.org.sa/",
    role: "Frontend Developer · Team project",
    description: "The official GS1 Saudi Arabia platform for global standards and barcode management.",
    contribution: "Developed responsive React interfaces with multi-language support, Google Maps and barcode features.",
    tech: ["React.js", "i18next", "Google Maps API"],
    featured: true,
  },
  {
    name: "GTrack",
    category: "Supply chain traceability",
    url: "https://gtrack.online/",
    role: "Core Frontend Developer · Team project",
    description: "A centralised platform for end-to-end supply chain traceability using GS1 identifiers.",
    contribution: "Built major modules for GTIN, GLN and SSCC tracking, the web POS and the GRoute sales and delivery module.",
    tech: ["React.js", "Material UI", "React Query", "Node.js"],
    featured: true,
  },
  {
    name: "SLIC",
    category: "Logistics & supply chain",
    url: "https://www.slicapp.online/",
    role: "Core Frontend Developer · Team project",
    description: "A logistics platform covering inventory, order processing, shipment tracking and a supplier portal.",
    contribution: "Built GTIN management, serial control, label and PDF generation, and the supplier portal.",
    tech: ["React.js", "Material UI", "React Query", "Node.js"],
    featured: true,
  },
  {
    name: "EPCIS",
    category: "Event-based visibility",
    url: "https://epcis.gtrack.online/",
    role: "Frontend Developer · Team project",
    description: "An EPCIS service for real-time supply chain event tracking and product movement visibility.",
    contribution: "Implemented the interfaces for capturing and monitoring supply chain events.",
    tech: ["React.js", "REST APIs"],
    featured: true,
  },
  {
    name: "PrintPack",
    category: "Print & packaging",
    url: "https://printpack.gtrack.online/",
    role: "Lead Frontend Developer · Team project",
    description: "A barcode, GTIN and GS1 Digital Link platform for print and packaging, linked with GTrack.",
    contribution: "Led frontend development, including Digital Link pages, nutrition facts and reusable form components.",
    tech: ["React.js", "Material UI", "React Query", "i18next"],
    featured: true,
  },
  {
    name: "ARCHI",
    category: "Retail traceability",
    url: "https://archi.gtrack.online/",
    role: "Full Stack Developer · Team project",
    description: "A GS1 retail platform with GTIN, Digital Link, labelling and Foodics POS integration.",
    contribution: "Built frontend and backend features: Foodics integration, controlled-serial labels and English/Arabic UI.",
    tech: ["React.js", "Node.js", "Prisma", "SQL Server"],
    featured: true,
  },
  {
    name: "Balady Traceability",
    category: "Regulatory traceability",
    url: "https://balady.gtrack.online/",
    role: "Contributor · Team project",
    description: "A regulator platform with one product register, a transaction ledger, product journeys and recalls.",
    contribution: "Built transaction and journey search features, dashboards and the ARCHI complaints integration.",
    tech: ["React.js", "React Query", "Node.js", "Prisma"],
    featured: true,
  },
  {
    name: "MES GTrack",
    category: "Manufacturing execution",
    url: "https://mes.gtrack.online/",
    role: "Frontend Developer · Team project",
    description: "A manufacturing execution system for production, stations, aggregation and attendance.",
    contribution: "Built the OEE machine dashboard, operator dashboard, aggregation screens and EPCIS log integration.",
    tech: ["React.js", "Tailwind CSS", "Socket.IO"],
    featured: true,
  },
  {
    name: "GST Picklers Club",
    category: "Club management platform",
    url: "https://web.gstsa.club/",
    links: [
      { label: "Website", url: "https://web.gstsa.club/" },
      { label: "Admin", url: "https://gstsa.club/" },
      { label: "Store", url: "https://shop.gstsa.club/" },
    ],
    role: "Full Stack Developer",
    description: "A club platform for memberships, court bookings, events, live open-play queues, billing and an online store.",
    contribution: "Designed and built the member website, admin platform, store and REST API end to end.",
    tech: ["React.js", "Redux Toolkit", "Tailwind CSS", "Node.js", "Prisma", "SQL Server"],
    featured: true,
  },
  {
    name: "GST Picklers Club App",
    category: "Mobile app · Android & iOS",
    url: null, // built and packaged (club.gstsa.member); not yet published on the app stores
    platformNote: "Android & iOS · React Native",
    role: "Mobile Developer",
    description: "The club's member portal as a native app: events, open play, rankings, wallet and profile.",
    contribution: "Built the app with React Native and Expo on the same API, sign-in and business rules as the website.",
    tech: ["React Native", "Expo", "Redux Toolkit", "REST APIs"],
    featured: true,
  },
  {
    name: "GST E-Shop",
    category: "Multi-vendor e-commerce",
    url: "https://eshop.gstsa.club/",
    role: "Full Stack Developer · Maintenance & enhancement",
    description: "A multi-vendor marketplace with a storefront, seller centre and admin dashboard.",
    contribution: "Enhanced the storefront and API, and rebuilt the CI/CD deployment pipeline.",
    tech: ["React.js", "NextUI", "Node.js", "Prisma"],
    featured: false,
  },
  {
    name: "Powder Room SCADA",
    category: "Industrial monitoring",
    url: "https://pcq-scada.gtrack.online/",
    role: "Full Stack Developer",
    description: "An operator station for a pipe-coating plant powder room, with live telemetry and alarm auditing.",
    contribution: "Built the React interface, Node.js telemetry gateway, alarm engine and deployment pipeline.",
    tech: ["React.js", "Node.js", "Socket.IO", "SQL Server"],
    featured: false,
  },
  {
    name: "GTRACK × WCS",
    category: "Warehouse integration",
    url: "https://wcs.gtrack.online/",
    role: "Full Stack Developer",
    description: "An integration console between GTRACK inventory and an automated warehouse control system.",
    contribution: "Built the frontend and backend, and the deployment configuration.",
    tech: ["React.js", "TanStack Query", "Node.js", "Prisma"],
    featured: false,
  },
];

export const education = [
  {
    degree: "Bachelor of Science in Information Technology",
    school: "The University of Agriculture, Peshawar",
    period: "2018 – 2022",
    location: "Pakistan",
  },
];

export const certifications = []; // None listed on the previous CV — add verified ones only.

export const languages = ["English", "Urdu", "Pashto"];
