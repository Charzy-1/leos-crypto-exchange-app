import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <main className="root-container flex flex-col min-h-screen justify-center items-center">
      <div>
        <Image
          src="/images/relax.png"
          width={200}
          height={100}
          alt="hold emoji"
        />
      </div>
      <h1 className="heading mt-6 font-bebas-neue">Why so much in haste?</h1>
      <p className="mt-3 max-w-xl text-center text-light-400">
        Looks like you&apos;ve been a little too eager. We&apos;ve put a
        temporary pause on your excitement. 🚦 Chill for a bit, and try again
        shortly
      </p>
    </main>
  );
};

export default page;
