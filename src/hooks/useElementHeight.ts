import { useCallback, useEffect, useRef, useState } from "react";

export default function useElementHeight() {
  const elementRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState<number | null>(null);

  const handleHeightChange = useCallback((height: number) => {
    setSize(height);
  }, []);

  useEffect(() => {
    const element = elementRef.current;

    const updateHeight = () => {
      if (element) {
        const height = element.clientHeight;
        handleHeightChange(height);
      }
    };

    updateHeight();

    const resizeObserver = new ResizeObserver(updateHeight);
    if (element) {
      resizeObserver.observe(element);
    }

    return () => {
      if (element) {
        resizeObserver.unobserve(element);
      }
    };
  }, [elementRef, handleHeightChange]);

  return { elementRef, size };
}
