"use client";

import { useRouter, usePathname } from "next/navigation";
import { useState, useEffect } from "react";

import { tabs, coinFees } from "@/constants";

const networks: Record<string, string> = {
  BTC: "Bitcoin (BTC)",
  ETH: "Ethereum (ETH)",
  USDT: "TRC20 / ERC20 / BEP20",
};

const TransactionForm = () => {
  const router = useRouter();
  const pathname = usePathname();

  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [coinType, setCoinType] = useState("");
  const [amount, setAmount] = useState("");
  const [walletAddress, setWalletAddress] = useState("");
  const [walletExpiry, setWalletExpiry] = useState("Yes");
  const [receipt, setReceipt] = useState<File | null>(null);

  const [feeInfo, setFeeInfo] = useState<{
    min: number;
    max: number;
    fee: number;
  } | null>(null);

  useEffect(() => {
    if (coinType) {
      setFeeInfo(coinFees[coinType as keyof typeof coinFees]);
    }
  }, [coinType]);

  const additionalFee = feeInfo ? feeInfo.fee : 0;
  const totalAmount = amount ? parseFloat(amount) + additionalFee : 0;
  const nairaEquivalent = totalAmount * 1500;

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-md">
        <div className="flex justify-between rounded-lg bg-gray-100 p-1">
          {tabs.map((tab) => (
            <button
              key={tab.name}
              onClick={() => router.push(tab.href)}
              className={`w-1/3 rounded-md py-2 ${
                pathname === tab.href
                  ? "bg-green-500 font-bold text-white"
                  : "text-gray-500"
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>

        {step === 1 && (
          <div className="mt-6">
            <label className="block text-gray-700">Coin Type</label>
            <select
              value={coinType}
              onChange={(e) => setCoinType(e.target.value)}
              className="mt-1 w-full border p-3"
            >
              <option value="">Select coin type</option>
              <option value="BTC">Bitcoin (BTC)</option>
              <option value="ETH">Ethereum (ETH)</option>
              <option value="USDT">Tether (USDT)</option>
            </select>
            {coinType && feeInfo && (
              <p className="mt-2 text-red-500">
                Min: ${feeInfo.min}, Max: ${feeInfo.max}, Fee: ${additionalFee}
              </p>
            )}
            <label className="mt-4 block text-gray-700">Amount (USD)</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="mt-1 w-full border p-3"
            />
            <button
              onClick={() => setStep(2)}
              className="mt-6 w-full bg-green-500 p-3 text-white"
            >
              Buy Crypto
            </button>
          </div>
        )}

        {step === 2 && (
          <div className="mt-6">
            <h2 className="text-lg font-semibold">Transaction Details</h2>
            <label className="mt-4 block">Network</label>
            <input
              type="text"
              value={networks[coinType] || ""}
              readOnly
              className="w-full border bg-gray-200 p-3"
            />
            <label className="mt-4 block">Wallet Address</label>
            <input
              type="text"
              value={walletAddress}
              onChange={(e) => setWalletAddress(e.target.value)}
              className="w-full border p-3"
            />
            <label className="mt-4 block">Wallet Expiry</label>
            <select
              value={walletExpiry}
              onChange={(e) => setWalletExpiry(e.target.value)}
              className="w-full border p-3"
            >
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
            <div className="mt-6 flex justify-between">
              <button
                onClick={() => setStep(1)}
                className="bg-gray-400 px-4 py-2 text-white"
              >
                Back
              </button>
              <button
                onClick={() => setStep(3)}
                className="bg-green-500 px-4 py-2 text-white"
              >
                Next
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="mt-6 text-center">
            <h1 className="text-2xl font-bold text-orange-500">
              ₦{nairaEquivalent.toLocaleString()}
            </h1>
            <p>Bank Transfer</p>
            <p>Pay the amount to the details below:</p>
            <div className="mt-4 rounded border p-4 text-left">
              <p>
                <strong>Bank Name:</strong> Moniepoint
              </p>
              <p>
                <strong>Account Number:</strong> 8260660445
              </p>
              <p>
                <strong>Account Name:</strong> VELOX DAWAN
              </p>
            </div>
            <div className="mt-6 flex justify-between">
              <button
                onClick={() => setStep(2)}
                className="bg-gray-400 px-4 py-2 text-white"
              >
                Back
              </button>
              <button
                onClick={() => setStep(4)}
                className="bg-green-500 px-4 py-2 text-white"
              >
                Next
              </button>
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="mt-6 text-center">
            <h2 className="text-lg font-semibold">Upload Payment Receipt</h2>
            <input
              type="file"
              onChange={(e) => setReceipt(e.target.files?.[0] || null)}
              className="mt-4 w-full border p-3"
            />
            <div className="mt-6 flex justify-between">
              <button
                onClick={() => setStep(3)}
                className="bg-gray-400 px-4 py-2 text-white"
              >
                Back
              </button>
              <button
                onClick={() => alert("Transaction Completed!")}
                disabled={!receipt}
                className={`px-4 py-2 text-white ${receipt ? "bg-green-500" : "cursor-not-allowed bg-gray-300"}`}
              >
                Submit
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TransactionForm;
