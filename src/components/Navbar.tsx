"use client";
import { navItems } from "@/constants";
import Logo from "./Logo";
import { Button } from "./ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import UserButton from "./userButton";
import { useEffect, useState, useCallback } from "react";
import MobileNavbar from "./MobileNav";

const Navbar = () => {
  const { data: session } = useSession();

  const [isSticky, setIsSticky] = useState(false);
  const [activeNavItem, setActiveNavItem] = useState<string>("/");
  const pathname = usePathname();

  useEffect(() => {
    setActiveNavItem(pathname);
  }, [pathname]);

  const handleScroll = useCallback(() => {
    const scrollThreshold = 20;
    const currentScrollY = window.scrollY;

    setIsSticky(currentScrollY > scrollThreshold);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <div
      className={`flex flex-row justify-between items-center w-[80%]   px-4 py-2 transition-all duration-200 ease-in ${
        isSticky
          ? "shadow-sm drop-shadow-sm blur-0 shadow-gray-50 sticky top-2  w-[92%] lg:w-[80%] border border-slate-300 py-2 md:py-4 px-6 rounded-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 z-50"
          : ""
      }`}
    >
      <MobileNavbar />
      <div className="hidden md:flex flex-row items-center justify-center gap-10 ">
        <Logo />
        <div className="flex flex-row gap-2 items-center justify-center">
          {navItems.map((item) => (
            <Link href={item.href} key={item.name}>
              <Button
                variant="link"
                className={`hover:no-underline ${
                  activeNavItem === item.href
                    ? "text-slate-900"
                    : "text-slate-500"
                } hover:text-slate-800`}
              >
                <h1 className="text-[16px] font-[400]">{item.name}</h1>
              </Button>
            </Link>
          ))}
        </div>
      </div>
      <div>
        {session ? (
          <UserButton session={session} />
        ) : (
          <div>
            <Link href="/auth/signup">
              <Button variant={isSticky ? "link" : "outline"}>
                <h1 className="">Login</h1>
              </Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
