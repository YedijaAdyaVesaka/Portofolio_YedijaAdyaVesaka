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
  Stat,
  TimelineItem,
} from "@/types";

export const stats: Stat[] = [
  { value: 15, suffix: "+", label: "Projects completed" },
  { value: 3, suffix: "+", label: "Years in tech" },
  { value: 20, suffix: "+", label: "Designs crafted" },
  { value: 100, suffix: "%", label: "Dedication to detail" },
];

export const experiences: TimelineItem[] = [
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
];

export const educationList: TimelineItem[] = [
  {
    year: "2021 — 2025",
    title: "Informatics Engineering",
    company: "Institut Teknologi Nasional Malang",
    location: "Malang, Indonesia",
    logoUrl: "/images/logo-itn.webp",
    highlights: [
      "GPA 3.7 / 4.0 — focusing on web systems, IoT, and game developer.",
      "Laboratory Assistant in Multimedia, Digital Image Processing, Animation, and Game courses.",
    ],
  },
  {
    year: "2018 — 2021",
    title: "Science Major",
    company: "SMA Katolik Yos Sudarso Kepanjen",
    location: "Malang, Indonesia",
    logoUrl: "/images/SMAK.webp",
    highlights: [
      "Focused on mathematics, physics, biology, and chemistry.",
      "Active in school organizations and extracurricular activities.",
    ],
  },
  {
    year: "2015 — 2018",
    title: "Junior High School",
    company: "SMP Satya Dharma Sudjana",
    location: "Lampung Tengah, Indonesia",
    logoUrl: "/images/SMP SS.webp",
    highlights: [
      "Active in academic competitions and school extracurricular activities.",
    ],
  },
  {
    year: "2009 — 2015",
    title: "Elementary School",
    company: "SD Negeri 1 Gunung Madu",
    location: "Lampung Tengah, Indonesia",
    logoUrl: "/images/Logo_of_Ministry_of_Education_and_Culture_of_Republic_of_Indonesia.svg",
    highlights: [
      "Completed primary education with strong foundation in mathematics and sciences.",
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
  { org: "State University of Malang", award: "Computer Engineering Major", year: "2021 - Present" },
  { org: "Rumah BUMN Malang", award: "Social Media & UMKM Trainer", year: "2024" },
];

export const techSkills = [
  { name: "PHP", category: "backend", iconUrl: "https://api.iconify.design/logos:php.svg" },
  { name: "Laravel", category: "backend", iconUrl: "https://api.iconify.design/logos:laravel.svg" },
  { name: "MySQL", category: "database", iconUrl: "https://api.iconify.design/logos:mysql.svg" },
  { name: "Git", category: "tools", iconUrl: "https://api.iconify.design/logos:git-icon.svg" },
  { name: "C#", category: "language", iconUrl: "https://api.iconify.design/logos:c-sharp.svg" },
  { name: "Unity", category: "gamedev", iconUrl: "https://api.iconify.design/logos:unity.svg" },
  { name: "Arduino", category: "iot", iconUrl: "https://api.iconify.design/logos:arduino.svg" },
  { name: "Python", category: "language", iconUrl: "https://api.iconify.design/logos:python.svg" },
  { name: "Blender", category: "3d", iconUrl: "https://api.iconify.design/logos:blender.svg" },
  { name: "Figma", category: "design", iconUrl: "https://api.iconify.design/logos:figma.svg" },
  { name: "Adobe Family", category: "design", iconUrl: "https://api.iconify.design/logos:adobe-photoshop.svg" },
  { name: "CapCut", category: "video", iconUrl: "https://api.iconify.design/cib:capcut.svg" },
  { name: "Microsoft Office", category: "office", iconUrl: "https://api.iconify.design/logos:microsoft-icon.svg" },
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
