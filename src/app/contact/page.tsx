import type { Metadata } from "next";
import { Mail, FileText, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { contentConfig } from "@/config/content";

const { contact } = contentConfig;

export const metadata: Metadata = {
  title: `Contact | ${siteConfig.name}`,
  description: contact.description.slice(0, 160),
  openGraph: {
    title: `Contact | ${siteConfig.name}`,
    description: contact.description.slice(0, 160),
    url: `${siteConfig.url}/contact`,
  },
};

const socialLinks = [
  { href: siteConfig.social.github, icon: Github, label: "GitHub" },
  { href: siteConfig.social.linkedin, icon: Linkedin, label: "LinkedIn" },
  { href: siteConfig.social.twitter, icon: Twitter, label: "Twitter" },
];

export default function ContactPage() {
  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-xl px-6 text-center">
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {contact.title}
        </h1>

        <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
          {contact.description}
        </p>

        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4">
          <Button asChild size="lg">
            <a href={`mailto:${siteConfig.email}`}>
              <Mail className="mr-2 h-4 w-4" />
              {contact.ctaLabel}
            </a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a
              href={siteConfig.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FileText className="mr-2 h-4 w-4" />
              Resume
            </a>
          </Button>
        </div>

        <div className="mt-10 flex justify-center gap-6">
          {socialLinks.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-foreground"
              aria-label={s.label}
            >
              <s.icon className="h-6 w-6" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
