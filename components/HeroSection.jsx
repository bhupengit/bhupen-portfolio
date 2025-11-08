import React from "react";
import ProfileHeader from "./ProfileHeader";
import Navbar from "./Navbar";
import WorkExperienceSection from "./WorkExperienceSection";
import TechStackSection from "./TechStackSection";
import ProjectSection from "./ProjectSection";
import GithubContribution from "./GithubContributions";
import CTASection from "./CTASection";
import Reveal from "./Reveal";
import ReviewSection from "./ReviewSection";

export default function HeroSection() {
  return (
    <div className="relative mx-auto w-full max-w-3xl border border-border/80">
      <Navbar />

      <Reveal>
        <ProfileHeader />
      </Reveal>

      <Reveal delay={0.2}>
        <WorkExperienceSection />
      </Reveal>

      <Reveal delay={0.4}>
        <TechStackSection />
      </Reveal>

      <Reveal delay={0.6}>
        <GithubContribution />
      </Reveal>

      <Reveal delay={0.8}>
        <ProjectSection />
      </Reveal>

      <Reveal delay={1}>
        <ReviewSection />
      </Reveal>

      <CTASection />
    </div>
  );
}
