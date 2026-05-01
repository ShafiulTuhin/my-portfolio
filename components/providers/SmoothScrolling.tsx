"use client";

import Lenis from "lenis";
import { ReactNode, useEffect } from "react";

type SmoothScrollingProps = {
  children: ReactNode;
};

const SmoothScrolling = ({ children }: SmoothScrollingProps) => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
};

export default SmoothScrolling;
