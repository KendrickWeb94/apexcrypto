"use client";

import LogoSmall from "@/app/favicon.ico";
import { NavItems } from "./navitem";
import { useState } from "react";
import { CaretLeft, CaretRight, X } from "@phosphor-icons/react/dist/ssr";

export { LogoSmall };

export const MobileSideBar = () => {
  const [sidbarExpand, setSidebarExpand] = useState(true);
  const [closeSideBar, setcloseSideBar] = useState(false);

  function toggleExpand() {
    setSidebarExpand(!sidbarExpand);
  }

  function close() {
    setcloseSideBar(true);
  }
  return (
    <main className={`w-full bg-background/50 ds:block md:hidden fixed left-0 top-0 z-50 h-screen ${closeSideBar ? "h-0 w-0 overflow-hidden" : ""}`}>
      <div className="absolute top-0 right-0 m-6">
        <button className="w-7 h-7 rounded-md flex items-center justify-center bg-primary" onClick={close}>
          <X />
        </button>
      </div>
      <aside
        className={`min-h-full  w-[2.5rem] smooth z-40 bg-background py-5 ${
          sidbarExpand
            ? "w-fit smooth"
            : "w-[2.5rem] smooth overflow-hidden pr-4"
        }`}
      >
        <button
          onClick={toggleExpand}
          className="  bg-gray-900 w-[2.5rem] rounded-r-md smooth  h-[2.5rem] flex items-center justify-center "
        >
          {sidbarExpand ? (
            <CaretLeft size={20} className="smooth" />
          ) : (
            <CaretRight size={20} className="smooth" />
          )}
        </button>

        <NavItems />
      </aside>
    </main>
  );
};
