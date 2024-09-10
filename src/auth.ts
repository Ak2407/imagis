import NextAuth from "next-auth";

import Google from "next-auth/providers/Google";
import GitHub from "next-auth/providers/github";
import Resend from "next-auth/providers/resend";

import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { db } from "./db";
import { accounts, sessions, users, verificationTokens } from "@/db/schema";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: DrizzleAdapter(db, {
    usersTable: users,
    accountsTable: accounts,
    sessionsTable: sessions,
    verificationTokensTable: verificationTokens,
  }),

  providers: [
    Google,
    GitHub,
    Resend({
      from: "akshit@akshit.app",
    }),
  ],
});
