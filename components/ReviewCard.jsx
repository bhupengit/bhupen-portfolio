import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function ReviewCard({
  review,
  name,
  jobRole,
  avatar,
  reviewUrl,
}) {
  return (
    <div
      className="
        h-full
        border 
        px-4 
        py-4 
        flex 
        flex-col 
        gap-6 
        hover:bg-secondary/40
        transition-all
        duration-200
      "
    >
      <p className="text-md h-full">{review}</p>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3 mt-auto">
          <img
            className="w-10 h-10 rounded-full border border-border/70 object-cover"
            src={avatar}
            alt={name}
          />
          <div>
            <p className="font-medium">{name}</p>
            <p className="text-sm text-muted-foreground">{jobRole}</p>
          </div>
        </div>

        <Link href={reviewUrl} target="_blank">
          <ArrowUpRight className="text-muted-foreground hover:text-foreground transition-all duration-200" />
        </Link>
      </div>
    </div>
  );
}
