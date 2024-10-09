"use client";

import Showcase from "@/app/showcase/page";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useState, useEffect } from "react";
import { Drawer, DrawerContent } from "@/components/ui/drawer";

type ImgShowcaseProps = {
  image: string;
  onClose?: () => void;
  isOpen?: boolean;
};

const ImgShowcase = ({ image, onClose, isOpen }: ImgShowcaseProps) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => setIsMobile(window.innerWidth < 790);
    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  if (isMobile) {
    return (
      <div>
        <Drawer
          open={isOpen}
          onOpenChange={(open) => !open && onClose && onClose()}
        >
          <DrawerContent>
            <Showcase image={image} />
          </DrawerContent>
        </Drawer>
      </div>
    );
  }

  return (
    <div>
      <Dialog
        open={isOpen}
        onOpenChange={(open) => !open && onClose && onClose()}
        modal={true}
      >
        <DialogContent className="max-w-[90%] h-[90%]">
          <Showcase image={image} />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ImgShowcase;
