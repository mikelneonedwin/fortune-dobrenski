// components/sections/ExperienceSection.tsx

import clsx from "clsx";
import { Circle } from "lucide-react";

type Item = {
  twFillClassName: `fill-${string}-${number}`;
  link: string;
  title: string;
  role: string;
  year: number;
};

const items: Item[] = [
  {
    twFillClassName: "fill-blue-500",
    link: "https://c-3po.app/",
    title: "C-3P0",
    role: "AI DEFI ASSISTANT",
    year: 2025,
  },
  {
    twFillClassName: "fill-rose-500",
    link: "https://www.destorah.com/",
    title: "Destorah",
    role: "AGRICULTURAL WEB PLATFORM",
    year: 2025,
  },
  {
    twFillClassName: "fill-amber-400",
    link: "https://www.destorah.com/",
    title: "Super Vibes Record",
    role: "MUSIC STREAMING & EVENTS SITE",

    year: 2025,
  },
  {
    twFillClassName: "fill-emerald-500",
    link: "https://modools.applift.xyz/",
    title: "Modools",
    role: "LEARNING MANAGEMENT SYSTEM (LMS)",
    year: 2025,
  },
  {
    twFillClassName: "fill-indigo-500",
    link: "https://www.ocicat.club/",
    title: "Ocicat",
    role: "WEB3 TELEGRAM BOT",
    year: 2025,
  },
  {
    twFillClassName: "fill-cyan-400",
    link: "https://www.truthmatrix.app/",
    title: "Truth Matrix",
    role: "AI DEFI ASSISTANT",
    year: 2025,
  },
];

export default function Experience() {
  return (
    <section className="space-y-12" data-nosnippet="true">
      <ul className="space-y-2">
        {items.map((item) => (
          <li
            key={item.title}
            className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-0"
          >
            <div className="flex items-center justify-between sm:justify-start">
              <div className="flex items-center gap-2">
                <div className="size-5 items-center justify-center flex shrink-0 relative cursor-pointer hover:scale-110 transition-transform">
                  <Circle
                    className={clsx(
                      "size-[60%] stroke-transparent blur-[2px]",
                      item.twFillClassName,
                    )}
                  />
                </div>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono uppercase font-normal text-foreground tracking-[-0.01em]"
                >
                  {item.title}
                </a>
              </div>
              <span className="font-mono uppercase text-muted-foreground tracking-[-0.01em] sm:hidden">
                {item.year}-
              </span>
            </div>

            <div className="sm:hidden">
              <span className="font-mono uppercase text-muted-foreground ml-[1.75rem] tracking-[-0.01em]">
                {item.role}
              </span>
            </div>

            <span className="font-mono uppercase text-muted-foreground ml-6 sm:ml-0 tracking-[-0.01em] hidden sm:block">
              {item.role}, {item.year}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
