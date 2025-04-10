import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <section className="w-full rounded-2xl bg-white dark:bg-gray-900 p-7">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h2 className="text-xl font-semibold">All Rates</h2>
        <Button className="bg-primary-admin" asChild>
          <Link href="/admin/rates/new">+ Add new rate</Link>
        </Button>
      </div>

      <div className="mt-7 w-full overflow-hidden">
        <p>Table</p>
      </div>
    </section>
  );
};

export default page;
