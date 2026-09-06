"use client";

import { useEffect, useState } from "react";

/**
 * Returns how many carousel items should be visible at once based on
 * viewport width: 1 on mobile, 2 on tablet, `desktopCount` on desktop.
 * SSR-safe — defaults to `desktopCount` until mounted in the browser.
 */
export function useItemsPerView(desktopCount = 4) {
  const [itemsPerView, setItemsPerView] = useState(desktopCount);

  useEffect(() => {
    function computeItemsPerView() {
      const width = window.innerWidth;
      if (width < 640) return 1;
      if (width < 1024) return 2;
      return desktopCount;
    }

    function handleResize() {
      setItemsPerView(computeItemsPerView());
    }

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [desktopCount]);

  return itemsPerView;
}
