import { ProjectGrid } from "@/components/project-grid";
import { siteConfig } from "@/config/site";
import { contentConfig } from "@/config/content";
import { getProjectBySlug } from "@/lib/projects";
import type { Project } from "@/lib/projects";

const { featuredProjects } = contentConfig.home;

export function FeaturedProjects() {
  const projects = siteConfig.featuredProjectSlugs
    .map((slug) => getProjectBySlug(slug))
    .filter((p): p is { meta: Project; content: string } => p !== null)
    .map((p) => p.meta);

  if (projects.length === 0) return null;

  return (
    <section className="relative z-0 border-t border-border/60 bg-gradient-to-b from-background via-background to-muted/25 py-16 md:py-20">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          {featuredProjects.title}
        </h2>
        <p className="mt-2 text-muted-foreground">{featuredProjects.subtitle}</p>
        <div className="mt-10">
          <ProjectGrid projects={projects} />
        </div>
      </div>
    </section>
  );
}
