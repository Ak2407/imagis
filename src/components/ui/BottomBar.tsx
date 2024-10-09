"use client";

import * as LucideIcons from "lucide-react";
import { sideBarItems } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

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
    <div className="fixed bottom-0 h-[80px] w-[99%] flex items-center justify-center bg-gradient-to-b from-white bg-white/90 sm:hidden ">
      <div className="flex flex-row  items-center justify-evenly  gap-10 w-full ">
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
