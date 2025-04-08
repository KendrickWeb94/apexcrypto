"use client"

import { Icon } from "@phosphor-icons/react/dist/lib/types";
import {
  ArrowsLeftRight,
  CashRegister,
  Layout,
  PiggyBank,
} from "@phosphor-icons/react/dist/ssr";


export interface SideBarLinks {
  id: number;
  label: string;
  route: string;
  icon: Icon ;
}

const barLinks: SideBarLinks[] = [
  { id: 1, label: "Dashboard", route: "/",icon: Layout },
  { id: 2, label: "Withdraw", route: "/withdraw", icon: CashRegister },
  { id: 3, label: "Deposit", route: "/Deposit", icon: PiggyBank },
  { id: 4, label: "Transfer", route: "/Transfer", icon: ArrowsLeftRight },
];

export default barLinks