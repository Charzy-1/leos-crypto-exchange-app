import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/constants";

import MagicButton from "../ui/MagicButton";

const Footer = () => {
  return (
    <footer className="w-full pb-10 pt-20">
      {/* background grid */}
      <div className="absolute -bottom-72 left-0 min-h-96 w-full">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="size-full opacity-50 "
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-green-500">your</span> crypto
          trading to the next level?
        </h1>
        <p className="text-white-200 my-5 text-center md:mt-10">
          Reach out to me today and let&apos;s discuss how I can help you trade
          what you have.
        </p>
        <a href="mailto:support@leos-exchange.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="mt-16 flex flex-col items-center justify-between md:flex-row">
        <p className="text-sm font-light md:text-base md:font-normal">
          Copyright © 2024 Adrian Hajdin
        </p>

        <div className="flex items-center gap-6 md:gap-3">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="saturate-180 bg-black-200 border-black-300 flex size-10 cursor-pointer items-center justify-center rounded-lg border bg-opacity-75 backdrop-blur-lg"
            >
              <img src={info.img} alt="icons" width={20} height={20} />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
