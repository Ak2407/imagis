import Showcase from "@/app/showcase/page";
import { Dialog, DialogContent } from "@/components/ui/dialog";

type ImgShowcaseProps = {
  image: string;
};

const ImgShowcase = ({ image }: ImgShowcaseProps) => {
  return (
    <div>
      <Dialog>
        <DialogContent className="max-w-[90%] h-[90%]">
          <Showcase image={image} />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ImgShowcase;
