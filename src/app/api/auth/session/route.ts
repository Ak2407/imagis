import { auth } from "@/auth";
import { NextRequest, NextResponse } from "next/server";

export const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
  "Access-Control-Allow-Credentials": "true",
};

export async function OPTIONS() {
  return NextResponse.json({}, { headers: corsHeaders });
}

export async function GET(req: NextRequest) {
  try {
    const session = await auth().then((session) => {
      return session;
    });

    return NextResponse.json(session, { headers: corsHeaders });
  } catch (error) {
    console.error("Error in fetching session:", error);
    return NextResponse.json(
      { error: "Failed to retrieve session" },
      { headers: corsHeaders },
    );
  }
}
