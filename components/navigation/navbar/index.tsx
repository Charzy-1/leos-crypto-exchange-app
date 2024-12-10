import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Theme from "./Theme";
import MobileNavigation from "./MobileNavigation";

const Navbar = () => {
  const [isHomePage, setIsHomePage] = useState(false);

  useEffect(() => {
    // Check if the current path is '/' after component mounts
    if (typeof window !== "undefined") {
      setIsHomePage(window.location.pathname === "/");
    }
  }, []);

  return (
    <nav className="flex-between background-light900_dark200 fixed z-50 w-full gap-5 p-6 shadow-light-300 dark:shadow-none sm:px-12">
      <Link href="/" className="flex items-center gap-1">
        <Image
          src="/images/site-logo.svg"
          width={50}
          height={50}
          alt="Leosexchange Logo"
        />
        <p className="h2-bold font-space-grotesk text-dark-100 dark:text-light-900 text-[10px] sm:text-lg md:text-xl">
          Leos<span className="text-green-500">Exchange</span>
        </p>
      </Link>

      {/* Toggle button container */}
      <div className="flex-between gap-5">
        <Theme />

        {/* Only show MobileNavigation on /dashboard, hide it on the homepage */}
        {!isHomePage && <MobileNavigation />}
      </div>
    </nav>
  );
};

export default Navbar;
