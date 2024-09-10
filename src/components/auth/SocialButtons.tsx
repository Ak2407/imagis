import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

export default function SocialButtons() {
  return (
    <div className="flex flex-row items-center justify-center gap-x-4 w-full">
      <Button
        variant="outline"
        size="lg"
        className="rounded-[12px] w-full drop-shadow-sm shadow-sky-200 blur-0 py-6 border-gray-100"
      >
        <FcGoogle className="h-7 w-7" />
      </Button>
      <Button
        variant="outline"
        size="lg"
        className="rounded-[12px] w-full drop-shadow-sm shadow-sky-200 blur-0 py-6 border-gray-100"
      >
        <FaGithub className="h-7 w-7" />
      </Button>
    </div>
  );
}
