"use client";

import { Button } from "@/components/ui/button";
import { images } from "@/constants";
import { X } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const Showcase = ({ params }: { params: { image: number } }) => {
  const router = useRouter();
  console.log(params.image);

  const handleCopy = (e: React.MouseEvent<HTMLParagraphElement>) => {
    e.preventDefault();
    navigator.clipboard.writeText(e.currentTarget.innerText);
    toast.success("Copied to clipboard");
  };

  const closeShowcase = () => {
    router.push("/");
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-between w-screen h-screen">
      <div className="flex items-center justify-center bg-gray-100 p-8 w-full h-full flex-1 relative">
        <Button
          variant="ghost"
          className="absolute top-4 right-4 z-10"
          onClick={closeShowcase}
        >
          <X className="w-5 h-5" />
        </Button>
        <div className="relative w-full h-full">
          <Image
            src={images[params.image].src}
            alt="Showcase image"
            fill
            className="object-contain h-full w-full"
            onClick={(e) => {
              e.stopPropagation();
            }}
          />
        </div>
      </div>

      <div className="flex flex-col gap-4 items-center justify-start p-10 bg-gray-50 w-full md:w-[350px] h-full overflow-y-auto">
        <div className="flex flex-row gap-4 justify-start items-center w-full font-light">
          <p className="text-[15px] text-neutral-600">akshit</p>
          <p className="text-xs text-stone-500">22h</p>
        </div>
        <p
          className="text-sm text-[14px] font-normal text-neutral-900 cursor-pointer hover:opacity-50 transition-all ease-in-out duration-300"
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
