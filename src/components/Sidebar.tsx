"use client";

import { CircleUser, CompassIcon, Globe, Key } from "lucide-react";
import Logo from "./Logo";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

const Sidebar = () => {
  const router = useRouter();

  const onClick = () => {
    router.push("/auth/signup");
  };
  return (
    <div className="flex flex-col items-start justify-between h-screen sticky top-0 p-6 pl-4 min-w-[200px] ">
      <div className="flex flex-col gap-8 w-full">
        <Logo />
        <div className="flex flex-col gap-2 w-full">
          <Button variant="primary" className="py-[19px] px-2">
            <CompassIcon className="w-[22px] h-[22px]" />
            <h1 className="font-medium text-sm">Explore</h1>
          </Button>
          <h1>Survey</h1>
        </div>
      </div>
      <div className="flex flex-col gap-4 w-full">
        <div className="flex flex-col gap-2">
          <h1>help</h1>
          <h1>Updates</h1>
          <h1>Light mode</h1>
        </div>

        <div className="flex flex-col gap-2 w-full">
          <Button
            variant="primary"
            className="py-[19px] px-2 gap-6 bg-gray-200/70 border-none shadow-none text-gray-700 hover:bg-gray-300 "
            onClick={onClick}
          >
            <CircleUser className="w-[20px] h-[20px]" />
            <h1 className="font-semibold text-sm ">Log In</h1>
          </Button>
          <Button
            variant="primary"
            className="py-[19px] px-2 gap-6"
            onClick={onClick}
          >
            <Globe className="w-[20px] h-[20px]" />
            <h1 className="font-semibold text-sm">Sign Up</h1>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
