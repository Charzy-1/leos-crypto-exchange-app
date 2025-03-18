"use client";

import React, { useState } from "react";
import AuthForm from "@/components/forms/AuthForm";
import { SignInSchema } from "@/lib/validations";
import { signInWithCredentials } from "@/lib/actions/auth";
import Link from "next/link";

const SignIn = () => {
  const [error, setError] = useState<string | null>(null);

  // Make sure to return the proper object with success/error
  const handleSignIn = async (data: { email: string; password: string }) => {
    const { email, password } = data;

    const result = await signInWithCredentials({ email, password });

    if (!result.success) {
      setError(result.error);
      return { success: false, error: result.error }; // Return the error object
    } else {
      setError(null); // Clear error if sign-in is successful
      return { success: true }; // Return success
    }
  };

  return (
    <div>
      <AuthForm
        formType="SIGN_IN"
        schema={SignInSchema}
        defaultValues={{ email: "", password: "" }}
        onSubmit={handleSignIn}
      />
      <p>
  <Link href="/forgot-password" className="paragraph-semibold primary-text-gradient">
    Forgot Password?
  </Link>
</p>
      {error && <p style={{ color: "red" }}>{error}</p>}{" "}
      {/* Display the error message */}
    </div>
  );
};

export default SignIn;
