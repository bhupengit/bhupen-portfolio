import React from "react";
import { Iphone } from "./ui/iphone";

export default function ProjectCardCover({ mockupImage }) {
  return (
    <div className="aspect-square w-full h-full overflow-hidden group mask-b-from-10%">
      <div className="min-w-40 max-w-64 relative top-5 left-1/2 -translate-x-1/2  ">
        <Iphone src={mockupImage} />
      </div>
    </div>
  );
}
