"use client";

import { images } from "@/constants";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

type ShowcaseProps = {
  image: string;
};

const Showcase = ({ image }: ShowcaseProps) => {
  const router = useRouter();

  const handleCopy = (e: any) => {
    e.preventDefault();
    navigator.clipboard.writeText(e.target.innerText);
    toast.success("Copied to clipboard");
  };

  const onClickOutside = () => {
    router.push("/");
  };

  return (
    <div className="flex flex-col md:flex-row  items-center justify-between w-screen h-screen ">
      <div
        className="flex items-center justify-center bg-gray-100 p-8 w-full h-full flex-1 "
        onClick={onClickOutside}
      >
        <Image
          src={images[12].src}
          alt="Showcase image"
          width={900}
          height={500}
          className="rounded-lg shadow-lg drop-shadow-md border border-neutral-400 "
          onClick={(e) => {
            e.stopPropagation();
          }}
        />
      </div>

      <div className="flex flex-col gap-4 items-center justify-start p-10 bg-gray-50 w-full h-full max-w-[300px]  ">
        <div className="flex flex-row gap-4 justify-start items-center w-full font-light">
          <p className="text-[15px] text-neutral-600">akshit</p>
          <p className="text-xs text-stone-500">22h</p>
        </div>
        <p
          className="text-sm text-[14px] font-light text-neutral-900 cursor-copy hover:opacity-50 transition-all ease-in-out duration-300"
          onClick={handleCopy}
        >
          black and white illustration in a 1920 German children's book called
          "The Horse Who Loved His Harness" showing an adolescent girl adjusting
          the harness of a white horse in springtime
        </p>
      </div>
    </div>
  );
};

export default Showcase;
