// Centralized portfolio content. Swap placeholder images / links / CV here.

const img = (id, w = 800) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=70`;

export const PROFILE = {
  name: "Abdul Azis",
  title: "Full Stack Developer",
  fullTitle: "Full Stack Web Developer & IoT Engineer",
  location: "Lampung, Indonesia",
  email: "abdulazis.dev1@gmail.com",
  linkedin: "https://www.linkedin.com/in/abdulazis-f91",
  instagram: "https://www.instagram.com/jqueryaziz",
  whatsapp: "6282176849811", // placeholder — international format, no '+'
  photo: "/foto-profil.webp",
  cv: "/cv.pdf",
  description:
    "I'm a Full Stack Developer specializing in building scalable web applications using React, TypeScript, Node.js, PHP, Laravel, and MySQL - with hands-on experience delivering real-world solutions for institutional clients across Indonesia.",
  typingPhrases: [
    "I'm a Full Stack Web Developer.",
    "& IoT Engineer",    
    "& Freelancer",
  ],
stats: [
    { label: "Years Exp", value: 3, suffix: "+" },
    { label: "Projects", value: 11, suffix: "+" },
    { label: "Full Stack Dev", value: null, text: "Full Stack Dev" },
],
};

export const SOCIALS = [
  { name: "GitHub", icon: "github", url: "https://github.com/Abdulazis-m91" },
  { name: "LinkedIn", icon: "linkedin", url: "https://www.linkedin.com/in/abdulazis-f91" },
  { name: "Instagram", icon: "instagram", url: "https://www.instagram.com/jqueryaziz" },
  { name: "Portfolio", icon: "globe", url: "https://abdulazis.my.id" },
];

export const NAV_ITEMS = [
  { id: "home", label: "Home", icon: "home" },
  { id: "projects", label: "Projects", icon: "briefcase" },
  { id: "experience", label: "Experience", icon: "clipboard-list" },
  { id: "tech-stack", label: "Tech Stack", icon: "wrench" },
  { id: "education", label: "Education", icon: "graduation-cap" },
  { id: "contact", label: "Contact", icon: "mail" },
];

export const PROJECTS = [
{
    id: "smartpresence",
    title: "SmartPresence - RFID Attendance System",
    client: "Yayasan Baitulloh",
    domain: "yayasanbaitulloh.com",
    year: "2026",
    system:
      "An RFID-based attendance system connecting ESP32 hardware with a real-time web dashboard for automated student and teacher attendance monitoring.",
    benefits: [
      "Paperless attendance - students simply tap their RFID card",
      "Automated daily & monthly recap reports",
      "Real-time monitoring for 300+ students & 30+ teachers",
      "Automated WhatsApp notifications to parents for real-time attendance updates",
    ],
    short:
      "RFID-based attendance system pairing ESP32 hardware with a real-time web dashboard for staff and student check-ins.",
    description:
      "SmartPresence is an end-to-end attendance platform built for Yayasan Baitulloh. ESP32 microcontrollers read RFID cards (RC522) and stream taps to a PHP/MySQL backend, while a React + TypeScript dashboard provides live attendance monitoring, recap reports, and automated notifications. Designed for reliability in low-connectivity environments with offline buffering and instant sync once online.",
    tech: ["React", "TypeScript", "PHP", "MySQL", "ESP32", "RFID"],
    images: [
      "/images/rfid-software.webp",
      "/images/tester.webp",
      "/images/smartpresence-1.webp",
      "/images/tampilan.webp",
    ],
    demo: "#",
    live: "https://yayasanbaitulloh.com",
  },
 {
    id: "baitulloh-finance",
    title: "Baitulloh Finance Management System",
    client: "Yayasan Baitulloh",
    domain: "baitulloh.com",
    year: "2025",
    system:
      "A web-based finance management system handling income, expenses, and automated financial reporting for school and pesantren operations at Yayasan Baitulloh.",
    benefits: [
      "Reduced manual reporting time by 70%",
      "Multi-role access for school and pesantren staff",
      "Automated WhatsApp payment reminders to parents",
      "Real-time financial recap by month and category",
    ],
    short:
      "A finance management platform for tracking institutional income, expenses, and automated WhatsApp reporting.",
    description:
      "A complete financial management system for Yayasan Baitulloh built on React, Supabase, and Tailwind CSS, deployed on Vercel. It handles multi-account bookkeeping, categorized transactions, monthly recaps, and role-based access. Integrated WhatsApp API delivers automated financial summaries and payment reminders directly to stakeholders.",
    tech: ["React", "Supabase", "Tailwind", "Vercel", "WhatsApp API"],
    images: [
      "/images/fainens 1.webp",
      "/images/fainens 4.webp",
      "/images/fainens 3.webp",
      "/images/fainens 2.webp",
    ],
    demo: "#",
    live: "https://baitulloh.com",
  },
{
    id: "fkki",
    title: "FKKI — Islamic Health Forum",
    client: "Forum Komunikasi Kesehatan Islam",
    domain: "fkki.org",
    year: "2025",
    system:
      "A digital platform for Forum Komunikasi Kesehatan Islam to manage and organize healthcare professionals (nurses, doctors, specialists) across multiple provinces in Indonesia.",
    benefits: [
      "Centralized database of healthcare workers from nurses to specialist doctors across provinces",
      "Enables organizations to filter and sort healthcare workers by region and specialty",
      "Quickly locate available medical personnel in emergency situations by district or regency",
      "Streamlines member registration and role-based access for health organization management",
    ],
    short:
      "A digital platform and forum for an Islamic health community — articles, member management, and discussions.",
    description:
      "FKKI is a digital platform for the Forum Komunikasi Kesehatan Islam, combining a public-facing content site with member management and discussion features. Built with React + TypeScript on the frontend and a hybrid PHP/MySQL + Supabase backend, it supports article publishing, event announcements, and community engagement for health professionals.",
    tech: ["React", "TypeScript", "PHP", "MySQL", "Supabase"],
    images: [
      img("1576091160550-2173dba999ef"),
      img("1505751172876-fa1923c5c528"),
      img("1517694712202-14dd9538aa97"),
      img("1498050108023-c5249f4df085"),
    ],
    demo: "#",
    live: "https://fkki.org",
  },
{
    id: "lowongan-kerja",
    title: "Situs Lowongan Kerja Online",
    client: "Thesis Project",
    domain: null,
    year: "2019",
    system:
      "A web-based job vacancy portal connecting job seekers with employers, built as an undergraduate thesis project for Dinas Tenaga Kerja Sleman, Yogyakarta.",
    benefits: [
      "Connected job seekers with 30+ employers in Sleman region",
      "Supported digital recruitment for 100+ job seekers",
      "Employers can post vacancies and manage applicants online",
      "Job seekers can register, build profiles, and apply directly",
    ],
    short:
      "An online job-vacancy portal connecting job seekers and employers — the final thesis project.",
    description:
      "An online job board developed as a university thesis project using PHP Native, MySQL, and Bootstrap. It allows employers to post vacancies and job seekers to register, build profiles, search listings, and apply online. Includes an admin panel for moderating postings and managing applicants.",
    tech: ["React","PHP Native", "MySQL", "Bootstrap"],
    images: [
      img("1486312338219-ce68d2c6f44d"),
      img("1517245386807-bb43f82c33c4"),
      img("1454165804606-c3d57bc86b40"),
      img("1521737604893-d14cc237f11d"),
    ],
    demo: "#",
    live: null,
  },
];


export const EXPERIENCE = [
  {
    period: "Jan 2024 — Present",
    role: "Full-Stack Web Developer",
    org: "Self-Employed — Lampung, Indonesia",
    points: [
      "Engineered 3+ custom web applications for clients across education and business sectors",
      "Delivered a Finance Management System serving 500+ users, reducing manual reporting time by 70%",
      "Built SmartCard RFID Attendance System integrating ESP32 hardware for 300+ students and 30+ teachers",
      "Developed POS/Cashier System for SMEs, reducing manual errors by 60%",
      "Integrated AI features using OpenAI and Claude API, improving user productivity by 40%",
    ],
    current: true,
  },
  {
    period: "Jan 2024 — Jan 2026",
    role: "Multimedia & Digital Technology Instructor",
    org: "BLK Komunitas Rowdotul Alimir Robbaniy — Kemnaker RI",
    points: [
      "Teaching Multimedia and Digital Technology under Indonesia's Ministry of Manpower",
      "Delivering hands-on training in web development and digital tools to students per batch",
      "Developed structured curriculum for practical web programming and digital literacy",
    ],
    current: false,
  },
  {
    period: "Aug 2022 — Apr 2024",
    role: "IT Support Specialist & Web Developer",
    org: "Yayasan Baitulloh — Lampung, Indonesia",
    points: [
      "Oversaw IT infrastructure and developed web solutions for a nonprofit Islamic school with 60+ members",
      "Administered student and teacher database systems managing 500+ records with 99% data accuracy",
      "Resolved 50+ IT support tickets monthly including network troubleshooting and hardware maintenance",
      "Ensured 99% uptime of IT infrastructure supporting daily operations for 30+ staff and students",
    ],
    current: false,
  },
  {
    period: "Apr 2018 — Sep 2019",
    role: "Web Developer Intern",
    org: "Dinas Tenaga Kerja Sleman — Yogyakarta, Indonesia",
    points: [
      "Built a full-featured Online Job Vacancy Website as undergraduate thesis",
      "Connected job seekers with 30+ employers in Sleman region",
      "Supported digital recruitment services for 100+ job seekers in Sleman, Yogyakarta",
    ],
    current: false,
  },
];

// logo => devicon CDN svg; lucide => fallback lucide icon name
const dev = (path) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${path}`;

export const TECH_GROUPS = [
  {
    category: "Frontend",
    items: [
      { name: "HTML5", logo: dev("html5/html5-original.svg") },
      { name: "CSS3", logo: dev("css3/css3-original.svg") },
      { name: "JavaScript", logo: dev("javascript/javascript-original.svg") },
      { name: "TypeScript", logo: dev("typescript/typescript-original.svg") },
      { name: "React", logo: dev("react/react-original.svg") },
      { name: "Vite", logo: dev("vitejs/vitejs-original.svg") },
      { name: "Tailwind CSS", logo: dev("tailwindcss/tailwindcss-original.svg") },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "PHP", logo: dev("php/php-original.svg") },
      { name: "Laravel", logo: dev("laravel/laravel-original.svg") },
      { name: "Node.js", logo: dev("nodejs/nodejs-original.svg") },
      { name: "REST API", lucide: "webhook" },
      { name: "JWT", lucide: "key-round" },
    ],
  },
  {
    category: "Database",
    items: [
      { name: "MySQL", logo: dev("mysql/mysql-original.svg") },
      { name: "Supabase", logo: dev("supabase/supabase-original.svg") },
    ],
  },
  {
    category: "IoT",
    items: [
      { name: "ESP32", lucide: "cpu" },
      { name: "Arduino", logo: dev("arduino/arduino-original.svg") },
      { name: "RFID RC522", lucide: "radio" },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Git", logo: dev("git/git-original.svg") },
      { name: "GitHub", logo: dev("github/github-original.svg") },
      { name: "Postman", logo: dev("postman/postman-original.svg") },
      { name: "Figma", logo: dev("figma/figma-original.svg") },
      { name: "Vercel", logo: dev("vercel/vercel-original.svg") },
      { name: "cPanel", lucide: "server" },
      { name: "VS Code", logo: dev("vscode/vscode-original.svg") },
    ],
  },
];

export const EDUCATION = [
  {
    type: "degree",
    title: "S1 Teknik Informatika",
    org: "Universitas Teknologi Yogyakarta (UTY)",
    year: "2014 - 2019",
     desc: "Bachelor's degree in Informatics Engineering (S.Kom). Focused on Full-Stack Web Development and database management. Thesis: Online Job Vacancy Website for Dinas Tenaga Kerja Sleman, Yogyakarta.",
    },
  {
    type: "highschool",
    title: "Rekayasa Perangkat Lunak (RPL)",
    org: "SMK Negeri 2 Terbanggi Besar — Lampung, Indonesia",
    year: "2011 - 2014",
        desc: "Vocational High School in Computer & Informatics Engineering. Earned BNSP Certificate: Web Application Development using PHP & MySQL.",
  },
];