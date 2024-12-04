"use client";

import { ReactNode } from "react";
import { usePathname } from "next/navigation";

import Navbar from "@/components/navigation/navbar";
import LeftSidebar from "@/components/navigation/LeftSidebar";

const RootLayout = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();

  // Define routes where the LeftSidebar should be visible
  const routesWithSidebar = ["/dashboard", "/earning", "/profile"];
  const shouldShowSidebar = routesWithSidebar.some((route) =>
    pathname.startsWith(route)
  );

  return (
    <main className="background-light850_dark100 relative">
      {/* Navbar is always visible */}
      <Navbar />

      <div className="flex">
        {/* Render LeftSidebar only for defined routes */}
        {shouldShowSidebar && (
          <div className="hidden md:block lg:w-[266px]">
            <LeftSidebar />
          </div>
        )}

        {/* Main content section */}
        <section
          className={`flex min-h-screen flex-1 flex-col px-6 pb-6 pt-36 max-md:pb-14 sm:px-14 ${
            shouldShowSidebar ? "" : "mx-auto w-full max-w-5xl"
          }`}
        >
          {children}
        </section>
      </div>
    </main>
  );
};

export default RootLayout;
