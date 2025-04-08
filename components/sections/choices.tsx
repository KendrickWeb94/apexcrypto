import ChoiceImg from "@/public/imgs/crypto-showcase.png";
import Image from "next/image";
import PrimaryText from "../ui/primary-text";

export { ChoiceImg };

export default function Choices() {
  return (
    <div className="w-full flex justify-between items-center flex-wrap gap-10">
      <div className=" md:max-w-[50%]">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            mutiple
            <PrimaryText>Crypto coins</PrimaryText>
          </div>
          <h1 className="text-5xl">Our crypto variaties</h1>
          <p className="text-white/60 text-balance">
            pick a coin or more from our collection to star trading or using,
            and guess what? at good rates too{" "}
          </p>
        </div>
      </div>
      <Image src={ChoiceImg} alt="" className="md:max-w-lg max-h-[300px] object-cover" />
    </div>
  );
}
