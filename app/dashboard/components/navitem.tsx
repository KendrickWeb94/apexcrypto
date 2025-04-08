"use client";

import { useState } from "react";
import Link from "next/link";
import { Bank,  Bell,  HandWithdraw, Layout,  PiggyBank, SignOut, User } from "@phosphor-icons/react/dist/ssr";

export const NavItems = () => {
  const [ActiveLink, setActiveLink] = useState(false);
  return (
    <ul className="list-none flex flex-col gap-3 mt-10">
      <li
        
            className={
              ActiveLink
                ? " relative smooth text-white pr-8 py-3 hover:text-primary font-dm-regular text-sm"
                : " relative smooth text-primary pr-8 bg-primary/10 pl-2 py-3 font-dm-regular text-sm after:h-full after:w-[1.5px] after:rounded-xl after:absolute after:left-0 after:top-0 after:bg-primary"
            }
          >
            <Link className="flex items-center gap-3" href="/dashboard">
              <div className=""><Layout size={20}/></div>
              <p>Dashboard</p>
            </Link>
          </li>
      <li
        
            className={
              ActiveLink
                ? " relative smooth text-primary pr-8 bg-primary/10 pl-2 py-3 font-dm-regular text-sm after:h-full after:w-[1.5px] after:rounded-xl after:absolute after:left-0 after:top-0 after:bg-primary"
                : " relative smooth text-white pr-8 pl-2 py-3 hover:text-primary font-dm-regular text-sm"
            }
          >
            <Link className="flex items-center gap-3" href="/dashboard/deposit">
              <div className=""><PiggyBank size={20}/></div>
              <p>Deposit</p>
            </Link>
          </li>
      
      <li
        
            className={
              ActiveLink
                ? " relative smooth text-primary pr-8 bg-primary/10 pl-2 py-3 font-dm-regular text-sm after:h-full after:w-[1.5px] after:rounded-xl after:absolute after:left-0 after:top-0 after:bg-primary"
                : " relative smooth text-white pr-8 pl-2 py-3 hover:text-primary font-dm-regular text-sm"
            }
          >
            <Link className="flex items-center gap-3" href="/dashboard/withdraw">
              <div className=""><HandWithdraw size={20}/></div>
              <p>Withdraw</p>
            </Link>
          </li>
      
      <li
        
            className={
              ActiveLink
                ? " relative smooth text-primary pr-8 bg-primary/10 pl-2 py-3 font-dm-regular text-sm after:h-full after:w-[1.5px] after:rounded-xl after:absolute after:left-0 after:top-0 after:bg-primary"
                : " relative smooth text-white pr-8 pl-2 py-3 hover:text-primary font-dm-regular text-sm"
            }
          >
            <Link className="flex items-center gap-3" href="/dashboard/transfer">
              <div className=""><Bank size={20}/></div>
              <p>Transfer</p>
            </Link>
          </li>
      <li
        
            className={
              ActiveLink
                ? " relative smooth text-primary pr-8 bg-primary/10 pl-2 py-3 font-dm-regular text-sm after:h-full after:w-[1.5px] after:rounded-xl after:absolute after:left-0 after:top-0 after:bg-primary"
                : " relative smooth text-white pr-8 pl-2 py-3 hover:text-primary font-dm-regular text-sm"
            }
          >
            <Link className="flex items-center gap-3" href="/dashboard/profile">
              <div className=""><User size={20}/></div>
              <p>My Profile</p>
            </Link>
          </li>
      <li
        
            className={
              ActiveLink
                ? " relative smooth text-primary pr-8 bg-primary/10 pl-2 py-3 font-dm-regular text-sm after:h-full after:w-[1.5px] after:rounded-xl after:absolute after:left-0 after:top-0 after:bg-primary"
                : " relative smooth text-white pr-8 pl-2 py-3 hover:text-primary font-dm-regular text-sm"
            }
          >
            <Link className="flex items-center gap-3" href="/dashboard/notifications">
              <div className=""><Bell size={20}/></div>
              <p>Notifications</p>
            </Link>
          </li>
      
      <li
        
            className={
              ActiveLink
                ? " relative smooth text-primary pr-8 bg-primary/10 pl-2 py-3 font-dm-regular text-sm after:h-full after:w-[1.5px] after:rounded-xl after:absolute after:left-0 after:top-0 after:bg-primary"
                : " relative smooth text-white pr-8 pl-2 py-3 hover:text-primary font-dm-regular text-sm"
            }
          >
            <Link className="flex items-center gap-3" href="/dashboard/transfer">
              <div className=""><SignOut size={20}/></div>
              <p>Logout</p>
            </Link>
          </li>
      
    </ul>
  );
};
