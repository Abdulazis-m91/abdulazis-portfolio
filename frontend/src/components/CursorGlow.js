import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

// Blue glowing orb that follows the cursor with smooth lerp animation.
export const CursorGlow = () => {
  const glowRef = useRef(null);
  const dotRef = useRef(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    // Disable on touch / coarse pointer devices
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    if (!isFinePointer || reduceMotion) return;

    document.body.classList.add("has-cursor-glow");

    const target = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const current = { ...target };
    let raf;

    const onMove = (e) => {
      target.x = e.clientX;
      target.y = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX - 3}px, ${e.clientY - 3}px, 0)`;
      }
    };

    const onOver = (e) => {
      const interactive = e.target.closest(
        "a, button, [role='button'], input, textarea, .cursor-hot"
      );
      if (glowRef.current) {
        glowRef.current.classList.toggle("is-active", !!interactive);
      }
    };

    const loop = () => {
      current.x += (target.x - current.x) * 0.12;
      current.y += (target.y - current.y) * 0.12;
      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${current.x - 22}px, ${current.y - 22}px, 0)`;
      }
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      document.body.classList.remove("has-cursor-glow");
    };
  }, [reduceMotion]);

  if (reduceMotion) return null;

  return (
    <>
      <div
        ref={glowRef}
        data-testid="cursor-glow"
        className="cursor-glow pointer-events-none fixed left-0 top-0 z-[60] hidden md:block"
        aria-hidden="true"
      />
      <div
        ref={dotRef}
        className="cursor-dot pointer-events-none fixed left-0 top-0 z-[61] hidden md:block"
        aria-hidden="true"
      />
    </>
  );
};
