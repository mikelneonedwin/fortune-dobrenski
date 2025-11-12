// components/shared/GradientIcon.tsx
import { Circle } from "lucide-react";

interface GradientIconProps {
  theme: "light" | "dark";
  className?: string;
}

export default function GradientIcon({ theme, className }: GradientIconProps) {
  const isDark = theme === "dark";

  return (
    <Circle
      className={`w-6 h-6 ${
        isDark
          ? "text-pink-400 dark:text-purple-600"
          : "text-purple-400 dark:text-pink-600"
      } ${className ?? ""}`}
      strokeWidth={2}
    />
  );
}
