import Link from "next/link";
import React from "react";
import GitHubCalendar from "react-github-calendar";

export default function GithubContribution() {
  return (
    <section className="relative border-t border-border/80">
      <div className="px-4 py-8 md:px-5 md:py-10">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-4">
            <h2 className="font-serif text-3xl">Github Contributions</h2>
            <Link
              href="https://github.com/bhupengit"
              target="_blank"
              className="text-muted-foreground"
            >
              @bhupengit
            </Link>
          </div>

          <GitHubCalendar
            username="bhupengit"
            blockSize={9}
            theme={{
              light: ["#f4f4f5", "#c6e48b", "#7bc96f", "#239a3b", "#196127"],
              dark: ["#18181b", "#0e4429", "#006d32", "#26a641", "#39d353"],
            }}
          />
        </div>
      </div>
    </section>
  );
}
