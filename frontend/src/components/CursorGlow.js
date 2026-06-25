import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

// Soft blue glowing aura that trails behind the REAL (default) cursor.
// The native system cursor stays visible and functional at all times.
export const CursorGlow = () => {
  const glowRef = useRef(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    // Disable on touch / coarse pointer devices
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    if (!isFinePointer || reduceMotion) return;

    const target = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const current = { ...target };
    let raf;

    const onMove = (e) => {
      target.x = e.clientX;
      target.y = e.clientY;
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
      // smooth lerp toward the cursor position
      current.x += (target.x - current.x) * 0.14;
      current.y += (target.y - current.y) * 0.14;
      if (glowRef.current) {
        // 80px aura => offset by half (40px) to center on the cursor
        glowRef.current.style.transform = `translate3d(${current.x - 40}px, ${current.y - 40}px, 0)`;
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
    };
  }, [reduceMotion]);

  if (reduceMotion) return null;

  return (
    <div
      ref={glowRef}
      data-testid="cursor-glow"
      className="cursor-glow pointer-events-none fixed left-0 top-0 z-[60] hidden md:block"
      aria-hidden="true"
    />
  );
};
