import { ReactNode } from "react";

import { auth } from "@/auth";
import LeftSidebar from "@/components/navigation/LeftSidebar";
import Navbar from "@/components/navigation/navbar";
import SidebarWrapper from "@/components/navigation/SidebarWrapper";

const RootLayout = async ({ children }: { children: ReactNode }) => {
  const session = await auth(); // Check authentication

  return (
    <main className="background-light850_dark100 relative">
      <Navbar session={session ?? null} />
      <div className="flex">
        {/* Sidebar is only visible on specific pages */}
        <SidebarWrapper>
          <LeftSidebar />
        </SidebarWrapper>

        {/* Main content */}
        <section className="flex min-h-screen flex-1 flex-col px-6 pb-6 pt-28 max-md:pb-14">
          {children}
        </section>
      </div>
    </main>
  );
};

export default RootLayout;
