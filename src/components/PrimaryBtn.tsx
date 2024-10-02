import { CompassIcon } from "lucide-react";

type PrimaryBtnProps = {
  text: string;
  type?: "explore" | "login" | "signup";
};

const PrimaryBtn = ({ text, type }: PrimaryBtnProps) => {
  return (
    <button
      className={`flex items-center justify-start gap-2 bg-red-50 text-red-500 border border-red-100 shadow-lg  shadow-red-50 rounded-full  px-2 py-[7px] hover:bg-red-100 transition-all w-full `}
    >
      <CompassIcon className="w-[22px] h-[22px]" />
      <h1 className="font-medium text-sm">{text}</h1>
    </button>
  );
};

export default PrimaryBtn;
