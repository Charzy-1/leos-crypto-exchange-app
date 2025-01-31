import Image from "next/image";
import { ReactNode } from "react";

import SocialAuthForm from "@/components/forms/SocialAuthForm";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    // Entire page container
    <main className="flex min-h-screen items-center justify-center bg-auth-light bg-cover bg-center bg-no-repeat px-4 py-10 dark:bg-auth-dark">
      {/* The form container */}
      <section className="light-border background-light800_dark200 shadow-light100_dark100 min-w-full rounded-[10px] px-4 py-10 shadow-md sm:min-w-[520px] sm:px-8">
        {/* The h1, pagraph and logo container */}
        <div className="flex items-center justify-between gap-2">
          <div className="space-y-2.5">
            <h1 className="h2-bold text-dark100_light900">
              Join Leos Exchange
            </h1>
            <p className="paragraph-regular text-dark500_light400">
              To get your best rate
            </p>
          </div>
          <Image
            src="images/site-logo.svg"
            alt="Leos Exchange Logo"
            width={70}
            height={70}
            className="object-contain"
          />
        </div>

        {children}

        <SocialAuthForm />
      </section>
    </main>
  );
};

export default AuthLayout;
