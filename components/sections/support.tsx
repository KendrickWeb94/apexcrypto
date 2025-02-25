import Vector from "@/public/imgs/Vector.png";
import {
  BookOpenUser,
  Headset,
  UsersThree,
} from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import PrimaryText from "../ui/primary-text";

export { Vector };

export default function Support() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h5 className="text-center flex items-center justify-center gap-2">
          Always by <PrimaryText>your side</PrimaryText>
        </h5>

        <h1 className="text-white font-dm-medium text-3xl text-center">
          Join the list of people using Apexcrypto
        </h1>
        <div className="">
          <p className="text-white/60 px-6 text-center w-full">
            Get faster, safer, more affordable cloud object storage <br />with no
            centeral point of failure.
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="w-full min-h-[230px] overflow-hidden py-8 rounded-2xl border px-16 border-white/20 flex items-center justify-center max-w-full h-auto bg-white/10 relative">
          <Image
            src={Vector}
            alt=""
            className="absolute right-0 md:h-[70%] w-full bottom-0"
          />
          <div className="relative z-10 w-full flex items-center justify-between">
            <div className="space-y-4 flex flex-col items-center text-center">
              <div className="text-[1.5rem] h-16 w-16 rounded-full from-white/10 to-primary/10 flex items-center justify-center text-primary bg-gradient-to-r">
                <Headset />
              </div>
              <h1>24/7 Support</h1>
              <p className="text-sm max-w-[250px] text-white/60">
                Need help? Get your requests solved quickly via support team.
              </p>
            </div>
            <div className="space-y-4 flex flex-col items-center text-center">
              <div className="text-[1.5rem] h-16 w-16 rounded-full from-white/10 to-primary/10 flex items-center justify-center text-primary bg-gradient-to-r">
                <UsersThree />
              </div>
              <h1>Community</h1>
              <p className="text-sm max-w-[250px] text-white/60">
                Join the conversations on our worldwide OKEx communities
              </p>
            </div>
            <div className="space-y-4 flex flex-col items-center text-center">
              <div className="text-[1.5rem] h-16 w-16 rounded-full from-white/10 to-primary/10 flex items-center justify-center text-primary bg-gradient-to-r">
                <BookOpenUser />
              </div>
              <h1>Learning curve</h1>
              <p className="text-sm max-w-[250px] text-white/60">
                New to crypto? we can teach you the how it works
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
