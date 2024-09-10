"use client";

import { useState } from "react";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import { Input } from "../ui/input";

const EmailForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      <form className="flex flex-col gap-4 w-full">
        <div className="w-full relative">
          <Mail className="h-5 w-5 absolute top-1/2 left-4 -translate-y-1/2 text-gray-400" />
          <Input
            placeholder="Email"
            className="pl-11 ring-0  focus-visible:ring-offset-0 focus-visible:ring-0 text-md py-6 rounded-[12px] bg-gray-100 text-slate-700"
          />
        </div>
        {/* <div className="w-full relative"> */}
        {/*   <Lock className="h-5 w-5 absolute top-1/2 left-4 -translate-y-1/2 text-gray-400" /> */}
        {/*   <Input */}
        {/*     type={showPassword ? "text" : "password"} */}
        {/*     placeholder="Password" */}
        {/*     className="pl-11 pr-4 ring-0  focus-visible:ring-offset-0 focus-visible:ring-0 text-md py-6 rounded-[12px] bg-gray-100 text-slate-700" */}
        {/*   /> */}
        {/*   <button */}
        {/*     type="button" */}
        {/*     onClick={() => setShowPassword(!showPassword)} */}
        {/*     className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600" */}
        {/*   > */}
        {/*     {showPassword ? ( */}
        {/*       <EyeOff className="h-5 w-5" /> */}
        {/*     ) : ( */}
        {/*       <Eye className="h-5 w-5" /> */}
        {/*     )} */}
        {/*   </button> */}
        {/* </div> */}
      </form>
    </div>
  );
};

export default EmailForm;
