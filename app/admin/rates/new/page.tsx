import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <>
      <Button asChild className="back-btn bg-primary-admin">
        <Link href="/admin/rates">Go back</Link>
      </Button>
      <section className="w-full max-w-2xl">
        <p>Rate form</p>
      </section>
    </>
  );
};

export default page;
