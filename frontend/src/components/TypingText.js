import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";

// Cycling typing animation across a list of phrases.
export const TypingText = ({ phrases, className = "" }) => {
  const reduceMotion = useReducedMotion();
  const [display, setDisplay] = useState(reduceMotion ? phrases[0] : "");
  const idxRef = useRef(0);
  const charRef = useRef(0);
  const deletingRef = useRef(false);

  useEffect(() => {
    if (reduceMotion) {
      setDisplay(phrases[0]);
      return;
    }
    let timeout;
    const tick = () => {
      const phrase = phrases[idxRef.current % phrases.length];
      if (!deletingRef.current) {
        charRef.current += 1;
        setDisplay(phrase.slice(0, charRef.current));
        if (charRef.current === phrase.length) {
          deletingRef.current = true;
          timeout = setTimeout(tick, 1400);
          return;
        }
        timeout = setTimeout(tick, 70);
      } else {
        charRef.current -= 1;
        setDisplay(phrase.slice(0, charRef.current));
        if (charRef.current === 0) {
          deletingRef.current = false;
          idxRef.current += 1;
          timeout = setTimeout(tick, 320);
          return;
        }
        timeout = setTimeout(tick, 35);
      }
    };
    timeout = setTimeout(tick, 500);
    return () => clearTimeout(timeout);
  }, [phrases, reduceMotion]);

  return (
    <span className={className} data-testid="hero-typing-text" aria-live="polite">
      {display}
      {!reduceMotion && <span className="type-caret" aria-hidden="true" />}
    </span>
  );
};
