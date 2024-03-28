import Image from "next/image";
import Link from "next/link";
import nextIcon from "@/../public/icons/Nextjs.png";
import awsIcon from "@/../public/icons/aws.png";
import githubIcon from "@/../public/icons/github.png";

export default function Footer() {
  return (
    <footer className="bg-slate-700 min-h-20 flex flex-row space-between justify-center w-full flex-shrink-0 mt-10">
      <div className="p-2 text-center flex flex-col justify-center">
        <Link href={"https://aws.amazon.com/"}>
          <Image height="40" width="40" alt="nexticon" src={awsIcon} />
        </Link>
      </div>
      <div className="p-2 text-center flex flex-col justify-center">
        <Link href={"https://github.com/BlakeMadigan"}>
          <Image height="40" width="40" alt="nexticon" src={githubIcon} />
        </Link>
      </div>
      <div className="p-2 text-center flex flex-col justify-center">
        <Link href={"https://nextjs.org/"}>
          <Image height="40" width="40" alt="nexticon" src={nextIcon} />
        </Link>
      </div>
    </footer>
  );
}
