"use client";

import { useEffect } from "react";

// TypeScript fix for window.Tawk_API
declare global {
  interface Window {
    Tawk_API: {
      maximize: () => void;
      setAttributes: (
        attrs: Record<string, any>,
        callback: (error: any) => void
      ) => void;
    };
  }
}

const Buy = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://embed.tawk.to/67f102dac8c4af19095d144b/1io2n6a18";
    script.async = true;
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleBuyClick = () => {
    if (typeof window !== "undefined" && window.Tawk_API) {
      window.Tawk_API.maximize();
      window.Tawk_API.setAttributes(
        {
          action: "User clicked Buy Crypto",
        },
        (error) => {
          if (error) console.error("Tawk.to Error:", error);
        }
      );
    }
  };

  return (
    <div className="flex flex-col h-screen items-center justify-center bg-gray-100 dark:bg-gray-800">
      <h3 className="heading mb-4">Thanks for buying from us</h3>
      <p className="text-center">
        Kindly click on the buy button to let us know what you wish to buy
      </p>
      <button
        onClick={handleBuyClick}
        className="mt-5 rounded-lg bg-green-600 px-6 py-3 text-white shadow-lg hover:bg-green-700"
      >
        Buy Crypto
      </button>
    </div>
  );
};

export default Buy;
