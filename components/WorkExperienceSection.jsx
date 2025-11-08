import { workExperience } from "@/content/data";
import React from "react";
import WorkExperienceCard from "./WorkExperienceCard";

export default function WorkExperienceSection() {
  return (
    <section className="border-t border-border/80">
      <div className="px-4 py-8 md:px-5 md:py-10">
        <div className="flex gap-6 flex-col">
          <h2 className="font-serif text-3xl">Work Experience</h2>
          <div className="flex flex-col gap-4">
            {workExperience.map((experience, idx) => (
              <WorkExperienceCard
                key={idx}
                companyLogoUrl={experience.companyLogoUrl}
                companyName={experience.companyName}
                jobDuration={experience.jobDuration}
                jobRole={experience.jobRole}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
