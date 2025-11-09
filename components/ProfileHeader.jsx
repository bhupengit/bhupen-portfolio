"use client";
import React, { useEffect, useState } from "react";
import SocialLinkItem from "./SocialLinkItem";
import { LightRays } from "./ui/light-rays";

export default function ProfileHeader() {
  return (
    <div className="relative">
      <img
        src="/banner-1.jpg"
        alt="Banner"
        className="absolute inset-0  object-cover mask-b-from-75% mask-t-from-75% mask-l-from-75% mask-r-from-75% opacity-20 z-0 pointer-events-none"
      />

      <div className="mt-20 relative z-20 w-full px-4 py-8 md:px-5 md:py-12 space-y-4">
        <div className="flex flex-col gap-4">
          <img src="./bhupen-pfp.svg" className="w-32 h-32" alt="" />

          <div className="flex  flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex flex-col gap-2">
              <span className="flex gap-3 items-center">
                <h1 className="font-serif text-4xl md:text-5xl">
                  Bhupen Joshi
                </h1>
                <span className="px-2 py-1 bg-green-500/12 rounded-full font-light text-sm text-green-500 h-fit -rotate-2">
                  open to work
                </span>
              </span>

              <p className="text-muted-foreground">
                senior app dev • tech explorer • builder at heart
              </p>
            </div>

            <div className="flex gap-4 z-10">
              <SocialLinkItem
                socialName={"Github"}
                socialUrl={"https://github.com/bhupengit"}
              />
              <SocialLinkItem
                socialName={"Twitter"}
                socialUrl={"https://x.com/bhupen_twt"}
              />
              <SocialLinkItem
                socialName={"Mail"}
                socialUrl={"mailto:bhupenjoshi07@gmail.com"}
              />
            </div>
          </div>
        </div>

        <div className="pt-4">
          <p className="text-base leading-relaxed text-muted-foreground">
            I’m a <span className="text-primary">Senior Software Engineer</span>{" "}
            with over a decade of experience building high-performance mobile
            solutions using React Native, Android, and Flutter. I focus on
            creating <span className="text-primary">scalable</span> and{" "}
            <span className="text-primary">user-focused applications</span> with
            clean architecture and strong performance. I’ve worked on{" "}
            <span className="text-primary">IoT</span> and{" "}
            <span className="text-primary">AI-powered systems</span> that bring
            intelligence and simplicity together. My goal is to craft technology
            that’s reliable, purposeful, and built with care.
          </p>
        </div>
      </div>
    </div>
  );
}
