import { useState, useEffect, useRef } from "react";

export function useCountUp(target: number, duration = 1500, trigger = false) {
  const [count, setCount] = useState(0);
  const frameRef = useRef<number>();

  useEffect(() => {
    if (!trigger) return;
    const start = performance.now();
    const animate = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      setCount(Math.floor(eased * target));
      if (progress < 1) frameRef.current = requestAnimationFrame(animate);
    };
    frameRef.current = requestAnimationFrame(animate);
    return () => { if (frameRef.current) cancelAnimationFrame(frameRef.current); };
  }, [trigger, target, duration]);

  return count;
}
