export const contentConfig = {
  home: {
    hero: {
      headline: "Full-Stack Software Engineer",
      subheadline:
      "React, TypeScript and Nest.js focused full-stack developer building apps with real workflows: authentication, dashboards, payments, exports, and clean UI. Recent work: TickerStats (AI equity research SaaS), GapWalk (schedule-aware micro-walk nudges).", 
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
          title: "Product Thinking",
          description:
            "Translating business requirements into technical specs, prioritizing ruthlessly, and shipping features that move metrics.",
        },
        {
          title: "Technical Leadership",
          description:
            "Leading cross-functional teams, establishing engineering best practices, and mentoring developers at every level.",
        },
      ],
    },
  },
  about: {
    title: "About Me",
    intro: [
      "I am a React and TypeScript focused full-stack engineer, with strong experience building backends in NestJS and FastAPI. Most of my work sits at the intersection of clean UI and heavy data, where reliability matters as much as design.",
      "I built TickerStats, an AI-powered equity research platform that compares tickers, runs valuation models, generates pitch decks with structured outputs, and exports to PPTX, PDF, and Excel. The platform is backed by FastAPI with PostgreSQL, caching, and schema validation to keep outputs consistent. I also built GapWalk, a schedule-aware micro-walking app that finds free gaps, schedules local notifications, and tracks walks with on-device storage.",
      "Currently, an end-to-end app with a rewards system is being built for the gas station chain 7th Heaven. I enjoy working end to end across frontend architecture and UX polish, APIs and data pipelines, and deployment, using tools like FastAPI and NestJS when a project needs a solid backend.",
    ],
    skills: {
      title: "Tools & Technologies",
      items: [
        "TypeScript",
        "React",
        "Next.js",
        "Nest.js",
        "Python",
        "FastAPI",
        "PostgreSQL",
        "Redis",
        "AWS",
        "Docker",
        "Kubernetes",
        "Git",
      ],
    },
    experience: {
      title: "Experience",
      items: [
      
{
  role: "Founder & Full-Stack Engineer",
  company: "TickerStats",
  period: "2025 – Present",
  description: [
    "Founded and built an AI-powered equity research SaaS that compares up to 30 tickers, runs DCF valuation, and generates pitch decks with structured LLM outputs.",
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
  period: "2024 – 2026",
  description: [
    "Led alumni outreach and coordinated event communications to strengthen engagement between students and alumni professionals.",
    "Planned and executed messaging for fund events, including invitations, reminders, and follow-ups.",
    "Maintained consistent communication channels to support long-term alumni relationships."
  ]
},
{
  role: "Full-Stack Developer (Rewards App)",
  company: "7th Heaven Gas Station Chain",
  period: "2026 – Present",
  description: [
    "Building an end-to-end rewards application with customer-facing flows and operational tooling for a multi-location gas station chain.",
    "Developing the frontend in React Native + TypeScript and implementing backend services in NestJS and FastAPI based on system requirements.",
    "Designing APIs and data models to support points accrual, redemption, and user activity tracking."
  ]
}

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
      "Founder of TickerStats, an AI-powered equity research SaaS that compares up to 100 tickers, runs DCF valuation, generates pitch decks with structured LLM outputs, and exports to PPTX/PDF/XLSX/CSV.",
"Built production-style full-stack apps with React + TypeScript plus FastAPI and NestJS, focusing on dashboard workflows, performance, and maintainable architecture.",
"Implemented core SaaS infrastructure: Auth0 authentication, Stripe subscriptions, tier enforcement via JWT claims, and per-user usage tracking in PostgreSQL.",
"Led a TruScholar research project (EcoWatch) end to end: collected and cleaned imagery data, trained a YOLOv8 model, and shipped an inference app supporting image/video/webcam detection with downloadable results.",
"Vice President, Alumni Relations, Bulldog Student Investment Fund: led alumni outreach and coordinated event communications to support engagement.",

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
