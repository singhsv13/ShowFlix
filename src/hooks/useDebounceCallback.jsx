import { useRef, useEffect } from "react";

export function useDebounceCallback(callback, delay = 300) {
  const timeoutRef = useRef();

  useEffect(() => {
    return () => clearTimeout(timeoutRef.current);
  }, []);

  return (...args) => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      callback(...args);
    }, delay);
  };
}
