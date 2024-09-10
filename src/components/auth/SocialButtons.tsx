import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { signIn } from "@/auth";

export default function SocialButtons() {
  return (
    <div className="flex flex-row items-center justify-center gap-x-4 w-full">
      <form
        className="w-full"
        action={async () => {
          "use server";
          await signIn("google");
        }}
      >
        <Button
          type="submit"
          variant="outline"
          size="lg"
          className="rounded-[12px] w-full drop-shadow-sm shadow-sky-200 blur-0 py-6 border-gray-100"
        >
          <FcGoogle className="h-7 w-7" />
        </Button>
      </form>
      <form
        className="w-full"
        action={async () => {
          "use server";
          await signIn("github");
        }}
      >
        <Button
          variant="outline"
          type="submit"
          size="lg"
          className="rounded-[12px] w-full drop-shadow-sm shadow-sky-200 blur-0 py-6 border-gray-100"
        >
          <FaGithub className="h-7 w-7" />
        </Button>
      </form>
    </div>
  );
}
