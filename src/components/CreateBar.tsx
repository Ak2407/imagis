import { ImageIcon, SlidersHorizontal } from "lucide-react";
import { Button } from "./ui/button";

type CreateBarProps = {
  placeholder: string;
  disabled?: boolean;
};

const CreateBar = ({ placeholder, disabled = false }: CreateBarProps) => {
  return (
    <div className="flex flex-row justify-between items-center gap-0 w-[99%] rounded-xl border border-gray-200 shadow-sm font-light bg-white px-4 ">
      <div className="flex flex-row items-center justify-start w-full">
        <ImageIcon className="w-6 h-6 text-stone-400 " />
        <input
          type="text"
          placeholder={placeholder}
          disabled={disabled}
          className="p-[15px] outline-none border-none text-stone-500 placeholder:font-light font-normal tracking-wide w-full "
        />
      </div>
      <Button size="icon" variant="ghost">
        <SlidersHorizontal
          className="w-6 h-6 text-gray-400 "
          strokeWidth={2.0}
        />
      </Button>
    </div>
  );
};

export default CreateBar;
