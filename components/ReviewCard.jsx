import React from "react";

export default function ReviewCard({ review, name, jobRole, avatar }) {
  return (
    <div
      className="
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
      <p className="text-lg">“{review}”</p>

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
    </div>
  );
}
