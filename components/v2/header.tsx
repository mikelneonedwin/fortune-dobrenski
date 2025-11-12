"use client";

import clsx from "clsx";
import { useTheme } from "next-themes";

function ThemeButton({ targetTheme }: { targetTheme: "light" | "dark" }) {
  const { setTheme } = useTheme();
  return (
    <button
      onClick={() => setTheme(targetTheme)}
      className={clsx(
        "size-4 rounded-full focus:outline-none relative z-50",
        targetTheme === "light"
          ? "dark:inline-block hidden bg-white"
          : "dark:hidden bg-black",
      )}
      aria-label="Toggle theme"
    />
  );
}

export default function Header() {
  return (
    <header className="space-y-1">
      <div className="flex items-center justify-between">
        <h1 className="font-medium text-foreground">Fortune Ishaku</h1>
        <ThemeButton targetTheme="light" />
        <ThemeButton targetTheme="dark" />
      </div>
      <p className="text-muted-foreground leading-relaxed">
        Product Developer & Software Architect at Applift Labs
      </p>
    </header>
  );
}
