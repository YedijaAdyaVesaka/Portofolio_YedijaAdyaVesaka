import {
  Aperture,
  Box,
  Command,
  Globe,
  HeartHandshake,
  Hexagon,
  Layers,
  Sparkles,
  Target,
  Triangle,
  Zap,
} from "lucide-react";

import type {
  Achievement,
  CompanyValue,
  PartnerLogo,
  SkillCategory,
  Stat,
  TimelineItem,
} from "@/types";

export const stats: Stat[] = [
  { value: 15, suffix: "+", label: "Projects completed" },
  { value: 4, suffix: "+", label: "Years in tech" },
  { value: 20, suffix: "+", label: "Designs crafted" },
  { value: 100, suffix: "%", label: "Dedication to detail" },
];

export const experiences: TimelineItem[] = [
  {
    year: "2021 — Present",
    title: "IT Support Specialist",
    company: "Multimedia GKJW Ringin Pitu",
    location: "Malang, Indonesia",
    description:
      "Responsible for IT operational availability, first-line technical support, and installation & maintenance of workstations, local networks, and multimedia live streaming systems.",
    highlights: [
      "Delivered real-time first-line troubleshooting for hardware, OS, applications, and networks while maintaining over 99% operational uptime.",
      "Conducted routine preventive maintenance, IT asset management, and local network structuring (LAN/WLAN).",
      "Provided technical operational guidance and hands-on problem-solving for end-users.",
    ],
    tags: [
      "IT Support",
      "Hardware & Software Diagnostics",
      "LAN/WLAN",
      "System Troubleshooting",
      "Asset Maintenance",
    ],
  },
  {
    year: "Aug 2024 — Sep 2024",
    title: "Transportation & Accommodation Coordinator (PIC)",
    company: "Karya Nyata Festival Vol.10",
    location: "Malang, Indonesia",
    description:
      "Coordinated transportation and accommodation logistics for guests and committee members, ensuring smooth event operations and schedule execution.",
    highlights: [
      "Coordinated transportation and accommodation for invited guests and committee members during Karya Nyata Festival Vol.10.",
      "Communicated with vendors, committee members, and external parties to ensure smooth operational execution.",
      "Ensured all transportation requirements ran on schedule throughout the event.",
    ],
    tags: ["Event Logistics", "Coordination", "Stakeholder Communication", "Vendor Management"],
    certificates: ["/images/certificates/Sertifikat PIC_KNF Vol.10.png"],
    documentation: ["/images/photos/KARYA NYATA FESTIVAL 1.png"],
    proofs: [
      {
        type: "certificate",
        title: "Certificate of Appreciation - Transport & Accommodation Coordinator",
        issuer: "Karya Nyata Festival Vol.10",
        date: "Sep 2024",
        url: "/images/certificates/Sertifikat PIC_KNF Vol.10.png",
        palette: ["#2563EB", "#06B6D4"],
      },
    ],
  },
  {
    year: "Jul 2024 — Sep 2024",
    title: "Graphic Design Intern",
    company: "Rumah BUMN Jawa Timur",
    location: "Malang, Indonesia",
    description:
      "Designed visual branding materials for MSME certification, export programs, event merchandise, and executive communications.",
    highlights: [
      "Designed visual assets for BNSP-certified MSME facilitator programs.",
      "Created promotional materials for export coaching in partnership with PPI.",
      "Produced booth designs, merchandise, and event assets for Karya Nyata Festival Vol.10.",
      "Published 20+ social media content items (feeds & reels).",
      "Crafted executive presentation & visual materials for C-level leadership (CEO & CFO).",
    ],
    tags: ["Figma", "Photoshop", "Branding", "Merchandise Design", "Social Media"],
    certificates: ["/images/certificates/Sertif RB Jatim.png"],
    documentation: [
      "/images/photos/RB JATIM 1.jpg",
      "/images/photos/RB JATIM 2.jpg",
      "/images/photos/RB JATIM 3.jpg",
      "/images/photos/RB JATIM 4.jpg",
      "/images/photos/RB JATIM 5.jpg",
    ],
    proofs: [
      {
        type: "certificate",
        title: "Internship Certificate - Graphic Designer",
        issuer: "Rumah BUMN Jawa Timur",
        date: "Sep 2024",
        url: "#",
        image: "/images/RB Jatim.webp",
        palette: ["#8B5CF6", "#D946EF"],
      },
    ],
  },
  {
    year: "Jul 2024 — Sep 2024",
    title: "Graphic Design Intern",
    company: "Rumah BUMN Kota Malang",
    location: "Malang, Indonesia",
    description:
      "Empowered local MSMEs through visual branding, social media marketing, and hands-on product photography training.",
    highlights: [
      "Designed presentation and marketing materials for MSME training workshops.",
      "Created engaging social media content (feeds and Instagram reels).",
      "Conducted product photography training to boost MSME visual branding quality.",
    ],
    tags: ["Visual Design", "Social Media", "Photography Training", "MSME Support"],
    certificates: ["/images/certificates/Sertif RB Malang.png"],
    documentation: [
      "/images/photos/RB MALANG 1.jpg",
      "/images/photos/RB MALANG 2.jpg",
      "/images/photos/RB MALANG 3.jpg",
      "/images/photos/RB MALANG 4.jpg",
      "/images/photos/RB MALANG 5.jpg",
      "/images/photos/RB MALANG 6.png",
      "/images/photos/RB MALANG 7.jpg",
    ],
    proofs: [
      {
        type: "certificate",
        title: "Internship Certificate - Graphic Designer & Trainer",
        issuer: "Rumah BUMN Kota Malang",
        date: "Sep 2024",
        url: "/images/certificates/Sertif RB Malang.png",
        image: "/images/RB Malang.webp",
        palette: ["#F59E0B", "#EF4444"],
      },
    ],
  },
  // ponytail: No certificates/documentation media provided; add when images are uploaded.
  {
    year: "Mar 2022 — Jul 2024",
    title: "Instructor & Laboratory Assistant",
    company: "Laboratorium Game, Animasi, Multimedia, dan Pengolahan Citra — ITN Malang",
    location: "Malang, Indonesia",
    description:
      "Supported computer laboratory operations and practicum delivery by ensuring workstation readiness, operating systems, applications, and local networking. Provided technical support to students and assisted lecturers in Multimedia, Digital Image Processing, Animation, and Game courses.",
    highlights: [
      "Instructed Image Processing and Multimedia practicums, covering digital image processing algorithms, visual manipulation, and technical report evaluations.",
      "Mentored Game Programming and Animation practicums, providing technical direction on gameplay programming logic, interactive mechanics, and asset integration.",
      "Conducted regular Hardware and Software Troubleshooting across lab workstations, operating systems, and local networking to ensure seamless laboratory operations.",
    ],
    tags: ["Image Processing", "Game Programming", "Hardware and Software Troubleshooting"],
  },
];

export const educationList: TimelineItem[] = [
  {
    year: "2021 — 2025",
    title: "Bachelor of Informatics Engineering (S.Kom)",
    company: "Institut Teknologi Nasional Malang",
    location: "Malang, Indonesia",
    logoUrl: "/images/logo-itn.webp",
    highlights: [
      "GPA 3.70 / 4.00 — specialized in IT infrastructure, system operations, web engineering, and digital solutions.",
      "Laboratory Assistant for Multimedia, Digital Image Processing, Animation, and Game courses.",
    ],
  },
  {
    year: "2018 — 2021",
    title: "Natural Sciences (MIPA)",
    company: "SMA Katolik Yos Sudarso Kepanjen",
    location: "Malang, Indonesia",
    logoUrl: "/images/SMAK.webp",
    highlights: [
      "Focused on mathematics, physics, biology, and chemistry.",
      "Active in school organizations and academic extracurricular activities.",
    ],
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: "IT Support & Infrastructure",
    key: "it_support",
    iconName: "network",
    skills: [
      "First-Line Support",
      "Hardware/Software Diagnostics",
      "Windows/Linux OS",
      "Network (LAN/TCP-IP/Router Setup)",
      "Remote Desktop (AnyDesk/RDP)",
      "Preventive Maintenance",
    ],
  },
  {
    title: "Software & Web Engineering",
    key: "software_web",
    iconName: "code",
    skills: [
      "PHP",
      "Laravel",
      "MySQL",
      "JavaScript",
      "React.js",
      "Python",
      "Git",
    ],
  },
  {
    title: "QA & Systems Analysis",
    key: "qa_systems",
    iconName: "check",
    skills: [
      "SDLC/STLC",
      "Test Scenario & Test Case",
      "Bug Reporting",
      "Postman",
      "API Testing",
    ],
  },
  {
    title: "Design & Multimedia",
    key: "design_multimedia",
    iconName: "palette",
    skills: [
      "Figma",
      "Adobe Photoshop",
      "Video Editing",
      "Live Streaming Setup",
    ],
  },
];

export const values: CompanyValue[] = [
  {
    title: "Craft first",
    description:
      "From code optimization to layout spacing, the details define the quality. Every pixel and query counts.",
    icon: Sparkles,
  },
  {
    title: "Transparency",
    description:
      "Full access to GitHub repositories, live demo environments, and clear, honest communication on scope.",
    icon: HeartHandshake,
  },
  {
    title: "Solve real problems",
    description:
      "Code is a tool to solve real-world problems—whether it is automating greenhouse irrigation or building ERP dashboards.",
    icon: Target,
  },
  {
    title: "Keep learning",
    description:
      "Technology is always changing. I constantly explore new frameworks, sensors, and design workflows.",
    icon: Zap,
  },
];

export const achievements: Achievement[] = [
  { org: "Rumah BUMN Jawa Timur", award: "Social Media Designer", year: "2024" },
  { org: "Institut Teknologi Nasional Malang", award: "Sarjana Komputer (S.Kom) - Teknik Informatika", year: "2021 — 2025" },
  { org: "Rumah BUMN Malang", award: "Social Media & UMKM Trainer", year: "2024" },
];

export const techSkills = [
  { name: "React.js", category: "frontend", iconUrl: "/icons/react.svg" },
  { name: "React Native", category: "mobile", iconUrl: "/icons/react.svg" },
  { name: "PHP", category: "backend", iconUrl: "/icons/php.svg" },
  { name: "Laravel", category: "backend", iconUrl: "/icons/laravel.svg" },
  { name: "MySQL", category: "database", iconUrl: "/icons/mysql.svg" },
  { name: "Firebase", category: "backend", iconUrl: "/icons/firebase.svg" },
  { name: "Git", category: "tools", iconUrl: "/icons/git.svg" },
  { name: "C#", category: "language", iconUrl: "/icons/c-sharp.svg" },
  { name: "Unity", category: "gamedev", iconUrl: "/icons/unity.svg" },
  { name: "Arduino", category: "iot", iconUrl: "/icons/arduino.svg" },
  { name: "Python", category: "language", iconUrl: "/icons/python.svg" },
  { name: "Blender", category: "3d", iconUrl: "/icons/blender.svg" },
  { name: "Figma", category: "design", iconUrl: "/icons/figma.svg" },
  { name: "Adobe Family", category: "design", iconUrl: "/icons/adobe-photoshop.svg" },
  { name: "CapCut", category: "video", iconUrl: "/icons/capcut.svg" },
  { name: "Microsoft Office", category: "office", iconUrl: "/icons/microsoft.svg" },
];

export const partnerLogos: PartnerLogo[] = [
  { name: "Acme", icon: Hexagon },
  { name: "Vertex", icon: Triangle },
  { name: "Nimbus", icon: Aperture },
  { name: "Quantum", icon: Command },
  { name: "Halo", icon: Globe },
  { name: "Northwind", icon: Layers },
  { name: "Orbit", icon: Box },
  { name: "Pulse", icon: Zap },
];
