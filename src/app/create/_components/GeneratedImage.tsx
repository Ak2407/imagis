import { Skeleton } from "@/components/ui/skeleton";

type GeneratedImageProps = {
  imageUrl: string;
};

const GeneratedImage = ({ imageUrl }: GeneratedImageProps) => {
  return (
    <div className="h-full lg:max-w-[80%] ">
      <img
        src={imageUrl}
        alt="Generated Image"
        className="rounded-lg max-h-[700px] max-w-full object-contain "
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
