import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { BadgeList } from "@/components/badge-list";
import type { Project } from "@/lib/projects";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.slug}`} className="group block">
      <Card className="overflow-hidden border-border/60 transition-shadow duration-200 hover:shadow-lg">
        <div className="relative aspect-[16/9] overflow-hidden bg-muted">
          <Image
            src={project.coverImage}
            alt={project.title}
            fill
            className={`transition-transform duration-300 ${project.coverImageFit === "contain" ? "object-contain" : "object-cover group-hover:scale-105"}`}
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
        <CardContent className="space-y-3 p-4 sm:p-5">
          <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
            <h3 className="text-base font-semibold tracking-tight text-foreground sm:text-lg">
              {project.title}
            </h3>
            <time
              dateTime={project.date}
              className="text-xs text-muted-foreground"
            >
              {new Date(project.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
              })}
            </time>
          </div>
          <p className="line-clamp-2 text-sm text-muted-foreground">
            {project.summary}
          </p>
          <BadgeList items={project.tags} variant="outline" />
        </CardContent>
      </Card>
    </Link>
  );
}
