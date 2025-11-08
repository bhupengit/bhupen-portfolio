import { reviews } from "@/content/data";
import React from "react";
import ReviewCard from "./ReviewCard";

export default function ReviewSection() {
  return (
    <section className="relative">
      <div className="relative flex flex-col">
        <h2 className="px-4 py-8 md:px-5 md:py-10 font-serif text-3xl">
          Reviews from Peers
        </h2>

        <div
          className="
            grid 
            grid-cols-1 
            md:grid-cols-2 
            lg:grid-cols-3 
            mb-12

          "
        >
          {reviews.map((review, idx) => (
            <ReviewCard key={idx} {...review} />
          ))}
        </div>
      </div>
    </section>
  );
}
