"use client";

import CreateBar from "@/components/CreateBar";
import GeneratedImage from "./_components/GeneratedImage";
import { useEffect, useState } from "react";
import {} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  PencilRuler,
  BanIcon,
  DownloadIcon,
  RotateCcwIcon,
} from "lucide-react";

const Create = () => {
  const [imageSrc, setImageSrc] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    console.log(loading);
  }, [loading]);

  const handleDownload = () => {
    if (imageSrc !== "") {
      const link = document.createElement("a");
      link.href = imageSrc;
      link.download = "image.png";
      link.target = "_blank";
      link.click();
    }
  };

  const handleDiscard = () => {
    setImageSrc("");
    setLoading(false);
  };

  const handleRegenerate = () => {
    setImageSrc("");
    setLoading(true);
  };

  return (
    <div className="flex flex-col gap-2 items-center relative w-full h-screen max-h-screen pb-40 sm:pb-0 ">
      <div className="sticky top-0 z-[20] flex items-center justify-center w-full  pt-4 pb-8 ">
        <CreateBar setImageSrc={setImageSrc} setLoading={setLoading} />
      </div>
      <div className="flex  items-center justify-center h-full w-full gap-4 pb-4 ">
        {imageSrc === "" && loading === false ? (
          <div className="flex flex-col gap-4 items-center justify-center p-10  rounded-lg ">
            <PencilRuler className="h-20 w-20" />
            <h1 className="text-4xl text-center ">
              Imagine Something and Type in the prompt
            </h1>
          </div>
        ) : (
          <div className="flex flex-col gap-10 justify-center items-center lg:items-start h-full w-full ">
            {loading ? (
              <GeneratedImage.Skeleton />
            ) : (
              <>
                <div className="flex flex-row w-full  gap-6 items-center justify-center ">
                  <Button
                    onClick={handleDownload}
                    variant="ghost"
                    className="flex items-center justify-center gap-2 text-white bg-green-500 hover:bg-green-600 border border-green-600 hover:text-white"
                  >
                    <DownloadIcon className="w-4 h-4 " />
                    <h1>Download</h1>
                  </Button>

                  <Button
                    onClick={handleDiscard}
                    variant="ghost"
                    className="flex items-center justify-center gap-2 text-white bg-red-500 hover:bg-red-600 border border-red-600 hover:text-white"
                  >
                    <BanIcon className="w-4 h-4 " />
                    <h1>Discard</h1>
                  </Button>
                </div>
                <GeneratedImage imageUrl={imageSrc} />
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Create;
