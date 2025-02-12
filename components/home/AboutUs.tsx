import Image from "next/image";

import { features } from "@/constants"; // Import features array

const AboutUs = () => {
  return (
    <div className="background-light900_dark200 mb-6 mt-[4em] bg-gray-100 p-6 dark:bg-transparent">
      {/* Main Section */}
      <section className="text-center">
        {/* Heading */}
        <h2 className="h2-bold primary-text-gradient sm:text-2xl md:text-3xl lg:text-4xl">
          FACTS ABOUT US?
        </h2>
        {/* Subheading */}
        <p className="base-medium text-dark500_light400 mb-10">
          We value your trust above all else and always make your security our
          top priority.
        </p>

        {/* Grid for Features */}
        <div className="mx-auto grid max-w-6xl gap-8 px-5 sm:grid-cols-2 md:grid-cols-3">
          {features.map(({ id, imgSrc, altText, title, description }) => (
            <div
              key={id}
              className="card-wrapper dark:shadow-light100_dark100 rounded-lg p-6 shadow-lg"
            >
              <div className="relative mx-auto mb-4 size-16">
                <Image src={imgSrc} alt={altText} width={64} height={64} />
              </div>
              <h3 className="h2-bold text-dark500_light700 mb-2">{title}</h3>
              <p className="base-medium text-dark500_light400 mt-2">
                {description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
