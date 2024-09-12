"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { useMobileNavbar } from "@/hooks/use-mobile-navbar";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Logo from "./Logo";
import { navItems } from "@/constants";
import Link from "next/link";
import { Separator } from "./ui/separator";

const MobileNavbar = () => {
  const pathname = usePathname();
  const [isMounted, setIsMounted] = useState(false);

  const [activeNavItem, setActiveNavItem] = useState<string>("/");

  const onOpen = useMobileNavbar((state) => state.onOpen);
  const onClose = useMobileNavbar((state) => state.onClose);
  const isOpen = useMobileNavbar((state) => state.isOpen);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    setActiveNavItem(pathname);
    onClose();
  }, [pathname, onClose]);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <Button
        onClick={onOpen}
        className="flex items-center justify-center md:hidden mr-2"
        variant="link"
        size="icon"
      >
        <Menu className="h-6 w-6 text-slate-500 hover:text-slate-800 hover:no-underline" />
      </Button>
      <Sheet open={isOpen} onOpenChange={onClose}>
        <SheetContent
          side="left"
          className="p-6 pt-10 flex flex-col gap-10 items-start justify-start"
        >
          <Logo />
          <Separator />

          <div className="flex flex-col gap-6 items-start justify-center">
            {navItems.map((item) => (
              <Link href={item.href} key={item.name}>
                <Button
                  variant="link"
                  className={`:no-underline ${
                    activeNavItem === item.href
                      ? "text-slate-900"
                      : "text-slate-500"
                  } hover:text-slate-800`}
                >
                  <h1 className="text-xl font-[400]">{item.name}</h1>
                </Button>
              </Link>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default MobileNavbar;
