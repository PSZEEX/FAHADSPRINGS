import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import { cn } from "@/lib/utils";

const REVEAL_THRESHOLD = 0.12;
const REVEAL_ROOT_MARGIN = "0px 0px -40px 0px";

type RevealProps = {
  children: ReactNode;
  /** Delay in milliseconds, used to stagger items in a grid. */
  delay?: number;
  from?: "up" | "left" | "right" | "zoom";
  className?: string;
};

/** Fades and slides its children into view the first time they are scrolled to. */
export function Reveal({ children, delay = 0, from = "up", className }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) {
      setIsVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: REVEAL_THRESHOLD, rootMargin: REVEAL_ROOT_MARGIN },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      data-reveal={from}
      className={cn("reveal", isVisible && "is-visible", className)}
      style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}
    >
      {children}
    </div>
  );
}

/** Inline style helper for staggering `.animate-fade-up` entrance animations. */
export const delayStyle = (ms: number) => ({ "--delay": `${ms}ms` }) as CSSProperties;

export const STAGGER_MS = 90;
