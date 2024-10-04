import Showcase from "@/app/showcase/page";
import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";

import { Drawer, DrawerContent } from "@/components/ui/drawer";
import { DialogTitle } from "@radix-ui/react-dialog";

type ImgShowcaseProps = {
  image: string;
  onClose?: () => void;
  isOpen?: boolean;
};

const ImgShowcase = ({ image, onClose, isOpen }: ImgShowcaseProps) => {
  return (
    <div>
      <div>
        <Dialog open={isOpen} onOpenChange={onClose}>
          <DialogContent className="max-w-[90%] h-[90%] ">
            <Showcase image={image} />
          </DialogContent>
        </Dialog>
      </div>
      <div>
        <Drawer open={isOpen} onOpenChange={onClose}>
          <DrawerContent>
            <Showcase image={image} />
          </DrawerContent>
        </Drawer>
      </div>
    </div>
  );
};

export default ImgShowcase;
