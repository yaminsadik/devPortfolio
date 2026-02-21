"use client";

import { motion, useReducedMotion, easeOut, easeInOut } from "framer-motion";
import Link from "next/link";
import { ArrowRight, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroAvatar } from "@/components/hero-avatar";
import { siteConfig } from "@/config/site";
import { contentConfig } from "@/config/content";

const { hero } = contentConfig.home;

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.13, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: easeOut },
  },
};

export function Hero() {
  const reducedMotion = useReducedMotion();

  return (
    <section className="relative flex min-h-[calc(100vh-4rem)] items-center overflow-hidden py-12 sm:py-16 md:py-24 lg:py-28">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* Single large soft radial glow — offset right, very slow drift */}
        <motion.div
          className="absolute right-[0%] top-1/2 h-[700px] w-[700px] -translate-y-1/2 translate-x-1/4 rounded-full bg-blue-500/[0.07] blur-[100px] dark:bg-blue-400/[0.1]"
          animate={
            reducedMotion ? {} : { x: [-15, 15, -15], y: [-20, 20, -20] }
          }
          transition={{ duration: 40, repeat: Infinity, ease: easeInOut }}
        />

        {/* Hex grid — extremely low contrast, visible only toward avatar side */}
        <svg
          className="absolute inset-0 h-full w-full opacity-[0.4]"
          style={{
            maskImage:
              "radial-gradient(ellipse 70% 90% at 80% 50%, black 5%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 70% 90% at 80% 50%, black 5%, transparent 100%)",
          }}
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="hexgrid"
              x="0"
              y="0"
              width="41.57"
              height="72"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M20.785,-6 L41.57,6 L41.57,30 L20.785,42 L0,30 L0,6 Z"
                fill="none"
                stroke="var(--color-border)"
                strokeWidth="1"
              />
              <path
                d="M0,30 L20.785,42 L20.785,66 L0,78 L-20.785,66 L-20.785,42 Z"
                fill="none"
                stroke="var(--color-border)"
                strokeWidth="1"
              />
              <path
                d="M41.57,30 L62.355,42 L62.355,66 L41.57,78 L20.785,66 L20.785,42 Z"
                fill="none"
                stroke="var(--color-border)"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hexgrid)" />
        </svg>
      </div>

      <div className="mx-auto flex w-full max-w-5xl flex-col-reverse items-center gap-8 px-4 sm:gap-10 sm:px-6 md:flex-row md:justify-between lg:gap-16">
        {/* Text — staggered entrance */}
        <motion.div
          className="flex-1 text-center md:text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p
            variants={itemVariants}
            className="mb-3 text-xs font-medium tracking-widest uppercase text-primary sm:text-sm"
          >
            {siteConfig.fullName}
          </motion.p>

          <motion.h1
            variants={itemVariants}
            className="mx-auto max-w-xl text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:mx-0 md:text-4xl lg:text-5xl xl:text-6xl"
          >
            {hero.headline}
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-muted-foreground sm:mt-5 sm:text-base md:mx-0 lg:text-lg"
          >
            {hero.subheadline}
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-6 flex flex-col items-center gap-3 sm:mt-7 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-3 md:justify-start"
          >
            <Button asChild size="lg" className="w-full sm:w-auto">
              <Link href="/projects">
                {hero.primaryCta}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full sm:w-auto"
            >
              <Link href="/contact">{hero.secondaryCta}</Link>
            </Button>
            <Button
              asChild
              variant="ghost"
              size="lg"
              className="w-full sm:w-auto"
            >
              <a
                href={siteConfig.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FileText className="mr-2 h-4 w-4" />
                {hero.resumeCta}
              </a>
            </Button>
          </motion.div>
        </motion.div>

        {/* Avatar — clean entrance, no glow */}
        <motion.div
          className="shrink-0"
          initial={{ opacity: 0, scale: 0.88 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.65, ease: easeOut, delay: 0.25 }}
        >
          <HeroAvatar
            imageSrc="/images/profile.svg"
            initials="SY"
            alt={siteConfig.fullName}
            size="lg"
          />
        </motion.div>
      </div>
    </section>
  );
}
