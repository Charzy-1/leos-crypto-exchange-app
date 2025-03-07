"use client";

import React, { useState } from "react";

import { faqData } from "@/constants";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mx-auto my-6 rounded-lg bg-green-500 p-8 shadow-lg dark:bg-gray-800">
      <h2 className="heading mb-4 text-2xl font-bold text-white">
        Frequently Asked Question{" "}
        <span className="text-yellow-200 dark:text-green-500">(FAQ)</span>
      </h2>
      {faqData.map((item, index) => (
        <div key={index} className="mb-4">
          <div
            className="flex cursor-pointer items-center rounded-lg bg-white p-4 shadow-md dark:bg-gray-700"
            onClick={() => toggleAnswer(index)}
          >
            <div className="flex size-8 items-center justify-center rounded-full bg-green-500 text-white shadow-md dark:bg-gray-600">
              {openIndex === index ? "-" : "+"}
            </div>
            <p className="ml-4 text-lg font-semibold text-green-500 dark:text-white">
              {item.question}
            </p>
          </div>
          {openIndex === index && (
            <p className="mt-2 text-white dark:text-gray-300">{item.answer}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default Faq;
