import Link from "next/link";

const Logo = () => {
  return (
    <div className="">
      <Link href="/">
        <h1 className="text-lg xl:text-2xl text-zinc-800 tracking-wide ">
          Imagis
        </h1>
      </Link>
    </div>
  );
};

export default Logo;
