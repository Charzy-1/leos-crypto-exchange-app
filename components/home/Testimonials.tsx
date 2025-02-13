"use client";

import { testimonials } from "@/constants"; // Import testimonials from your constants file

import { InfiniteMovingCards } from "../ui/InfiniteMovingCards";

const Testimonials = () => {
  return (
    <div className="mx-auto w-full max-w-3xl p-6">
      <div className="py-20">
        <h1 className="heading">
          Kind words from{" "}
          <span className="text-green-500"> satisfied clients</span>
        </h1>
        <div className="flex flex-col items-center">
          <div className="flex h-[50vh] flex-col items-center rounded-md antialiased md:h-[30rem]">
            <InfiniteMovingCards
              items={testimonials}
              direction="right"
              speed="slow"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
