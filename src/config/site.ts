export const siteConfig = {
  name: "Syam",
  fullName: "Sadik Yamin",
  title: "Sadik Yamin | Software Engineer",
  description:
    "Software developer working across full-stack web, embedded firmware, and self-hosted infrastructure. At Putt Quest I build LED lighting, moving obstacles, and the on-site Kubernetes cluster for a mini-golf course. Founder of TickerStats (AI equity research SaaS).",
  url: "https://www.sadikyamin.me",
  location: "St. Louis, MO",
  email: "syam46484@gmail.com",
  social: {
    github: "https://github.com/yaminsadik",
    linkedin: "https://linkedin.com/in/sadik-yamin",
    twitter: "https://twitter.com/yamin_sadi69062",
  },
  resumeUrl: "/resume.pdf",
  featuredProjectSlugs: [
    "led-orchestra",
    "fish-jaw-obstacle",
    "putt-quest-infrastructure",
    "bizaq",
    "tickerstats",
    "gapwalk",
  ],
} as const;

export type SiteConfig = typeof siteConfig;
