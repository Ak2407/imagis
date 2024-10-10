"use client";

import { ImageIcon } from "lucide-react";
import { useSession } from "next-auth/react";
import axios from "axios";

import { useState } from "react";
import { toast } from "sonner";
import ScreenSelector from "./ScreenSelector";
import { useRouter } from "next/navigation";
import { Skeleton } from "./ui/skeleton";

type CreateBarProps = {
  setImageSrc?: (imageSrc: string) => void;
  setLoading?: (loadingState: boolean) => void;
  isButton?: boolean;
};

const CreateBar = ({
  setImageSrc,
  setLoading,
  isButton = false,
}: CreateBarProps) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [screenSize, setScreenSize] = useState<string>("laptop");
  const [disabled, setDisabled] = useState<boolean>(false);
  const { data: session, status } = useSession();

  const router = useRouter();

  const handleClick = () => {
    if (!session) {
      router.push("/auth/signup");
    } else if (isButton) {
      router.push("/create");
    } else {
    }
  };

  function generateRandomNumber(): number {
    return Math.floor(Math.random() * 100000000) + 1;
  }

  let placeholder = "Type in your prompt...";
  if (!session) {
    placeholder = "Log in to start creating...";
  }

  const handleSubmit = async () => {
    setDisabled(true);
    if (inputValue.length > 0) {
      if (setLoading) setLoading(true);
      const randomSeed = generateRandomNumber();
      let width = 1080;
      let height = 1920;

      switch (screenSize) {
        case "mobile":
          width = 1080;
          height = 1920;
          break;
        case "laptop":
          width = 1280;
          height = 720;
          break;
        case "square":
          width = 520;
          height = 520;
          break;
      }

      const imageURL = `https://image.pollinations.ai/prompt/${encodeURIComponent(
        inputValue
      )}?width=${width}&height=${height}?seed=${randomSeed}&nologo=True`;
      const generatedImage = await axios.post(imageURL);
      if (generatedImage) {
        if (setImageSrc && setLoading) {
          setImageSrc(imageURL);
          setLoading(false);
        }

        setDisabled(false);
      }
    } else {
      toast.error("Add atleast 5 characters");
      setDisabled(false);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && !event.shiftKey) {
      handleSubmit();
    }
  };
  const renderContent = () => {
    if (status === "loading") {
      return (
        <>
          {/* <Skeleton className="h-6 w-6 rounded-full" /> */}
          <Skeleton className="h-[56px] flex-grow mx-2" />
          <Skeleton className="h-[56px] w-[100px]" />
        </>
      );
    }

    return (
      <div
        className={`flex flex-row justify-between items-center gap-0 w-[99%] rounded-xl border border-gray-200 shadow-sm font-light bg-gray-50 px-4 ${
          !session ? "cursor-pointer" : ""
        }`}
        onClick={handleClick}
      >
        <div className="flex flex-row items-center justify-start w-full ">
          <ImageIcon className="w-6 h-6 text-stone-400 " />
          <input
            autoFocus={isButton ? false : true}
            type="text"
            placeholder={placeholder}
            className={`p-[15px] outline-none border-none bg-gray-50 text-stone-500 placeholder:font-light font-normal tracking-wide w-full disabled:cursor-pointer ${
              !session ? "pointer-events-none" : ""
            }`}
            disabled={!session || disabled}
            value={inputValue}
            onChange={(e: any) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </div>
        <ScreenSelector
          disabled={!session || disabled || isButton}
          screenSize={screenSize}
          setScreenSize={setScreenSize}
        />
      </div>
    );
  };

  return <>{renderContent()}</>;
};

export default CreateBar;
