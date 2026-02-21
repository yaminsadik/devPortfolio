import { Hero } from "@/components/hero";
import { FeaturedProjects } from "@/components/featured-projects";
import { WhatIDo } from "@/components/what-i-do";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      <WhatIDo />
    </>
  );
}
