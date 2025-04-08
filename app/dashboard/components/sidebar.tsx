"use client";

import LogoSmall from "@/app/favicon.ico";
import { NavItems } from "./navitem";
import { useState } from "react";
import { CaretLeft, CaretRight } from "@phosphor-icons/react/dist/ssr";

export { LogoSmall };

export const SideBar = () => {
  const [sidbarExpand, setSidebarExpand] = useState(true);

  function toggleExpand() {
    setSidebarExpand(!sidbarExpand);
  }
  return (
    <aside
      className={`min-h-full shadow-2xl ds:hidden md:block w-[2.5rem] smooth z-40 bg-background py-5 ${
        sidbarExpand ? "w-fit smooth" : "w-[2.5rem] smooth overflow-hidden pr-4"
      }`}
    >
      <button
        onClick={toggleExpand}
        className=" bg-gray-900 w-[2.5rem] rounded-r-md smooth  h-[2.5rem] flex items-center justify-center "
      >
        {sidbarExpand ? <CaretLeft size={20} className="smooth" /> : <CaretRight size={20} className="smooth" />}
      </button>

      <NavItems />
    </aside>
  );
};
