import Image from "next/image";
import Link from "next/link";
export default function Logo() {
  return (
    <div className="hidden lg:flex">
      <Link href="/">
        <Image
          src="/logo.svg"
          alt="Protocol"
          className="h-6 w-auto"
          width={100}
          height={40}
        />
      </Link>
    </div>
  );
}
