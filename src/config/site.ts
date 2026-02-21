export const siteConfig = {
  name: "Syam",
  fullName: "Sadik Yamin",
  title: "Syam | Software Developer",
  description:
    "Software developer building data-driven products and turning complex systems into elegant user experiences.",
  url: "https://syam.dev",
  location: "San Francisco, CA",
  email: "hello@syam.dev",
  social: {
    github: "https://github.com/syam",
    linkedin: "https://linkedin.com/in/syam",
    twitter: "https://twitter.com/syam",
  },
  resumeUrl: "/resume.pdf",
  featuredProjectSlugs: ["analytics-dashboard", "ml-pipeline-platform"],
} as const;

export type SiteConfig = typeof siteConfig;
