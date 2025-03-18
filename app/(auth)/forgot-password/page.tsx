// app/forgot-password/page.tsx
"use client";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

interface ForgotPasswordFormInputs {
  email: string;
}

const ForgotPassword = () => {
  const { register, handleSubmit } = useForm<ForgotPasswordFormInputs>();
  const [message, setMessage] = useState("");

  const onSubmit: SubmitHandler<ForgotPasswordFormInputs> = async (data) => {
    const response = await fetch("/api/auth/forgot-password", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    const result = await response.json();
    setMessage(result.message);
  };

  return (
    <div className="flex items-center justify-center min-h-screen" style={{ backgroundColor: '#0F1117' }}>
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-semibold text-center text-black mb-6">
          Forgot Password
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-black text-sm font-medium mb-2"
            >
              Email Address
            </label>
            <input
              id="email"
              type="email"
              {...register("email", { required: "Email is required" })}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-300"
          >
            Reset Password
          </button>
        </form>
        {message && (
          <p className="mt-4 text-center text-sm text-gray-700">{message}</p>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;