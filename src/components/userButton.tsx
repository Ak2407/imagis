"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogOut } from "lucide-react";
import { Session } from "next-auth";

import { signOut } from "next-auth/react";
import { useState } from "react";

type UserButtonProps = {
  session: Session | null;
};

export default function UserButton({ session }: UserButtonProps) {
  const [disabled, setDisabled] = useState(false);

  const handleSignOut = () => {
    setDisabled(true);
    signOut().then(() => {
      setDisabled(false);
    });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="h-full w-full disabled:opacity-40 hover:bg-transparent flex flex-row items-center justify-start gap-2 "
          disabled={disabled}
        >
          <Avatar className="h-8 w-8 xl:hidden ">
            <AvatarImage
              src={session?.user?.image ?? "/placeholder-avatar.png"}
            />
            <AvatarFallback>{session?.user?.name?.[0]}</AvatarFallback>
          </Avatar>

          <div className="flex-col items-start justify-center hidden xl:flex">
            <h1 className="text-[10px] sm:text-sm">{session?.user?.name}</h1>
            <p className="text-[8px] sm:text-xs">{session?.user?.email}</p>
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount side="right">
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">
              {session?.user?.name}
            </p>
            <p className="text-xs leading-none text-muted-foreground">
              {session?.user?.email}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="text-red-600 cursor-pointer flex items-center justify-start">
          <Button
            variant="ghost"
            type="submit"
            onClick={handleSignOut}
            className="flex flex-row items-center justify-start "
          >
            <LogOut className="mr-2 h-4 w-4" />
            Log Out
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
