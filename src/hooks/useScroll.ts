import { useEffect, useRef, useState } from "react";

export default function useScroll(array: any) {
  const [isScrolledToBottom, setIsScrolledToBottom] = useState<boolean>(true);
  const listRef = useRef<HTMLDivElement | null>(null);

  const scrollToBottom = () => {
    if (listRef.current) {
      listRef.current.scrollTo(0, listRef.current.scrollHeight);
    }
  };

  const handleScroll = () => {
    if (listRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = listRef.current;

      const atBottom = scrollTop + clientHeight === scrollHeight;

      setIsScrolledToBottom(atBottom);
    }
  };

  useEffect(() => {
    handleScroll();
    scrollToBottom();

    if (listRef.current) {
      listRef.current.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (listRef.current) {
        listRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, [array]);

  return {
    listRef,
    isScrolledToBottom,
    scrollToBottom: () => scrollToBottom(),
  };
}
