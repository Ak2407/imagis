"use client";

import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { useTransition } from "react";
import { githubSignIn, googleSignIn } from "../../../../../actions";

function GoogleButton({
  onClick,
  disabled,
}: {
  onClick: () => void;
  disabled: boolean;
}) {
  return (
    <Button
      type="button"
      variant="outline"
      size="lg"
      className="rounded-[12px] w-full drop-shadow-sm shadow-sky-200 blur-0 py-6 border-gray-100"
      onClick={onClick}
      disabled={disabled}
    >
      <FcGoogle className="h-7 w-7" />
    </Button>
  );
}

function GithubButton({
  onClick,
  disabled,
}: {
  onClick: () => void;
  disabled: boolean;
}) {
  return (
    <Button
      type="button"
      variant="outline"
      size="lg"
      className="rounded-[12px] w-full drop-shadow-sm shadow-sky-200 blur-0 py-6 border-gray-100"
      onClick={onClick}
      disabled={disabled}
    >
      <FaGithub className="h-7 w-7" />
    </Button>
  );
}

export default function SocialButtons() {
  const [isPending, startTransition] = useTransition();

  const handleGoogleSignIn = () => {
    startTransition(async () => {
      try {
        await googleSignIn();
      } catch (error) {
        console.error("Error signing in with Google:", error);
      }
    });
  };

  const handleGithubSignIn = () => {
    startTransition(async () => {
      try {
        await githubSignIn();
      } catch (error) {
        // console.error("Error signing in with GitHub:", error);
      }
    });
  };

  return (
    <div className="flex flex-row items-center justify-center gap-x-4 w-full">
      <div className="w-full">
        <GoogleButton onClick={handleGoogleSignIn} disabled={isPending} />
      </div>
      <div className="w-full">
        <GithubButton onClick={handleGithubSignIn} disabled={isPending} />
      </div>
    </div>
  );
}
