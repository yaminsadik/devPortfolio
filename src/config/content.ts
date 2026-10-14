export const contentConfig = {
  home: {
    hero: {
      headline: "Full-Stack & Embedded Engineer",
      subheadline:
      "I build across the stack, from React and TypeScript apps to C++ firmware on ESP32 boards and the hardware it runs. Currently at Putt Quest, building LED lighting, moving obstacles, and a self-hosted Kubernetes cluster. Founder of TickerStats (AI equity research SaaS).",
      primaryCta: "View Projects",
      secondaryCta: "Get in Touch",
      resumeCta: "Resume",
    },
    featuredProjects: {
      title: "Featured Work",
      subtitle: "Selected projects I've designed and built end-to-end.",
    },
    whatIDo: {
      title: "What I Do",
      items: [
        {
          title: "Full-Stack Development",
          description:
            "End-to-end application development with React, Next.js, Nest.js, and Python — from database design to pixel-perfect interfaces.",
        },
        {
          title: "Embedded Systems & Hardware",
          description:
            "C++ firmware for ESP32 boards with ESP-IDF, ESPHome, and PlatformIO, plus the physical side: mechanism design, wiring, soldering, power, 3D printing, and installation.",
        },
        {
          title: "Self-Hosted Infrastructure",
          description:
            "Building and running on-site Kubernetes (k3s) on Raspberry Pi hardware, provisioned with Ansible and deployed through ArgoCD GitOps.",
        },
      ],
    },
  },
  about: {
    title: "About Me",
    intro: [
      "I am an Associate Software Developer at Putt Quest, a mini-golf business, where my work spans firmware, hardware, infrastructure, and web. I graduated from Truman State University with a B.S. in Computer Science in May 2026.",
      "At Putt Quest I designed LED Orchestra, an offline lighting controller where ESP32-C6 nodes render one synchronized LED strip over a Matter-over-Thread mesh. I then ported its effect engine into the production firmware and wired, soldered, and installed more than 6,400 LEDs across 18 holes. I also designed and built a motorized fish-jaw obstacle, from the mechanism and 3D-printed parts to its ESP32-C6 firmware. I assembled and provisioned the course's Raspberry Pi Kubernetes cluster, and I build scheduling features for the employee portal.",
      "Before that, I founded TickerStats, an AI-powered equity research platform that compares tickers, runs DCF valuation, generates pitch decks from schema-validated LLM output, and exports to PPTX, PDF, and Excel. I also built the backend for GapWalk, a published Android app that finds free gaps in your calendar and nudges you toward short walks. Most recently I built BizAQ, an AI-assisted pipeline that searches, researches, and analyzes small businesses for sale.",
    ],
    skills: {
      title: "Tools & Technologies",
      items: [
        "TypeScript",
        "React",
        "Next.js",
        "SvelteKit",
        "Nest.js",
        "Python",
        "FastAPI",
        "PostgreSQL",
        "Redis",
        "C++",
        "ESP32 / ESP-IDF",
        "ESPHome",
        "PlatformIO",
        "Matter / Thread",
        "MQTT",
        "AWS",
        "Docker",
        "Kubernetes (k3s)",
        "Ansible",
        "ArgoCD",
        "Git",
      ],
    },
    experience: {
      title: "Experience",
      items: [

{
  role: "Associate Software Developer",
  company: "Putt Quest (Premiere Mini Golf LLC), Fairview Heights, IL",
  period: "May 2026 – Present",
  description: [
    "Designed and built LED Orchestra, an offline LED show controller in C++ (ESP-IDF, ESP-Matter) where ESP32-C6 nodes render one synchronized virtual strip over a Matter-over-Thread mesh, with OTA firmware updates.",
    "Ported its effect engine into the production ESPHome/MQTT lighting firmware, and wired, soldered, powered, and installed 6,400+ WS2815 LEDs (700+ ft) across 18 holes on ESP32-S3 controllers.",
    "Designed and built a motorized fish-jaw obstacle: a hinged jaw driven by a 12 V linear actuator, 3D-printed parts, and ESP32-C6 firmware with a Wi-Fi control page, OTA updates, fault states, and 44 unit tests.",
    "Assembled and provisioned the course's 3-node high-availability k3s cluster on Raspberry Pi 5s, now running in production, using Ansible playbooks for Longhorn storage, cert-manager, ArgoCD, Cloudflare Tunnel, and Kanidm identity.",
    "Built employee-portal scheduling features in SvelteKit and PostgreSQL: transactional schedule saves, per-location permissions, DST-safe shift reminders, and staff directory sync."
  ]
},
{
  role: "Founder & Full-Stack Engineer",
  company: "TickerStats",
  period: "2025 – 2026",
  description: [
    "Founded and built an AI-powered equity research SaaS that compares up to 100 tickers, runs DCF valuation, and generates pitch decks with structured LLM outputs.",
    "Implemented core SaaS infrastructure including Auth0 authentication, Stripe subscriptions, tier enforcement via JWT claims, and per-user usage tracking in PostgreSQL.",
    "Delivered server-side export pipelines to PPTX/PDF/XLSX/CSV and improved performance with concurrent data fetching and in-memory TTL caching."
  ]
},
{
  role: "TruScholar Researcher (Computer Vision)",
  company: "Truman State University",
  period: "2024 – 2025",
  description: [
    "Led EcoWatch end to end by collecting, cleaning, and analyzing imagery data for litter and illegal dumping detection in outdoor environments.",
    "Trained and evaluated a YOLOv8 model and packaged inference into a Streamlit app supporting image, video, and webcam modes.",
    "Shipped analyst-friendly outputs including annotated media, detection statistics, charts, and downloadable CSV results."
  ]
},
{
  role: "Vice President, Alumni Relations",
  company: "Bulldog Student Investment Fund",
  period: "2024 – 2025",
  description: [
    "Led alumni outreach and coordinated event communications to strengthen engagement between students and alumni professionals.",
    "Planned and executed messaging for fund events, including invitations, reminders, and follow-ups.",
    "Maintained consistent communication channels to support long-term alumni relationships."
  ]
},

      ],
    },
    education: {
      title: "Education",
      items: [
        {
          degree: "B.S. Computer Science",
          school: "Truman State University",
          period: "2022 -- 2026",
          details: "",
        },
      ],
    },
    research: {
      title: "Research",
      items: [
        "TruScholar Researcher, EcoWatch (Computer Vision): built dataset, trained YOLOv8 model, deployed Streamlit inference app for image/video/webcam with exports.",
      ],
    },
    leadership: {
      title: "Leadership",
      items: [
        "Vice President, Alumni Relations, Bulldog Student Investment Fund: led alumni outreach and managed event communications.",
      ],
    },
    resumeHighlights: {
      title: "Resume Highlights",
      items: [
      "Associate Software Developer at Putt Quest: built the course's LED lighting (6,400+ LEDs across 18 holes) and a motorized fish-jaw obstacle end to end, from hardware and installation to C++ firmware on ESP32 boards.",
"Assembled and provisioned a 3-node high-availability k3s cluster on Raspberry Pi 5s with Ansible, now running in production.",
"Founder of TickerStats, an AI-powered equity research SaaS that compares up to 100 tickers, runs DCF valuation, generates pitch decks with structured LLM outputs, and exports to PPTX/PDF/XLSX/CSV.",
"Implemented core SaaS infrastructure: Auth0 authentication, Stripe subscriptions, tier enforcement via JWT claims, and per-user usage tracking in PostgreSQL.",
"Led a TruScholar research project (EcoWatch) end to end: collected and cleaned imagery data, trained a YOLOv8 model, and shipped an inference app supporting image/video/webcam detection with downloadable results.",

]
    },
  },
  contact: {
    title: "Get in Touch",
    description:
      "Have a project in mind, want to collaborate, or just want to say hello? I'd love to hear from you. Drop me an email and I'll get back to you as soon as I can.",
    ctaLabel: "Send an Email",
  },
  projects: {
    title: "All Projects",
    subtitle: "A collection of projects I've worked on, from side experiments to production systems.",
  },
} as const;

export type ContentConfig = typeof contentConfig;
