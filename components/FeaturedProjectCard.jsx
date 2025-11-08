import React from "react";
import { Button } from "./ui/button";
import { ArrowUpRight, GithubIcon } from "lucide-react";
import ProjectCardCover from "./ProjectCardCover";

export default function FeaturedProjectCard({
  name,
  description,
  coverImageUrl,
  techStack,
  liveUrl,
  githubUrl,
}) {
  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 place-items-center bg-secondary/60  border border-border/80`}
    >
      <ProjectCardCover mockupImage={coverImageUrl} />

      <div className="px-4 py-8 space-y-4">
        <div className="space-y-4">
          <div className="flex flex-col gap-1">
            <p className="uppercase text-xs tracking-widest text-muted-foreground mb-2">
              featured project
            </p>
            <p className="text-xl font-medium">{name}</p>
            <p className="text-md text-muted-foreground">{description}</p>
          </div>

          <div className="flex flex-wrap gap-2 mt-2">
            {techStack?.map((stack, idx) => (
              <span key={idx} className="px-2 py-1 text-sm  rounded-sm border">
                {stack}
              </span>
            ))}
          </div>
        </div>

        {(liveUrl || githubUrl) && (
          <div className="flex gap-2">
            {liveUrl && (
              <Button
                variant="secondary"
                asChild
                className="flex items-center gap-1"
              >
                <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                  View Project
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </Button>
            )}
            {githubUrl && (
              <Button
                variant="ghost"
                asChild
                className="flex items-center gap-1"
              >
                <a href={githubUrl} target="_blank">
                  <GithubIcon className="h-4 w-4" />
                  GitHub
                </a>
              </Button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
