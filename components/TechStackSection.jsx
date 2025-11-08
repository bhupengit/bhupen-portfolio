import { techStack } from "@/content/data";
import React from "react";
import TechStackIcon from "./TechStackIcon";

export default function TechStackSection() {
  return (
    <section className="relative border-t border-border/80">
      <div className="px-4 py-8 md:px-5 md:py-10">
        <div className="flex gap-6 flex-col">
          <h2 className="font-serif text-3xl">Tech Stack</h2>
          <div className="flex items-center flex-wrap gap-4">
            {techStack.map((stack, idx) => (
              <TechStackIcon key={idx} name={stack.name} logo={stack.logo} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
