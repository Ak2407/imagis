"use server";

import { signIn } from "@/auth";

import * as z from "zod";
import { SignInSchema } from "@/schemas";

export const resendSignIn = async (values: z.infer<typeof SignInSchema>) => {
  const validatedFields = SignInSchema.safeParse(values);

  if (!validatedFields.success) {
    throw new Error("Invalid fields");
  }
  const res = await signIn("resend", {
    email: values.email,
    redirect: false,
  });
  return res;

  // return new Promise((resolve) => {
  //   setTimeout(() => {
  //     console.log(values);
  //     resolve("resend");
  //   }, 5000);
  // });
};

export const googleSignIn = async () => {
  const res = await signIn("google");
  return res;
  // return new Promise((resolve) => {
  //   setTimeout(() => {
  //     resolve("google");
  //   }, 5000);
  // });
};

export const githubSignIn = async () => {
  const res = await signIn("github");
  return res;

  // return new Promise((resolve) => {
  //   setTimeout(() => {
  //     resolve("github");
  //   }, 5000);
  // });
};
