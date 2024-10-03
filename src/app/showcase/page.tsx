import { images } from "@/constants";
import Image from "next/image";

type ShowcaseProps = {
  image: string;
};

const Showcase = ({ image }: ShowcaseProps) => {
  return (
    <div className="flex justify-between w-full h-full">
      <div className="flex items-center justify-center bg-gray-100 p-8 w-full h-full">
        <div className="w-full h-full relative">
          <Image
            src={image}
            alt="Vintage teal car on pink background"
            fill
            className="object-contain "
          />
        </div>
      </div>

      <div className="flex flex-col gap-4 items-center justify-start p-10 bg-gray-50 w-full h-full max-w-[30%]">
        <div className="flex flex-row gap-4 justify-start items-center w-full font-light">
          <p className="text-[15px] text-neutral-600">akshit</p>
          <p className="text-xs text-stone-500">22h</p>
        </div>
        <p className="text-base text-[14px] font-light text-neutral-900">
          black and white illustration in a 1920 German children's book called
          "The Horse Who Loved His Harness" showing an adolescent girl adjusting
          the harness of a white horse in springtime
        </p>
      </div>
    </div>
  );
};

export default Showcase;
