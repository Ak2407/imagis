import { Cuboid } from "lucide-react";
import Link from "next/link";

type LogoProps = {
  noText?: boolean;
};

const Logo = ({ noText = false }: LogoProps) => {
  return (
    <div className="">
      <Link
        href="/"
        className="flex flex-row items-center justify-center gap-2"
      >
        <Cuboid className="h-10 w-10" strokeWidth={1.5} />
        <h1 className={`text-xl font-semibold ${noText ? "hidden" : ""}`}>
          Template
        </h1>
      </Link>
    </div>
  );
};

export default Logo;
