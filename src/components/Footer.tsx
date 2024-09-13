import Link from "next/link";
import Logo from "./Logo";

const Footer = () => {
  return (
    <div className="w-full p-4 pl-8 flex flex-col md:flex-row items-center justify-start gap-4 border-t ">
      <Logo footer />
      <p className="text-slate-600 text-center">
        Built by{" "}
        <Link
          href="https://www.akshit.app/"
          className="font-medium underline underline-offset-4 text-slate-800"
          target="_blank"
        >
          akshit
        </Link>
        . The source code is available on{" "}
        <Link
          href="https://github.com/Ak2407"
          className="font-medium underline underline-offset-4 text-slate-800"
          target="_blank"
        >
          GitHub
        </Link>
        .
      </p>
    </div>
  );
};

export default Footer;
