import type { ReactNode } from "react";

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <main className="min-h-screen py-16 sm:py-24 font-sans relative">
      {/* Dark background */}
      <div className="dark:block hidden fixed inset-0 w-full h-full -z-10 bg-[#0f0f0f]" />

      {/* Light background */}
      <div className="dark:hidden block fixed inset-0 w-full h-full -z-10 bg-white" />

      <div className="mx-auto px-6 w-fit">
        <div className="space-y-16">{children}</div>
      </div>
    </main>
  );
}
