import React from "react";

export default function WorkExperienceCard({
  companyLogoUrl,
  companyName,
  jobRole,
  jobDuration,
}) {
  return (
    <div className="flex items-center gap-3 flex-1">
      <div className="p-1 border-2 border-border rounded-xl">
        <img
          src={companyLogoUrl}
          alt={`${companyName} logo`}
          className="w-14 rounded-lg"
        />
      </div>

      <div className="flex flex-col md:flex-row items-start md:items-center justify-between flex-1">
        <div>
          <p className="text-base md:text-lg font-medium">{jobRole}</p>
          <p className="text-muted-foreground">{companyName}</p>
        </div>
        <span className="text-sm text-muted-foreground whitespace-nowrap">
          {jobDuration}
        </span>
      </div>
    </div>
  );
}
