import SolutionImg from "@/public/imgs/best-solution.png";
import Image from "next/image";
import PrimaryText from "../ui/primary-text";
import { Hash, Rocket, Shield, Timer } from "@phosphor-icons/react/dist/ssr";
import IconHolder from "../ui/icon-holder";

export { SolutionImg };

export default function BestSolution() {
  return (
    <main className="space-y-5">
      <div className="space-y-4 flex flex-col items-center text-center justify-center">
        <div className="text-white flex items-center gap-1">
          We deliver
          <PrimaryText>best solution</PrimaryText>
        </div>
        <h1 className="text-white text-center sm:max-w-3xl ds:text-xl sm:text-3xl">
          One application with multiple options to give you freedom of buying &
          selling
        </h1>
      </div>
      <div className="flex items-center gap-4 flex-wrap justify-center">
        <div className="flex flex-col space-y-32 justify-between h-full">
          <div className="flex items-start gap-4">
            <div className="space-y-1">
              <h1 className="text-right">Planning</h1>
              <p className="text-white/60  max-w-[250px] text-right">
                Plan your crypto experience, monitor the market
              </p>
            </div>
            <IconHolder>
              <Hash />
            </IconHolder>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="space-y-1">
              <h1 className="text-right">Maximum security</h1>
              <p className="text-white/60  max-w-[250px] text-right">
                we provide high end security for your wallets and accounts
              </p>
            </div>
            <IconHolder>
              <Shield />
            </IconHolder>
          </div>
          
        </div>
        <div className="max-w-md">
          <Image src={SolutionImg} alt="" />
        </div>
        <div className="space-y-16">
         
          <div className="flex items-start gap-4">
            <IconHolder>
              <Rocket />
            </IconHolder>
            <div className="space-y-1 max-w-[250px]">
              <h1 className="">High rates</h1>
              <p className="text-white/60">
               sky rocket your crypto with high rates when buying or selling
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <IconHolder>
              <Timer />
            </IconHolder>
            <div className="space-y-1 max-w-[250px]">
              <h1 className="">24/7 Support</h1>
              <p className="text-white/60">
               we are here to offer help and aid you always
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
