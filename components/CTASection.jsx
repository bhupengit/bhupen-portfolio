import React from "react";
import { Button } from "./ui/button";
import SocialLinkItem from "./SocialLinkItem";
import Link from "next/link";
import { FlickeringGrid } from "./ui/flickering-grid";

export default function CTASection() {
  return (
    <section className="relative w-full overflow-hidden py-16">
      <div className="absolute left-1/2 -translate-x-1/2">
        <FlickeringGrid
          className="relative inset-0 z-0 [mask-image:radial-gradient(400px_circle_at_center,white,transparent)]"
          squareSize={4}
          gridGap={6}
          color="#6B7280"
          maxOpacity={0.5}
          flickerChance={0.1}
          height={1000}
          width={1000}
        />
      </div>
      <div className="px-4 py-8 md:px-5 md:py-10 relative z-10">
        <div className="flex flex-col items-center text-center gap-4 h-full">
          <div className="space-y-3">
            <h1 className="font-serif text-3xl md:text-4xl">
              Ready to Elevate <br />
              <span className="inline-block px-3 py-1 bg-accent rounded-xl -rotate-2">
                Your Product?
              </span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-xs">
              Let’s collaborate to create something impactful. Hire me today!
            </p>
          </div>

          <Button className="cursor-pointer">
            <Link target="blank" href={"https://cal.com/bhupen/30min"}>
              Book a Call
            </Link>
          </Button>

          <div className="flex gap-4 mt-6">
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
    </section>
  );
}
