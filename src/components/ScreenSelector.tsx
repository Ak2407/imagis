import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SlidersHorizontal, Smartphone, Laptop, Square } from "lucide-react";

type ScreenSelectorProps = {
  disabled: boolean;
  setScreenSize: (screenSize: string) => void;
  screenSize: string;
};
const ScreenSelector = ({
  disabled,
  setScreenSize,
  screenSize,
}: ScreenSelectorProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="icon" variant="ghost" disabled={disabled}>
          <SlidersHorizontal
            className="w-6 h-6 text-gray-400 "
            strokeWidth={2.0}
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Screen Size</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup
          value={screenSize}
          onValueChange={setScreenSize}
        >
          <DropdownMenuRadioItem value="mobile" className="flex items-center">
            <Smartphone className="mr-2 h-4 w-4" />
            <span>1080x1920</span>
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="laptop" className="flex items-center">
            <Laptop className="mr-2 h-4 w-4" />
            <span>1280x720</span>
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="square" className="flex items-center">
            <Square className="mr-2 h-4 w-4" />
            <span>520x520</span>
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ScreenSelector;
