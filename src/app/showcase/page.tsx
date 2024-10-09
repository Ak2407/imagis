"use client";

import Image from "next/image";
import { toast } from "sonner";

type ShowcaseProps = {
  image: string;
};

const Showcase = ({ image }: ShowcaseProps) => {
  const handleCopy = (e: React.MouseEvent<HTMLParagraphElement>) => {
    e.preventDefault();
    navigator.clipboard.writeText(e.currentTarget.innerText);
    toast.success("Copied to clipboard");
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-6 w-full h-full ">
      <div className="flex items-center justify-center w-full h-full ">
        <div className="relative w-full h-full ">
          <Image
            src={image}
            alt="Showcase image"
            layout="fill"
            objectFit="contain"
            className=""
          />
        </div>
      </div>

      <div className="flex flex-col gap-4 items-center justify-start p-4 modal:p-10 bg-gray-50 lg:h-full w-full lg:max-w-[350px] border rounded-lg h-fit ">
        <div className="flex flex-row gap-4 justify-start items-center w-full font-light">
          <p className="modal:text-[15px] text-[12px] text-neutral-600">
            akshit
          </p>
          {/* <p className="text-xs text-stone-500">22h</p> */}
        </div>
        <p
          className="text-xs modal:text-[14px] font-normal text-neutral-900 cursor-pointer hover:opacity-50 transition-all ease-in-out duration-300"
          onClick={handleCopy}
        >
          black and white illustration in a 1920 German children book called The
          Horse Who Loved His Harness showing an adolescent girl adjusting the
          harness of a white horse in springtime
        </p>
      </div>
    </div>
  );
};

export default Showcase;
