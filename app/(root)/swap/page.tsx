"use client";

import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";

import { tabs } from "@/constants"; // Import the tabs array from constants

const TransactionForm = () => {
  const router = useRouter();
  const pathname = usePathname(); // Get the current route

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 dark:bg-transparent">
      <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-md">
        {/* Tab Switcher */}
        <div className="flex justify-between rounded-lg bg-gray-100 p-1">
          {tabs.map((tab) => (
            <button
              key={tab.name}
              onClick={() => router.push(tab.href)}
              className={`w-1/3 rounded-md py-2 ${
                pathname === tab.href
                  ? "bg-green-500 font-bold text-white shadow-md"
                  : "text-gray-500"
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>

        {/* Coming Soon Section */}
        <div className="mt-6 flex flex-col items-center justify-center text-gray-700">
          <Image
            src="/images/emoji.png"
            width={200}
            height={100}
            alt="Coming Soon"
          />
          <p>Coming soon...</p>
        </div>
      </div>
    </div>
  );
};

export default TransactionForm;
