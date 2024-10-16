import * as z from "zod";

export const SignInSchema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email address"),
});
