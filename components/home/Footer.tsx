import Image from "next/image";
import Link from "next/link";
import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/constants";

import MagicButton from "../ui/MagicButton";

const Footer = () => {
  return (
    <footer className="w-full pb-10 pt-20">
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
          Copyright &copy; {new Date().getFullYear()} Leos Exchange
        </p>

        <p>
          <Link
            href="/Terms-and-conditions"
            className="text-green-500 hover:underline"
          >
            Terms and Conditions
          </Link>
        </p>
        <p>
          <Link
            href="/Privacy-Policy"
            className="text-green-500 hover:underline"
          >
            Privacy Policy
          </Link>
        </p>

        <div className="flex items-center gap-6 md:gap-3">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              // eslint-disable-next-line tailwindcss/migration-from-tailwind-2
              className="flex size-10 cursor-pointer items-center justify-center rounded-lg border border-black bg-black bg-opacity-75 saturate-150 backdrop-blur-lg"
            >
              <Image src={info.img} alt="icons" width={20} height={20} />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
