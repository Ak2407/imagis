"use client";
import axios from "axios";
import { Session } from "next-auth";

export const pay = async (session: Session) => {
  try {
    const payload = { email: session?.user?.email };
    console.log("payload", payload);
    const response = await axios.post("/api/checkout_sessions", payload);
    const data = response.data;
    console.log("url", data.url);
    window.location.replace(data.url);
  } catch (error: any) {
    console.error(error.message);
  }
};
