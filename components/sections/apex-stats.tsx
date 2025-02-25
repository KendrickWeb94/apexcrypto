

import { Stats_Show } from "../../constants";
import FeaturedCoinsBg from "../ui/featured-coins-bg";
import PrimaryText from "../ui/primary-text";
import Image from "next/image";


const ApexStats: React.FC = () => {
  return (
    <main className="space-y-5 mx-auto md:max-w-[80%] w-full">
      <div className="grid-cat justify-center items-center">
        {Stats_Show.map((stat) => (
          <FeaturedCoinsBg key={stat.id}>
            <div className="flex items-center h-16 py-16 text-center justify-center flex-col">
              <h1 className=" text-2xl font-dm-medium text-primary">{stat.stat_name}</h1>
              <p className="text-white/60 text-base">
              {stat.stat_value}
              </p>
            </div>
            {/* {stat.icon} */}
          </FeaturedCoinsBg>
        ))}
      </div>
    </main>
  );
};

export default ApexStats;
