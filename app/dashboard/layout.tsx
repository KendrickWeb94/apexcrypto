// app/dashboard/layout.tsx
import React from "react";
import { TopBar } from "./components/topbar";
import { SideBar } from "./components/sidebar";
import barLinks from "./utils";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <section className="w-full relative bg-[#18181b] flex min-h-screen">
        <SideBar />
        <div className="flex flex-grow  flex-col w-full gap-4">
          <TopBar />
          {children}
        </div>
      </section>
    </main>
  );
}
