"use client";

import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";

import { tabs } from "@/constants"; // Import the tabs array from constants

const TransactionForm = () => {
  const router = useRouter();
  const pathname = usePathname(); // Get the current route
  const [coinType, setCoinType] = useState("");
  const [amount, setAmount] = useState("");

  const isFormValid = coinType !== "" && amount !== "";

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
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

        {/* Form */}
        <div className="mt-6">
          <label className="block text-gray-700">Coin Type</label>
          <select
            value={coinType}
            onChange={(e) => setCoinType(e.target.value)}
            className="mt-1 w-full rounded-md border p-3 focus:ring focus:ring-green-300"
          >
            <option value="">Select coin type</option>
            <option value="BTC">Bitcoin (BTC)</option>
            <option value="ETH">Ethereum (ETH)</option>
            <option value="USDT">Tether (USDT)</option>
          </select>

          <label className="mt-4 block text-gray-700">Amount</label>
          <div className="relative">
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter Amount"
              className="mt-1 w-full rounded-md border p-3 focus:ring focus:ring-green-300"
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">
              USD
            </span>
          </div>

          <div className="mt-4 flex justify-between text-gray-700">
            <span>Amount in Naira ---</span>
            <span className="flex cursor-pointer items-center text-green-500">
              Set by Naira ↔
            </span>
          </div>

          <div className="mt-2 text-gray-700">Selling Rate ₦/$</div>

          <button
            className={`mt-6 w-full rounded-lg py-3 font-bold text-white transition ${
              isFormValid
                ? "bg-gradient-to-r from-green-400 to-green-600"
                : "cursor-not-allowed bg-gray-300"
            }`}
            disabled={!isFormValid}
          >
            Buy Crypto
          </button>
        </div>
      </div>
    </div>
  );
};

export default TransactionForm;
