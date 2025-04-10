"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useSession, getSession } from "next-auth/react"; // Import getSession
import { actions } from "@/constants";

const Dashboard = () => {
  const { data: session, status, update } = useSession(); // Get session and update function
  const [active, setActive] = useState("All");
  const [firstName, setFirstName] = useState("User");

  useEffect(() => {
    const fetchSession = async () => {
      const newSession = await getSession(); //  Fetch latest session data
      if (newSession?.user?.name) {
        setFirstName(newSession.user.name.split(" ")[0]); //  Extract first name
      }
    };

    fetchSession(); // Call function on component mount
  }, []);

  return (
    <section className="px-4 sm:px-6 md:px-8">
      <div className="flex flex-row flex-wrap items-center justify-center space-x-0 space-y-6 md:space-x-6 md:space-y-0 lg:justify-between">
        {/* ✅ Dynamic Welcome Message with Green First Name */}
        <h1 className="heading">
          Welcome <span className="text-green-500">{firstName}</span>!
        </h1>

        <div className="grid w-full max-w-[460px] grid-cols-3 gap-6">
          {actions.map((action) => (
            <Link key={action.id} href={action.href}>
              <button className="flex flex-col items-center gap-2 font-semibold text-gray-700 dark:text-gray-300">
                <span className="mt-6 flex size-12 items-center justify-center rounded-full shadow-lg">
                  {action.icon}
                </span>
                <span>{action.label}</span>
              </button>
            </Link>
          ))}
        </div>
      </div>

      {/* <div className="my-12">
        <h2 className="my-4 text-center text-2xl font-bold text-gray-700 dark:text-gray-300 md:text-3xl">
          Transaction History
        </h2>
        <div className="flex justify-center gap-4">
          {["All", "Buy", "Sell", "Swap"].map((btn) => (
            <button
              key={btn}
              className={`rounded-lg border px-6 py-2 text-gray-700 transition dark:text-gray-200 ${
                active === btn
                  ? "border-green-500 bg-green-500 text-white"
                  : "border-gray-300 hover:bg-gray-200"
              }`}
              onClick={() => setActive(btn)}
            >
              {btn}
            </button>
          ))}
        </div>
      </div> */}
    </section>
  );
};

export default Dashboard;
