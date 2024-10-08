"use client";

import CreateBar from "@/components/CreateBar";
import GeneratedImage from "./_components/GeneratedImage";
import { useEffect, useState } from "react";
import { PencilRuler } from "lucide-react";
import { Button } from "@/components/ui/button";

const Create = () => {
  const [imageSrc, setImageSrc] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    console.log(loading);
  }, [loading]);

  return (
    <div className="flex flex-col gap-2 items-center relative w-full h-screen max-h-screen ">
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
          <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start w-full max-w-full gap-10 ">
            {loading ? (
              <GeneratedImage.Skeleton />
            ) : (
              <>
                <GeneratedImage imageUrl={imageSrc} />
                <div className="flex flex-row lg:flex-col gap-10 h-full items-start justify-start  ">
                  <Button>Save</Button>
                  <Button>Discard</Button>
                  <Button>Regenrate</Button>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Create;
