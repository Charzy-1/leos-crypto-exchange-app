import ROUTES from "@/constants/routes";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <section className="background-light850_dark100 text-dark500_light700">
      {/* Hero content */}
      <div className="container mx-auto px-6 flex flex-col lg:flex-row justify-between mt-28 min-h-screen">
        {/* Text content */}
        <div className="text-center lg:text-left max-w-lg">
          <h1 className="text-5xl lg:text-6xl font-extrabold text-dark100_light900 leading-tight mb-6">
            Start your crypto <br /> trading here.
          </h1>
          <p className="text-dark300_light700 text-lg mb-8">
            The most trusted and top crypto trading platform with a simple
            transaction flow.
          </p>

          <div className="flex flex-col lg:flex-row items-center gap-4">
            {/* Trade with Me button */}
            <Link href={ROUTES.SIGN_IN}>
              <button className="px-4 py-3 primary-gradient rounded-lg text-green-200 font-bold">
                Trade with Leo
              </button>
            </Link>
            <button className="flex items-center text-dark400_light500 font-medium gap-2 hover:underline">
              Learn more →
            </button>
          </div>

          {/* Stats */}
          <div className="flex justify-center lg:justify-start gap-6 mt-8 text-dark300_light900">
            <div className="text-left">
              <p className="text-2xl font-bold text-dark100_light900">20+</p>
              <p className="text-sm">Wallet Types</p>
            </div>
            <div className="text-left">
              <p className="text-2xl font-bold text-dark100_light900">2000+</p>
              <p className="text-sm">Active Users</p>
            </div>
            <div className="text-left">
              <p className="text-2xl font-bold text-dark100_light900">10M+</p>
              <p className="text-sm">Transactions</p>
            </div>
          </div>
        </div>

        {/* Image content */}
        <div className="relative mt-10 lg:mt-0">
          <img
            src="/assets/tech/phone-mockup.png"
            alt="Phone Mockup"
            className="relative z-10 w-96 lg:w-[500px] mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
