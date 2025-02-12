import Link from "next/link";
import React from "react";

import ROUTES from "@/constants/routes";

import { TextGenerateEffect } from "../ui/TextGenerateEffect";

const Hero = () => {
  return (
    <section className="background-light850_dark100 text-dark500_light700 px-8">
      {/* Hero content */}
      <div className="container mx-auto mt-16 flex flex-col justify-between px-2 lg:flex-row lg:px-6 ">
        {/* Text content */}
        <div className="max-w-lg text-center lg:text-left">
          <p className="text-dark300_light700 mb-2 text-lg">
            Welcome to Leos Exchange.
          </p>
          <TextGenerateEffect
            className="mb-6 text-4xl font-extrabold leading-tight lg:text-5xl"
            words="Start your crypto trading here."
          />
          <p className="text-dark300_light700 mb-8 text-lg">
            The fastest, most trusted and reliable top crypto trading platform
            with a simple transaction flow.
          </p>

          <div className="flex flex-col items-center gap-4 lg:flex-row">
            {/* Trade with Me button */}
            <Link href={ROUTES.SIGN_IN}>
              <button className="primary-gradient rounded-lg px-4 py-3 font-bold text-green-200">
                Trade with Leo
              </button>
            </Link>
            <button className="text-dark400_light500 flex items-center gap-2 font-medium hover:underline">
              Learn more →
            </button>
          </div>

          {/* Stats */}
          <div className="text-dark300_light900 mt-8 flex justify-center gap-6 lg:justify-start">
            <div className="text-left">
              <p className="text-dark100_light900 text-2xl font-bold">20+</p>
              <p className="text-sm">Wallet Types</p>
            </div>
            <div className="text-left">
              <p className="text-dark100_light900 text-2xl font-bold">2000+</p>
              <p className="text-sm">Active Users</p>
            </div>
            <div className="text-left">
              <p className="text-dark100_light900 text-2xl font-bold">10M+</p>
              <p className="text-sm">Transactions</p>
            </div>
          </div>
        </div>

        {/* Image content */}
        <div className="relative mt-10 lg:mt-0">
          <img
            src="/assets/tech/phone-mockup.png"
            alt="Phone Mockup"
            className="relative z-10 mx-auto w-96 lg:w-[600px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
