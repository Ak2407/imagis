import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";

type GeneratedImageProps = {
  imageUrl: string;
};

const GeneratedImage = ({ imageUrl }: GeneratedImageProps) => {
  return (
    <div className="h-full w-full relative ">
      <Image
        src={imageUrl}
        alt="Generated Image"
        layout="fill"
        objectFit="contain"
        className="lg:max-w-[80%] mx-auto"
      />
    </div>
  );
};

GeneratedImage.Skeleton = function SkeletononGeneratedImage() {
  return (
    <div className="h-full w-full max-w-[80%] p-4 flex items-center justify-center ">
      <Skeleton className="h-full max-h-[500px] max-w-[900px]  w-full rounded-lg" />
    </div>
  );
};

export default GeneratedImage;
