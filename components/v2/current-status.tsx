"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const phrases = [
  "building products",
  "leading Applift Labs",
  "designing systems",
  "shipping ideas",
  "fixing what I broke",
  "bridging users and tech",
  "vibecoding SaaS",
  "writing stories",
  "leading with vision",
];

const TYPE_SPEED = 100;
const DELETE_SPEED = 30;
const PAUSE_BEFORE_DELETE = 1500;

// ⬆️ Longer fade for visibility
const FADE_DURATION = 0.6;

export default function CurrentStatus() {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [visibleChars, setVisibleChars] = useState<string[]>([]);
  const [isDeleting, setIsDeleting] = useState(false);

  const currentPhrase = phrases[currentPhraseIndex];

  // Core typewriter logic
  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (!isDeleting && visibleChars.length < currentPhrase.length) {
      timeout = setTimeout(() => {
        setVisibleChars(
          currentPhrase.slice(0, visibleChars.length + 1).split(""),
        );
      }, TYPE_SPEED);
    } else if (!isDeleting && visibleChars.length === currentPhrase.length) {
      timeout = setTimeout(() => setIsDeleting(true), PAUSE_BEFORE_DELETE);
    } else if (isDeleting && visibleChars.length > 0) {
      timeout = setTimeout(() => {
        setVisibleChars((prev) => {
          const newChars = [...prev];
          newChars.pop();
          return newChars;
        });
      }, DELETE_SPEED);
    } else if (isDeleting && visibleChars.length === 0) {
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
      }, 300);
    }

    return () => clearTimeout(timeout);
  }, [visibleChars, isDeleting, currentPhrase]);

  return (
    <>
      <section className="space-y-1" data-nosnippet="true">
        <div className="flex items-center h-7">
          <span className="text-muted-foreground">Currently</span>
          <div className="ml-1 relative inline-flex">
            <span className="invisible whitespace-pre text-clean">
              {currentPhrase}
            </span>
            <div className="absolute top-0 left-0 whitespace-pre">
              <AnimatePresence mode="popLayout" initial={false}>
                {visibleChars.map((char, i) => (
                  <motion.span
                    className="text-muted-foreground"
                    key={`${char}-${i}`}
                    // initial={{ opacity: 0, filter: "blur(8px)", scale: 0.9 }}
                    animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
                    exit={{
                      opacity: 0,
                      filter: "blur(12px)",
                      scale: 1.1,
                      x: 4, // slight slide to the right as it fades
                    }}
                    transition={{
                      duration: isDeleting ? 0.6 : FADE_DURATION,
                      ease: "easeInOut",
                    }}
                  >
                    {char}
                  </motion.span>
                ))}
                <span
                  // animate={{ opacity: [1, 0, 1] }}
                  // transition={{ duration: 0.8, repeat: Infinity }}
                  className="text-foreground animate-caret-blink"
                >
                  |
                </span>
              </AnimatePresence>
            </div>
          </div>
        </div>
        <p className="text-muted-foreground leading-relaxed">
          Studying Computer Engineering at University of Uyo.
        </p>
      </section>
    </>
  );
}
