"use client";
import { UserButton } from "@clerk/nextjs";

// Add this line!

export default function Dashboard() {
  return (
    <main className="w-full min-h-screen ">
      <div className="w-[400px] h-[400px] bg-background">
        <UserButton />
      </div>
    </main>
  );
}
