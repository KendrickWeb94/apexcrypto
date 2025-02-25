import Image from "next/image";
import PrimaryText from "../ui/primary-text";
import ChooseUsImg from "@/public/imgs/whychoose.png"
import why1 from "@/public/icons/why1.png"
import why2 from "@/public/icons/why2.png"
import why3 from "@/public/icons/why3.png"
import { Gear, House, Lightning } from "@phosphor-icons/react/dist/ssr";

export {
    ChooseUsImg,
    why1,
    why2,
    why3
}


export default function WhyChooseUs() {
  return (
    <div className="w-full flex justify-between  ds:flex-wrap md:flex-nowrap gap-10">
      <div className=" w-full space-y-4 md:max-w-[60%]">
        <div className="flex gap-1">
          why choose
          <PrimaryText>apexcrpto</PrimaryText>
        </div>
        <h1 className="text-3xl max-w-sm text-balance leading-[1.3] font-dm-medium">
          Features of apexCrypto, and why you should use it
        </h1>
        <br />
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex  gap-3 items-center">
             
                <div className="w-8 h-8 rounded-full items-center flex justify-center bg-white/20">
                    <House className="text-primary"/>
                </div>
                <p className="text-white/80">One of the best crypto and trading platforms</p>
            </div>
            <div className="flex  gap-3 items-center">
               
                <div className="w-8 h-8 rounded-full items-center flex justify-center bg-white/20">
                    <Lightning className="text-primary"/>
                </div>
                <p className="text-white/80">Kickstart your crypto experience with speed</p>
            </div>
            <div className="flex items-center gap-3">
               
                <div className="w-8 h-8 rounded-full items-center flex justify-center bg-white/20">
                    <Gear className="text-primary"/>
                </div>
                <p className="text-white/80">tweek the settings how you want </p>
            </div>
        </div>
      </div>
      <div className="flex-grow">
        <Image src={ChooseUsImg} alt="" />
      </div>
    </div>
  );
}
