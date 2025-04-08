
import Abstract from "@/public/imgs/frenzy.png";
import Image from "next/image";
import ArrowedButton from "../ui/arrowed-button";
import Link from "next/link";

export {
    Abstract
}

export default function CTA() {
    return (
        <div className=" min-h-[60vh] flex items-center justify-center">
        <div className="w-full min-h-[230px] overflow-hidden py-8 rounded-2xl border px-10 border-white/10 flex items-center justify-center max-w-full h-auto bg-white/5 relative">
                <Image src={Abstract} alt="" className="absolute right-0 h-full top-0"/>
                <div className="w-full z-10 flex items-center flex-wrap gap-10 justify-between relative">
                    <div className="space-y-2">
                        <h1 className="text-white font-dm-medium text-4xl ">
                            Enjoy seamless crypto experience
                        </h1>
                        <p className=" text-white/60 ">
                            don&apos;t skip the opportunity of using one of the best crypto systems in the world 
                        </p>
                    </div>
                    <div className="">
                        <ArrowedButton>
                            <Link href={"/sign-up"}>
                                Get Started
                            </Link>
                        </ArrowedButton>
                    </div>
                </div>
            </div>
        </div>
    )
}