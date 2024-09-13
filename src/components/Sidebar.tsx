"use client";

import { LogOut, Loader } from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { navItems, sidebarItems } from "@/constants";
import Logo from "./Logo";
import * as LucideIcons from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Separator } from "./ui/separator";

const Sidebar = () => {
  const { data: session } = useSession();
  const [activeNavItem, setActiveNavItem] = useState<string>("/");
  const [logoutLoading, setLogoutLoading] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setActiveNavItem(pathname);
  }, [pathname, setActiveNavItem]);

  const DynamicIcon = ({ iconName }: { iconName: string }) => {
    const IconComponent = (LucideIcons as any)[iconName] as
      | React.ComponentType<any>
      | undefined;

    if (IconComponent) {
      return <IconComponent className="h-5 w-5" />;
    }

    return null;
  };

  const handleLogout = () => {
    setLogoutLoading(true);
    signOut();
  };

  return (
    <div className="flex flex-col justify-between h-full gap-4 ">
      <div className="flex w-full gap-4 flex-col ">
        <div className="w-full flex justify-start pl-4 mb-4 ">
          <Logo />
        </div>

        <Separator />
        <div className="flex flex-col gap-2  ">
          {navItems.map((item) => (
            <Link
              href={item.href}
              key={item.name}
              className="rounded-md w-full"
            >
              <Button
                variant="link"
                className={`hover:no-underline flex flex-row gap-2 items-center justify-start w-full ${
                  activeNavItem === item.href
                    ? "text-cyan-600 bg-cyan-100/70 w-full flex flex-row hover:text-cyan-700 hover:bg-cyan-100/90"
                    : "text-gray-400 hover:text-gray-500"
                } `}
              >
                <DynamicIcon iconName={item.icon} />
                <h1 className="text-[16px] font-light ">{item.name}</h1>
              </Button>
            </Link>
          ))}
        </div>
        <Separator />
        <div className="flex flex-col gap-4">
          <h1 className="pl-4 text-slate-600">Chats</h1>
          <div className="flex flex-col gap-2">
            {sidebarItems.map((item) => (
              <Link
                href="/dashboard"
                key={item.title}
                className="rounded-md w-full hover:bg-gray-100 transition-all ease-in-out duration-200 "
              >
                <Button
                  variant="link"
                  className={`hover:no-underline flex flex-row gap-2 items-center justify-start 
                     text-gray-400 hover:text-gray-500
                 `}
                >
                  <h1 className="text-sm font-medium text-slate-500 ">
                    {item.title}
                  </h1>
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-between items-center pt-4 border-t border-gray-100 pb-2 ">
        <div className="flex flex-row gap-2 items-center">
          <Avatar className="h-10 w-10">
            <AvatarImage
              src={session?.user?.image ?? "/placeholder-avatar.png"}
            />
            <AvatarFallback>{session?.user?.name?.[0]}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col items-start justify-center">
            <h1 className="text-sm">{session?.user?.name}</h1>
            <p className="text-xs">{session?.user?.email}</p>
          </div>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="hover:bg-transparent"
          onClick={handleLogout}
        >
          {logoutLoading ? (
            <Loader className="h-5 w-5 animate-spin text-cyan-500/80" />
          ) : (
            <LogOut className="h-5 w-5 cursor-pointer text-red-500/80 hover:text-red-500" />
          )}
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
