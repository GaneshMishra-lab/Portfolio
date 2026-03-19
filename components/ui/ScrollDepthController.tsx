"use client";

import { useEffect } from "react";

export function ScrollDepthController() {
  useEffect(() => {
    const root = document.documentElement;
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (media.matches) {
      root.style.setProperty("--scroll-depth", "0px");
      return;
    }

    let rafId = 0;

    const updateDepth = () => {
      const depth = Math.min(window.scrollY * 0.35, 360);
      root.style.setProperty("--scroll-depth", `${depth}px`);
      rafId = 0;
    };

    const onScroll = () => {
      if (rafId) {
        return;
      }
      rafId = window.requestAnimationFrame(updateDepth);
    };

    updateDepth();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafId) {
        window.cancelAnimationFrame(rafId);
      }
      root.style.removeProperty("--scroll-depth");
    };
  }, []);

  return null;
}
