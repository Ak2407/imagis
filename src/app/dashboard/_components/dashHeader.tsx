import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Session } from "next-auth";

type DashHeaderProps = {
  session: Session | null;
};

const DashHeader = ({ session }: DashHeaderProps) => {
  return (
    <div className="flex flex-col items-start gap-10 text-start">
      <div className="flex flex-row items-center justify-start gap-4">
        <Avatar className="h-14 w-14 ">
          <AvatarImage
            src={session?.user?.image ?? "/placeholder-avatar.png"}
          />
          <AvatarFallback>{session?.user?.name?.[0]}</AvatarFallback>
        </Avatar>

        <h1 className="text-4xl font-semibold">
          Welcome, {session?.user?.name}
        </h1>
      </div>
      <h1 className="text-xl">Here are your previous generations 💫</h1>
    </div>
  );
};

export default DashHeader;
