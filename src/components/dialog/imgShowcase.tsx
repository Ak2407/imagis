import Showcase from "@/app/showcase/page";
import { Dialog, DialogContent } from "@/components/ui/dialog";

type ImgShowcaseProps = {
  image: string;
  onClose?: () => void;
  isOpen?: boolean;
};

const ImgShowcase = ({ image, onClose, isOpen }: ImgShowcaseProps) => {
  return (
    <div>
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="max-w-[90%] h-[90%]">
          <Showcase image={image} />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ImgShowcase;
