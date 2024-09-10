import { Mail } from "lucide-react";
import { Input } from "../ui/input";
import { signIn } from "@/auth";

const EmailForm = () => {
  return (
    <div>
      <form
        className="flex flex-col gap-4 w-full"
        action={async (formData) => {
          "use server";
          await signIn("resend", formData);
        }}
      >
        <div className="w-full relative">
          <Mail className="h-5 w-5 absolute top-1/2 left-4 -translate-y-1/2 text-gray-400" />
          <Input
            type="text"
            name="email"
            placeholder="Email"
            className="pl-11 ring-0  focus-visible:ring-offset-0 focus-visible:ring-0 text-md py-6 rounded-[12px] bg-gray-100 text-slate-700"
          />
        </div>
      </form>
    </div>
  );
};

export default EmailForm;
