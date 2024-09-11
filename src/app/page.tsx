import { Button } from "@/components/ui/button";
import Link from "next/link";
import { auth } from "@/auth";

export default async function Home() {
  const session = await auth();

  return (
    <div className="h-screen w-screen flex items-center justify-center gap-4">
      <h1>Landing Page</h1>
      {session?.user?.email ? (
        <p>You are logged in as {session?.user?.name}</p>
      ) : (
        <Link href="/auth/signup" passHref>
          <Button variant="outline" type="submit">
            Log In
          </Button>
        </Link>
      )}
    </div>
  );
}
