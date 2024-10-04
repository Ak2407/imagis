import Showcase from "@/app/showcase/page";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Drawer, DrawerContent } from "@/components/ui/drawer";

type ImgShowcaseProps = {
  image: string;
  onClose?: () => void;
  isOpen?: boolean;
};

const ImgShowcase = ({ image, onClose, isOpen }: ImgShowcaseProps) => {
  return (
    <div>
      <div className="hidden md:block">
        <Dialog
          open={isOpen}
          onOpenChange={(open) => !open && onClose && onClose()}
        >
          <DialogContent className="max-w-[90%] h-[90%]">
            <Showcase image={image} />
          </DialogContent>
        </Dialog>
      </div>
      {/* <div className="block md:hidden"> */}
      {/*   <Drawer */}
      {/*     open={isOpen} */}
      {/*     onOpenChange={(open) => !open && onClose && onClose()} */}
      {/*   > */}
      {/*     <DrawerContent> */}
      {/*       <Showcase image={image} /> */}
      {/*     </DrawerContent> */}
      {/*   </Drawer> */}
      {/* </div> */}
    </div>
  );
};

export default ImgShowcase;
