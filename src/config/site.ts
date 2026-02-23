export const siteConfig = {
  name: "Syam",
  fullName: "Sadik Yamin",
  title: "Sadik Yamin | Software Developer",
  description:
    "React + TypeScript focused full-stack engineer building production-style apps with real workflows. Recent work includes an AI equity research SaaS, a schedule-aware fitness app, and a computer vision detection dashboard.",
  url: "https://www.sadikyamin.me",
  location: "St. Louis, MO",
  email: "syam46484@gmail.com",
  social: {
    github: "https://github.com/yaminsadik",
    linkedin: "https://linkedin.com/in/sadik-yamin",
    twitter: "https://twitter.com/yamin_sadi69062",
  },
  resumeUrl: "/resume.pdf",
  featuredProjectSlugs: ["tickerstats", "gapwalk", "weatherapp", "sadik-visuals"],
} as const;

export type SiteConfig = typeof siteConfig;
