"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Theme from "./Theme";
import MobileNavigation from "./MobileNavigation";
import { Avatar } from "@/components/ui/avatar";
import { Session } from "next-auth";
import { getInitials } from "@/lib/utils";

const Navbar = ({ session }: { session: Session }) => {
  const [isHomePage, setIsHomePage] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsHomePage(window.location.pathname === "/");
    }
  }, []);

  return (
    <nav className="flex-between background-light900_dark200 fixed z-50 w-full gap-5 p-4 shadow-light-300 dark:shadow-none sm:px-12">
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

      <div className="flex-between gap-5">
        <Theme />
        {!isHomePage && <MobileNavigation />}{" "}
        <Link href="/profile">
          <Avatar className="w-10 h-10 cursor-pointer border border-gray-300 hover:ring-2 hover:ring-green-500 transition-all flex items-center justify-center text-white bg-green-500 font-bold rounded-full">
            {getInitials(session?.user?.name || "IN")}
          </Avatar>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
