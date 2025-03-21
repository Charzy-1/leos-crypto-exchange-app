import { Session } from "next-auth";
import React from "react";

const Header = ({ session }: { session: Session | null }) => {
  return (
    <header className="admin-header">
      <div>
        <h2 className="text-dark-400 dark:text-gray-100 font-semibold text-2xl">
          {session?.user?.name}
        </h2>
        <p className="text-slate-500 text-base dark:text-gray-300">
          Track all your users and transactions here
        </p>

        {/* <p>Search</p> */}
      </div>
    </header>
  );
};

export default Header;
