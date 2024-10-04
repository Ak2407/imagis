import Image from "next/image";
import { toast } from "sonner";

type ShowcaseProps = {
  image: string;
};

const Showcase = ({ image }: ShowcaseProps) => {
  return (
    <div className="flex flex-col modal:flex-row items-center justify-between w-full h-full overflow-hidden">
      <div className="flex items-center justify-center bg-gray-100 p-8 w-full h-full modal:mt-0 mt-8 ">
        <div className="w-full h-full flex items-center justify-center ">
          <Image
            src={image}
            alt="Showcase image"
            width={900}
            height={500}
            className="object-contain h-full w-[90%] modal:w-full aspect-square "
          />
        </div>
      </div>

      <div className="flex flex-col gap-4 items-center justify-start p-10 bg-gray-50 w-full modal:max-w-[500px]  h-full ">
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
