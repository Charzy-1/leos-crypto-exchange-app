"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import {
  DefaultValues,
  FieldValues,
  Path,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { z, ZodType } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import ROUTES from "@/constants/routes";
import { toast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

interface AuthFormProps<T extends FieldValues> {
  schema: ZodType<T>;
  defaultValues: T;
  onSubmit: (data: T) => Promise<{ success: boolean; error?: string }>;
  formType: "SIGN_IN" | "SIGN_UP";
}

const AuthForm = <T extends FieldValues>({
  schema,
  defaultValues,
  formType,
  onSubmit,
}: AuthFormProps<T>) => {
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: defaultValues as DefaultValues<T>,
  });

  const router = useRouter();
  const isSignIn = formType === "SIGN_IN";

  // Initialize state to track visibility of password fields
  const [showPasswords, setShowPasswords] = useState(() => {
    const initialShowPasswords: Record<string, boolean> = {};
    Object.keys(defaultValues).forEach((field) => {
      if (field.toLowerCase().includes("password")) {
        initialShowPasswords[field] = false; // Hidden by default
      }
    });
    return initialShowPasswords;
  });

  // Function to toggle password visibility for a specific field
  const toggleShowPassword = (fieldName: string) => {
    setShowPasswords((prev) => ({
      ...prev,
      [fieldName]: !prev[fieldName],
    }));
  };

  const handleSubmit: SubmitHandler<T> = async (data) => {
    const result = await onSubmit(data);

    if (result.success) {
      toast({
        title: "Success",
        description: isSignIn
          ? "You have successfully signed in."
          : "You have successfully signed up.",
      });
      router.push("/dashboard");
    } else {
      toast({
        title: `Error ${isSignIn ? "signing in" : "signing up"}`,
        description: result.error ?? "An error occurred.",
        variant: "destructive",
      });
    }
  };

  const buttonText = isSignIn ? "Sign In" : "Sign Up";

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="mt-10 space-y-6"
      >
        {Object.keys(defaultValues).map((field) => (
          <FormField
            key={field}
            control={form.control}
            name={field as Path<T>}
            render={({ field }) => {
              const isPasswordField = field.name
                .toLowerCase()
                .includes("password");
              return (
                <FormItem className="flex w-full flex-col gap-2.5">
                  <FormLabel className="paragraph-medium text-dark400_light700">
                    {field.name === "email"
                      ? "Email Address"
                      : field.name.charAt(0).toUpperCase() +
                        field.name.slice(1)}
                  </FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        required
                        type={
                          isPasswordField && !showPasswords[field.name]
                            ? "password"
                            : "text"
                        }
                        {...field}
                        className="paragraph-regular background-light900_dark300 light-border-2 text-dark300_light700 no-focus min-h-12 rounded-1.5 border"
                      />
                      {isPasswordField && (
                        <button
                          type="button"
                          className="absolute right-3 top-1/2 transform -translate-y-1/2"
                          onClick={() => toggleShowPassword(field.name)}
                        >
                          <FontAwesomeIcon
                            icon={
                              showPasswords[field.name] ? faEyeSlash : faEye
                            }
                            className="text-gray-600"
                          />
                        </button>
                      )}
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
        ))}

        <Button
          disabled={form.formState.isSubmitting}
          className="primary-gradient paragraph-medium min-h-12 w-full rounded-2 px-4 py-3 font-inter !text-light-900"
        >
          {form.formState.isSubmitting
            ? isSignIn
              ? "Signing In..."
              : "Signing Up..."
            : buttonText}
        </Button>

        {isSignIn ? (
          <p>
            Not registered yet?{" "}
            <Link
              href={ROUTES.SIGN_UP}
              className="paragraph-semibold primary-text-gradient"
            >
              Sign up
            </Link>
          </p>
        ) : (
          <p>
            Already registered?{" "}
            <Link
              href={ROUTES.SIGN_IN}
              className="paragraph-semibold primary-text-gradient"
            >
              Sign in
            </Link>
          </p>
        )}
      </form>
    </Form>
  );
};

export default AuthForm;
