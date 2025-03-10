import { ReactNode } from "react";
import { redirect } from "next/navigation";
import { headers } from "next/headers"; // ✅ Correct way to access headers
import { auth } from "@/auth";
import LeftSidebar from "@/components/navigation/LeftSidebar";
import Navbar from "@/components/navigation/navbar";
import SidebarWrapper from "@/components/navigation/SidebarWrapper";

const RootLayout = async ({ children }: { children: ReactNode }) => {
  const session = await auth(); // Check authentication

  // const protectedRoutes = ["/dashboard"]; // Define protected routes

  // // ✅ Await headers() to resolve the promise before calling `.get()`
  // const requestHeaders = await headers();
  // const pathname = requestHeaders.get("x-pathname") || "/"; // Fallback to "/"

  // // Redirect unauthenticated users trying to access protected routes
  // if (!session && protectedRoutes.includes(pathname)) {
  //   redirect("/"); // Redirect to homepage instead of sign-in page
  // }
  if (!session) redirect("/sign-in");

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
