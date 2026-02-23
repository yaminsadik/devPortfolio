import type { Metadata } from "next";
import { Briefcase, GraduationCap, FileText } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { contentConfig } from "@/config/content";

const { about } = contentConfig;

const introText = Array.isArray(about.intro)
  ? about.intro.join(" ")
  : about.intro;

export const metadata: Metadata = {
  title: `About | ${siteConfig.name}`,
  description: String(introText).slice(0, 160),
  openGraph: {
    title: `About | ${siteConfig.name}`,
    description: String(introText).slice(0, 160),
    url: `${siteConfig.url}/about`,
  },
};

function SectionWithBullets({
  title,
  items,
}: {
  title: string;
  items: readonly string[];
}) {
  return (
    <div>
      <h2 className="text-xl font-semibold tracking-tight text-foreground">
        {title}
      </h2>
      <ul className="mt-4 space-y-2">
        {items.map((item) => (
          <li
            key={item}
            className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground"
          >
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function AboutPage() {
  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-3xl px-6">
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {about.title}
        </h1>

        <div className="mt-6 space-y-4">
          {Array.isArray(about.intro) ? (
            about.intro.map((paragraph, index) => (
              <p
                key={index}
                className="text-base leading-relaxed text-muted-foreground sm:text-lg"
              >
                {paragraph}
              </p>
            ))
          ) : (
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              {about.intro}
            </p>
          )}
        </div>

        <Separator className="my-10" />

        <div className="space-y-12">
          {/* Resume highlights */}
          <div className="rounded-lg border border-border/60 bg-muted/30 p-5 sm:p-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex-1">
                <h2 className="text-lg font-semibold tracking-tight text-foreground">
                  {about.resumeHighlights.title}
                </h2>
                <ul className="mt-3 space-y-1.5">
                  {about.resumeHighlights.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm text-muted-foreground"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <Button asChild variant="outline" size="sm" className="shrink-0 self-start">
                <a
                  href={siteConfig.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FileText className="mr-2 h-4 w-4" />
                  Full Resume
                </a>
              </Button>
            </div>
          </div>

          {/* Experience */}
          <div>
            <h2 className="flex items-center gap-2 text-xl font-semibold tracking-tight text-foreground">
              <Briefcase className="h-5 w-5 text-primary" />
              {about.experience.title}
            </h2>
            <div className="mt-6 space-y-6">
              {about.experience.items.map((job) => (
                <div
                  key={`${job.company}-${job.role}`}
                  className="relative border-l-2 border-border pl-5 sm:pl-6"
                >
                  <span className="absolute -left-[5px] top-1.5 h-2 w-2 rounded-full bg-primary" />
                  <h3 className="font-semibold text-foreground">{job.role}</h3>
                  <p className="mt-0.5 text-sm text-muted-foreground">
                    {job.company} &middot; {job.period}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {job.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="flex items-center gap-2 text-xl font-semibold tracking-tight text-foreground">
              <GraduationCap className="h-5 w-5 text-primary" />
              {about.education.title}
            </h2>
            <div className="mt-6 space-y-6">
              {about.education.items.map((edu) => (
                <div
                  key={`${edu.school}-${edu.degree}`}
                  className="relative border-l-2 border-border pl-5 sm:pl-6"
                >
                  <span className="absolute -left-[5px] top-1.5 h-2 w-2 rounded-full bg-primary" />
                  <h3 className="font-semibold text-foreground">
                    {edu.degree}
                  </h3>
                  <p className="mt-0.5 text-sm text-muted-foreground">
                    {edu.school} &middot; {edu.period}
                  </p>
                  {edu.details && (
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {edu.details}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div>
            <h2 className="text-xl font-semibold tracking-tight text-foreground">
              {about.skills.title}
            </h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {about.skills.items.map((skill) => (
                <Badge
                  key={skill}
                  variant="secondary"
                  className="px-3 py-1 text-sm"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          <SectionWithBullets
            title={about.research.title}
            items={about.research.items}
          />
          <SectionWithBullets
            title={about.leadership.title}
            items={about.leadership.items}
          />
        </div>
      </div>
    </section>
  );
}
