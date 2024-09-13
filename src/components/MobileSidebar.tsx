"use client";

import { useMobileSidebar } from "@/hooks/use-mobile-sidebar";
import { Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import Sidebar from "./Sidebar";
import { Sheet, SheetContent } from "./ui/sheet";

const MobileSidebar = () => {
  const [isMounted, setIsMounted] = useState(false);

  const onOpen = useMobileSidebar((state) => state.onOpen);
  const onClose = useMobileSidebar((state) => state.onClose);
  const isOpen = useMobileSidebar((state) => state.isOpen);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <div>
      <Button
        onClick={onOpen}
        className="flex items-center justify-center lg:hidden mr-2"
        variant="link"
        size="icon"
      >
        <Menu className="h-6 w-6 text-slate-500 hover:text-slate-800 hover:no-underline" />
      </Button>
      <Sheet open={isOpen} onOpenChange={onClose}>
        <SheetContent side="left" className="overflow-y-scroll">
          <Sidebar />
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileSidebar;
