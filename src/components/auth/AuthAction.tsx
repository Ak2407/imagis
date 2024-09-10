import { Button } from "@/components/ui/button";

type AuthActionProps = {
  type: string;
};

const AuthAction = ({ type }: AuthActionProps) => {
  return (
    <Button
      className="
          w-full 
          bg-gradient-to-b from-gray-800 to-gray-900 
          rounded-[16px] 
          text-neutral-200 
          font-light 
      text-lg
          shadow-sm 
          relative 
          overflow-hidden
          transition-all 
          duration-300 
          hover:from-gray-700 
          hover:to-gray-800 
          group
      py-6
        "
    >
      <span className=" z-10">{type}</span>
      <span
        className="
            absolute 
            inset-[1px] 
            rounded-[14px] 
            border 
            border-white 
            opacity-20 
            group-hover:opacity-30 
            transition-opacity 
            duration-300
          "
      />
    </Button>
  );
};

export default AuthAction;
