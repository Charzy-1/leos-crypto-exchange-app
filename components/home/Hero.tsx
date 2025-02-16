import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaWhatsapp, FaTelegramPlane } from "react-icons/fa";

import ROUTES from "@/constants/routes";

import { TextGenerateEffect } from "../ui/TextGenerateEffect";

const Hero = () => {
  return (
    <section className="background-light850_dark100 text-dark500_light700 lg:px-8">
      {/* Hero content */}
      <div className="container mx-auto flex w-full flex-col-reverse items-center justify-between px-2 text-center lg:flex-row lg:text-left">
        {/* Left Section: Text and Buttons */}
        <div className="flex max-w-lg flex-col items-center lg:items-start">
          <p className="text-dark300_light700 mb-2 text-lg">
            Welcome to Leos Exchange.
          </p>
          <TextGenerateEffect
            className="mb-6 items-center text-5xl font-extrabold leading-tight lg:text-7xl"
            words="Start your crypto trading here."
          />
          <p className="text-dark300_light700 mb-8 text-lg">
            The fastest, most trusted and reliable top crypto trading platform
            with a simple transaction flow.
          </p>

          {/* Buttons */}
          <div className="flex flex-col items-center justify-center gap-4 md:flex-row lg:justify-start">
            <Link href={ROUTES.SIGN_IN}>
              <button className="primary-gradient rounded-lg px-6 py-3 font-bold text-green-200">
                Trade with Leo
              </button>
            </Link>
            <button className="text-dark400_light500 flex items-center gap-2 font-medium hover:underline">
              Learn more →
            </button>
          </div>

          {/* Stats */}
          <div className="text-dark300_light900 mt-8 flex w-full flex-wrap justify-center gap-6 lg:justify-start">
            <div className="text-center lg:text-left">
              <p className="text-dark100_light900 text-2xl font-bold">20+</p>
              <p className="text-sm">Wallet Types</p>
            </div>
            <div className="text-center lg:text-left">
              <p className="text-dark100_light900 text-2xl font-bold">2000+</p>
              <p className="text-sm">Active Users</p>
            </div>
            <div className="text-center lg:text-left">
              <p className="text-dark100_light900 text-2xl font-bold">10M+</p>
              <p className="text-sm">Transactions</p>
            </div>
          </div>
        </div>

        {/* Right Section: Image */}
        <div className="relative mt-10 flex w-full justify-center lg:mt-0 lg:w-1/2">
          <Image
            src="/images/phone-mockup.png"
            width={500}
            height={400}
            alt="Phone Mockup"
            className="relative z-10 w-[300px] md:w-[400px] lg:w-[500px]"
          />
        </div>
      </div>

      {/* Floating WhatsApp and Telegram buttons */}
      <div className="fixed bottom-3 right-4 z-50 flex flex-col gap-4">
        <a
          href="https://api.whatsapp.com/send/?phone=%2B2348053188798&text&type=phone_number&app_absent=0"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center rounded-full bg-green-500 p-3 text-white shadow-lg transition duration-300 hover:bg-green-600"
        >
          <FaWhatsapp className="size-6" />
        </a>

        <a
          href="https://t.me/+EGexcnohVLgzNGVk"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center rounded-full bg-blue-500 p-3 text-white shadow-lg transition duration-300 hover:bg-blue-600"
        >
          <FaTelegramPlane className="size-6" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
