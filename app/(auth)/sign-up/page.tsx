"use client";

import React from "react";

import AuthForm from "@/components/forms/AuthForm";
import { SignUpSchema } from "@/lib/validations";
import { signUp } from "@/lib/actions/auth";

const SignUp = () => {
  return (
    <AuthForm
      formType="SIGN_UP"
      schema={SignUpSchema}
      defaultValues={{
        email: "",
        password: "",
        name: "",
        userName: "",
      }}
      onSubmit={signUp}
    />
  );
};

export default SignUp;
