"use client";

import { CircleUser, Globe } from "lucide-react";
import Logo from "./Logo";
import { Button } from "./ui/button";
import * as LucideIcons from "lucide-react";
import { useRouter } from "next/navigation";
import { sideBarItems, socialLinks } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import UserButton from "./userButton";
import { Skeleton } from "./ui/skeleton";

const Sidebar = () => {
  const { data: session, status } = useSession();

  const [activeItem, setActiveItem] = useState<string>("/");
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    setActiveItem(pathname);
  }, [pathname]);

  const DynamicIcon = ({ iconName }: { iconName: string }) => {
    const IconComponent = (LucideIcons as any)[iconName] as
      | React.ComponentType<any>
      | undefined;

    if (IconComponent) {
      return <IconComponent className="h-[22px] w-[22px]" />;
    }

    return null;
  };

  const renderAuthButtons = () => {
    if (status === "loading") {
      return (
        <div className="flex flex-col justify-center items-center xl:items-start w-full gap-2">
          <Skeleton className="h-6 w-[50%] hidden xl:block" />
          <Skeleton className="h-6 w-full hidden xl:block" />
          <Skeleton className="h-10 w-10 rounded-full xl:hidden" />
        </div>
      );
    }

    if (session) {
      return (
        <div className="flex flex-row justify-between items-center pt-4 border-t border-gray-100 pb-2 w-full">
          <div className="flex flex-row gap-4 items-center">
            <UserButton session={session} />
          </div>
        </div>
      );
    }

    return (
      <>
        <Button
          variant="primary"
          className="py-[19px] px-2 gap-6 bg-gray-200/70 border-none shadow-none text-gray-700 hover:bg-gray-300 w-full"
          onClick={onClick}
        >
          <CircleUser className="w-[20px] h-[20px]" />
          <h1 className="font-semibold text-sm hidden xl:block">Log In</h1>
        </Button>
        <Button
          variant="primary"
          className="py-[19px] px-2 gap-6 w-full"
          onClick={onClick}
        >
          <Globe className="w-[20px] h-[20px]" />
          <h1 className="font-semibold text-sm hidden xl:block">Sign Up</h1>
        </Button>
      </>
    );
  };

  const onClick = () => {
    router.push("/auth/signup");
  };
  return (
    <div className="hidden sm:flex flex-col items-center xl:items-start justify-between h-screen sticky top-0 py-6 pr-4  xl:min-w-[200px] border-r xl:border-none  ">
      <div className="flex flex-col items-center gap-8 w-full  ">
        <div className="pl-2 w-full">
          <Logo />
        </div>
        <div className="flex flex-col  items-center xl:items-start gap-2 xl:w-full ">
          {sideBarItems.map((item, index) => {
            return (
              <Link href={item.href} key={index} className="w-full">
                <button
                  className={`flex items-center justify-start gap-2 w-full  ${activeItem === item.href ? "bg-red-50 text-red-500 border border-red-200 hover:bg-red-100 " : "hover:bg-gray-200 hover:border hover:border-gray-300   "}  rounded-full  px-2 py-[8px] border border-transparent w-fit transition-all duration-200 ease-in-out xl:w-full`}
                >
                  <DynamicIcon iconName={item.icon} />
                  <h1 className="font-medium text-sm hidden xl:block">
                    {item.name}
                  </h1>
                </button>
              </Link>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col xl:w-full ">
        <div className="flex flex-col items-center justify-center gap-2 ">
          <div className="flex flex-col gap-4 w-full items-center xl:items-start justify-center ">
            {socialLinks.map((item, index) => {
              return (
                <a
                  href={item.href}
                  key={index}
                  className={`flex flex-row gap-2 items-center justify-center hover:opacity-50 xl:pl-4 `}
                  target="_blank"
                >
                  <DynamicIcon iconName={item.icon} />
                  <h1 className="hidden xl:block">{item.name}</h1>
                  <LucideIcons.ExternalLink className="w-3 h-3 text-gray-500 hidden xl:block" />
                </a>
              );
            })}
          </div>
          {renderAuthButtons()}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
