"use client";
import { useState, useEffect  } from "react";
import Logo from "./logo";
import Navlinks from "./navlinks";
import Button from "./button";
import HamburgerMenu from "@/public/icons/hamburger-menu.svg";
import Image from "next/image";
import MobileNav from "./mobile-nav";


export { HamburgerMenu };

export default function Navbar() {
  const [mobileActive, setmobileActive] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 350) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function ToggleMobile() {
    setmobileActive(!mobileActive);
  }
  return (
    <div className={`w-full py-4  left-0 z-40 smooth   fixed top-0 ${isScrolled ? "bg-background" : "bg-transparent"}`}>
      <div className="w-full flex items-center justify-between relative container_custom">
        {mobileActive && <MobileNav />}
        <Logo />
        <div className=" ds:hidden  mdx:block">
          <Navlinks />
        </div>
        <div className="flex items-center gap-4">
          <div className="ds:hidden sm:block">
            <Button>Get started</Button>
          </div>
          <button
            onClick={ToggleMobile}
            className="ds:block smooth cursor-pointer mdx:hidden"
          >
            <Image src={HamburgerMenu} alt="" />
          </button>
          
        </div>
      </div>
    </div>
  );
}
