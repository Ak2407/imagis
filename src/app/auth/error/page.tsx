"use client";
import { Button } from "@/components/ui/button";
import { Ban } from "lucide-react";
import { useSearchParams, useRouter } from "next/navigation";

const AuthErrorPage = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const error = searchParams.get("error");

  let errorMessage = "An unknown error occurred";
  if (error === "OAuthAccountNotLinked") {
    errorMessage =
      "You tried to sign in with a different provider. Please use the same account you originally signed in with.";
  }

  return (
    <div className="flex flex-col items-center justify-center gap-10">
      <div className="flex items-center justify-center ">
        <Ban className="w-36 h-36 text-destructive " />
      </div>
      <div className="flex flex-col items-center justify-center gap-2">
        <h1 className="text-5xl font-semibold">Authtentication Error</h1>
        <p className="text-2xl text-destructive/90 font-light">
          {errorMessage}
        </p>

        <Button
          variant="outline"
          size="lg"
          onClick={() => router.push("/auth/signup")}
        >
          Try again
        </Button>
      </div>
    </div>
  );
};

export default AuthErrorPage;
