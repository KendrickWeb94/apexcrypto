
import ChoiceImg from "@/public/imgs/upgrade.png";
import Image from "next/image";
import PrimaryText from "../ui/primary-text";
import Choices from "./choices";

export { ChoiceImg };

export default function CryptoStats() {
  return (
  <div className="">
      <div className="w-full flex justify-between items-center flex-wrap gap-10">
         <Image src={ChoiceImg} alt="" className="md:max-w-lg" />
      <div className=" md:max-w-[50%]">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            Realtime
            <PrimaryText>Crypto statistics</PrimaryText>
          </div>
          <h1 className="text-5xl text-balance">Get realtime crypto  stats</h1>
          <p className="text-white/60 text-balance">
            Our system provides realtime stats shown in charts and ui ,and every detail is included{" "}
          </p>
        </div>
      </div>
     
    </div>
    <br className=" ds:block md:hidden"/>
    <br />
    <Choices />
  </div>
  );
}
