
import ArrowRight from "@/public/icons/arrow-right.svg"
import Image from "next/image";
export {
    ArrowRight
}
export default function ArrowedButton({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <button className=" rounded-xl flex items-center justify-center  hover:bg-primary/80 smooth  gap-2 bg-primary  h-12 font-dm-semibold text-background px-5">
        {children}
        <Image src={ArrowRight} alt="arrow icon" />
      </button>
    );
  }
  