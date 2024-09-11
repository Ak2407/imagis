"use client";

import { signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";

export default function Dashboard() {
  return (
    <div className="h-screen w-screen flex items-center justify-center gap-4">
      <h1>Dashboard Page</h1>

      <Button variant="outline" type="submit" onClick={() => signOut()}>
        Log Out
      </Button>
    </div>
  );
}
