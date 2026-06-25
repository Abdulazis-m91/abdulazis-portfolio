// Centralized portfolio content. Swap placeholder images / links / CV here.

const img = (id, w = 800) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=70`;

export const PROFILE = {
  name: "Abdul Azis",
  title: "Full Stack Developer",
  fullTitle: "Full Stack Web Developer & IoT Engineer",
  company: "JQ Tech Solution",
  location: "Lampung, Indonesia",
  email: "abdulazis.dev1@gmail.com",
  whatsapp: "6282176849811", // placeholder — international format, no '+'
  photo:
    "https://images.unsplash.com/photo-1649044747879-d77b1dbcecf6?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NTJ8MHwxfHNlYXJjaHw0fHxpbmRvbmVzaWFuJTIwZGV2ZWxvcGVyJTIwcG9ydHJhaXQlMjBzdHVkaW8lMjBoZWFkc2hvdHxlbnwwfHx8Ymx1ZXwxNzgyMzYwMzA1fDA&ixlib=rb-4.1.0&q=85&w=600",
  cv: "/cv.pdf",
  description:
    "I'm a Full Stack Developer specializing in building scalable web applications using React, TypeScript, Node.js, PHP, Laravel, and MySQL — with hands-on experience delivering real-world solutions for institutional clients across Indonesia.",
  typingPhrases: [
    "I'm a Full Stack Web Developer.",
    "& IoT Engineer",
    "& Freelancer",
  ],
  stats: [
    { label: "Years Exp", value: 3, suffix: "+" },
    { label: "Projects", value: 8, suffix: "+" },
    { label: "Full Stack Dev", value: null, text: "Full Stack Dev" },
  ],
};

export const SOCIALS = [
  { name: "GitHub", icon: "github", url: "https://github.com/Abdulazis-m91" },
  { name: "LinkedIn", icon: "linkedin", url: "www.linkedin.com/in/abdulazis-f91" },
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
    title: "SmartPresence — RFID Attendance System",
    client: "Yayasan Baitulloh",
    domain: "yayasanbaitulloh.com",
    year: "2024",
    short:
      "RFID-based attendance system pairing ESP32 hardware with a real-time web dashboard for staff and student check-ins.",
    description:
      "SmartPresence is an end-to-end attendance platform built for Yayasan Baitulloh. ESP32 microcontrollers read RFID cards (RC522) and stream taps to a PHP/MySQL backend, while a React + TypeScript dashboard provides live attendance monitoring, recap reports, and automated notifications. Designed for reliability in low-connectivity environments with offline buffering and instant sync once online.",
    tech: ["React", "TypeScript", "PHP", "MySQL", "ESP32", "RFID"],
    images: [
      img("1551288049-bebda4e38f71"),
      img("1518770660439-4636190af475"),
      img("1581091226825-a6a2a5aee158"),
      img("1460925895917-afdab827c52f"),
    ],
    demo: "#",
    live: "https://yayasanbaitulloh.com",
  },
  {
    id: "baitulloh-finance",
    title: "Baitulloh Finance Management System",
    client: "Yayasan Baitulloh",
    domain: "baitulloh.com",
    year: "2024",
    short:
      "A finance management platform for tracking institutional income, expenses, and automated WhatsApp reporting.",
    description:
      "A complete financial management system for Yayasan Baitulloh built on React, Supabase, and Tailwind CSS, deployed on Vercel. It handles multi-account bookkeeping, categorized transactions, monthly recaps, and role-based access. Integrated WhatsApp API delivers automated financial summaries and payment reminders directly to stakeholders.",
    tech: ["React", "Supabase", "Tailwind", "Vercel", "WhatsApp API"],
    images: [
      img("1554224155-6726b3ff858f"),
      img("1460925895917-afdab827c52f"),
      img("1551288049-bebda4e38f71"),
      img("1543286386-713bdd548da4"),
    ],
    demo: "#",
    live: "https://baitulloh.com",
  },
  {
    id: "fkki",
    title: "FKKI — Islamic Health Forum",
    client: "Forum Komunikasi Kesehatan Islam",
    domain: "fkki.org",
    year: "2024",
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
    short:
      "An online job-vacancy portal connecting job seekers and employers — the final thesis project.",
    description:
      "An online job board developed as a university thesis project using PHP Native, MySQL, and Bootstrap. It allows employers to post vacancies and job seekers to register, build profiles, search listings, and apply online. Includes an admin panel for moderating postings and managing applicants.",
    tech: ["PHP Native", "MySQL", "Bootstrap"],
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
    period: "2024 — Present",
    role: "Freelance Full Stack Developer",
    org: "JQ Tech Solution, Lampung",
    desc: "Founder & lead developer delivering web applications and IoT systems for institutional clients across Indonesia.",
    current: true,
  },
  {
    period: "2024",
    role: "SmartPresence RFID System",
    org: "Yayasan Baitulloh",
    desc: "Designed and built an RFID attendance platform integrating ESP32 hardware with a real-time web dashboard.",
  },
  {
    period: "2024",
    role: "Finance Management System",
    org: "Yayasan Baitulloh",
    desc: "Developed a financial management platform with WhatsApp-based automated reporting on React + Supabase.",
  },
  {
    period: "2024",
    role: "FKKI Digital Platform",
    org: "Forum Komunikasi Kesehatan Islam",
    desc: "Built a digital community platform with content publishing and member management for an Islamic health forum.",
  },
  {
    period: "2019",
    role: "Situs Lowongan Kerja Online",
    org: "Thesis Project",
    desc: "Created an online job-vacancy portal with PHP Native, MySQL, and Bootstrap as the final undergraduate thesis.",
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