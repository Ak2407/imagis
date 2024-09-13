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
};
