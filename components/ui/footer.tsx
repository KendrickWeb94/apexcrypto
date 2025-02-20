import {
  FacebookLogo,
  InstagramLogo,
  TwitterLogo,
} from "@phosphor-icons/react/dist/ssr";
import Logo from "./logo";

export default function Footer() {
  return (
    <div className="">
      <div className="py-14 h-auto gap-6 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4">
        <div className="col-span-2 space-y-4">
          <Logo />
          <p className="text-white/60">
            Transform your crypto experience with ApexCryto , a platform crypto
            and blockchain services.
          </p>
          <div className="flex items-center gap-2">
            <div className=" h-11 w-11 rounded-full hover:bg-white/20 smooth cursor-pointer flex items-center justify-center bg-white/10">
              <InstagramLogo />
            </div>
            <div className=" h-11 w-11 rounded-full hover:bg-white/20 smooth cursor-pointer flex items-center justify-center bg-white/10">
              <FacebookLogo />
            </div>
            <div className=" h-11 w-11 rounded-full hover:bg-white/20 smooth cursor-pointer flex items-center justify-center bg-white/10">
              <TwitterLogo />
            </div>
          </div>
        </div>
        <div className="flex flex-col opacity-0 gap-3">
          <h1>Features</h1>
          <ul className="list-none flex flex-col gap-3">
            <li className="text-white/60 smooth hover:text-white cursor-pointer hover:pl-4">
              Buy & Sell
            </li>
            <li className="text-white/60 smooth hover:text-white cursor-pointer hover:pl-4">
              Services
            </li>
            <li className="text-white/60 smooth hover:text-white cursor-pointer hover:pl-4">
              Discover
            </li>
            <li className="text-white/60 smooth hover:text-white cursor-pointer hover:pl-4">
              Resources
            </li>
            <li className="text-white/60 smooth hover:text-white cursor-pointer hover:pl-4">
              Blog
            </li>
          </ul>
        </div>
        <div className="flex gap-10">
          <div className="flex flex-col gap-3">
            <h1>Features</h1>
            <ul className="list-none flex flex-col gap-3">
              <li className="text-white/60 smooth hover:text-white cursor-pointer hover:pl-4">
                Buy & Sell
              </li>
              <li className="text-white/60 smooth hover:text-white cursor-pointer hover:pl-4">
                Services
              </li>
              <li className="text-white/60 smooth hover:text-white cursor-pointer hover:pl-4">
                Discover
              </li>
              <li className="text-white/60 smooth hover:text-white cursor-pointer hover:pl-4">
                Resources
              </li>
              <li className="text-white/60 smooth hover:text-white cursor-pointer hover:pl-4">
                Blog
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-3">
            <h1>Other Pages</h1>
            <ul className="list-none flex flex-col gap-3">
              <li className="text-white/60 smooth hover:text-white cursor-pointer hover:pl-4">
                Terms & Condition
              </li>
              <li className="text-white/60 smooth hover:text-white cursor-pointer hover:pl-4">
                Privacy Policy
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-white/20 w-full h-[0.5px]"></div>
      <div className="text-center w-full">
        <p className="text-white/40 text-sm py-4 font-dm-light">
          Copyright ©2025 ApexCrypto. All rights reserved
        </p>
      </div>
    </div>
  );
}
