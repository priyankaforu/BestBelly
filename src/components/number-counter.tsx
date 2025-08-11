"use client";

import { useEffect, useRef, useState } from "react";

interface NumberCounterProps {
  end: number;
  start?: number;
  duration?: number;
  decimals?: number;
  className?: string;
}

export function Numbercounter({
  end,
  start = 0,
  duration = 2000,
  decimals = 0,
}: NumberCounterProps) {
  const [count, setCount] = useState(start);
  const countRef = useRef(start);
  const requestRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    if (!isVisible) return;
    const animate = (timestamp: number) => {
      if (!startTimeRef.current) {
        startTimeRef.current = timestamp;
      }

      const progress = Math.min(
        (timestamp - startTimeRef.current) / duration,
        1
      );

      // Easing function (ease-out)
      const easeOut = 1 - Math.pow(1 - progress, 3);

      const currentCount = start + (end - start) * easeOut;

      countRef.current = currentCount;
      setCount(currentCount);

      if (progress < 1) {
        requestRef.current = requestAnimationFrame(animate);
      }
    };

    requestRef.current = requestAnimationFrame(animate);

    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [end, start, duration, isVisible]);

  return count === end ? (
    <span ref={elementRef} className="text-6xl font-extrabold text-chart-2 p-4">
      {count.toFixed(decimals)} 🚀
    </span>
  ) : (
    <span ref={elementRef} className="text-6xl font-extrabold text-chart-2 p-4">
      {count.toFixed(decimals)}
    </span>
  );
}

// Usage example:
// <NumberCounter end={326} duration={2500} className="text-4xl text-blue-600" />
