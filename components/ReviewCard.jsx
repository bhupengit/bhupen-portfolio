'use client'
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

export default function ReviewCard({
  review,
  name,
  jobRole,
  avatar,
  reviewUrl,
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className="
        h-full
        border 
        px-4 
        py-4 
        flex 
        flex-col 
        gap-4
        hover:bg-secondary/40
        transition-all
        duration-200
      "
    >
      {/* Review text */}
      <p
        className={`text-md  ${
          expanded ? "line-clamp-none" : "line-clamp-3"
        }`}
      >
        {review}
      </p>

      {/* View more / less */}
      {review.length > 120 && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-sm text-muted-foreground w-fit hover:underline"
        >
          {expanded ? "View less" : "View more"}
        </button>
      )}

      <div className="flex items-center justify-between mt-auto">
        <div className="flex items-center gap-3">
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
