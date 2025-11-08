import React from "react";
export default function TechStackIcon({ name, logo }) {
  return (
    <div className="flex w-fit gap-2 items-center px-3 py-2 rounded-md border border-border/80">
      <img src={logo} className="w-5 h-5 rounded-xs" />
      <p className="text-sm">{name}</p>
    </div>
  );
}
