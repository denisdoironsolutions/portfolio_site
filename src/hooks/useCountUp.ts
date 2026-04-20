import { useEffect, useState } from 'react';

export interface CountUpOptions {
  duration?: number;
  start?: number;
  active?: boolean;
}

export function useCountUp(target: number, options: CountUpOptions = {}): number {
  const { duration = 1800, start = 0, active = true } = options;
  const [val, setVal] = useState(start);

  useEffect(() => {
    if (!active) return;
    let raf = 0;
    const t0 = performance.now();
    const step = (t: number) => {
      const p = Math.min(1, (t - t0) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(start + (target - start) * eased);
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target, active, duration, start]);

  return val;
}
