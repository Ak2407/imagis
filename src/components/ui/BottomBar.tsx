"use client";

import * as LucideIcons from "lucide-react";
import { sideBarItems, socialLinks } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { Button } from "./button";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";

const BottomBar = () => {
  const [activeItem, setActiveItem] = useState<string>("/");
  const pathname = usePathname();

  useEffect(() => {
    setActiveItem(pathname);
  }, [pathname]);

  const DynamicIcon = ({ iconName }: { iconName: string }) => {
    const IconComponent = (LucideIcons as any)[iconName] as
      | React.ComponentType<any>
      | undefined;

    if (IconComponent) {
      return <IconComponent className="h-[25px] w-[25px]" />;
    }

    return null;
  };

  return (
    <div className="fixed bottom-0 h-[80px] w-full flex items-center justify-center bg-gradient-to-b from-white bg-white/90 sm:hidden z-[40]">
      <div className="flex flex-row  items-center justify-evenly  gap-10 w-full ">
        <BottomBarMenu />
        {sideBarItems.map((item, index) => {
          return (
            <Link href={item.href} key={index} className="">
              <button
                className={`flex flex-col items-center justify-start gap-2 w-full  ${activeItem === item.href ? " text-red-500  " : ""} hover:opacity-50  rounded-full  px-2 py-[8px] border border-transparent w-fit transition-all duration-200 ease-in-out xl:w-full`}
              >
                <DynamicIcon iconName={item.icon} />
                <h1 className={`text-xs `}>{item.name}</h1>
              </button>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default BottomBar;

const BottomBarMenu = () => {
  const { data: session } = useSession();

  return (
    <Drawer>
      <DrawerTrigger
        className={`flex flex-col items-center justify-start gap-2 hover:opacity-50  rounded-full  px-2 py-[8px] border border-transparent w-fit transition-all duration-200 ease-in-out xl:w-full`}
      >
        <LucideIcons.Menu className="h-[25px] w-[25px]" />
        <h1 className={`text-xs `}>Menu</h1>
      </DrawerTrigger>
      <DrawerContent>
        <div className="flex flex-col gap-6">
          <Link
            href="/"
            className="w-full flex items-center justify-center p-4"
          >
            <h1 className="text-4xl">Imagis</h1>
          </Link>
          {session ? (
            <div className="w-full flex flex-col gap-10 items-center justify-center">
              <div className="w-full flex flex-row items-center justify-between px-2 ">
                <div className="flex flex-row items-center justify-center gap-4">
                  <Avatar className="h-10 w-10 xl:hidden ">
                    <AvatarImage
                      src={session?.user?.image ?? "/placeholder-avatar.png"}
                    />
                    <AvatarFallback>{session?.user?.name?.[0]}</AvatarFallback>
                  </Avatar>

                  <div className="flex flex-col items-start justify-center ">
                    <h1 className="text-xl font-bold">{session?.user?.name}</h1>
                    <p className="italic">{session?.user?.email}</p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  className="text-red-500 "
                  onClick={() => {
                    signOut();
                  }}
                >
                  <LucideIcons.LogOut className="w-[25px] h-[25px] " />
                </Button>
              </div>
              <div className="flex flex-row w-full gap-4 items-center  justify-center ">
                {socialLinks.map((item, index) => {
                  return (
                    <div key={index}>
                      <a
                        href={item.href}
                        target="_blank"
                        className="text-xs text-gray-500 flex flex-row gap-2 hover:opacity-50"
                      >
                        {item.name}
                        <LucideIcons.ExternalLink className="w-3 h-3 text-gray-500 " />
                      </a>
                    </div>
                  );
                })}
              </div>
            </div>
          ) : (
            <div className="flex flex-row w-full items-center justify-evenly">
              <Link href="/auth/signup">
                <Button
                  variant="primary"
                  className="py-[19px] px-4 gap-6 bg-gray-200/70 border-none shadow-none text-gray-700 hover:bg-gray-300 flex items-center justify-evenly "
                >
                  <LucideIcons.CircleUser className="w-[20px] h-[20px]" />
                  <h1 className="font-semibold text-sm  ">Log In</h1>
                </Button>
              </Link>

              <Link href="/auth/signup">
                <Button variant="primary" className="py-[19px] px-4 gap-6">
                  <LucideIcons.Globe className="w-[20px] h-[20px]" />
                  <h1 className="font-semibold text-sm ">Sign Up</h1>
                </Button>
              </Link>
            </div>
          )}
        </div>
      </DrawerContent>
    </Drawer>
  );
};
