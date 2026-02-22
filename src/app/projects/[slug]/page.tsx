import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, Github, Lock } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { BadgeList } from "@/components/badge-list";
import { OutcomeList } from "@/components/outcome-list";
import { mdxComponents } from "@/components/mdx/mdx-components";
import {
  getProjectBySlug,
  getAllProjectSlugs,
  type Project,
} from "@/lib/projects";
import { siteConfig } from "@/config/site";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  const { meta } = project;
  return {
    title: `${meta.title} | ${siteConfig.name}`,
    description: meta.summary,
    openGraph: {
      title: meta.title,
      description: meta.summary,
      url: `${siteConfig.url}/projects/${meta.slug}`,
      images: meta.ogImage
        ? [{ url: meta.ogImage }]
        : meta.coverImage
          ? [{ url: meta.coverImage }]
          : [],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.summary,
    },
  };
}

function ProjectJsonLd({ meta }: { meta: Project }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: meta.title,
    description: meta.summary,
    url: meta.liveUrl ?? `${siteConfig.url}/projects/${meta.slug}`,
    datePublished: meta.date,
    author: {
      "@type": "Person",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    applicationCategory: "DeveloperApplication",
    ...(meta.repoUrl && { codeRepository: meta.repoUrl }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const { meta, content } = project;

  return (
    <>
      <ProjectJsonLd meta={meta} />
      <article className="py-12 sm:py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <Link
            href="/projects"
            className="inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            All Projects
          </Link>

          <header className="mt-6 sm:mt-8">
            <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl">
              {meta.title}
            </h1>
            <p className="mt-3 text-base text-muted-foreground sm:mt-4 sm:text-lg">
              {meta.summary}
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground sm:gap-x-6">
              <time dateTime={meta.date}>
                {new Date(meta.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              <span>{meta.role}</span>
            </div>

            <div className="mt-4 flex flex-wrap gap-2 sm:gap-3">
              {meta.repoUrl && (
                <Button asChild variant="outline" size="sm">
                  <a
                    href={meta.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Source
                  </a>
                </Button>
              )}
              {meta.privateRepo && (
                <Button asChild variant="outline" size="sm">
                  <a
                    href={`mailto:${siteConfig.email}?subject=Viewing source for ${meta.title}`}
                  >
                    <Lock className="mr-2 h-4 w-4" />
                    Private Repo — Contact to View Source
                  </a>
                </Button>
              )}
              {meta.liveUrl && (
                <Button asChild variant="outline" size="sm">
                  <a
                    href={meta.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </a>
                </Button>
              )}
            </div>
          </header>

          <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-lg border border-border/60 bg-muted sm:mt-10">
            <Image
              src={meta.coverImage}
              alt={meta.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>

          <div className="mt-8 grid gap-4 rounded-lg border border-border/60 p-4 sm:mt-10 sm:grid-cols-2 sm:gap-6 sm:p-6">
            <div>
              <h3 className="mb-2 text-sm font-semibold text-foreground">
                Tech Stack
              </h3>
              <BadgeList items={meta.stack} />
            </div>
            <div>
              <h3 className="mb-2 text-sm font-semibold text-foreground">
                Tags
              </h3>
              <BadgeList items={meta.tags} variant="outline" />
            </div>
          </div>

          {meta.outcomes.length > 0 && (
            <div className="mt-8">
              <h2 className="mb-4 text-lg font-semibold tracking-tight text-foreground sm:text-xl">
                Key Outcomes
              </h2>
              <OutcomeList outcomes={meta.outcomes} />
            </div>
          )}

          <Separator className="my-8 sm:my-10" />

          <div className="prose-custom">
            <MDXRemote
              source={content}
              components={mdxComponents}
              options={{
                mdxOptions: {
                  remarkPlugins: [remarkGfm],
                },
              }}
            />
          </div>
        </div>
      </article>
    </>
  );
}
