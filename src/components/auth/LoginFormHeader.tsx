import { LogIn } from "lucide-react";

const LoginFormHeader = () => {
  return (
    <div class="pt-12 pb-0 w-full flex items-center justify-center bg-gradient-to-b from-cyan-100 h-full rounded-[30px] ">
      <div className="bg-white rounded-[25px] p-4 drop-shadow-lg shadow-cyan-200 shadow-sm blur-0 w-fit">
        <LogIn className="h-10 w-10" />
      </div>
    </div>
  );
};

export default LoginFormHeader;
