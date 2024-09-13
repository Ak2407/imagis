import { Button } from "@/components/ui/button";
import LoginForm from "./_components/LoginForm";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const runtime = "edge";

const SignupPage = () => {
  return (
    <div className="relative w-screen h-screen flex items-center justify-center ">
      <Link href="/" className="absolute top-10 left-10">
        <Button variant="link" size="lg">
          <div className="flex items-center justify-center gap-2">
            <ArrowLeft className="h-5 w-5" />
            <h1 className="">Back</h1>
          </div>
        </Button>
      </Link>
      <LoginForm />
    </div>
  );
};

export default SignupPage;
