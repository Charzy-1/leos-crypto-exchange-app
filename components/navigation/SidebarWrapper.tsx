"use client";

import { usePathname } from "next/navigation";

const SidebarWrapper = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

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

  if (!shouldShowSidebar) return null; // Hide sidebar on other pages

  return <div className="hidden md:block lg:w-[266px]">{children}</div>;
};

export default SidebarWrapper;
