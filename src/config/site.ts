export const siteConfig = {
  name: "Syam",
  fullName: "Sadik Yamin",
  title: "Sadik Yamin | Software Engineer",
  description:
    "React, TypeScript and Nest.js focused full-stack developer building apps with real workflows: authentication, dashboards, payments, exports, and clean UI. Recent work: TickerStats (AI equity research SaaS), GapWalk (schedule-aware micro-walk nudges).",
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
