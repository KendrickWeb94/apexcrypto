import logo from "@/public/Logo.svg";
import Image from "next/image";
import Link from "next/link";

export { logo };

export default function Logo() {
  return (
    <Link href={"/"} >
      <Image src={logo} className="max-w-44 min-w-32" alt="apex crypto logo" />
    </Link>
  );
}
