import { openai } from "@ai-sdk/openai";
import { generateText } from "ai";
import { NextRequest, NextResponse } from "next/server";

const model = openai("gpt-4o-mini");

export const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

// Handle preflight OPTIONS requests
export async function OPTIONS() {
  return NextResponse.json({}, { headers: corsHeaders });
}

interface ReplyRequest {
  tweet: string;
}

export async function POST(request: NextRequest) {
  const { tweet }: ReplyRequest = await request.json();

  const { text } = await generateText({
    model,
    prompt: `You are a auto reply bot for twitter for developers who are trying to connect with their audience and oterh people and senior developers. You should reply to their tweets in a professional manner to increase your networking. Do all this in not more than 200 characters. Also use emojis if necessary and don't overdo it. Also don't use hashtags ever. Also don't make it too cringy, keep professional but talk like a normal human only not too overdramatic. Also use 4-5 words reply wherever needed not everytime 200 characters is needed 

Also if tweet is in hinglish then reply in hinglish only. Also if the tweet is like a joke then reply in a funny way.
. Here is the tweet you have to reply to according to the instructions i told you : ${tweet} `,
  });

  return NextResponse.json(text, { headers: corsHeaders });
}
