"use client";

import HeroImg from "@/public/imgs/Hero-img.png";
import BadgeImg from "@/public/icons/batch.svg";
import Image from "next/image";
import ArrowedButton from "../ui/arrowed-button";
import Link from "next/link";
import { motion } from "framer-motion";

export { HeroImg, BadgeImg };

export default function Hero() {
  return (
    <div className="w-full flex justify-between pt-16 ds:flex-wrap md:flex-nowrap gap-10">
      <motion.div
        initial={{ opacity: 0, x: -200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ ease: "circInOut", delay: 0.5, duration: 2 }}
        className="space-y-5 md:w-[60%]"
      >
        <Image src={BadgeImg} alt="Future of crypto trading" />
        <h1 className="ds:text-4xl ds:leading-[1.1] md:text-6xl sm:text-5xl sm:leading-[1.1] text-white md:leading-[1.1] text-balance">
          Fast and Secure Cryptocurrency Exchange
        </h1>
        <p className="text-white/60 md:max-w-lg">
          Trade cryptocurrencies with ease, security, and advanced features on
          our cutting-edge platform.
        </p>
        <ArrowedButton>
          <Link href={"/sign-up"}>Get started</Link>
        </ArrowedButton>
      </motion.div>

      <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ease: "backInOut", delay: 0.5, duration: 2 }} className="md:flex-grow md:w-full ds:max-w-lg">
        <Image src={HeroImg} alt="" />
      </motion.div>
    </div>
  );
}
