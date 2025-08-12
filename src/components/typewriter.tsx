"use client";

import React from "react";
import Typed from "typed.js";
import { useRef, useEffect } from "react";

export default function Typewriter() {
  // Create reference to store the DOM element containing the animation
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "the developer of this app",
        "the designer",
        "Indie Hacker",
        "I love building things",
      ],
      typeSpeed: 80,
      backSpeed: 50,
      loop: false,
      showCursor: true,
      cursorChar: "|",
      startDelay: 500,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <div className="flex flex-col justify-center items-start gap-2">
      <div className="text-2xl sm:text-3xl md:text-4xl font-semibold">
        Hey 👋
      </div>
      <div>
        <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-left">
          This is Priyanka Pudi,{" "}
          <span className="text-red-800 dark:text-chart-2/70">
            <span ref={el} />
          </span>
        </h1>
      </div>
    </div>
  );
}
