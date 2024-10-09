"use client";

import { ImageIcon, SlidersHorizontal } from "lucide-react";
import { useSession } from "next-auth/react";
import axios from "axios";

import { useState } from "react";
import { toast } from "sonner";
import ScreenSelector from "./ScreenSelector";

type CreateBarProps = {
  setImageSrc: (imageSrc: string) => void;
  setLoading: (loadingState: boolean) => void;
};

const CreateBar = ({ setImageSrc, setLoading }: CreateBarProps) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [screenSize, setScreenSize] = useState<string>("mobile");
  const { data: session } = useSession();

  const handleClick = () => {
    if (!session) {
      alert("Login first");
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
    if (inputValue.length > 0) {
      setLoading(true);
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

      const imageURL = `https://image.pollinations.ai/prompt/${encodeURIComponent(inputValue)}?width=${width}&height=${height}?seed=${randomSeed}&nologo=True`;
      const generatedImage = await axios.post(imageURL);
      if (generatedImage) {
        setImageSrc(imageURL);
        setLoading(false);
      }
    } else {
      toast.error("Add atleast 5 characters");
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && !event.shiftKey) {
      handleSubmit();
    }
  };

  return (
    <div
      className={`flex flex-row justify-between items-center gap-0 w-[99%] rounded-xl border border-gray-200 shadow-sm font-light bg-white px-4 ${
        !session ? "cursor-pointer" : ""
      }`}
      onClick={handleClick}
    >
      <div className="flex flex-row items-center justify-start w-full">
        <ImageIcon className="w-6 h-6 text-stone-400 " />
        <input
          type="text"
          placeholder={placeholder}
          className={`p-[15px] outline-none border-none text-stone-500 placeholder:font-light font-normal tracking-wide w-full disabled:cursor-pointer ${!session ? "pointer-events-none" : ""}`}
          disabled={!session}
          value={inputValue}
          onChange={(e: any) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </div>
      <ScreenSelector
        disabled={!session}
        screenSize={screenSize}
        setScreenSize={setScreenSize}
      />
    </div>
  );
};

export default CreateBar;
