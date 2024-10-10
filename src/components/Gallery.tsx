"use client";

import { prompts } from "@/constants";
import Image from "next/image";
import ImgShowcase from "./dialog/imgShowcase";
import { useImgShowcaseStore } from "@/hooks/use-img-showcase";
import { useState } from "react";

export default function Gallery() {
  const [currentImage, setCurrentImage] = useState("");

  const isOpen = useImgShowcaseStore((state) => state.isOpen);
  const onOpen = useImgShowcaseStore((state) => state.onOpen);
  const onClose = useImgShowcaseStore((state) => state.onClose);

  const onClick = (src: any) => () => {
    setCurrentImage(src);
    onOpen();
  };

  return (
    <div className="mx-auto">
      <div className="columns-2 md:columns-3 xl:columns-4 2xl:columns-5  gap-[3px] space-y-[3px]">
        <ImgShowcase image={currentImage} isOpen={isOpen} onClose={onClose} />
        {prompts.map((image) => (
          <div key={image.id} className="relative group cursor-pointer">
            <Image
              src={image.imageSrc}
              alt="Ai generated image"
              width={500}
              height={500}
              className="w-full h-auto rounded-[2px] "
              onClick={onClick(image)}
            />
            <div
              className="pointer-events-none absolute opacity-0 flex items-end inset-0 group-hover:opacity-100"
              style={{
                transition: "opacity 0.15s",
              }}
            >
              <div
                data-component="Backdrop darkener"
                className="absolute w-full h-64 bottom-0"
                style={{
                  background:
                    "linear-gradient(transparent 62%, rgba(0, 0, 10, 0.004) 63.94%, rgba(0, 0, 10, 0.016) 65.89%, rgba(0, 0, 10, 0.03) 67.83%, rgba(0, 0, 10, 0.06) 69.78%, rgba(0, 0, 10, 0.094) 71.72%, rgba(0, 0, 10, 0.133) 73.67%, rgba(0, 0, 10, 0.176) 75.61%, rgba(0, 0, 10, 0.224) 77.56%, rgba(0, 0, 10, 0.267) 79.5%, rgba(0, 0, 10, 0.306) 81.44%, rgba(0, 0, 10, 0.34) 83.39%, rgba(0, 0, 10, 0.37) 85.33%, rgba(0, 0, 10, 0.384) 87.28%, rgba(0, 0, 10, 0.396) 89.22%, rgba(0, 0, 10, 0.4) 91.17%)",
                }}
              ></div>
              <div className="flex w-full p-4 relative cursor-pointer items-center justify-between self-end text-base max-sm:flex-wrap pointer-events-none overflow-hidden min-w-0">
                <div className="grow relative flex items-center min-h-[32px]">
                  <div className="whitespace-nowrap pointer-events-none h-8 gap-1.5 cursor-pointer rounded-full justify-start items-center text-sm font-semibold flex-center select-none flex text-white  drop-shadow-md absolute max-w-full px-3 -mx-1">
                    akshit
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
