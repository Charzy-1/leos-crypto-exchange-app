"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

import { testimonials } from "@/constants"; // Import testimonials from your constants file

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [index]); // Include index as a dependency

  // Manual navigation
  const nextSlide = () =>
    setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  const prevSlide = () =>
    setIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );

  return (
    <div className="mx-auto w-full max-w-3xl p-6">
      {/* Title */}
      <div className="text-bold primary-text-gradient text-center">
        <h2 className="h1-bold text-dark500_light700 text-2xl font-semibold">
          WHAT PEOPLE SAY ABOUT US
        </h2>
      </div>

      {/* Testimonial Slider */}
      <div className="bg-light100_dark200 relative mt-6 overflow-hidden rounded-lg shadow-lg transition-colors">
        {/* Motion Animation */}
        <motion.div
          className="flex"
          initial={{ x: "0%" }}
          animate={{ x: `-${index * 100}%` }}
          transition={{ ease: "easeInOut", duration: 0.9 }}
        >
          {testimonials.map(({ id, name, text, image }) => (
            <div
              key={id}
              className="flex min-w-full flex-col items-center px-4 text-center"
            >
              {/* Image */}
              <div className="relative mb-4 size-16">
                <Image
                  src={image}
                  alt={name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full border-2 border-green-500"
                />
              </div>
              {/* Text */}
              <p className="text-dark500_light400 mb-2 text-lg">
                &quot;{text}&quot;
              </p>
              <h3 className="text-dark500_light700 text-sm font-semibold">
                - {name}
              </h3>
            </div>
          ))}
        </motion.div>

        {/* Manual Navigation Buttons */}
        <div className="mt-4 flex justify-center gap-6">
          <button
            onClick={prevSlide}
            className="text-dark500_light700 text-2xl transition hover:text-green-500"
          >
            ◀
          </button>
          <button
            onClick={nextSlide}
            className="text-dark500_light700 text-2xl transition hover:text-green-500"
          >
            ▶
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
