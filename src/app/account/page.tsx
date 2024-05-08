"use client";

import { Formik, Field, Form, FormikHelpers } from "formik";
import Link from "next/link";
import Image from "next/image";
import IconArrowLeft from "@/assets/icons/icon-arrow-left.svg";
import { createUser } from "@/services";
import * as Yup from "yup";

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
  passwordConfirmation: string;
}

export default function Account() {
  const schemaValidation = Yup.object().shape({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    email: Yup.string().email().required("Email is required"),
    phone: Yup.string().min(10).max(12).required("Phone is required"),
    password: Yup.string().min(8).required("Password is required"),
    passwordConfirmation: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required("Password Confirmation is required"),
  });

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
          Create Account
        </h1>
      </section>

      <Formik
        validationSchema={schemaValidation}
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          password: "",
          passwordConfirmation: "",
        }}
        onSubmit={(
          values: FormValues,
          { setSubmitting }: FormikHelpers<FormValues>
        ) => {
          console.log(values);
          createUser(values);
          setSubmitting(false);
        }}
      >
        {({ errors, touched }) => (
          <Form className="mx-6 grid grid-cols-1 gap-y-3">
            <div>
              <Field
                id="firstName"
                name="firstName"
                placeholder="First Name"
                className="bg-dark-200 w-full py-4 px-3 rounded text-white/50 placeholder:text-white/50"
              />
              {errors.firstName && touched.firstName && (
                <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
              )}
            </div>

            <div>
              <Field
                id="lastName"
                type="text"
                name="lastName"
                placeholder="Last Name"
                className="bg-dark-200 w-full py-4 px-3 rounded text-white/50 placeholder:text-white/50"
              />
              {errors.lastName && touched.lastName && (
                <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
              )}
            </div>

            <div>
              <Field
                type="email"
                name="email"
                placeholder="Email"
                className="bg-dark-200 py-4 w-full px-3 rounded text-white/50 placeholder:text-white/50"
              />
              {errors.email && touched.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <Field
                type="tel"
                name="phone"
                placeholder="Phone"
                className="bg-dark-200 py-4 w-full px-3 rounded text-white/50 placeholder:text-white/50"
              />
              {errors.phone && touched.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
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
                <p className="text-red-500 text-sm mt-1">{errors.password}</p>
              )}
            </div>

            <div>
              <Field
                name="passwordConfirmation"
                placeholder="Confirm Password"
                className="bg-dark-200 py-4 w-full px-3 rounded text-white/50 placeholder:text-white/50"
              />
              {errors.passwordConfirmation && touched.passwordConfirmation && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.passwordConfirmation}
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
    </main>
  );
}
