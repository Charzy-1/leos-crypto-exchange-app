"use client";

import { usePathname } from "next/navigation";
import { ReactNode } from "react";

import LeftSidebar from "@/components/navigation/LeftSidebar";
import Navbar from "@/components/navigation/navbar";

const RootLayout = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();

  // Define routes where the LeftSidebar should be visible
  const routesWithSidebar = [
    "/dashboard",
    "/earning",
    "/profile",
    "/sell",
    "/buy",
    "/swap",
  ];
  const shouldShowSidebar = routesWithSidebar.some((route) =>
    pathname.startsWith(route)
  );

  // Check if the current route is `/home`
  const isHomePage = pathname === "/home";

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
          className={`flex min-h-screen flex-1 flex-col px-6 pb-6 pt-28 max-md:pb-14 ${
            shouldShowSidebar
              ? "" // Sidebar present, so no centering
              : isHomePage
                ? "w-full" // No centering for /home
                : "w-full" // Centered for other routes
          }`}
        >
          {children}
        </section>
      </div>
    </main>
  );
};

export default RootLayout;
