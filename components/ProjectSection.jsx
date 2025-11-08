import React from "react";
import ProjectCard from "./ProjectCard";
import FeaturedProjectCard from "./FeaturedProjectCard";
import { projects } from "@/content/data";

export default function ProjectSection() {
  const featured = projects.find((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section className="relative border-t border-border/80">
      <div className="flex flex-col">
        <div className="space-y-2 px-4 py-8 md:px-5 md:py-10">
          <h2 className="font-serif text-3xl ">Projects</h2>
          <p className="text-md text-muted-foreground">
            A selection of company projects — personal experiments in progress.
          </p>
        </div>

        {featured && (
            <FeaturedProjectCard {...featured} />
        )}
        <div className="grid grid-cols-1 md:grid-cols-2">
          {others.map((project, idx) => (
            <ProjectCard key={idx} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
