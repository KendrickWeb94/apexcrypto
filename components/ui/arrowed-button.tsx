
import ArrowRight from "@/public/icons/arrow-right.svg"
import { ArrowsLeftRight } from "@phosphor-icons/react/dist/ssr";

export {
    ArrowRight
}
export default function ArrowedButton({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <button className=" rounded-3xl bg-primary/10 border-t border-b smooth  border-primary  smooth hover hover:bg-primary/30  font-dm-medium text-primary  flex items-center justify-center   smooth  gap-2 bg-primary  py-2  px-5">
        {children}
        <ArrowsLeftRight  className="text-primary "/>
      </button>
    );
  }
  