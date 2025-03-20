import { auth } from "@/auth";
import Sidebar from "@/components/admin/Sidebar";
import { redirect } from "next/navigation";
import React, { ReactNode } from "react";
import "@/styles/admin.css";

const layout = async ({ children }: { children: ReactNode }) => {
  const session = await auth();

  //   if (!session?.user?.id) redirect("/sign-in");
  return (
    <main className="flex min-h-screen w-full flex-row">
      <Sidebar />
      <div className="admin-container">
        <p>Header</p>
        {children}
      </div>
    </main>
  );
};

export default layout;
