import { Button } from "@/components/ui/button";
import LoginForm from "./_components/LoginForm";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const SignupPage = () => {
  return (
    <div className="w-screen h-screen flex flex-col items-start justify-center gap-2 ">
      <div className="flex items-center justify-start w-full pt-4 pl-4 ">
        <Link href="/">
          <Button variant="link" size="lg">
            <div className="flex items-center justify-center gap-2">
              <ArrowLeft className="h-5 w-5" />
              <h1 className="">Back</h1>
            </div>
          </Button>
        </Link>
      </div>
      <div className="flex items-center justify-center w-full h-full ">
        <LoginForm />
      </div>
    </div>
  );
};

export default SignupPage;
