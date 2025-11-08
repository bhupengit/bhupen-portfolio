import React from "react";
import ProjectCardCover from "./ProjectCardCover";
import { Button } from "./ui/button";
import { ArrowUpRight, GithubIcon } from "lucide-react";

export default function ProjectCard({
  name,
  description,
  techStack,
  coverImageUrl,
  liveUrl,
  githubUrl,
}) {
  return (
    <div className={`flex flex-col gap-3 border border-border/80`}>
      <div className="border-b border-border/80 pointer-events-auto">
        <ProjectCardCover mockupImage={coverImageUrl} />
      </div>

      <div className="px-4 py-4 space-y-4">
        <div className="space-y-4">
          <div className="flex flex-col gap-1">
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
                className="flex items-center gap-1 cursor-pointer"
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
                className="flex items-center gap-1 cursor-pointer"
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
