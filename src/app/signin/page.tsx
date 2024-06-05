"use client";

import { useState, useEffect } from "react";
import { signIn } from "next-auth/react";
import { Formik, Field, Form, FormikHelpers } from "formik";
import Link from "next/link";
import Image from "next/image";
import IconArrowLeft from "@/assets/icons/icon-arrow-left.svg";
import * as Yup from "yup";
import { redirect } from "next/navigation";

interface FormValues {
  email: string;
  password: string;
}

export default function SigninPage() {
  const [error, setError] = useState<string | null>(null);
  const [isLoggingIn, setIsLoggingIn] = useState<boolean>(false);

  const schemaValidation = Yup.object().shape({
    email: Yup.string().email().required("Email is required"),
    password: Yup.string().min(8).required("Password is required"),
  });

  useEffect(() => {
    if (isLoggingIn) {
      redirect("/");
    }
  }, [isLoggingIn]);

  return (
    <main className="mt-12 mb-24 max-w-screen-xl lg:mx-auto">
      <section className="grid grid-cols-[48px_1fr_48px] items-center mx-6 mb-8 lg:mb-16">
        <Link
          href="/"
          className="p-3 bg-pearl rounded-full cursor-pointer block w-fit"
        >
          <Image src={IconArrowLeft} alt="" width={24} height={24} />
        </Link>
        <h1 className="block text-center text-2xl text-primary-100 font-bold">
          Sign In
        </h1>
      </section>

      <Formik
        validationSchema={schemaValidation}
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={async (
          values: FormValues,
          { setSubmitting }: FormikHelpers<FormValues>
        ) => {
          setError(null);

          const response = await signIn("credentials", {
            redirect: false,
            email: values.email,
            password: values.password,
            callbackUrl: "/",
          });

          if (response?.error) {
            return setError(response.error);
          }

          if (!response?.error) {
            setIsLoggingIn(true);
          }

          setSubmitting(false);
        }}
      >
        {({ errors, touched }) => (
          <Form className="mx-6 grid grid-cols-1 gap-y-3">
            <div>
              <Field
                type="email"
                name="email"
                placeholder="Email"
                className="bg-dark-200 py-4 w-full px-3 rounded text-white/50 placeholder:text-white/50"
              />
              {errors.email && touched.email && (
                <p className="text-red-500 first-letter:uppercase text-sm mt-1">
                  {errors.email}
                </p>
              )}
            </div>

            <div>
              <Field
                type="password"
                name="password"
                placeholder="Password"
                className="bg-dark-200 w-full py-4 px-3 rounded text-white/50 placeholder:text-white/50"
              />
              {errors.password && touched.password && (
                <p className="text-red-500 first-letter:uppercase text-sm mt-1">
                  {errors.password}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="bg-primary rounded-full py-3 active:scale-95 transition-transform ease-linear duration-200 mt-8"
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>

      {error && <p className="text-red-500 text-center mt-4 px-4">{error}</p>}

      <section className="mt-8 text-center">
        <Link href="/forgot-password" className="text-primary">
          Forgot password?
        </Link>
      </section>

      <section className="mt-8 text-center">
        <p>
          Don&apos;t have an account?{" "}
          <Link href="/signup" className="text-primary font-bold">
            Sign up
          </Link>
        </p>
      </section>
    </main>
  );
}
