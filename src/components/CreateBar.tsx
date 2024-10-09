"use client";

import { ImageIcon, SlidersHorizontal } from "lucide-react";
import { Button } from "./ui/button";
import { useSession } from "next-auth/react";
import axios from "axios";

import { useState } from "react";
import { toast } from "sonner";

type CreateBarProps = {
  setImageSrc: (imageSrc: string) => void;
  setLoading: (loadingState: boolean) => void;
};

const CreateBar = ({ setImageSrc, setLoading }: CreateBarProps) => {
  const [inputValue, setInputValue] = useState<string>("");
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
      const imageURL = `https://image.pollinations.ai/prompt/${encodeURIComponent(inputValue)}?width=1280&height=720?seed=${randomSeed}&nologo=True`;
      // const imageURL = `https://image.pollinations.ai/prompt/${encodeURIComponent(inputValue)}?width=520&height=520?seed=${randomSeed}&nologo=True`;
      // const imageURL = `https://image.pollinations.ai/prompt/${encodeURIComponent(inputValue)}?width=1080&height=1920?seed=${randomSeed}&nologo=True`;
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
      <Button size="icon" variant="ghost" disabled={!session}>
        <SlidersHorizontal
          className="w-6 h-6 text-gray-400 "
          strokeWidth={2.0}
        />
      </Button>
    </div>
  );
};

export default CreateBar;
