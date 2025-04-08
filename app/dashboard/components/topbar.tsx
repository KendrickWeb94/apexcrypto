"use client";

import { List } from "@phosphor-icons/react/dist/ssr";
import { UserData } from "../utils/User";
import { useState } from "react";
import { MobileSideBar } from "./mobile-sidebar";


export const TopBar = () => {
  const [mobileactive, setmobileactive] = useState(false);
  function togglemobile() {
    setmobileactive(!mobileactive)
  }
  return (
    <main className="w-full py-3  bg-background px-6 flex items-center justify-between">
      {mobileactive && <MobileSideBar />}
      <div className="">
        <button className="ds:block md:hidden" onClick={togglemobile}>
         <List size={20}/>
        </button>
      </div>
      <UserData
          name="George Kendrick"
          id={1}
          acctBalance=""
          IsAdmin={false}
        />
    
    </main>
  );
};
