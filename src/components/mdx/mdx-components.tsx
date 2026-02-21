import type { MDXComponents } from "mdx/types";
import { Callout } from "./callout";
import { MdxImage } from "./mdx-image";

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function createHeading(level: 2 | 3 | 4) {
  const Tag = `h${level}` as const;
  const sizes = {
    2: "mt-10 mb-4 text-2xl font-semibold tracking-tight",
    3: "mt-8 mb-3 text-xl font-semibold tracking-tight",
    4: "mt-6 mb-2 text-lg font-semibold tracking-tight",
  };

  return function Heading({ children }: { children?: React.ReactNode }) {
    const text = typeof children === "string" ? children : "";
    const id = slugify(text);
    return (
      <Tag id={id} className={sizes[level]}>
        <a href={`#${id}`} className="no-underline hover:underline">
          {children}
        </a>
      </Tag>
    );
  };
}

export const mdxComponents: MDXComponents = {
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  p: ({ children }) => (
    <p className="mb-4 leading-7 text-muted-foreground">{children}</p>
  ),
  ul: ({ children }) => (
    <ul className="mb-4 ml-6 list-disc space-y-1 text-muted-foreground">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="mb-4 ml-6 list-decimal space-y-1 text-muted-foreground">
      {children}
    </ol>
  ),
  li: ({ children }) => <li className="leading-7">{children}</li>,
  strong: ({ children }) => (
    <strong className="font-semibold text-foreground">{children}</strong>
  ),
  a: ({ href, children }) => (
    <a
      href={href}
      className="font-medium text-primary underline underline-offset-4 hover:text-primary/80"
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
    >
      {children}
    </a>
  ),
  blockquote: ({ children }) => (
    <blockquote className="mb-4 border-l-4 border-primary/30 pl-4 italic text-muted-foreground">
      {children}
    </blockquote>
  ),
  code: ({ children }) => (
    <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">
      {children}
    </code>
  ),
  pre: ({ children }) => (
    <pre className="mb-4 overflow-x-auto rounded-lg border border-border/60 bg-muted p-4 text-sm">
      {children}
    </pre>
  ),
  hr: () => <hr className="my-8 border-border/60" />,
  Callout,
  MdxImage,
};
