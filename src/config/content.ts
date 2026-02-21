export const contentConfig = {
  home: {
    hero: {
      headline: "Building Data-Driven Products",
      subheadline:
        "Full-stack developer specializing in turning complex data into elegant, user-facing solutions that drive real business outcomes.",
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
            "End-to-end application development with React, Next.js, Node.js, and Python — from database design to pixel-perfect interfaces.",
        },
        {
          title: "Data Engineering",
          description:
            "Designing data pipelines, ETL workflows, and real-time streaming architectures that scale to millions of events per day.",
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
    intro:
      "I'm a software developer passionate about the intersection of data and product. I build systems that transform raw information into actionable insights and delightful user experiences. With experience spanning startups and enterprise environments, I bring a pragmatic approach to solving complex technical challenges.",
    skills: {
      title: "Tools & Technologies",
      items: [
        "TypeScript",
        "React",
        "Next.js",
        "Node.js",
        "Python",
        "FastAPI",
        "PostgreSQL",
        "Redis",
        "AWS",
        "Docker",
        "Kubernetes",
        "Kafka",
        "GraphQL",
        "Terraform",
        "Git",
      ],
    },
    experience: {
      title: "Experience",
      items: [
        {
          role: "Senior Software Engineer",
          company: "Acme Corp",
          period: "2023 -- Present",
          description:
            "Leading development of the core data platform, building real-time analytics pipelines and customer-facing dashboards.",
        },
        {
          role: "Software Engineer",
          company: "Startup Inc",
          period: "2021 -- 2023",
          description:
            "Built full-stack features across the product, from API design to React frontends. Owned the ML pipeline infrastructure.",
        },
        {
          role: "Junior Developer",
          company: "Tech Solutions",
          period: "2019 -- 2021",
          description:
            "Developed internal tools and contributed to client-facing web applications using React and Node.js.",
        },
      ],
    },
    education: {
      title: "Education",
      items: [
        {
          degree: "M.S. Computer Science",
          school: "University of California",
          period: "2017 -- 2019",
          details: "Focus on distributed systems and machine learning.",
        },
        {
          degree: "B.S. Computer Science",
          school: "State University",
          period: "2013 -- 2017",
          details: "Minor in Mathematics. Dean's List.",
        },
      ],
    },
    research: {
      title: "Research",
      items: [
        "Exploring large-scale data processing patterns for real-time analytics dashboards",
        "Investigating ML model serving architectures for low-latency inference in production",
        "Contributing to open-source tooling for developer experience and observability",
      ],
    },
    leadership: {
      title: "Leadership",
      items: [
        "Led a team of 6 engineers to deliver a data platform serving 50M+ daily queries",
        "Established engineering RFC process adopted across 3 product teams",
        "Mentored 4 junior developers, with 2 promoted to senior roles within 18 months",
        "Organized internal tech talks and knowledge-sharing sessions for 40+ engineers",
      ],
    },
    resumeHighlights: {
      title: "Resume Highlights",
      items: [
        "5+ years of full-stack development across startups and enterprise",
        "Built data platforms handling 50M+ daily queries at scale",
        "End-to-end ownership from architecture to deployment",
        "M.S. Computer Science with focus on distributed systems",
      ],
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
