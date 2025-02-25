"use client"

import { Top_Coins } from "../../constants";
import FeaturedCoinsBg from "../ui/featured-coins-bg";
import PrimaryText from "../ui/primary-text";
import coin5 from "@/public/icons/coin-5.svg";
import Image from "next/image";
import {motion}  from "framer-motion"


export { coin5 };

const TopCoins: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -200 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ ease: "backInOut", delay: 0.1, duration: 2 }}
      className="space-y-5 w-full"
    >
      <div className="space-y-3">
        <div className="flex gap-1 items-center justify-center text-center">
          featured
          <PrimaryText>crpto coins</PrimaryText>
        </div>
        <h1 className="text-center text-3xl font-dm-medium">
          Top crypto coins updates
        </h1>
      </div>
      <div className="grid-cat">
        {Top_Coins.map((coin) => (
          <FeaturedCoinsBg key={coin.id}>
            <div className="space-y-4 flex flex-col">
              <p className="text-sm text-white/50">{coin.status}</p>
              <Image src={coin.icon} alt="" />
              <div className="">
                <h1 className="text-white">{coin.coin_name}</h1>
                <p className="flex gap-1 text-sm text-white/70">
                  {coin.coin_rate}
                  <span className="text-white/50 font-dm-light">USD</span>
                </p>
              </div>
            </div>
            {/* {coin.icon} */}
          </FeaturedCoinsBg>
        ))}
      </div>
    </motion.div>
  );
};

export default TopCoins;
