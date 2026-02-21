import type { Metadata } from "next";
import { ProjectGrid } from "@/components/project-grid";
import { getAllProjects } from "@/lib/projects";
import { contentConfig } from "@/config/content";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `Projects | ${siteConfig.name}`,
  description: contentConfig.projects.subtitle,
  openGraph: {
    title: `Projects | ${siteConfig.name}`,
    description: contentConfig.projects.subtitle,
    url: `${siteConfig.url}/projects`,
  },
};

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-5xl px-6">
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {contentConfig.projects.title}
        </h1>
        <p className="mt-2 text-muted-foreground">
          {contentConfig.projects.subtitle}
        </p>
        <div className="mt-10">
          <ProjectGrid projects={projects} />
        </div>
      </div>
    </section>
  );
}
