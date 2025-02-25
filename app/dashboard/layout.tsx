// app/dashboard/layout.tsx
import React from 'react';


export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
        <div>
        <main className="w-full bg-[#18181b]">
          {children}
        </main>
      </div>
    </div>
  );
}