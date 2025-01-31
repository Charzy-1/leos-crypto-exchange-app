import ROUTES from "@/constants/routes";
import Link from "next/link";
import React from "react";
import { TextGenerateEffect } from "../ui/TextGenerateEffect";

const Hero = () => {
  return (
    <section className="background-light850_dark100 text-dark500_light700">
      {/* Floating coins */}
      <img
        src="/assets/tech/bitcoin.png"
        alt="Bitcoin"
        className="absolute w-10 h-12 lg:w-16 lg:h-16 animate-float"
        style={{ top: "13%", left: "15%" }}
      />
      <img
        src="/assets/tech/Ether.png"
        alt="Ethereum"
        className="absolute w-10 h-10 lg:w-14 lg:h-14 animate-float"
        style={{ top: "50%", right: "10%" }}
      />
      <img
        src="/assets/tech/Tether.png"
        alt="Other Coin"
        className="absolute w-8 h-8 lg:w-12 lg:h-12 animate-float"
        style={{ bottom: "20%", left: "30%" }}
      />

      {/* Hero content */}
      <div className="container mx-auto px-2 lg:px-6 flex flex-col lg:flex-row justify-between mt-16 ">
        {/* Text content */}
        <div className="text-center lg:text-left max-w-lg">
          <p className="text-dark300_light700 text-lg mb-2">
            Welcome to Leos Exchange.
          </p>
          <TextGenerateEffect
            className="text-4xl lg:text-5xl font-extrabold leading-tight mb-6"
            words="Start your crypto trading here."
          />
          <p className="text-dark300_light700 text-lg mb-8">
            The fastest, most trusted and reliable top crypto trading platform
            with a simple transaction flow.
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
            className="relative z-10 w-96 lg:w-[600px] mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
