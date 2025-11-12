import { EMAIL, TWITTER } from "@/constants";

// components/sections/Footer.tsx
export default function Footer() {
  return (
    <footer className="border-t border-border pt-8">
      <p className="text-muted-foreground leading-relaxed">
        Check out my work on{" "}
        <a
          href={TWITTER}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground/70 no-underline hover:text-muted-foreground/90 transition-colors"
        >
          X/Twitter
        </a>{" "}
        or{" "}
        <a
          href={EMAIL}
          className="text-muted-foreground/70 no-underline hover:text-muted-foreground/90 transition-colors"
        >
          email me
        </a>{" "}
        for more. Teams section inspired by{" "}
        <a
          href="https://ethanchng.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground/70 no-underline hover:text-muted-foreground/90 transition-colors"
        >
          Ethan Chng
        </a>
        .
      </p>
    </footer>
  );
}
