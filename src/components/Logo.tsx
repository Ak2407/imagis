import { Bird } from "lucide-react";
import Link from "next/link";

type LogoProps = {
  footer?: boolean;
  noText?: boolean;
  noLink?: boolean;
};

const Logo = ({
  noText = false,
  footer = false,
  noLink = false,
}: LogoProps) => {
  return (
    <div className="">
      <Link
        href={noLink ? "" : "/"}
        className="flex flex-row items-center justify-center gap-2 text-zinc-600"
      >
        <Bird
          className={`${noText ? "h-14 w-14" : "h-10 w-10"} `}
          strokeWidth={1.5}
        />
        <h1
          className={`text-xl font-semibold ${
            footer || noText ? "hidden" : ""
          }`}
        >
          Twitly
        </h1>
      </Link>
    </div>
  );
};

export default Logo;
